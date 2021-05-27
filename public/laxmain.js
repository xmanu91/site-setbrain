/*window.onload = function () {
  lax.setup(); // init

  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };
  window.requestAnimationFrame(updateLax);
};*/
import LocomotiveScroll from "locomotive-scroll";

  var scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true,
    lerp: 0.05
  });
