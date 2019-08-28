OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Izbriši",
    "Restrict login to IP addresses" : "Ograniči prijavu na IP adrese",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Omogućuje administratorima da ograniče prijave u njihovu instancu na određene raspone IP adresa.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Ova aplikacija omogućuje administratorima da ograniče prijave u svoj\nposlužitelj Nextcloud na određene raspone IP adresa. Imajte na umu da će postojeće sesije biti\notvorene.\n\nDozvoljeni rasponi IP adresa mogu se administrirati s pomoću sučelja OCC, putem naredbenog retka\nili grafički putem administratorskih postavki. Ako planirate koristiti alat OCC, primijenit\nće se sljedeće naredbe.\n\nZa dopuštanje IP adresa ‘127.0.0.0/24’:\n\n-’occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24’\n\nZa dopuštanje IP adresa ‘127.0.0.0/24’ i ‘192.168.0.0/24’:\n\n- ’occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24’",
    "Restrict login to IP ranges" : "Ograniči prijavu na raspone IP adresa",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "%s prema zadanom dopušta prijavu s bilo koje IP adrese. Kako biste prijavu ograničili na određene raspone IP adresa, možete ih navesti u nastavku.",
    "Add" : "Dodaj",
    "Not authorized" : "Nije ovlašten"
},
"nplurals=3; plural=n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;");
