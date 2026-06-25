<?php

declare(strict_types=1);
/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\LimitLoginToIp\Controller;

use OCA\LimitLoginToIp\AppInfo\Application;
use OCA\LimitLoginToIp\Settings\LimitSettings;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\ApiRoute;
use OCP\AppFramework\Http\Attribute\AuthorizedAdminSetting;
use OCP\AppFramework\Http\Attribute\PasswordConfirmationRequired;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\OCSController;
use OCP\IAppConfig;
use OCP\IL10N;
use OCP\IRequest;

/**
 * @psalm-api
 */
class SettingsController extends OCSController {
	public function __construct(
		string $appName,
		IRequest $request,
		private readonly IAppConfig $appConfig,
		private readonly IL10N $l,
	) {
		parent::__construct($appName, $request);
	}

	/**
	 * Update the list of allowed IP ranges for login.
	 *
	 * @param list<string> $allowedRanges The list of allowed IP ranges in CIDR notation.
	 * @return DataResponse A response indicating the result of the operation.
	 *
	 * 200: IP ranges updated successfully
	 * 400: Invalid input data
	 */
	#[AuthorizedAdminSetting(settings: LimitSettings::class)]
	#[PasswordConfirmationRequired]
	#[ApiRoute(verb: 'PUT', url: '/settings/ip-ranges')]
	public function updateIpRanges(array $allowedRanges): DataResponse {
		$allowedRanges = array_map('trim', $allowedRanges);

		if (!$this->validateIpRanges($allowedRanges)) {
			return new DataResponse([
				'message' => $this->l->t('Invalid IP range(s) provided. Please ensure all ranges are in valid CIDR notation.'),
			], Http::STATUS_BAD_REQUEST);
		}

		$allowedRangesString = implode(',', $allowedRanges);
		$this->appConfig->setValueString(Application::APP_ID, Application::CONFIG_KEY_RANGES, $allowedRangesString);

		return new DataResponse(['allowedRanges' => $allowedRanges]);
	}

	/**
	 * @param list<string> $allowedRanges
	 */
	private function validateIpRanges(array $allowedRanges): bool {
		foreach ($allowedRanges as $range) {
			if (!$this->isValidCidr($range)) {
				return false;
			}
		}
		return true;
	}

	private function isValidCidr(string $cidr): bool {
		$parts = explode('/', $cidr);
		if (count($parts) !== 2) {
			return false;
		}

		$ip = $parts[0];
		$mask = (int)$parts[1];

		if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4)) {
			return $mask >= 0 && $mask <= 32;
		} elseif (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6)) {
			return $mask >= 0 && $mask <= 128;
		}

		return false;
	}
}
