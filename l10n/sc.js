OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Cantzella",
    "Restrict login to IP addresses" : "Lìmita s'atzessu a indiritzos IP",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Permitit a chie amministrat de limitare is atzessos a is istàntzias issoro a grupos ispetzìficos de IP.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Custa aplicatzione permitit a chie amministrat de limitare s'atzessu a su\nserbidore de Nextcloud a grupos ispetzìficos de IP. Is sessiones ativas si podent poderare\nabertas.\n\nIs grupos de IP autorizados si podent amministrare impreende s'interfache a riga de cumandu OCC\no impreende graficamente is impostatziones de s'amministratzione. Chi boles impreare s'aina OCC, \ncustos diant èssere is cumandos vàlidos.\n\nPro sa lista bianca `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nPro sa lista bianca `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Lìmita s'atzessu a grupos IP",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Pro sa modalidade predefinida, %s permitit s'atzessu dae cale si siat indiritzu IP. Pro limitare is atzessos a grupos ispetzìficos de IP, ddus podes ispetzificare inoghe a suta.",
    "Add" : "Agiunghe",
    "Not authorized" : "Non autorizados"
},
"nplurals=2; plural=(n != 1);");
