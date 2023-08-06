function three_dot_button_right_info() {
  let aright_info = document.getElementById("right_info");
  aright_info.style.display = "none";
  var switchInput = document.querySelector(".switch1 input");
}
function three_dot_button_sites() {
  let sites = document.getElementById("threedots");
  sites.style.display = "none";
}
document
  .getElementById("right_info")
  .addEventListener("mouseover", function () {
    this.style.background = "rgb(75, 73, 73,0.5)";
  });
document.getElementById("right_info").addEventListener("mouseout", function () {
  this.style.background = "none";
});
document.getElementById("threedots").addEventListener("mouseover", function () {
  this.style.background = "rgb(75, 73, 73,0.5)";
});
document.getElementById("threedots").addEventListener("mouseout", function () {
  this.style.background = "none";
});
//.....
function search() {
  let query = document.getElementById("search-innertext");
  query = query.value;
  var searchUrl =
    "https://www.google.com/search?q=" + encodeURIComponent(query);
  window.location.href = searchUrl;
  console.log(query);
}

function search_bar_refresh_button() {
  brave_background();
}
