let ratio = 0.01

let options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

let callback = function (entries, observer) {
  entries.forEach(entry => {

    if(entry.intersectionRatio > ratio) {
      entry.target.style.opacity = "1.0";
      entry.target.classList.add("active")
    }
    
  });
};

let observer = new IntersectionObserver(callback, options);

let target = document.querySelector('#sec-2 .maincontainer');
let target2 = document.querySelector('#sec-3 .container .maincontainer');


observer.observe(target);
observer.observe(target2);
