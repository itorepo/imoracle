$(document).ready(function(){
	"use strict";

	var window_width	 = $(window).width(),
	window_height		 = window.innerHeight,
	header_height		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

	 
	 // -------   Active Mobile Menu-----//

	$(".menu-bar").on('click', function(e){
		e.preventDefault();
		$("nav").toggleClass('hide');
		$("span", this).toggleClass("lnr-menu lnr-cross");
		$(".main-menu").addClass('mobile-menu');
	});
	 
	$('select').niceSelect();
	$('.img-pop-up').magnificPopup({
		type: 'image',
		gallery:{
		enabled:true
		}
	});

	//	Counter Js 
	/*
	//FIXME: either create a `counter` block or drop this code off!
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	*/

	 $(document).ready(function() {


	   // Video lightbox

		$('.play-btn').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});


	  //  testimonail carusel

		$('.active-bottle-carousel').owlCarousel({
			items:1,
			loop:true,
			nav: false,
			autoplay: true,
			autoplayTimeout:3000,
			autoplayHoverPause:true
		});

		var form = $('#myForm'); // contact form
		var submit = $('.submit-btn'); // submit button
		var alert = $('.alert-msg'); // alert div for show alert message

		//TODO: remake this form to send something useful for the project! 
		// form submit event
		form.on('submit', function(e) {

			let message = "stub!: remake this form to send something useful for the project!!!";
			alert(message);
			console.log(message);

			e.preventDefault(); // prevent default form submit
			/*
			$.ajax({
				url: 'mail.php', // form action url
				type: 'POST', // form submit method get/post
				dataType: 'html', // request type html/json/xml
				data: form.serialize(), // serialize form data
				beforeSend: function() {
					alert.fadeOut();
					submit.html('Sending....'); // change submit button text
				},
				success: function(data) {
					alert.html(data).fadeIn(); // fade in response data
					form.trigger('reset'); // reset form
					submit.attr("style", "display: none !important");; // reset submit button text
				},
				error: function(e) {
					console.log(e)
				}
			});
			*/
		});
	});
 });
