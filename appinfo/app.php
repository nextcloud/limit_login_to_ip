<?php
/**
 * @copyright Copyright (c) 2017 Lukas Reschke <lukas@statuscode.ch>
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


$l10n = \OC::$server->getL10N('limit_login_to_ip');
$config = \OC::$server->getConfig();
$request = \OC::$server->getRequest();
$urlGenerator = \OC::$server->getURLGenerator();
$isLoginPage = parse_url($request->getRequestUri(), PHP_URL_PATH) === $urlGenerator->linkToRoute('core.login.showLoginForm');

$loginHookListener = new \OCA\LimitLoginToIp\LoginHookListener(
	$config,
	$request,
	$urlGenerator,
	$isLoginPage
);

if(!$loginHookListener->isLoginAllowed()) {
	if($isLoginPage) {
		header('Location: ' . \OC::$WEBROOT . '/index.php/apps/limit_login_to_ip/denied');
		exit();
	}

	\OCP\Util::connectHook(
		'OC_User',
		'pre_login',
		$loginHookListener,
		'handleLoginRequest'
	);
}
