OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Excluir",
    "Restrict login to IP addresses" : "Restringir login para um endereço IP",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Permite que administradores restrinjam logins para intervalos de IP específicos.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Este aplicativo permite aos administradores restringir o login ao\nServidor para intervalos de IP específicos. Sessões existentes serão mantidas\nabertas.\n\nOs intervalos de IP podem ser administrados pela interface de linha de comando OCC\nou graficamente usando as configurações. Se você planeja usar a ferramenta OCC, o\nos seguintes comandos seriam aplicáveis.\n\nPara colocar `127.0.0.0/24` na lista branca:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nPara colocar `127.0.0.0/24` e `192.168.0.0/24` na lista branca:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Restringir login para um intervalo de IPs",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Por padrão, %s permite login de qualquer endereço IP. Para limitar logins de um determinado IP ou intervalo de IPs, especifique abaixo.",
    "Add" : "Adicionar",
    "Not authorized" : "Não autorizado"
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
