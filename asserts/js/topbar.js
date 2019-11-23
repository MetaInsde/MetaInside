function topBar() {
  var x = document.getElementById("topBar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}