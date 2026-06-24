<!--
  - SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<script setup lang="ts">
import { t } from '@nextcloud/l10n'
import NcSettingsSection from '@nextcloud/vue/components/NcSettingsSection'
import NcTextField from '@nextcloud/vue/components/NcTextField'

</script>

<template>
	<NcSettingsSection
		:name="t('limit_login_to_ip', 'Restrict login to IP ranges')"
		:description="t('limit_login_to_ip', 'By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below.')">
		<NcTextField
			:label="t('limit_login_to_ip', 'IP Range')"
			:placeholder="t('limit_login_to_ip', '1.2.3.4')" />
	</NcSettingsSection>
</template>
