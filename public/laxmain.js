if (screen.width >= 1100) {
  

  window.onload = function() {
  	lax.setup() // init
  
  	const updateLax = () => {
  		lax.update(window.scrollY)
  		window.requestAnimationFrame(updateLax)
  	}
  
  	window.requestAnimationFrame(updateLax)
  }

}