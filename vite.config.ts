/*!
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import { createAppConfig } from '@nextcloud/vite-config'

export default createAppConfig({
	settings: 'src/settings.ts',
}, {
	appName: 'limit_login_to_ip',
	emptyOutputDirectory: { additionalDirectories: ['css'] },
})
