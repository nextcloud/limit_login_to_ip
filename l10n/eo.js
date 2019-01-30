OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Forigi",
    "Restrict login to IP addresses" : "Limigi ensaluton al specifaj retadresoj",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Pere de tiu aplikaĵo, administrantoj povas limigi ensaluton en la servilo al specifaj retadresajn intervalojn.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Pere de tiu aplikaĵo, administrantoj povas limigi ensaluton en la servilo al specifaj retadresajn intervalojn. Notu, ke ekzistantaj seancoj restos malfermaj.\n\nLa intervaloj de permesitaj retadresoj agordiĝas komandlinie per OCC aŭ grafike per la administranto-agordo. Se vi intencas uzi la komandon OCC, jen kelkaj ekzemploj.\n\nPor blanklistigi `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nPor blanklistigi `127.0.0.0/24` kaj `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Limigi ensaluton al retadresaj intervaloj",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Defaŭlte, %s permesas ensaluton el iu ajn retadreso. Por limigi ensaluton al specifaj retadresaj intervaloj, vidu ĉi-sube.",
    "Add" : "Aldoni",
    "Not authorized" : "Ne permesata"
},
"nplurals=2; plural=(n != 1);");
