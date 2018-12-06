/*** PARALLAX ***/
$(window).scroll(function(e){
	parallax();
});

function parallax(){
    var scrolled = $(window).scrollTop();
    $('.header').css('top', +(scrolled * 0.3) + 'px');
}
