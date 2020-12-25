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
    console.log(scroll);
   if(scroll > 50 && isOpac){
     
     var container = document.querySelector("#sec-2 .maincontainer");
     container.style.opacity = 1.0;
     this.isOpac = false;
 }

  if(scroll > 999 && isDefil){
    var defil = document.querySelector('#sec-3 .maincontainer');
    defil.classList.add('active');
    this.isDefil = false;
  }
 });

 }