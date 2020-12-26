const isOpac = true;
const isDefil= true;

window.onload = function() {
lax.setup() // init

 const updateLax = () => {
   lax.update(window.scrollY)
   window.requestAnimationFrame(updateLax)
 }

 window.requestAnimationFrame(updateLax)
 
 window.addEventListener("scroll", (event) => {
   let scroll = this.scrollY;
   
   if(scroll > 50 && isOpac){
     
     var container = document.querySelector("#sec-2 .maincontainer");
     container.style.opacity = 1.0;
     this.isOpac = false;

     var social = document.querySelector(".socialcontainer");
     social.classList.add('active');
 }

    if(scroll > 50){
      var social = document.querySelector(".socialcontainer");
      social.classList.add('active');
    }

    if(scroll < 50){
      var social = document.querySelector(".socialcontainer");
      social.classList.remove('active');
    }


  if(scroll > 999 && isDefil){
    var defil = document.querySelector('#sec-3 .maincontainer');
    defil.classList.add('active');
    this.isDefil = false;
  }

 });

 }