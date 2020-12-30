const isOpac = true;
const isDefil= true;

 window.addEventListener("scroll", (event) => {
   let scroll = this.scrollY;
   
   if(scroll > 50 && isOpac){
     
     var container = document.querySelector("#sec-2 .maincontainer");
     container.style.opacity = 1.0;
     this.isOpac = false;
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

 if(screen.width <= 1200){
   var right = document.querySelector('#sec-3 .left');

   right.remove();
   
   var right2 = document.querySelector('#sec-1 .right');
  right2.remove();
  
   var right3 = document.querySelector('#sec-2 svg');
   right3.remove();
   
   
   var right4 = document.querySelector('#sec-3 .right h1');

   right4.remove();
 }
 
 
 
 function round(number){
   var cont = document.querySelector(".maincontainer .container");
          
    cont.style.left = number + '%';
 }
 
