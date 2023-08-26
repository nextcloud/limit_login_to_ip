OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Eliminar",
    "Restrict login to IP addresses" : "Restringir el inicio de sesión a direcciones IP",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Permite que los administradores restrinjan el inicio de sesión a su instancia a rangos específicos de IP.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo allow `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo allow `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Esta app permite que los administradores restrinjan los inicios de sesión de su\nservidor Nextcloud a rangos de IP específicos. Tenga en cuenta que las sesiones existentes se mantendrán\nabiertas.\n\nLos rangos de IP permitidos pueden ser administrados utilizando la interfaz de línea de comandos OCC\no de manera gráfica utilizando las configuraciones de administración. Si planea utilizar la herramienta OCC, aplican\nlos siguientes comandos.\n\nPara permitir `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nPara permitir `127.0.0.0/24` y también `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Restringir el inicio de sesión a rangos de direcciones IP",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Por defecto, %s permite el inicio de sesión desde cualquier dirección IP. Para limitar los inicios de sesión a rangos de IP específicos, puede especificarlos a continuación.",
    "Add" : "Añadir",
    "Not authorized" : "No autorizado"
},
"nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
