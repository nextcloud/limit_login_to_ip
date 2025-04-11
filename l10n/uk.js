OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Вилучити",
    "Restrict login to IP addresses" : "Обмеження входу з IP-адрес",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Дозволяє адміністраторам обмежувати вхід лише з певних IPдіапазонів IP-адрес.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo allow `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo allow `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Цей застосунок дозволяє адміністраторам обмежити вхід до серверу хмари\nNextcloud із визначеного діапазону IP-адрес. Зверніть увагу, що нові обмеження\nбудуть застосовуватися лише для нових сесій.\n\nДозволений діапазон IP-адрес можна визначити за допомогою OCC у командному рядку\nабо у вебінтерфейсі у адміністративних налаштуваннях. Приклади налаштувань:\n\nЩоб дозволити вхід з `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nЩоб дозволити вхід з `127.0.0.0/24`, а також з `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Обмежити вхід з IP-адрес",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Типово %s дозволяє вхід з будь-якої IP адреси. Зазначте діапазони IP-адрес, лише з яких буде дозволено авторизацію.",
    "Add" : "Додати",
    "Not authorized" : "Не авторизовано"
},
"nplurals=4; plural=(n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);");
