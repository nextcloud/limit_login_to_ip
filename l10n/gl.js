OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Eliminar",
    "Restrict login to IP addresses" : "Limitar o acceso a enderezos IP",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Permítelle aos administradores restrinxir o acceso á súa instancia a intervalos específicos de IP.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Esta aplicación permítelle aos administradores restrinxir o acceso ao seu\nNextcloud a intervalos específicos de IP. Observe que as sesións existentes\nseguirán abertas.\n\nOs intervalos de IP permitidos poden configurarse empregando a interface de liña de ordes OCC\nou graficamente nos axustes do administrador. Se emprega a ferramenta OCC,\nten que aplicar as seguintes ordes\n\nPara engadir na lista de autorización «127.0.0.0/24»:\n\n- «occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24»\n\nPara engadir na lista de autorización «`127.0.0.0/24» e tamén «192.168.0.0/24»:\n\n- «occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24»",
    "Restrict login to IP ranges" : "Limitar o acceso a intervalos IP",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Por omisión, %s permite acceder dende calquera enderezo. Para limitar accesos a intervalos específicos, pode especificar estes embaixo.",
    "Add" : "Engadir",
    "Not authorized" : "Non autorizado"
},
"nplurals=2; plural=(n != 1);");
