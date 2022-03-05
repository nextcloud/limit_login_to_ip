OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Slett",
    "Restrict login to IP addresses" : "Begrens innlogging til IP-adresser",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Lar administratorer begrense login fra spesifikke IP-rekkevidder",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Denne appen gjør det mulig for administratorer å begrense innlogginger på deres Nextcloud-server for spesifikke IP-serier. Merk at eksisterende sesjoner vil holdes\nåpne.\n\nDe tillatte IP-seriene kan administreres ved å bruke OCC i kommandolinjen\neller via det grafiske grensesnittet i administrasjonsinnstillingene. Hvis du planlegger å bruke OCC-verktøyet, kan\nfølgende kommandoer brukes.\n\nFor å hviteliste `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nFor å hviteliste både `127.0.0.0/24` og `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Begrens innlogging til IP-rekkevidde",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Som forvalg tillater %s innlogging fra alle IP-addresser. For å begrense innlogging til gitte IP-rekkevidder må du angi disse nedenfor.",
    "Add" : "Legg til",
    "Not authorized" : "Uautorisert"
},
"nplurals=2; plural=(n != 1);");
