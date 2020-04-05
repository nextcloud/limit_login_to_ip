OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "削除",
    "Restrict login to IP addresses" : "IPアドレスでログイン制限",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "管理者がサーバーへのログインを特定のIP範囲に対して制限することを許可します。",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "管理者がNextcloudへのログインをIPアドレスの範囲指定により制限するアプリです。接続中のセッションは制限されないので注意が必要です。\n\n接続制限するIPアドレスは、OCCコマンドラインか、\n管理画面のウェブUIから設定できます。\n\n`127.0.0./24` をホワイトリストに追加する場合:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\n`127.0.0.0/24` と同時に `192.168.0.0/24` をホワイトリストに追加する場合:  \n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "IPアドレスの範囲でログイン制限",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "デフォルトでは、%s は任意のIPアドレスからのログインを許可します。ログインを特定のIPアドレスの範囲に制限するには、以下に指定します。",
    "Add" : "追加",
    "Not authorized" : "承認されていません"
},
"nplurals=1; plural=0;");
