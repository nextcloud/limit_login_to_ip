OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Löschen",
    "Restrict login to IP addresses" : "Anmeldung auf IP-Adressen beschränken",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Ermöglicht Administratoren, den Zugriff auf Ihr System auf bestimmte IP-Adressräume zu beschränken",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo allow `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo allow `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Mit dieser App können Administratoren die Anmeldung an ihrem\nNextcloud-Server auf  bestimmte IP-Bereiche beschränken. Beachten Sie, \ndass vorhandene Sitzungen geöffnet bleiben.\n\nDie zulässigen IP-Bereiche können über die OCC-Befehlszeilenschnittstelle oder\ngrafisch über die Administrationseinstellungen verwaltet werden. Mit dem OCC-Tool stehen\nfolgende Befehle zur Verfügung.\n\n`127.0.0.0/24` erlauben:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\n`127.0.0.0/24` und `192.168.0.0/24` erlauben:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Anmeldung auf IP-Adressbereiche beschränken",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Standardmäßig erlaubt %s das Anmelden von jeder IP-Adresse. Um das Anmelden auf bestimmte IP-Adressbereiche zu beschränken, können Sie diese unten festlegen.",
    "Add" : "Hinzufügen",
    "Not authorized" : "Nicht autorisiert"
},
"nplurals=2; plural=(n != 1);");
