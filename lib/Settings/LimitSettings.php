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
use OCP\Settings\IDelegatedSettings;

/**
 * @psalm-api
 */
class LimitSettings implements IDelegatedSettings {

	public function __construct(
		private readonly IAppConfig $appConfig,
		private readonly IInitialState $initialState,
		private readonly Defaults $defaults,
	) {
	}

	public function getForm(): TemplateResponse {
		$entity = $this->defaults->getEntity();
		$allowedRanges = $this->appConfig->getValueString(Application::APP_ID, Application::CONFIG_KEY_RANGES, '');
		$allowedRangesArray = array_filter(explode(',', $allowedRanges));

		$this->initialState->provideInitialState('allowedRanges', $allowedRangesArray);
		$this->initialState->provideInitialState('instanceName', $entity);
		return new TemplateResponse(Application::APP_ID, 'admin-settings');
	}

	public function getSection(): string {
		return 'security';
	}

	public function getPriority(): int {
		return 50;
	}

	public function getName(): ?string {
		return null;
	}
	public function getAuthorizedAppConfig(): array {
		return [];
	}
}
