function toggle_nav() {
  var x = document.getElementById("navigation-bar");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }

}
