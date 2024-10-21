OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Zmazať",
    "Restrict login to IP addresses" : "Obmedziť možnosť prihlásenia na IP adresy",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Umožňuje správcom obmedziť prihlasovanie k ich Nextcloudom len na určité rozsahy adries IP.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo allow `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo allow `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Táto aplikácia umožňuje správcom obmedziť prihlásenie na ich\nNextcloud server na konkrétne rozsahy IP. Upozorňujeme, že existujúce relácie sa zachovajú\nOTVORENÉ.\n\nPovolené rozsahy IP je možné spravovať pomocou rozhrania príkazového riadka OCC\nalebo graficky pomocou nastavení správcu. Ak plánujete použiť nástroj OCC,\nbudú použiteľné nasledujúce príkazy.\n\nAk chcete povoliť „127.0.0.0/24“:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nAk chcete povoliť `127.0.0.0/24` a tiež `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Obmedziť možnosť prihlásenia na rozsahy IP adries",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Štandardne %s povoľuje prihlasovanie z ľubovoľnej IP adresy. Ak si želáte obmedziť prihlasovanie len na určité rozsahy IP adries, môžete tieto uviesť nižšie.",
    "Add" : "Pridať",
    "Not authorized" : "Neoprávnený"
},
"nplurals=4; plural=(n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);");
