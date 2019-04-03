
 

//button js

function fadeOut() {

TweenMax.to(".myBtn", 1, {
	y: -100,
	opacity: 0
});

TweenMax.to(".screen", 2, {
	y: -400,
	opacity: 0,
	ease: Power2.easeInOut,
	delay: 2
});

TweenMax.from(".overlay", 2, {
	ease: Power2.easeInOut
});

TweenMax.to(".overlay", 2, {
	delay: 2.6,
	top: "-110%",
	ease: Expo.easeInOut
});

TweenMax.to(".overlay-2", 2, {
	delay: 3,
	top: "-110%",
	ease: Expo.easeInOut
});




}








 src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js">








document.addEventListener("DOMContentLoaded", function(event) {


window.onload = function() {

window.requestAnimationFrame(function() {


TweenMax.to('#light', 1, {opacity: 1, x: 50, delay: 1,delay: 7.4} );
TweenMax.to('h2', 2, {opacity: 1,x:-400, delay: 8.4});
TweenMax.to('.text_header_info', 2, {opacity: 1,x:-300, delay: 9});
TweenMax.to('.produkt_button_first', 2, {opacity: 1,x:-300, delay: 9});
 




});

};

});



var button = document.querySelector(".produk_button");

button.mouseover = function(){
TweenLite.to(button, .3, {css:{borderRadius:"50px 50px 50px 0px"}});
}


var scrollanimation;
document.querySelector('.j-to-top').addEventListener('click', function(_event){
		_event.preventDefault();
		
		var duration = 1; 
		
		var pos = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
		
		var step_width = pos / (60 * duration)
		scrollanimation = setInterval(function(){
				pos = pos - step_width;
				if(pos < 1) {
						pos = 0;
						clearInterval(scrollanimation);
						scrollanimation = null;
				}
				
				document.documentElement.scrollTop = document.body.scrollTop = pos;
		}, 1000 / 60);  
});

var prev_post = null;
window.addEventListener('scroll', function(){
		var scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
		if(prev_post !== null) {
				
				if(prev_post < scrollTop) {
						
						if(scrollanimation !== null) {
								clearInterval(scrollanimation);
						}
				}
		}
		
		prev_post = scrollTop;
});

