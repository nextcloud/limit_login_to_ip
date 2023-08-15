OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Обриши",
    "Restrict login to IP addresses" : "Ограничење пријава са ИП адреса",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Омогућава администраторима да дозволе пријаве само са одређених ИП опсега.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo allow `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo allow `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Омогућава администраторима да дозволе пријаве само са одређених IP опсега. Постојеће сесије ће остати отворене.\n\nДозвољеним опсезима се управља са „occ“ наредбом из командне линије или графички из администраторских поставки. Ако планирате да користите „occ“ алат, следеће команде се могу применити.\n\nДа дозволите `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nДа дозволите и `127.0.0.0/24` и `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Ограничи пријављивање на опсег ИП адреса",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Подразумевано, %s дозвољава пријављивање са било које ИП адресе. Да ограничите приступ само на одређене ИП опсеге, унесите их испод.",
    "Add" : "Додај",
    "Not authorized" : "Нема овлашћења"
},
"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);");
