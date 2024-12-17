<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
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
