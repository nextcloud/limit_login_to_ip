OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "حذف",
    "Restrict login to IP addresses" : "ورود به آدرس IP را محدود کنید",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "به سرپرستان اجازه می دهد ورود به سیستم را به عنوان مثال در محدوده IP خاص محدود کنند.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo allow `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo allow `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo allow `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo allow `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "ورود به محدوده IP را محدود کنید",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "به طور پیش فرض ، ورود به سیستم را از هر آدرس IP اجازه می دهد. برای محدود کردن%s ورود به محدوده IP خاص ، می توانید موارد زیر را مشخص کنید.",
    "Add" : "افزودن",
    "Not authorized" : "مجاز نیست"
},
"nplurals=2; plural=(n > 1);");
