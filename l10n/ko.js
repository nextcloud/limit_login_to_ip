OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "삭제",
    "Restrict login to IP addresses" : "IP 주소로 로그인 제한",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "관리자가 특정 IP 대역이 인스턴스에 접근하는 것을 차단할 수 있습니다.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "이 앱을 사용하여 시스템 관리자가 Nextcloud 로그인을\n지정한 IP 주소에서만 허용할 수 있습니다. 기존 세션은 계속 유지됩니다.\n\n허용되는 IP 목록은 OCC 명령행 인터페이스나 관리자 설정의 그래픽 환경으로\n관리할 수 있습니다. OCC 도구를 사용한다면 다음 명령을 사용할 수 있습니다.\n\n`127.0.0.0/24`허용 :\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\n`127.0.0.0/24` 및 `192.168.0.0/24` 허용:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "IP 범위로 로그인 제한",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "기본값으로 %s은(는) 임의의 IP 주소에서 로그인하는 것을 허용합니다. 지정한 IP 범위에서만 로그인을 허용하려면 아래에 입력할 수 있습니다.",
    "Add" : "추가",
    "Not authorized" : "인증되지 않음"
},
"nplurals=1; plural=0;");
