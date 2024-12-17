<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\LimitLoginToIp\Exception;

use Exception;

final class ForbiddenLoginException extends Exception {
	public function __construct() {
		parent::__construct('Login denied', 403);
	}
}
