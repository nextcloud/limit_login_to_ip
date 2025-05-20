<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

use OCP\App\IAppManager;
use OCP\Server;

define('PHPUNIT_RUN', 1);

require_once __DIR__ . '/../../../lib/base.php';
require_once __DIR__ . '/../../../tests/autoload.php';
require_once __DIR__ . '/../vendor/autoload.php';

Server::get(IAppManager::class)->loadApp('limit_login_to_ip');

OC_Hook::clear();
