<?php

declare(strict_types=1);
/**
 * SPDX-FileCopyrightText: 2017 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\LimitLoginToIp\Settings;

use OCP\AppFramework\Http\TemplateResponse;
use OCP\Settings\ISettings;

/**
 * @psalm-api
 */
class LimitSettings implements ISettings {
	public function getForm(): TemplateResponse {
		return new TemplateResponse('limit_login_to_ip', 'admin-settings');
	}

	public function getSection(): string {
		return 'security';
	}

	public function getPriority(): int {
		return 50;
	}
}
