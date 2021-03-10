let ratio = 0.5

let options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}


var callback = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio > ratio) {
      entry.target.style.opacity = "1.0";
      entry.target.classList.add("active")
    }
  });
};

let observer = new IntersectionObserver(callback, options);

var target = document.querySelector('#sec-2 .maincontainer');
var target2 = document.querySelector('#sec-3 .container .maincontainer');

observer.observe(target);
observer.observe(target2);

var social = document.querySelector('.socialcontainer')

window.onscroll = () => {
  if (window.scrollY > 100) {
    social.classList.add("active")
  }
  if (window.scrollY < 100) {
    social.classList.remove("active")
  }
}
