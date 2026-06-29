<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\LimitLoginToIp\Tests\Unit\Controller;

use OCA\LimitLoginToIp\AppInfo\Application;
use OCA\LimitLoginToIp\Controller\SettingsController;
use OCP\AppFramework\Http;
use OCP\IAppConfig;
use OCP\IL10N;
use OCP\IRequest;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class SettingsControllerTest extends TestCase {
	/** @var IRequest|MockObject */
	private $request;

	/** @var IAppConfig|MockObject */
	private $appConfig;

	/** @var IL10N|MockObject */
	private $l;

	private SettingsController $controller;

	protected function setUp(): void {
		$this->request = $this->createMock(IRequest::class);
		$this->appConfig = $this->createMock(IAppConfig::class);
		$this->l = $this->createMock(IL10N::class);

		// pass the translation key straight through so we can assert on it
		$this->l->method('t')->willReturnArgument(0);

		$this->controller = new SettingsController(
			Application::APP_ID,
			$this->request,
			$this->appConfig,
			$this->l,
		);
	}

	/**
	 * Wire up the stored-ranges read with the value the test wants to be "already saved".
	 */
	private function stubStored(string $stored): void {
		$this->appConfig->method('getValueString')
			->with(Application::APP_ID, Application::CONFIG_KEY_RANGES, '')
			->willReturn($stored);
	}

	public function testEmptyStoreValidRangesStoresAndEchoes(): void {
		$this->stubStored('');

		$this->appConfig->expects($this->once())
			->method('setValueString')
			->with(Application::APP_ID, Application::CONFIG_KEY_RANGES, '1.2.3.4/24,10.0.0.0/8');

		$response = $this->controller->updateIpRanges(['1.2.3.4/24', '10.0.0.0/8']);

		$this->assertSame(Http::STATUS_OK, $response->getStatus());
		$this->assertSame(['allowedRanges' => ['1.2.3.4/24', '10.0.0.0/8']], $response->getData());
	}

	public function testEmptyStoreInvalidRangeReturns400AndDoesNotStore(): void {
		$this->stubStored('');

		$this->appConfig->expects($this->never())->method('setValueString');

		$response = $this->controller->updateIpRanges(['1.2.3.4']);

		$this->assertSame(Http::STATUS_BAD_REQUEST, $response->getStatus());
		$this->assertArrayHasKey('message', $response->getData());
	}

	public function testGrandfatheredInvalidStoredRangeIsTolerated(): void {
		// existing config holds a bad token; only the genuinely new entry must validate
		$this->stubStored('badtoken,10.0.0.0/8');

		$this->appConfig->expects($this->once())
			->method('setValueString')
			->with(Application::APP_ID, Application::CONFIG_KEY_RANGES, 'badtoken,10.0.0.0/8,1.2.3.4/32');

		$response = $this->controller->updateIpRanges(['badtoken', '10.0.0.0/8', '1.2.3.4/32']);

		$this->assertSame(Http::STATUS_OK, $response->getStatus());
		$this->assertSame(
			['allowedRanges' => ['badtoken', '10.0.0.0/8', '1.2.3.4/32']],
			$response->getData(),
		);
	}

	public function testStoredSideIsTrimmedBeforeDiff(): void {
		// stored token has a leading space; UI resends it untrimmed.
		// Both sides get trimmed, so " badtoken" diffs away and is grandfathered.
		$this->stubStored('10.0.0.0/8, badtoken');

		$this->appConfig->expects($this->once())
			->method('setValueString')
			->with(Application::APP_ID, Application::CONFIG_KEY_RANGES, '10.0.0.0/8,badtoken,1.2.3.4/32');

		$response = $this->controller->updateIpRanges(['10.0.0.0/8', ' badtoken', '1.2.3.4/32']);

		$this->assertSame(Http::STATUS_OK, $response->getStatus());
		$this->assertSame(
			['allowedRanges' => ['10.0.0.0/8', 'badtoken', '1.2.3.4/32']],
			$response->getData(),
		);
	}

	public function testNewGarbageAlongsideValidReturns400(): void {
		$this->stubStored('1.2.3.4/24');

		$this->appConfig->expects($this->never())->method('setValueString');

		$response = $this->controller->updateIpRanges(['1.2.3.4/24', 'garbage']);

		$this->assertSame(Http::STATUS_BAD_REQUEST, $response->getStatus());
	}

	public function testDeleteSubsetNeverValidatesRemaining(): void {
		// incoming is a subset of stored, so the new set is empty -> nothing to validate
		$this->stubStored('badtoken,1.2.3.4/24');

		$this->appConfig->expects($this->once())
			->method('setValueString')
			->with(Application::APP_ID, Application::CONFIG_KEY_RANGES, 'badtoken');

		$response = $this->controller->updateIpRanges(['badtoken']);

		$this->assertSame(Http::STATUS_OK, $response->getStatus());
		$this->assertSame(['allowedRanges' => ['badtoken']], $response->getData());
	}

	public function testIncomingEntriesAreTrimmedBeforeStoreAndEcho(): void {
		$this->stubStored('');

		$this->appConfig->expects($this->once())
			->method('setValueString')
			->with(Application::APP_ID, Application::CONFIG_KEY_RANGES, '1.2.3.4/24');

		$response = $this->controller->updateIpRanges([' 1.2.3.4/24 ']);

		$this->assertSame(Http::STATUS_OK, $response->getStatus());
		$this->assertSame(['allowedRanges' => ['1.2.3.4/24']], $response->getData());
	}

	public function testCompressedIpv6NewEntryIsAccepted(): void {
		$this->stubStored('');

		$this->appConfig->expects($this->once())
			->method('setValueString')
			->with(Application::APP_ID, Application::CONFIG_KEY_RANGES, '::1/128');

		$response = $this->controller->updateIpRanges(['::1/128']);

		$this->assertSame(Http::STATUS_OK, $response->getStatus());
		$this->assertSame(['allowedRanges' => ['::1/128']], $response->getData());
	}

	/**
	 * CIDR validity is exercised through updateIpRanges on an empty store, so every
	 * incoming entry counts as "new" and therefore has to validate.
	 *
	 * @dataProvider cidrProvider
	 */
	public function testCidrValidationThroughUpdate(string $cidr, bool $valid): void {
		$this->stubStored('');

		if ($valid) {
			$this->appConfig->expects($this->once())->method('setValueString');
		} else {
			$this->appConfig->expects($this->never())->method('setValueString');
		}

		$response = $this->controller->updateIpRanges([$cidr]);

		$this->assertSame(
			$valid ? Http::STATUS_OK : Http::STATUS_BAD_REQUEST,
			$response->getStatus(),
		);
	}

	/**
	 * @return array<string, array{0: string, 1: bool}>
	 */
	public function cidrProvider(): array {
		return [
			'ipv4 /24' => ['1.2.3.4/24', true],
			'ipv4 /8' => ['10.0.0.0/8', true],
			'ipv4 /0' => ['1.2.3.4/0', true],
			'ipv4 /32' => ['1.2.3.4/32', true],
			'ipv4 empty mask casts to 0' => ['1.2.3.4/', true],
			'ipv6 loopback /128' => ['::1/128', true],
			'ipv6 compressed /32' => ['2001:db8::/32', true],
			'no slash' => ['1.2.3.4', false],
			'mask too big' => ['1.2.3.4/33', false],
			'bad octet' => ['300.1.2.3/24', false],
			'garbage' => ['garbage', false],
			'ipv6 mask too big' => ['2001:db8::/129', false],
		];
	}
}
