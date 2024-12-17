<?php

declare(strict_types=1);
/**
 * SPDX-FileCopyrightText: 2017 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\LimitLoginToIp;

use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\User\Events\BeforeUserLoggedInEvent;
use Psr\Log\LoggerInterface;

/**
 * @template-implements IEventListener<Event>
 */
class LoginHookListener implements IEventListener {
	public function __construct(
		private IsRequestAllowed $isRequestAllowed,
		private LoggerInterface $logger,
	) {
	}

	public function handle(Event $event): void {
		if (!$event instanceof BeforeUserLoggedInEvent || ($this->isRequestAllowed)()) {
			return;
		}

		$this->logger->info('Login from {username} was blocked', [
			'username' => $event->getUsername(),
			'backend' => $event->getBackend(),
		]);
		http_response_code(403);
		exit;
	}
}
