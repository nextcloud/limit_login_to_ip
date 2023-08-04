#!/usr/bin/env bash
set -euo pipefail

declare -r APP_NAME=limit_login_to_ip
declare -r APP_INTEGRATION_DIR=${PWD}
declare -r ROOT_DIR=${APP_INTEGRATION_DIR}/../../../..
declare -rx TEST_SERVER_URL="http://localhost:8080/"

"${ROOT_DIR}/occ" app:enable "${APP_NAME}"
"${ROOT_DIR}/occ" app:list | grep "${APP_NAME}"

(cd "${APP_INTEGRATION_DIR}" && composer -o --ansi install)
"${APP_INTEGRATION_DIR}/vendor/bin/behat" --colors -f junit -f pretty "${@}"

