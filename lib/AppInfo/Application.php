<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2023 Benjamin Gaussorgues <benjamin.gaussorgues@nextcloud.com>
 *
 * @author Benjamin Gaussorgues <benjamin.gaussorgues@nextcloud.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

namespace OCA\LimitLoginToIp\AppInfo;

use OCA\LimitLoginToIp\Listeners\GetSetting;
use OCA\LimitLoginToIp\Listeners\LoginHook;
use OCA\LimitLoginToIp\Listeners\SetSetting;
use OCA\LimitLoginToIp\Listeners\Settings;
use OCA\LimitLoginToIp\Middleware\CanSeeLoginPageMiddleware;
use OCP\AppFramework\App;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use OCP\Settings\Events\DeclarativeSettingsGetValueEvent;
use OCP\Settings\Events\DeclarativeSettingsSetValueEvent;
use OCP\Settings\Events\DeclarativeSettingsRegisterFormEvent;
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
			LoginHook::class,
			50,
		);

		// Setting listeners
		$context->registerEventListener(
			DeclarativeSettingsRegisterFormEvent::class, 
			Settings::class,
		);
		$context->registerEventListener(
			DeclarativeSettingsGetValueEvent::class, 
			GetSetting::class,
		);
		$context->registerEventListener(
			DeclarativeSettingsSetValueEvent::class, 
			SetSetting::class,
		);
	}

	public function boot(IBootContext $context): void {
	}
}
