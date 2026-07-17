OC.L10N.register(
    "limit_login_to_ip",
    {
    "Invalid IP range(s) provided. Please ensure all ranges are in valid CIDR notation." : "Intervalo(s) de IP inválido(s) fornecido(s). Verifique se todos os intervalos estão na notação CIDR válida.",
    "Restrict login to IP addresses" : "Restringir autenticação a endereços IP",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Permite que administradores restrinjam o acesso à sua instância através de gamas de IP específicas.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo allow `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo allow `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Este aplicativo permite que os administradores restrinjam o login para seus\nservidor Nextcloud para intervalos de IP específicos. Observe que as sessões existentes serão mantidas\naberto.\n\nOs intervalos de IP permitidos podem ser administrados usando a interface de linha de comandos OCC\nou graficamente usando as configurações de administrador. Se você planeja usar a ferramenta OCC,\nos seguintes comandos seriam aplicáveis.\n\nPara permitir `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nPara permitir `127.0.0.0/24` e também `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Unable to update the allowed IP ranges" : "Não foi possível atualizar os intervalos de IP permitidos",
    "Enter an IP address" : "Insira um endereço IP",
    "Enter a mask between 0 and {max}" : "Insira uma máscara entre 0 e {max}",
    "Restrict login to IP ranges" : "Restringir autenticação a gamas de IP ",
    "By default, {entity} permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Por padrão, {entity} permite o login a partir de qualquer endereço IP. Para limitar os logins a intervalos de IP específicos, você pode especificá-los abaixo.",
    "Allowed IP ranges" : "Intervalos de IP permitidos",
    "Deleting {range}" : "Excluindo {range}",
    "Delete {range}" : "Excluir {range}",
    "Delete" : "Apagar",
    "Add new IP range" : "Adicionar um novo intervalo de IP",
    "IP address" : "Endereço IP",
    "Mask" : "Máscara",
    "Add" : "Adicionar",
    "(loading)" : "(carregando)",
    "Not authorized" : "Não autorizado"
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
