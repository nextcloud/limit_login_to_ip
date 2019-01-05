OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Smazat",
    "Restrict login to IP addresses" : "Umožnit přístup pouze z určitých IP adres",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Umožňuje správcům umožnit přihlašování k jimi spravovaným instancím pouze z určitých rozsahů IP adres.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Tato aplikace umožňuje správcům dovolovat přihlašování k jejich Nextcloud serveru pouze z konkrétních rozsahů IP adres. Poznamenejme, že na už navázaná sezení to nebude mít vliv.\n\nRozsahy IP adres, ze kterých je přístup umožněn, je možné spravovat pomocí rozhraní příkazového řádku OCC\nnebo toho grafického, v nastaveních pro správu. Pokud plánujete používat nástroj OCC,\nměly by být použitelné následující příkazy.\n\nPro zařazení „127.0.0.0/24“ na seznam povolených:\n\n- „occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24“\n\nPro zařazení „127.0.0.0/24“ a také „192.168.0.0/24“ na seznam povolených:\n\n- „occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24“",
    "Restrict login to IP ranges" : "Umožnit přihlašování pouze z určených rozsahů IP adres",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Ve výchozím nastavení, %s umožňuje přihlášení z jakékoli IP adresy. Pokud chcete umožnit přihlašování pouze z určitých rozsahů IP adres, můžete je nastavit níže.",
    "Add" : "Přidat",
    "Not authorized" : "Neautorizovaný"
},
"nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;");
