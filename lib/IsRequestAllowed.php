<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\LimitLoginToIp;

use OCP\IConfig;
use OCP\IRequest;

final class IsRequestAllowed {
	public function __construct(
		private IConfig $config,
		private IRequest $request,
	) {
	}

	public function __invoke(): bool {
		$allowedRanges = $this->config->getAppValue('limit_login_to_ip', 'whitelisted.ranges', '');
		if ($allowedRanges === '') {
			return true;
		}
		$allowedRanges = explode(',', $allowedRanges);

		$userIp = $this->request->getRemoteAddress();
		foreach($allowedRanges as $range) {
			if ($this->matchCidr($userIp, $range)) {
				return true;
			}
		}

		return false;
	}

	private function isIpv4(string $ip): bool {
		return (bool) filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4);
	}

	private function isIpv6(string $ip): bool {
		return (bool) filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6);
	}

	/**
	 * @copyright https://stackoverflow.com/questions/594112/matching-an-ip-to-a-cidr-mask-in-php-5/594134#594134
	 * @copyright (IPv4) https://stackoverflow.com/questions/594112/matching-an-ip-to-a-cidr-mask-in-php-5/594134#594134
	 * @copyright (IPv6) MW. https://stackoverflow.com/questions/7951061/matching-ipv6-address-to-a-cidr-subnet via
	 */
	private function matchCidr(string $ip, string $range): bool {
		$range = explode('/', $range);
		$subnet = $range[0];
		$bits = (int) ($range[1] ?? 0);

		if ($this->isIpv4($ip) && $this->isIpv4($subnet)) {
			if ($bits === 0) {
				$bits = 32;
			}
			$mask = -1 << (32 - $bits);

			$ip = (int)ip2long($ip);
			$subnet = (int)ip2long($subnet);
			$subnet &= $mask;

			return ($ip & $mask) === $subnet;
		}

		if ($this->isIpv6($ip) && $this->isIpv6($subnet)) {
			$subnet = inet_pton($subnet);
			$ip = inet_pton($ip);
			if ($bits === 0) {
				$bits = 128;
			}

			$binMask = str_repeat("f", (int) ($bits / 4));
			switch ($bits % 4) {
				case 0:
					break;
				case 1:
					$binMask .= "8";
					break;
				case 2:
					$binMask .= "c";
					break;
				case 3:
					$binMask .= "e";
					break;
			}

			$binMask = str_pad($binMask, 32, '0');
			$binMask = pack("H*", $binMask);

			if (($ip & $binMask) === $subnet) {
				return true;
			}
		}
		return false;
	}
}
