function clock(){
    setInterval(clock, 1000);
    var date = new Date();
    var count = document.getElementById("paragrafo");
    count.innerText = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    count.style = "font-size: 3rem; font-family: monospace; text-align: center"
}