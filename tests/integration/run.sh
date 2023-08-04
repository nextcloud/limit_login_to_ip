#!/usr/bin/env bash
set -euo pipefail

declare -r APP_NAME=limit_login_to_ip
declare -r APP_INTEGRATION_DIR=${PWD}
declare -r ROOT_DIR=${APP_INTEGRATION_DIR}/../../../..
declare -rx TEST_SERVER_URL="http://localhost:8080/"

"${ROOT_DIR}/occ" app:enable "${APP_NAME}"

(cd "${APP_INTEGRATION_DIR}" && composer install -o)
"${APP_INTEGRATION_DIR}/vendor/bin/behat" --colors -f junit -f pretty "${1}" "${2}"
declare -ri RESULT=$?

exit ${RESULT}

