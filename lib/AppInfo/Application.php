<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\LimitLoginToIp\AppInfo;

use OCA\LimitLoginToIp\LoginHookListener;
use OCA\LimitLoginToIp\Middleware\CanSeeLoginPageMiddleware;
use OCP\AppFramework\App;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use OCP\User\Events\BeforeUserLoggedInEvent;

/**
 * @psalm-api
 */
class Application extends App implements IBootstrap {
	public const APP_ID = 'limit_login_to_ip';

	public function __construct(array $urlParams = []) {
		parent::__construct(self::APP_ID, $urlParams);
	}

	public function register(IRegistrationContext $context): void {
		$context->registerMiddleware(CanSeeLoginPageMiddleware::class, true);
		$context->registerEventListener(
			BeforeUserLoggedInEvent::class,
			LoginHookListener::class,
			50
		);
	}

	public function boot(IBootContext $context): void {
	}
}
