<!--
  - SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<script setup lang="ts">
import { mdiTrashCanOutline } from '@mdi/js'
import { loadState } from '@nextcloud/initial-state'
import { t } from '@nextcloud/l10n'
import { ref } from 'vue'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcIconSvgWrapper from '@nextcloud/vue/components/NcIconSvgWrapper'
import NcSettingsSection from '@nextcloud/vue/components/NcSettingsSection'
import NcTextField from '@nextcloud/vue/components/NcTextField'

const allowedRanges = ref(loadState<string[]>('limit_login_to_ip', 'allowedRanges', []))
const entity = ref(loadState<string>('limit_login_to_ip', 'entity', ''))
const newRangeIP = ref()
const newRangeMask = ref()

</script>

<template>
	<NcSettingsSection
		:name="t('limit_login_to_ip', 'Restrict login to IP ranges')"
		:description="t('limit_login_to_ip', 'By default, {entity} permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below.', { entity })">
		<table class="limit-settings__table">
			<tr
				v-for="(range, index) in allowedRanges"
				:key="index">
				<td>
					{{ allowedRanges[index] }}
				</td>
				<td>
					<NcButton
						variant="error"
						:title="t('limit_login_to_ip', 'Delete')"
						:aria-label="t('limit_login_to_ip', 'Delete {range}', { range })">
						<template #icon>
							<NcIconSvgWrapper inline :path="mdiTrashCanOutline" />
						</template>
					</NcButton>
				</td>
			</tr>
		</table>
		<h3>{{ t('limit_login_to_ip', 'Add new IP range') }}</h3>
		<div class="limit-settings__add">
			<div class="limit-settings__add-ip">
				<NcTextField
					v-model="newRangeIP"
					:labelOutside="true"
					:aria-label="t('limit_login_to_ip', 'IP range')"
					:placeholder="t('limit_login_to_ip', '1.2.3.4')" />
			</div>
			<span class="limit-settings__add-sep" aria-hidden="true">/</span>
			<div class="limit-settings__add-mask">
				<NcTextField
					v-model="newRangeMask"
					type="number"
					:labelOutside="true"
					:aria-label="t('limit_login_to_ip', 'Subnet mask')"
					:placeholder="t('limit_login_to_ip', '24')" />
			</div>
			<NcButton
				class="limit-settings__add-submit"
				:text="t('limit_login_to_ip', 'Add')"
				variant="secondary" />
		</div>
	</NcSettingsSection>
</template>

<style scoped>
.limit-settings__table {
	width: 100%;
	border-collapse: collapse;
	margin-block: calc(2 * var(--default-grid-baseline)) calc(3 * var(--default-grid-baseline));
}

.limit-settings__table td {
	padding-block: calc(1.5 * var(--default-grid-baseline));
	vertical-align: middle;
	border-block-end: 1px solid var(--color-border);
}

.limit-settings__table tr:last-child td {
	border-block-end: none;
}

.limit-settings__table td:first-child {
	width: 100%;
	font-family: var(--font-face-monospace, monospace);
}

.limit-settings__table td:last-child {
	text-align: end;
	white-space: nowrap;
}

.limit-settings__add {
	display: flex;
	align-items: center;
	gap: calc(2 * var(--default-grid-baseline));
}

.limit-settings__add-ip {
	flex: 1 1 auto;
	max-width: 280px;
}

.limit-settings__add-mask {
	flex: 0 0 60px;
}

.limit-settings__add-sep {
	color: var(--color-text-maxcontrast);
}

.limit-settings__add-submit {
	flex: 0 0 auto;
}
</style>
