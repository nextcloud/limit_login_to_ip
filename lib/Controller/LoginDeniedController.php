<?php

declare(strict_types=1);
/**
 * SPDX-FileCopyrightText: 2017 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\LimitLoginToIp\Controller;

use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\Attribute\PublicPage;
use OCP\AppFramework\Http\TemplateResponse;

/**
 * @psalm-api
 */
class LoginDeniedController extends Controller {
	#[PublicPage]
	#[NoCSRFRequired]
	public function showErrorPage(): TemplateResponse {
		$response = new TemplateResponse(
			$this->appName,
			'errorPage',
			[],
			'guest'
		);
		$response->setStatus(Http::STATUS_FORBIDDEN);

		return $response;
	}
}
