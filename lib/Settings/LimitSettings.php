<?php

declare(strict_types=1);
/**
 * SPDX-FileCopyrightText: 2017 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\LimitLoginToIp\Settings;

use OCA\LimitLoginToIp\AppInfo\Application;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Services\IInitialState;
use OCP\Defaults;
use OCP\IAppConfig;
use OCP\Settings\ISettings;

/**
 * @psalm-api
 */
class LimitSettings implements ISettings {

	public function __construct(
		private readonly IAppConfig $appConfig,
		private readonly IInitialState $initialState,
		private readonly Defaults $defaults,
	) {
	}

	public function getForm(): TemplateResponse {
		$entity = $this->defaults->getEntity();
		$allowedRanges = $this->appConfig->getValueString(Application::APP_ID, 'whitelisted.ranges', '');
		$allowedRangesArray = array_filter(explode(',', $allowedRanges));

		$this->initialState->provideInitialState('allowedRanges', $allowedRangesArray);
		$this->initialState->provideInitialState('entity', $entity);
		return new TemplateResponse(Application::APP_ID, 'admin-settings');
	}

	public function getSection(): string {
		return 'security';
	}

	public function getPriority(): int {
		return 50;
	}
}
