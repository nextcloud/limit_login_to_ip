OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Usuń",
    "Restrict login to IP addresses" : "Ogranicz logowanie do adresów IP",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Umożliwia administratorom ograniczenie logowania do ich instancji dla określonych zakresów adresów IP.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Aplikacja ta pozwala administratorom wprowadzać ograniczenia logowania do serwera Nextcloud dla określonych zakresów adresów IP. Należy pamiętać, że istniejące sesje pozostaną otwarte.\n\nDozwolone zakresy adresów IP mogą być administrowane poprzez interfejs wiersza poleceń OCC lub graficznie poprzez ustawienia administratora. Jeżeli planujesz wykorzystywać narzędzie OCC stosuje się poniższe komendy.\n\nAby dodać do białej listy `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nAby dodać do białej listy `127.0.0.0/24` oraz `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Ogranicz logowanie do zakresów IP",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Domyślnie %s zezwala na logowanie z dowolnego adresu IP. Aby ograniczyć logowania dla określonych zakresów adresów IP, możesz określić je poniżej.",
    "Add" : "Dodaj",
    "Not authorized" : "Nieautoryzowany"
},
"nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);");
