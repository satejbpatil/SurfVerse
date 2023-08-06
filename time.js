function updateClock() {
  var clock = document.getElementById("time");
  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  if (hours > 12) {
    hours = hours - 12;
  } else if (hours === 0) {
    hours = 12;
  }
  var timeString =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0");
  clock.innerHTML = "<span>" + timeString + "</span>";
}
setInterval(updateClock, 1000);
