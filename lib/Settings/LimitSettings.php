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

namespace OCA\LimitLoginToIp\Settings;

use OCP\AppFramework\Http\TemplateResponse;
use OCP\Settings\ISettings;

class LimitSettings implements ISettings {

	public function getForm() {
		return new TemplateResponse('limit_login_to_ip', 'admin-settings');
	}

	public function getSection() {
		return 'security';
	}

	public function getPriority() {
		return 50;
	}
}
