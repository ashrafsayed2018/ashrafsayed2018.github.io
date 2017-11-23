/*global $*/
$(function () {
	"use strict";
	//sidenavbar initialization
	$(".button-collapse").sideNav();
	//sider initialization
	$('.slider').slider();
	// our work button initialization
	$("#work #all").click(function () {
		$(".item").fadeIn(300);
	});
	$("#work #web").click(function () {
		$(".item").not(".web").hide(300);
		$(".web").show(300);
	});
	$("#work #mobile").click(function () {
		$(".item").not(".mobile").hide(300);
		$(".mobile").show(300);
	});
	$("#work #desktop").click(function () {
		$(".item").not(".desktop").hide("slow");
		$(".desktop").show("slow");
	});
	// parallax initialization
	$('.parallax').parallax();
	// smooth scroll
	$("a").click(function () {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 500);
	});
	// preloading

	$(".preloading").delay(2500).fadeOut();

});