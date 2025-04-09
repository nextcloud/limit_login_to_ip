OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Kustuta",
    "Restrict login to IP addresses" : "Piira sisselogimine valitud IP-aadressidega",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Võimaldab peakasutajatel piirata serverisse sisselogimist kindlate IP-aadresside vahemikega.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo allow `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo allow `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Seerakendus võimaldab peakasutajatel piirata oma\nNextcloudi serverisse sisselogimist kindlate IP-aadresside vahemikega.\nArvesta, et senised sessioonid jäävad toimima.\n\nLubatud IP-aadresside vahemikku saad hallata OCC käsureatarvikuga\nvõi peakasutaja haldusliidesest. Kui kasutad OCC tarvikut, siis\njärgnevad näited on abiks.\n\nLubamaks `127.0.0.0/24` kasuta käsku:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nLubamaks `127.0.0.0/24` ja samuti `192.168.0.0/24` kasuta käsku:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Piira sisselogimine IP-vahemikega",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Vaikimisi lubab %s sisse logida igalt IP-aadressilt. Selleks, et piirata sisselogimine kindlatele IP-vahemikega, saad need allpool määrata.",
    "Add" : "Lisa",
    "Not authorized" : "Pole autoriseeritud"
},
"nplurals=2; plural=(n != 1);");
