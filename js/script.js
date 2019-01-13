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
		$(".menu-button").html("close")
		$(".menu").addClass("menu-text");
  });
});
$(document).ready(function() {
  $('.menu-text').click(function(event) {
    $(".menu-text").removeClass("menu-text");
		$(".menu-button").html("apps")
  });
});
