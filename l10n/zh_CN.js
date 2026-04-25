OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "删除",
    "Restrict login to IP addresses" : "限定可登陆的IP地址",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "允许管理员限制指定IP范围登陆其实例",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo allow `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo allow `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "此应用允许管理员限制指定范围的IP登入他们的Nextcloud服务器。请注意，现有的会话将保持开启。\n\n允许的IP范围可通过OCC命令行界面或网页面板的管理员设置进行管理。如要使用OCC工具，可使用以下命令。\n\n如要允许“127.0.0.0/24”：\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\n如要允许“127.0.0.0/24”与“192.168.0.0/24”：\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "限定可登陆的IP范围",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "在默认情况下，%s允许从任意IP地址登录。要限制只能从特定IP范围登录，您可以在下面指定。",
    "Add" : "添加",
    "Not authorized" : "未授权"
},
"nplurals=1; plural=0;");
