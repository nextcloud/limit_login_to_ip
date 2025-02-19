OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "삭제",
    "Restrict login to IP addresses" : "IP 주소로 로그인 제한",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "관리자가 특정 IP 대역이 인스턴스에 접근하는 것을 차단할 수 있습니다.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo allow `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo allow `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "이 앱은 관리자가 그들의 Nextcloud Server에 특정 IP 대역에서 로그인하는 것을 제한할 수 있게 합니다.\n다만 이미 열려 있는 세션은 유지될 것이라는 점을 주지하십시오.\n\n허용 IP 대역은 OCC 명령 행 인터페이스 또는 관리자 설정에서 관리할 수 있습니다.\n만약 귀하가 OCC 도구를 사용할 계획이라면,\n아래 명령을 사용할 수 있습니다.\n\n`127.0.0.0/24`를 허용하려면:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\n`127.0.0.0/24`과 `192.168.0.0/24`를 허용하려면:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "IP 범위로 로그인 제한",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "기본값으로 %s은(는) 임의의 IP 주소에서 로그인하는 것을 허용합니다. 지정한 IP 범위에서만 로그인을 허용하려면 아래에 입력할 수 있습니다.",
    "Add" : "추가",
    "Not authorized" : "인증되지 않음"
},
"nplurals=1; plural=0;");
