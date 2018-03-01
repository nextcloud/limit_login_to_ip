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

namespace OCA\LimitLoginToIp;

use OCP\IConfig;
use OCP\IRequest;
use OCP\IURLGenerator;

class LoginHookListener {
	/** @var IConfig */
	private $config;
	/** @var IRequest */
	private $request;
	/** @var IURLGenerator */
	private $urlGenerator;
	/** @var bool */
	private $isLoginPage;

	public function __construct(IConfig $config,
								IRequest $request,
								IURLGenerator $urlGenerator,
								$isLoginPage) {
		$this->config = $config;
		$this->request = $request;
		$this->urlGenerator = $urlGenerator;
		$this->isLoginPage = $isLoginPage;
	}

	/**
	 * @param $ip
	 * @param $range
	 * @return bool
	 * @copyright https://stackoverflow.com/questions/594112/matching-an-ip-to-a-cidr-mask-in-php-5/594134#594134
	 */
	private function matchCidr($ip, $range) {
		if ($range === '') {
			return false;
		}

		list ($subnet, $bits) = explode('/', $range);

		if ($bits === '') {
			$bits = 32;
		}

		$ip = ip2long($ip);
		$subnet = ip2long($subnet);
		$mask = -1 << (32 - $bits);
		$subnet &= $mask;
		return ($ip & $mask) === $subnet;
	}

	/**
	 * @return bool
	 */
	public function isLoginAllowed() {
		$allowedRanges = $this->config->getAppValue('limit_login_to_ip', 'whitelisted.ranges', '');
		if($allowedRanges === '') {
			return true;
		}
		$allowedRanges = explode(',', $allowedRanges);

		$userIp = $this->request->getRemoteAddress();
		foreach($allowedRanges as $range) {
			if($this->matchCidr($userIp, $range)) {
				return true;
			}
		}

		return false;
	}

	public function handleLoginRequest() {
		// Web UI
		if($this->isLoginPage) {
			$url = $this->urlGenerator->linkToRouteAbsolute('limit_login_to_ip.LoginDenied.showErrorPage');
			header('Location: ' . $url);
			exit();
		}

		// All other clients
		http_response_code(403);
		exit();
	}
}
