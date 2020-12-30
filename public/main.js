const isOpac = true;
const isDefil = true;

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;

  if (scroll > 50 && isOpac) {
    var container = document.querySelector("#sec-2 .maincontainer");
    container.style.opacity = 1.0;
    this.isOpac = false;
  }

  if (scroll > 50) {
    var social = document.querySelector(".socialcontainer");
    social.classList.add("active");
  }

  if (scroll < 50) {
    var social2 = document.querySelector(".socialcontainer");
    social2.classList.remove("active");
  }

  if (scroll > 950 && isDefil) {
    var defil = document.querySelector("#sec-3 .maincontainer");
    defil.classList.add("active");
    this.isDefil = false;
  }
});

function round(number) {
  var cont = document.querySelector(".maincontainer .container");

  cont.style.left = number + "%";
}

var defaultFocus = document.getElementById("focus");
defaultFocus.focus({ preventScroll: true });
