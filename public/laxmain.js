<<<<<<< HEAD
window.onload = function () {
  lax.setup(); // init

  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };
  window.requestAnimationFrame(updateLax);
};
=======
var rellax = new Rellax('.rellax', {
  speed: -400,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});
>>>>>>> b02ea35caef30051944486839e8e19213eacfb56
