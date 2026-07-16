<!--
  - SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<script setup lang="ts">
import { mdiPlus, mdiTrashCanOutline } from '@mdi/js'
import axios, { isAxiosError } from '@nextcloud/axios'
import { showError } from '@nextcloud/dialogs'
import { loadState } from '@nextcloud/initial-state'
import { t } from '@nextcloud/l10n'
import { confirmPassword } from '@nextcloud/password-confirmation'
import { generateOcsUrl } from '@nextcloud/router'
import { ref, useTemplateRef, watch } from 'vue'
import NcActionButton from '@nextcloud/vue/components/NcActionButton'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcIconSvgWrapper from '@nextcloud/vue/components/NcIconSvgWrapper'
import NcListItem from '@nextcloud/vue/components/NcListItem'
import NcLoadingIcon from '@nextcloud/vue/components/NcLoadingIcon'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import NcSettingsSection from '@nextcloud/vue/components/NcSettingsSection'
import NcTextField from '@nextcloud/vue/components/NcTextField'
import { logger } from './logger.ts'

const allowedRanges = ref(loadState<string[]>('limit_login_to_ip', 'allowedRanges', []))
const instanceName = ref(loadState<string>('limit_login_to_ip', 'instanceName', ''))
const currentIp = ref(loadState<string>('limit_login_to_ip', 'currentIp', ''))

const newRangeIP = ref('')
const newRangeMask = ref('')

const ipError = ref('')
const maskError = ref('')

// Single mutating flag: null = idle, 'add' = adding, number = deleting that row.
const pendingAction = ref<'add' | number | null>(null)

const ipField = useTemplateRef<{ focus: () => void }>('ipField')
const maskField = useTemplateRef<{ focus: () => void }>('maskField')

const url = generateOcsUrl('apps/limit_login_to_ip/settings/ip-ranges')

// Clear a field's error as soon as the user edits it again.
watch(newRangeIP, () => {
	ipError.value = ''
})
watch(newRangeMask, () => {
	maskError.value = ''
})

/**
 * Persist the full range list and adopt the server's echoed result.
 *
 * Guards against concurrent writes and confirms the admin password first.
 *
 * @param payload - The complete list of CIDR ranges to store
 * @param action - The UI action in flight, used to drive the busy state
 * @return Whether the list was saved
 */
async function putRanges(payload: string[], action: 'add' | number): Promise<boolean> {
	if (pendingAction.value !== null) {
		return false
	}
	pendingAction.value = action

	try {
		await confirmPassword()
	} catch {
		// Admin dismissed the password dialog; abort quietly, no error toast.
		pendingAction.value = null
		return false
	}

	try {
		const { data } = await axios.put(url, { allowedRanges: payload })
		allowedRanges.value = data.ocs.data.allowedRanges
		return true
	} catch (error) {
		const message = isAxiosError(error) ? error.response?.data?.ocs?.data?.message : undefined
		showError(message || t('limit_login_to_ip', 'Unable to update the allowed IP ranges'))
		logger.error('Could not update the allowed IP ranges', { error })
		return false
	} finally {
		pendingAction.value = null
	}
}

/**
 * Check whether a string is a valid IPv4 address.
 *
 * @param ip - The address to test
 * @return Whether it is a valid IPv4 address
 */
function validateIPv4(ip: string): boolean {
	const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
	return ipv4Regex.test(ip)
}

/**
 * Validate the add fields, set inline errors, and focus the first offender.
 *
 * @return Whether the entered range is valid
 */
function validateNewRange(): boolean {
	const ip = newRangeIP.value.trim()
	const maskRaw = String(newRangeMask.value).trim()
	// A colon means the user is entering IPv6: we only format-check IPv4 here
	// and let the server validate IPv6 (its filter_var accepts compressed forms
	// like ::1 that a client-side regex tends to reject).
	const isV6 = ip.includes(':')

	ipError.value = ''
	maskError.value = ''

	if (!ip) {
		ipError.value = t('limit_login_to_ip', 'Enter an IP address')
	} else if (!isV6 && !validateIPv4(ip)) {
		ipError.value = t('limit_login_to_ip', 'Enter a valid IPv4 or IPv6 address')
	}

	if (!maskRaw) {
		maskError.value = t('limit_login_to_ip', 'Enter a subnet mask')
	} else {
		const mask = Number(maskRaw)
		const max = isV6 ? 128 : 32
		if (!Number.isInteger(mask) || mask < 0 || mask > max) {
			maskError.value = t('limit_login_to_ip', 'Enter a mask between 0 and {max}', { max })
		}
	}

	if (ipError.value) {
		ipField.value?.focus()
		return false
	}
	if (maskError.value) {
		maskField.value?.focus()
		return false
	}
	return true
}

/**
 * Add the entered range to the allow-list.
 */
async function addRange(): Promise<void> {
	if (!validateNewRange()) {
		return
	}

	const range = `${newRangeIP.value.trim()}/${String(newRangeMask.value).trim()}`
	const saved = await putRanges([...allowedRanges.value, range], 'add')
	if (saved) {
		newRangeIP.value = ''
		newRangeMask.value = ''
	}
}

/**
 * Remove the range at the given index from the allow-list.
 *
 * @param index - Position of the range to remove
 */
async function deleteRange(index: number): Promise<void> {
	await putRanges(allowedRanges.value.filter((_, i) => i !== index), index)
}

</script>

<template>
	<NcSettingsSection
		:name="t('limit_login_to_ip', 'Restrict login to IP ranges')"
		:description="t('limit_login_to_ip', 'By default, {entity} permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below.', { entity: instanceName })">
		<NcNoteCard
			v-if="currentIp"
			type="info">
			{{ t('limit_login_to_ip', 'Your current IP address is detected as "{ip}".', { ip: currentIp }) }}
		</NcNoteCard>
		<ul
			v-if="allowedRanges.length"
			class="limit-settings__list"
			:aria-label="t('limit_login_to_ip', 'Allowed IP ranges')">
			<NcListItem
				v-for="(range, index) in allowedRanges"
				:key="index"
				:name="range"
				:forceDisplayActions="true">
				<template #actions>
					<NcActionButton
						:aria-label="pendingAction === index
							? t('limit_login_to_ip', 'Deleting {range}', { range })
							: t('limit_login_to_ip', 'Delete {range}', { range })"
						:disabled="pendingAction !== null"
						@click="deleteRange(index)">
						<template #icon>
							<NcLoadingIcon v-if="pendingAction === index" />
							<NcIconSvgWrapper v-else :path="mdiTrashCanOutline" :size="20" />
						</template>
						{{ t('limit_login_to_ip', 'Delete') }}
					</NcActionButton>
				</template>
			</NcListItem>
		</ul>
		<h3>{{ t('limit_login_to_ip', 'Add new IP range') }}</h3>
		<div class="limit-settings__add">
			<div class="limit-settings__add-fields">
				<div class="limit-settings__add-ip">
					<NcTextField
						ref="ipField"
						v-model="newRangeIP"
						dir="ltr"
						:label="t('limit_login_to_ip', 'IP address')"
						:aria-describedby="ipError ? 'limit-settings-ip-error' : undefined"
						:placeholder="t('limit_login_to_ip', '2001:db8::')"
						:error="!!ipError" />
				</div>
				<div class="limit-settings__add-mask">
					<NcTextField
						ref="maskField"
						v-model="newRangeMask"
						type="number"
						min="0"
						max="128"
						:label="t('limit_login_to_ip', 'Mask')"
						:aria-describedby="maskError ? 'limit-settings-mask-error' : undefined"
						:placeholder="t('limit_login_to_ip', '64')"
						:error="!!maskError" />
				</div>
			</div>
			<NcButton
				variant="secondary"
				:aria-disabled="pendingAction === 'add'"
				@click="addRange">
				<template #icon>
					<NcLoadingIcon v-if="pendingAction === 'add'" />
					<NcIconSvgWrapper v-else :path="mdiPlus" :size="20" />
				</template>
				{{ t('limit_login_to_ip', 'Add') }}
				<span v-if="pendingAction === 'add'" class="hidden-visually">
					{{ t('limit_login_to_ip', '(loading)') }}
				</span>
			</NcButton>
		</div>
		<NcNoteCard
			v-if="ipError || maskError"
			type="error">
			<p v-if="ipError" id="limit-settings-ip-error">
				{{ ipError }}
			</p>
			<p v-if="maskError" id="limit-settings-mask-error">
				{{ maskError }}
			</p>
		</NcNoteCard>
	</NcSettingsSection>
</template>

<style scoped>
.limit-settings__list {
	display: flex;
	flex-direction: column;
	gap: var(--default-grid-baseline);
	margin-block: calc(2 * var(--default-grid-baseline)) calc(3 * var(--default-grid-baseline));
	max-width: 540px;
}

.limit-settings__add {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: calc(2 * var(--default-grid-baseline));
	max-width: 540px;
}

.limit-settings__add-fields {
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: calc(2 * var(--default-grid-baseline));
	width: 100%;
}

.limit-settings__add-ip {
	/* Wide enough for a fully-expanded IPv6 */
	flex: 1 1 320px;
	max-width: 420px;
}

.limit-settings__add-mask {
	flex: 0 1 110px;
}
</style>
