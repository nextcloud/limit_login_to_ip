OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Scrios",
    "Restrict login to IP addresses" : "Srian a chur ar logáil isteach chuig seoltaí IP",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Ligeann sé do riarthóirí logáil isteach a theorannú dá gcás chuig raonta IP ar leith.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo allow `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo allow `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Ligeann an aip seo do riarthóirí logáil isteach a theorannú dá gcuid\nFreastalaí Nextcloud chuig raonta IP ar leith. Tabhair faoi deara go gcoimeádfar seisiúin atá ann cheana féin\noscailt.\n\nIs féidir na raonta IP ceadaithe a riar trí úsáid a bhaint as comhéadan líne ordaithe OCC\nnó go grafach ag baint úsáide as na socruithe riaracháin. Má tá sé ar intinn agat an uirlis OCC a úsáid, beidh an\nbheadh na horduithe seo a leanas infheidhme.\n\nChun `127.0.0.0/24` a cheadú:\n\n- `occ config:app: set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nChun `127.0.0.0/24` agus freisin `192.168.0.0/24` a cheadú:\n\n- `occ config: app: set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Srian a chur ar logáil isteach chuig raonta IP",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "De réir réamhshocraithe, ceadaíonn%s logáil isteach ó aon seoladh IP. Chun logáil isteach a theorannú go raonta IP ar leith, is féidir leat iad siúd thíos a shonrú.",
    "Add" : "Cuir",
    "Not authorized" : "Gan údar"
},
"nplurals=5; plural=(n==1 ? 0 : n==2 ? 1 : n<7 ? 2 : n<11 ? 3 : 4);");
