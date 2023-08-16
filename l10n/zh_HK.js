OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "刪除",
    "Restrict login to IP addresses" : "限定登入的 IP 位址",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "允許管理員將其實例的登入限制為特定的IP範圍。",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo allow `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo allow `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "此應用程式讓管理員可以限制僅有特定範圍的 IP 可以登入他們的 Nextcloud 伺服器。請注意，現有的工作階段將會維持開啟。\n\n允許的 IP 範圍可以使用 OCC 命令列介面進行管理，也可以使用管理設定來圖形化管理。若要使用 OCC 工具，可使用以下指令。\n\n要允許「127.0.0.0/24」：\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\n要允許「127.0.0.0/24」與「192.168.0.0/24」：\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "限定登入的 IP 區段",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "%s預設允許任何 IP 位址登入，若想要限制特定 IP 才能登入，可以在下方指定",
    "Add" : "新增",
    "Not authorized" : "尚未授權"
},
"nplurals=1; plural=0;");
