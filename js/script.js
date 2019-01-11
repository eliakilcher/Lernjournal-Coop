/*** PARALLAX ***/
$(window).scroll(function(e){
	parallax();
});

function parallax(){
    var scrolled = $(window).scrollTop();
    $('.header').css('top', +(scrolled * 0.3) + 'px');
}


/*** MENU ***/
$(document).ready(function() {
  $('.menu-button').click(function(event) {
    $(".menu").toggleClass("menu-block");
    $(".menu-button").toggleClass("backtooverview:hover");
  });
});
