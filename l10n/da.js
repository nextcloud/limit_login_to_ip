OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Slet",
    "Restrict login to IP addresses" : "Begræns login til IP adresser",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Tillader administratorer at begrænse login til deres instans til specifikke IP-områder.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Denne app giver administratorer mulighed for at begrænse login til deres\nNextcloud-server til specifikke IP-områder. Bemærk, at eksisterende sessioner bevares\nåben.\n\nDe tilladte IP-områder kan administreres ved hjælp af OCC-kommandolinjegrænsefladen\neller grafisk ved hjælp af administratorindstillingerne. Hvis du planlægger at bruge OCC-værktøjet,\nfølgende kommandoer ville være gældende.\n\nFor at hvidliste `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nFor at hvidliste `127.0.0.0/24` og også `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Begræns login til IP interval",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Som standard, %s tillader login fra hvilken som helst IP adresse. For at begrænse login til et specifikt IP interval kan du specificere nedenunder.",
    "Add" : "Tilføj",
    "Not authorized" : "Ikke autoriseret"
},
"nplurals=2; plural=(n != 1);");
