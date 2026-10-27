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
use OCP\IRequest;
use OCP\Settings\IDelegatedSettings;
use Override;

/**
 * @psalm-api
 */
class LimitSettings implements IDelegatedSettings {
	public function __construct(
		private readonly IAppConfig $appConfig,
		private readonly IInitialState $initialState,
		private readonly Defaults $defaults,
		private readonly IRequest $request,
	) {
	}

	#[Override]
	public function getForm(): TemplateResponse {
		$entity = $this->defaults->getEntity();
		$allowedRanges = $this->appConfig->getValueString(Application::APP_ID, Application::CONFIG_KEY_RANGES, '');
		$allowedRangesArray = array_filter(explode(',', $allowedRanges));

		$this->initialState->provideInitialState('allowedRanges', $allowedRangesArray);
		$this->initialState->provideInitialState('instanceName', $entity);
		$this->initialState->provideInitialState('currentIp', $this->request->getRemoteAddress());
		return new TemplateResponse(Application::APP_ID, 'admin-settings');
	}

	#[Override]
	public function getSection(): string {
		return 'security';
	}

	#[Override]
	public function getPriority(): int {
		return 50;
	}

	#[Override]
	public function getName(): ?string {
		return null;
	}

	#[Override]
	public function getAuthorizedAppConfig(): array {
		return [];
	}
}
