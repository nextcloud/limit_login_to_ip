OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Löschen",
    "Restrict login to IP addresses" : "Login auf IP-Adressen beschränken",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Ermöglicht Administratoren den Zugriff auf Ihr System auf bestimmte IP-Adressräume zu beschränken",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphical using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Diese App ermöglicht es Administratoren, den Zugriff auf ihren Nextcloud-Server auf bestimmte IP-Bereiche zu beschränken. Bereits bestehenden Verbindungen bleiben bestehen.\n\nDer zugelassene IP-Bereich kann sowohl mit dem OCC-Komandozeilen-Interface als auch grafisch in den Administratoren-Einstellungen administriert werden. Zur Nutzung mit dem OCC-Werkzeug stehen folgende Befehle zur Verfügung:\n\nUm `127.0.0.0/24` zu erlauben:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nUm `127.0.0.0/24` sowie `192.168.0.0/24` zu erlauben:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Login auf IP-Adressbereiche beschränken",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Standardmäßig erlaubt %s das Einloggen von jeder IP-Adresse. Um das Einloggen auf bestimmte IP-Adressbereiche zu beschränken, können Sie diese unten festlegen.",
    "Add" : "Hinzufügen",
    "Not authorized" : "Nicht autorisiert"
},
"nplurals=2; plural=(n != 1);");
