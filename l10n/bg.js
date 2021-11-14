OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Изтриване",
    "Restrict login to IP addresses" : "Ограничаване на влизането на IP адреси",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Позволява на администраторите да ограничат влизанията в техния екземпляр на конкретни IP диапазони.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Това приложение позволява на администраторите да ограничат влизането в техният\nNextcloud сървър за конкретни IP диапазони. Имайте предвид, че съществуващите сесии ще бъдат запазени\nотворени.\n\nРазрешените IP диапазони могат да се администрират с помощта на интерфейса на командния ред OCC\nили графично с помощта на администраторските настройки. Ако планирате да използвате инструмента OCC,\nще са приложими следните команди.\n\nДо белия списък „127.0.0.0/24“:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nДо белия списък `127.0.0.0/24`, а също и `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Ограничаване на влизането на IP диапазони",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "По подразбиране %s позволява влизане от всеки IP адрес. За да ограничите влизанията до конкретни IP диапазони, можете да ги посочите по-долу.",
    "Add" : "Добавяне",
    "Not authorized" : "Не е разрешен"
},
"nplurals=2; plural=(n != 1);");
