OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Διαγραφή",
    "Restrict login to IP addresses" : "Περιορισμένη σύνδεση σε διευθύνσεις IP",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Επιτρέπει στους διαχειριστές να μην επιτρέπουν την είσοδο απο συγκεκριμένες διευθύνσεις IPs.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo allow `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo allow `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Αυτή η εφαρμογή επιτρέπει στους διαχειριστές να περιορίζουν τη σύνδεση στον\nδιακομιστή Nextcloud τους σε συγκεκριμένα εύρη IP. Σημειώστε ότι οι υπάρχουσες συνεδρίες θα παραμείνουν\nανοικτές.\n\nΤα επιτρεπόμενα εύρη IP μπορούν να διαχειριστούν χρησιμοποιώντας τη διεπαφή γραμμής εντολών OCC\nή γραφικά χρησιμοποιώντας τις ρυθμίσεις διαχειριστή. Εάν σκοπεύετε να χρησιμοποιήσετε το εργαλείο OCC, οι\nακόλουθες εντολές θα είναι εφαρμόσιμες.\n\nΓια να επιτρέψετε το `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nΓια να επιτρέψετε το `127.0.0.0/24` και επίσης το `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Περιορισμένη σύνδεση σε διευθύνσεις IP",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Από προεπιλογή το %s επιτρέπει την είσοδο από οποιαδήποτε διεύθυνση IP. Για τον περιορισμό εισόδου από συγκεκριμένες διευθύνσεις IP, μπορείτε να τις ορίσετε παρακάτω.",
    "Add" : "Προσθήκη",
    "Not authorized" : "Μη έγκυρος"
},
"nplurals=2; plural=(n != 1);");
