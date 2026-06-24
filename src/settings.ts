/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { createApp } from 'vue'
import LimitSettings from './LimitSettings.vue'



const app = createApp(LimitSettings)
app.mount('#limit-login-to-ip-settings')

export default app
