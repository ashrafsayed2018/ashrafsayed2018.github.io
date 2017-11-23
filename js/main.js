$(function () {
	'use strict';
	// make the navbar background opacity less when we scrolling 
	$(window).scroll(function () {
	   var navbar = $(".navbar"),
		   winScrollTop = $(window).scrollTop();
		if (winScrollTop > 280){
		  navbar.addClass('scrolled');
		 $('.navbar-nav  li  a').addClass("colored");
	 } else {
		  navbar.removeClass('scrolled');
		 $('.navbar-nav li a').removeClass("colored");
	 }
	});
	// Deal With Tabs 
	$(".tab-switched li ").click(function () {
        // add selected class to active link
		$(this).addClass("selected").siblings().removeClass('selected');
		// hide all divs
		$(".tabs-content  div").hide();
		// show the div connected with with this link
		var id = $(this).attr('id');
		$(id).show();
		
	});
});