<?php
declare(strict_types=1);

namespace OCA\LimitLoginToIp\Listeners;

use OCA\LimitLoginToIp\AppInfo\Application;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\IAppConfig;
use OCP\Settings\Events\DeclarativeSettingsGetValueEvent;

/**
 * @template-implements IEventListener<DeclarativeSettingsSetValueEvent>
 */
class GetSetting implements IEventListener {
	public function __construct(
		private IAppConfig $appConfig,
	) {
	}

	public function handle(Event $event): void {
		if (
			!$event instanceof DeclarativeSettingsGetValueEvent
			|| $event->getApp() !== Application::APP_ID
			|| $event->getFieldId() !== 'login_allowed_ranges'
		) {
			return;
		}
	   
		$config = $this->appConfig->getValueArray(Application::APP_ID, 'allowed_ranges');
		$config = array_map(static fn($ip) => $ip['ip'].'/'.$ip['mask'], $config);
		$event->setValue(implode(', ', $config));
	}
}
