<?php
declare(strict_types=1);

namespace OCA\LimitLoginToIp\Listeners;

use OCA\LimitLoginToIp\AppInfo\Application;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\IAppConfig;
use OCP\Settings\Events\DeclarativeSettingsSetValueEvent;
use Psr\Log\LoggerInterface;

/**
 * @template-implements IEventListener<DeclarativeSettingsSetValueEvent>
 */
class SetSetting implements IEventListener {
	public function __construct(
		private IAppConfig $appConfig,
		private LoggerInterface $logger,
	) {
	}

	public function handle(Event $event): void {
		if (
			!$event instanceof DeclarativeSettingsSetValueEvent
			|| $event->getApp() !== Application::APP_ID
		) {
			return;
		}

		if ($event->getFieldId() !== 'login_allowed_ranges') {
			return;
		}

		$ipList = explode(',', $event->getValue());
		$config = [];
		foreach($ipList as $ip) {
			$ip = trim($ip);
			if ($ip === '') {
				continue;
			}

			$ipParts = explode('/', $ip, 2);
			$ip = $ipParts[0];
			$mask = $ipParts[1] ?? null;

			if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4)) {
				$ipSize = 32;
			} elseif (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6)) {
				$ipSize = 128;
			} else {
				$this->logger->notice('Try to save invalid IP address', ['ip' => $ip, 'mask' => $mask]);
				continue;
			}

			$mask ??= $ipSize;
			if ($mask < 0) {
				continue;
			}
			if ($mask > $ipSize) {
				$mask = $ipSize;
			}

			$formattedIp = [
				'ip' => $ip, 
				'mask' => (int) $mask,
			];

			// If IP already exists, keep the one with smaller mask (larger range)
			if (isset($config[$ip])) {
				$config[$ip]['mask'] = min($config[$ip][$mask], $formattedIp['mask']);
			} else {
				$config[$ip] = $formattedIp;
			}
		}

		$this->appConfig->setValueArray(Application::APP_ID, 'allowed_ranges', array_values($config));
 	}
}
