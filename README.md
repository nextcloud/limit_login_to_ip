<!--
  - SPDX-FileCopyrightText: 2017 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
# Limit login to IP ranges

[![REUSE status](https://api.reuse.software/badge/github.com/nextcloud/limit_login_to_ip)](https://api.reuse.software/info/github.com/nextcloud/limit_login_to_ip)

This app modifies the login logic to only allow logins from specified ip address ranges.

The allowed IP addresses have to be passed via `occ app:config` as a string 
separated by comma.

For example:

To allow `127.0.0.0/24`: 

- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`

To allow `127.0.0.0/24` and `192.168.0.0/24`: 

- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`

To allow `127.0.0.0/24` and also `192.168.0.0/24` as well as `2001:db8::/32`: 

- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24,2001:db8::/32`

Alternatively, you can use admin settings to restrict logins to specific ip address ranges.
