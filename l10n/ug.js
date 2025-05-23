OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "ئۆچۈر",
    "Restrict login to IP addresses" : "IP ئادرېسقا كىرىشنى چەكلەڭ",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "باشقۇرغۇچىنىڭ تىزىمغا كىرىشنى ئالاھىدە IP دائىرىسى بىلەن چەكلىشىگە يول قويىدۇ.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo allow `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo allow `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "بۇ ئەپ باشقۇرغۇچىنىڭ ئۇلارنىڭ كىرىشىنى چەكلىشىگە يول قويىدۇ\nNextcloud مۇلازىمېتىرى ئالاھىدە IP دائىرىسى. مەۋجۇت يىغىنلارنىڭ ساقلىنىدىغانلىقىغا دىققەت قىلىڭ\nئوچۇق.\n\nرۇخسەت قىلىنغان IP دائىرىسىنى OCC بۇيرۇق قۇرى كۆرۈنمە يۈزى ئارقىلىق باشقۇرغىلى بولىدۇ\nياكى باشقۇرۇش تەڭشەكلىرىنى گرافىكلىق ئىشلىتىپ. ئەگەر OCC قورالىنى ئىشلىتىشنى ئويلىسىڭىز ،\nتۆۋەندىكى بۇيرۇقلار قوللىنىلىدۇ.\n\nرۇخسەت قىلىش `127.0.0.0 / 24`:\n\n- `occ config: app: set limit_login_to_ip whitelisted.ranges - قىممىتى 127.0.0.0 / 24`\n\nرۇخسەت قىلىش `127.0.0.0 / 24` and also` 192.168.0.0 / 24`:\n\n- `occ config: app: set limit_login_to_ip whitelisted.ranges - قىممىتى 127.0.0.0 / 24,192.168.0.0 / 24`",
    "Restrict login to IP ranges" : "IP دائىرىسىگە كىرىشنى چەكلەڭ",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "سۈكۈت بويىچە ،% s ھەر قانداق IP ئادرېستىن كىرىشكە رۇخسەت قىلىدۇ. كىرىشنى ئالاھىدە IP دائىرىسى بىلەن چەكلەش ئۈچۈن ، تۆۋەندىكىلەرنى بەلگىلىيەلەيسىز.",
    "Add" : "قوش",
    "Not authorized" : "ھوقۇق بېرىلمىگەن"
},
"nplurals=2; plural=(n != 1);");
