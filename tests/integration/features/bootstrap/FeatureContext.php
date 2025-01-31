<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2017 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
use Behat\Behat\Context\Context;
use GuzzleHttp\Client;
use GuzzleHttp\Cookie\FileCookieJar;
use GuzzleHttp\Exception\ClientException;

class FeatureContext implements Context {
	/** @var  */
	private $client;

	/** @var \GuzzleHttp\Psr7\Response */
	private $response;

	/** @BeforeScenario */
	public function before(): void {
		$this->executeOccCommand('config:app:delete limit_login_to_ip whitelisted.ranges');

		$jar = new FileCookieJar('/tmp/cookies_' . md5(openssl_random_pseudo_bytes(12)));
		$this->client = new Client([
			'cookies' => $jar,
			'verify' => false,
			'allow_redirects' => [
				'referer' => true,
				'track_redirects' => true,
			],
		]);
	}

	/** @AfterScenario */
	public function after(): void {
		$this->executeOccCommand('config:app:delete limit_login_to_ip whitelisted.ranges');
	}

	private function executeOccCommand(string $command): void {
		shell_exec('php ' . __DIR__ . '/../../../../../../occ ' . $command);
	}

	/**
	 * @Given The range :range is permitted
	 */
	public function theRangeIsPermitted(string $range): void {
		$this->executeOccCommand('config:app:set limit_login_to_ip whitelisted.ranges --value ' . $range);
	}

	/**
	 * @When I try to login via :endpoint
	 *
	 * @throws \Exception
	 */
	public function iTryToLoginVia(string $endpoint): void {
		switch ($endpoint) {
			case 'web':
				try {
					$this->response = $this->client->get(
						'http://localhost:8080/index.php/login'
					);
				} catch (ClientException $e) {
					$this->response = $e->getResponse();
				}

				break;
			case 'api':
				try {
					$this->response = $this->client->get(
						'http://localhost:8080/remote.php/webdav',
						[
							'auth' => [
								'admin',
								'admin',
							],
						]
					);
				} catch (ClientException $e) {
					$this->response = $e->getResponse();
				}

				break;
			default:
				throw new InvalidArgumentException($endpoint . ' was not expected');
		}
	}

	/**
	 * @Then the response status code should be :statusCode
	 */
	public function theResponseStatusCodeShouldBe(string $statusCode): void {
		if ((int)$statusCode !== (int)$this->response->getStatusCode()) {
			throw new UnexpectedValueException(sprintf('Expected statuscode %s, got %s', $statusCode, $this->response->getStatusCode()));
		}
	}

	/**
	 * @Then the response URL should be :responseUrl
	 */
	public function theResponseUrlShouldBe(string $responseUrl): void {
		$redirectHeader = $this->response->getHeader('X-Guzzle-Redirect-History');
		if (is_array($redirectHeader) && $redirectHeader !== []) {
			$lastUrl = $redirectHeader[count($redirectHeader) - 1];
			if ($lastUrl !== $responseUrl) {
				throw new InvalidArgumentException(sprintf('Expected %s got %s', $responseUrl, $lastUrl));
			}
		}
	}
}
