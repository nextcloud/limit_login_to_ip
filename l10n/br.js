OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Dilemel",
    "Restrict login to IP addresses" : "Aotren ar c'hennask da chomlec'hioù IP 'zo nemetken",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Aotreañ ar merour da aotrzea ar mon tre d'o azgoulenn d'ur strollad IP nemetken.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Ar meziant-mañ a aotre ar merour da vevenañ ar mon-tre d'ar servijour Nexcloud da strolladoù IP zo. Notit e vo dalc'hoù a chomo\ndigor.\n\nAr strolladoù IP a zo posuple cheñch en ur implij an an etrefas linenn urzh OCC\npe implij stumm grafek ar merour. M'a o peus c'houant implij an oustil OCC, al linennoù urzh mañ a zo posuple implij.\n\nEvit lakaat er whitelist '127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nEvit lakaat er whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Aotren ar c'hennask d'ur strollad IP nemetken",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Dre ziouer, %s a aotre kennask gant n'eus forzh peseurt chomlec'h IP. Evit bevenniñ ar c'hennask d'ur strollad chomlec'hioù IP nemetken, gallout a rit o menegiñ dindan.",
    "Add" : "Ouzhpennañ",
    "Not authorized" : "Difennet"
},
"nplurals=5; plural=((n%10 == 1) && (n%100 != 11) && (n%100 !=71) && (n%100 !=91) ? 0 :(n%10 == 2) && (n%100 != 12) && (n%100 !=72) && (n%100 !=92) ? 1 :(n%10 ==3 || n%10==4 || n%10==9) && (n%100 < 10 || n% 100 > 19) && (n%100 < 70 || n%100 > 79) && (n%100 < 90 || n%100 > 99) ? 2 :(n != 0 && n % 1000000 == 0) ? 3 : 4);");
