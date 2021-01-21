// JavaScript Document
$(document).on('click', '.menu-burger', function() {
	if ($(".nav").hasClass('nav--active')) {
		$(".nav").removeClass('nav--active');
	} else {
		$(".nav").addClass('nav--active');
	}
});
