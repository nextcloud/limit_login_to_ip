<?php

$l10n = \OC::$server->getL10N('limit_login_to_ip');
$config = \OC::$server->getConfig();
$request = \OC::$server->getRequest();
$urlGenerator = \OC::$server->getURLGenerator();
$loginUrl = $urlGenerator->linkToRouteAbsolute('core.login.showLoginForm');
$isLoginpage = false;
if($request->getRequestUri() === $urlGenerator->linkToRoute('core.login.showLoginForm')) {
	$isLoginpage = true;
}

$loginHookListener = new \OCA\LimitLoginToIp\LoginHookListener(
	$config,
	$request,
	$urlGenerator,
	$isLoginpage
);

if(!$loginHookListener->isLoginAllowed()) {
	if($isLoginpage) {
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
