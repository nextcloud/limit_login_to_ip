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

use OCA\LimitLoginToIp\IsRequestAllowed;
use OCA\LimitLoginToIp\LoginHookListener;
use OCP\AppFramework\App;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\User\Events\BeforeUserLoggedInEvent;

/**
 * @psalm-api
 */
class Application extends App implements IBootstrap {
	public const APP_ID = 'limit_login_to_ip';

	public function __construct() {
		parent::__construct(self::APP_ID);
	}

	public function register(IRegistrationContext $context): void {
		$context->registerEventListener(
			BeforeUserLoggedInEvent::class,
			LoginHookListener::class,
			50
		);
	}

	public function boot(IBootContext $context): void {
		$server = $context->getServerContainer();
		/** @var IURLGenerator */
		$urlGenerator = $server->get(IURLGenerator::class);
		/** @var IRequest */
		$request = $server->get(IRequest::class);

		// Special behaviour for login page
		// Block page before displaying form
		$currentPath = parse_url($request->getRequestUri(), PHP_URL_PATH);
		$loginPath = $urlGenerator->linkToRoute('core.login.showLoginForm');
		/** @var IsRequestAllowed */
		$isRequestAllowed = $server->get(IsRequestAllowed::class);
		if ($currentPath === $loginPath && !$isRequestAllowed()) {
			http_response_code(403);
			$forbiddenLoginPath = $urlGenerator->linkToRouteAbsolute('limit_login_to_ip.LoginDenied.showErrorPage');
			header('Location: '. $forbiddenLoginPath);
			exit;
		}
	}
}
