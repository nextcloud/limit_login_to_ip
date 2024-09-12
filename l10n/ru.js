OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Удалить",
    "Restrict login to IP addresses" : "Ограничить возможность авторизации IP адресами",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Позволяет администраторам ограничивать вход в свой инстанс конкретными диапазонами IP.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo allow `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo allow `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Это приложение позволяет администраторам ограничивать вход на сервер Nextcloud определенными диапазонами IP-адресов. Обратите внимание, что существующие сеансы будут\nоткрыты.\n\nРазрешенные диапазоны IP-адресов можно администрировать с помощью интерфейса командной строки OCC\nили графически с помощью настроек администратора. Если вы планируете использовать инструмент OCC,\nбудут применимы следующие команды.\n\nЧтобы разрешить `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nЧтобы разрешить `127.0.0.0/24`, а также `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Ограничить возможность авторизации диапазоном IP адресов",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "По умолчанию, %s авторизация разрешена со всех IP адресов. Введите ниже диапазон IP адресов с которых будет разрешена авторизация.",
    "Add" : "Добавить",
    "Not authorized" : "Не авторизован"
},
"nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);");
