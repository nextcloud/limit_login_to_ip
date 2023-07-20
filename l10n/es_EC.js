OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Borrar",
    "Restrict login to IP addresses" : "Limitar inicio de sesión a direcciónes IP",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Permite a los administradores restringir los inicios de sesión en su instancia a rangos de direcciones IP específicas.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Esta aplicación permite a los administradores restringir el inicio de sesión en su servidor Nextcloud a rangos de direcciones IP específicas. Tenga en cuenta que las sesiones existentes se mantendrán abiertas.\n\nLos rangos de IP permitidos pueden ser administrados utilizando la interfaz de línea de comandos OCC o gráficamente mediante la configuración del administrador. Si planea utilizar la herramienta OCC, los siguientes comandos serían aplicables.\n\nPara agregar a la lista blanca `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nPara agregar a la lista blanca `127.0.0.0/24` y también `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Limitar inicio de sesión a rangos de IP",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Por omisión, %s te permite iniciar sesión desde cualquier dirección IP. Acontinuación puedes especificar rangos de IP¨s para limitar el inicio de sesión.",
    "Add" : "Agregar",
    "Not authorized" : "No autorizado"
},
"nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
