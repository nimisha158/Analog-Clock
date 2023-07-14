setInterval(() => {
  d = new Date();
  var sec = d.getSeconds() * 6;
  var min = d.getMinutes() * 6;
  var hr = d.getHours() * 30 + Math.round(min / 12);
  document.getElementById("hour-hand").style.transform =
    "rotate(" + hr + "deg)";
  document.getElementById("minute-hand").style.transform =
    "rotate(" + min + "deg)";
  document.getElementById("second-hand").style.transform =
    "rotate(" + sec + "deg)";
}, 1000);
