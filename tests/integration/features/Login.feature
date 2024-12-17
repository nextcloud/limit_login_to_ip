# SPDX-FileCopyrightText: 2017 Nextcloud GmbH and Nextcloud contributors
# SPDX-License-Identifier: AGPL-3.0-or-later
Feature: Login

  Scenario: Authenticating with blocked IP via Web
    Given The range "198.51.100.0/24" is permitted
    When I try to login via "web"
    Then the response status code should be "403"
    And the response URL should be "http://localhost:8080/index.php/apps/limit_login_to_ip/denied"

  Scenario: Authenticating with blocked IP via API
    Given The range "198.51.100.0/24" is permitted
    When I try to login via "api"
    Then the response status code should be "403"
    And the response URL should be "http://localhost:8080/remote.php/webdav/"

  Scenario: Authenticating with whitelisted IP via Web
    Given The range "::1/128,127.0.0.0/8" is permitted
    When I try to login via "web"
    Then the response status code should be "200"

  Scenario: Authenticating with whitelisted IP via API
    Given The range "::1/128,127.0.0.0/8" is permitted
    When I try to login via "api"
    Then the response status code should be "200"

  Scenario: Authenticating with multiple whitelisted IP via API
    Given The range "::1/128,127.0.0.0/8,192.168.0.0/16" is permitted
    When I try to login via "api"
    Then the response status code should be "200"
