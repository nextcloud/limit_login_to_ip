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

script('limit_login_to_ip', ['settings']);
style('limit_login_to_ip', ['settings']);
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

	<em><?php p($l->t('These users can connect from any IP address. These are matched against the authentication username.')) ?></em>

	<br/>
	<img id="limit-login-to-ip-uidlist-spinner" src="<?php p(image_path('core', 'loading.gif')); ?>"/>
	<table id="limit-login-to-ip-uidlist">
	</table>

	<div id="limit-login-to-ip-uid-input-fields">
		<input type="text" name="limit-login-to-ip-uid-whitelist" id="limit-login-to-ip-uid-whitelist" placeholder="username" style="width: 200px;" disabled/>
		<input type="button" id="limit-login-to-ip-uid-submit" value="<?php p($l->t('Add')); ?>" disabled>
	</div>
</form>
