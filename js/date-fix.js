function checkDate() {
    var registration = new Date(1455919200000); //Friday at 4 PM CST
    var current = new Date().getTime();
    var registerLink = document.getElementById("registration-info");
    if (current >= registration.getTime()) {
        registerLink.innerHTML = "Registration is available now at <a href=\"//my.freetailhackers.com\">MyFreetail</a>";
    } else {
        registerLink.innerHTML = "Registration opens Friday at 4 PM!";
    }
}
