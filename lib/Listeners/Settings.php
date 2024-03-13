<?php
declare(strict_types=1);

namespace OCA\LimitLoginToIp\Listeners;

use OCA\LimitLoginToIp\AppInfo\Application;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\IL10N;
use OCP\Settings\DeclarativeSettingsTypes;
use OCP\Settings\Events\DeclarativeSettingsRegisterFormEvent;

/**
 * @template-implements IEventListener<DeclarativeSettingsRegisterFormEvent>
 */
class Settings implements IEventListener {
	public function __construct(
		private IL10N $l,
	) {
	}

	public function handle(Event $event): void {
		if (!$event instanceof DeclarativeSettingsRegisterFormEvent) {
			return;
		}

		$event->registerSchema(Application::APP_ID, [
			'id' => 'limit_login_to_ip',
			'priority' => 50,
			'section_type' => DeclarativeSettingsTypes::SECTION_TYPE_ADMIN,
			'section_id' => 'security',
			'storage_type' => DeclarativeSettingsTypes::STORAGE_TYPE_EXTERNAL,
			'title' => $this->l->t('Restrict login to IP ranges'),
			'description' => $this->l->t('By default, Nextcloud permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below.'),
			'doc_url' => '',
			'fields' => [
				[
					'id' => 'login_allowed_ranges',
					'title' => $this->l->t('Allowed ranges'),
					'description' => $this->l->t('Comma separated list of IP ranges'),
					'placeholder' => '192.168.0.0/24, 127.0.0.1, 9.9.9.9/32',
					'type' => DeclarativeSettingsTypes::TEXT,
				],			
			],
		]);
	}
}
