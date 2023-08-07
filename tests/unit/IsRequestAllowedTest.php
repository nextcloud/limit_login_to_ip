<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2017 Lukas Reschke <lukas@statuscode.ch>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\LimitLoginToIp\Tests\Unit;

use OCA\LimitLoginToIp\IsRequestAllowed;
use OCP\IConfig;
use OCP\IRequest;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class IsRequestAllowedTest extends TestCase {
	/** @var IConfig|MockObject */
	private $config;
	/** @var IRequest|MockObject */
	private $request;
	private $lastHttpCode;
	private IsRequestAllowed $isRequestAllowed;

	protected function setUp(): void {
		parent::setUp();

		$this->config = $this->createMock(IConfig::class);
		$this->request = $this->createMock(IRequest::class);
		
		$this->isRequestAllowed = new IsRequestAllowed(
			$this->config,
			$this->request,
		);
	}

	/**
	 * @dataProvider ipSubnetProvider
	 */
	public function testMatchRange(string $ipAddress, ?string $subnet, bool $shouldSucceed): void {
		$this->config->expects($this->once())
			->method('getAppValue')
			->with('limit_login_to_ip', 'whitelisted.ranges', '')
			->willReturn($subnet);
		if ($subnet !== '') {
			$this->request
				->expects($this->once())
				->method('getRemoteAddress')
				->willReturn($ipAddress);
		}

		$result = ($this->isRequestAllowed)();
		$shouldSucceed
			? $this->assertTrue($result)
			: $this->assertFalse($result);
	}

	/**
	 * @return mixed[]
	 */
	public function ipSubnetProvider(): array {
		return [
			['1.2.3.4', '', true],
			['1.2.3.4', '1.2.3.4', true],
			['1.2.3.4', '1.2.3.4/', true],
			['1.2.3.4', '1.2.3.4/32', true],
			['1.2.3.5', '1.2.3.4/32', false],
			['10.0.3.5', '10.0.0.0/16', true],
			['85d2:057d:e774:c8f7:5071:0fe0:6deb:62bd', '', true],
			['85d2:057d:e774:c8f7:5071:0fe0:6deb:62bd', '85d2:057d:e774:c8f7::', false],
			['85d2:057d:e774:c8f7:5071:0fe0:6deb:62bd', '85d2:057d:e774:c8f7::/64', true],
			['85d2:057d:e774:c8f7:5071:0fe0:6deb:62be', '85d2:057d:e774:c8f7:5071:0fe0:6deb:62bd', false],
		];
	}

}
