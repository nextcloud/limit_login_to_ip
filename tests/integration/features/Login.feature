Feature: Login

  Scenario: Authenticating with blocked IP via Web
    Given The range "192.168.0.0/24" is permitted
    When I try to login via "web"
    Then the response status code should be "403"
    And the response URL should be "http://localhost:8080/index.php/apps/limit_login_to_ip/denied"

  Scenario: Authenticating with blocked IP via API
    Given The range "192.168.0.0/24" is permitted
    When I try to login via "api"
    Then the response status code should be "403"
    And the response URL should be "http://localhost:8080/remote.php/webdav/"

  Scenario: Authenticating with whitelisted IP via Web
    Given The range "127.0.0.0/24" is permitted
    When I try to login via "web"
    Then the response status code should be "200"

  Scenario: Authenticating with whitelisted IP via API
    Given The range "127.0.0.0/24" is permitted
    When I try to login via "api"
    Then the response status code should be "200"

  Scenario: Authenticating with multiple whitelisted IP via API
    Given The range "192.168.0.0/24,127.0.0.0/24,192.168.1.0/24" is permitted
    When I try to login via "api"
    Then the response status code should be "200"
