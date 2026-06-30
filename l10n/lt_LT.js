OC.L10N.register(
    "limit_login_to_ip",
    {
    "Restrict login to IP addresses" : "Apriboti prisijungimą iki IP adresų",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Leidžia administratoriams apriboti prisijungimus prie konkrečių IP adresų rėžių.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo allow `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo allow `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Ši programėlė leidžia administratoriams apriboti prisijungimą prie savo\n„Nextcloud“ serverio iki konkrečių IP adresų diapazonų. Atminkite, kad esamos sesijos bus\natviros.\n\nLeidžiamus IP diapazonus galima administruoti naudojant OCC komandinės eilutės sąsają\narba grafiškai naudojant administratoriaus nustatymus. Jei planuojate naudoti OCC įrankį,\nbus taikomos šios komandos.\n\nNorint leisti `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nNorint leisti `127.0.0.0/24` ir `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Apriboti prisijungimą iki IP rėžių",
    "Delete" : "Ištrinti",
    "Add" : "Pridėti",
    "Not authorized" : "Neleidžiama"
},
"nplurals=4; plural=(n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);");
