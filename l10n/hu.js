OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Törlés",
    "Restrict login to IP addresses" : "Bejelentkezés IP-címekre korlátozása",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Engedélyezi a rendszergazdáknak, hogy a megadott IP-tartományokra korlátozzák a belépést.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Az alkalmazás lehetővé teszi, hogy a rendszergazdák a Nextcloud kiszolgálóra\ntörténő bejelentkezést adott IP-tartományokra korlátozzák. Ne feledje,\nhogy a meglévő munkamenetek nyitva fognak maradni.\n\nAz engedélyezett IP-tartományok az OCC parancssori felülettel kezelhetők,\nvagy grafikusan az adminisztrációs beállításokkal. Ha az OCC eszköz használatát\ntervezi, akkor a következő parancsok lesznek fontosak.\n\nA `127.0.0.0/24` fehérlistára tételéhez:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nA `127.0.0.0/24` és `192.168.0.0/24` fehérlistára tételéhez:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Bejelentkezés IP-tartományokra korlátozása",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Alapértelmezetten a %s bármely IP-ről engedi a bejelentkezést. A bejelentkezések meghatározott IP-tartományra korlátozását lent adhatja meg.",
    "Add" : "Hozzáadás",
    "Not authorized" : "Nincs hozzá jogosultsága"
},
"nplurals=2; plural=(n != 1);");
