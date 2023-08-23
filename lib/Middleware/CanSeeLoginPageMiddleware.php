<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2023 Benjamin Gaussorgues <benjamin.gaussorgues@nextcloud.com>
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
 *
 */

namespace OCA\LimitLoginToIp\Middleware;

use Exception;
use OC\Core\Controller\LoginController;
use OCA\LimitLoginToIp\Exception\ForbiddenLoginException;
use OCA\LimitLoginToIp\IsRequestAllowed;
use OCP\AppFramework\Middleware;
use OCP\IURLGenerator;

/**
 * Checks whether the "sharing check" is enabled
 *
 * @package OCA\LimitLoginToIp\Middleware
 * @psalm-api
 */
class CanSeeLoginPageMiddleware extends Middleware {
	private const LOGIN_METHOD_NAMES = [
		'tryLogin',
		'confirmPassword',
		'showLoginForm',
	];

	public function __construct(
		private IsRequestAllowed $isRequestAllowed,
		private IURLGenerator $urlGenerator,
	) {
	}

	public function beforeController($controller, $methodName): void {
		// Only filter login actions
		/** @psalm-suppress all */
		if (!$controller instanceof LoginController || !in_array($methodName, self::LOGIN_METHOD_NAMES, true)) {
			return;
		}

		if (!($this->isRequestAllowed)()) {
			throw new ForbiddenLoginException();
		}
	}

	public function afterException($controller, $methodName, Exception $exception): void {
		if (!$exception instanceof ForbiddenLoginException) {
			throw $exception;
		}

		$forbiddenLoginPath = $this->urlGenerator->linkToRouteAbsolute('limit_login_to_ip.LoginDenied.showErrorPage');
		header('Location: '. $forbiddenLoginPath);
		exit;
	}
}
