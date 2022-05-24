OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Elimina",
    "Restrict login to IP addresses" : "Limita l'accesso a indirizzi IP",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Consente agli amministratori di limitare gli accessi alla loro istanza per intervalli di IP specifici.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Questa applicazione consente agli amministratori di limitare l'accesso al loro server di Nextcloud a specifici intervalli di IP. Nota che le sessioni esistenti saranno mantenute\naperte.\n\nQuesti intervalli di IP consentiti possono essere amministrati utilizzando l'interfaccia da riga di comando OCC\no graficamente utilizzando le impostazioni di amministrazione. Se pensi di utilizzare lo strumento OCC, i\ncomandi seguenti saranno applicabili.\n\nPer aggiungere `127.0.0.0/24` alla whitelist:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nPer aggiungere sia `127.0.0.0/24` che `192.168.0.0/24 alla whitelist:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Limita l'accesso a intervalli di IP",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "In modo predefinito, %s consente di accedere da qualsiasi indirizzo IP. Per limitare gli accessi a intervalli di IP specifici, puoi indicarli di seguito.",
    "Add" : "Aggiungi",
    "Not authorized" : "Non autorizzato"
},
"nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
