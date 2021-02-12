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

  if (scroll > 600 && isDefil) {
    var defil = document.querySelector("#sec-3 .maincontainer");
    defil.classList.add("active");
    this.isDefil = false;
  }
});

window.onresize = () => {
  if (window.innerWidth >= 1200) {
    var cont2 = document.querySelector(".maincontainer .container");
    cont2.style.left = 0;
  }

  if (window.innerWidth <= 1200) {
    var cont3 = document.querySelector(".maincontainer .container");

    cont3.style.left = -100 + "%";
  }
};
