OC.L10N.register(
    "limit_login_to_ip",
    {
    "Restrict login to IP addresses" : "Oturum açma IP adresi kısıtlaması",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Yöneticilerin kendi Nextcloud sunucularına erişimi belirli IP adresi aralıkları ile kısıtlamasını sağlar.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo allow `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo allow `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Bu uygulama, BT yöneticilerinin kendi Nextcloud sunucularına erişimi belirli IP adresi \naralıkları ile kısıtlamasını sağlar. Var olan oturumların açık tutulacağını unutmayın.\n\nİzin verilen IP adresi aralıkları OCC komut satırından ya da görsel arayüzdeki yönetici\nayarları bölümünden belirlenebilir. OCC aracını kullanmayı düşünüyorsanız şu komutları\nkullanabilirsiniz:\n\n`127.0.0.0/24` aralığına izin vermek için:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\n`127.0.0.0/24` ve `192.168.0.0/24` aralıklarına izin vermek için:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Oturum açma IP aralığı kısıtlaması",
    "Delete" : "Sil",
    "IP address" : "IP adresi",
    "Mask" : "Maske",
    "64" : "64",
    "Add" : "Ekle",
    "Not authorized" : "İzin verilmemiş"
},
"nplurals=2; plural=(n > 1);");
