<?php
/**
 * SPDX-FileCopyrightText: 2017 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/** @var \OCP\IL10N $l */
\OCP\Util::addStyle('limit_login_to_ip', 'settings');
\OCP\Util::addScript('limit_login_to_ip', 'settings');
$defaults = new OCP\Defaults();
?>

<form id="limit-login-to-ip" class="section">
	<h2><?php p($l->t('Restrict login to IP ranges')); ?></h2>
	<em><?php p($l->t('By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below.', [$defaults->getEntity()])) ?></em>

	<br/>
	<img id="limit-login-to-ip-list-spinner" src="<?php p(image_path('core', 'loading.gif')); ?>"/>
	<table id="limit-login-to-ip-list">
	</table>

	<div id="limit-login-to-ip-input-fields">
		<input type="text" name="limit-login-to-ip-whitelist" id="limit-login-to-ip-whitelist" placeholder="1.2.3.4" style="width: 200px;" disabled/>/
		<input type="number" id="limit-login-to-ip-whitelist_mask" name="limit-login-to-ip-whitelist_mask" placeholder="24" style="width: 50px;" disabled>
		<input type="button" id="limit-login-to-ip-submit" value="<?php p($l->t('Add')); ?>" disabled>
	</div>
</form>
