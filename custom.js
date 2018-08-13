$(document).ready(function(){
	$(".dropdown").hover(            
		function() {
			$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
			$(this).toggleClass('open');        
		},
		function() {
			$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
			$(this).toggleClass('open');       
		}
	);
	var myLazyLoad = new LazyLoad({
	    elements_selector: ".lazy"
	});

});

$(document).ready(function(){
	$('.customer-logos').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 4
			}
		}, {
			breakpoint: 520,
			settings: {
				slidesToShow: 3
			}
		}]
	});
});

$(document).ready(function(){
	$("#testimonial-slider").owlCarousel({
		items:2,
		itemsDesktop:[1000,1],
		itemsDesktopSmall:[979,1],
		itemsTablet:[768,1],
		pagination:false,
		navigation:true,
		navigationText:["",""],
		autoPlay:true
	});
});

// stick header script

var $ = jQuery.noConflict();

$(document).ready(function() {
	jQuery('ul.sf-menu').superfish({
		animation: {
			height: 'show'
		},  
		delay: 100 
	}); 
	$("#toggle-btn").click(function() {
		$(".sf-menu").slideToggle("slow"); 
	});

	$('.toggle-subarrow').click(
		function() {
			$(this).parent().toggleClass("mob-drop");
		});

	var header = $(".header-inner");
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 100 && $(this).width() > 769) {
			header.addClass("navbar-fixed-top");
		} else {
			header.removeClass('navbar-fixed-top');
		}
	});	  
	$(this).find(".h4 i").each(function(){
		$(this).addClass("green");
	}); 
});  

$(window).scroll(function() {
	var wS = $(this).scrollTop();
    if (wS < 145){
        $('#stickHeader').css('display','none');
	} else {
		$('#stickHeader').css('display','block');
	}
});

$('#btn-new-address').click(function() {
    $('#new-address').slideDown();
});

