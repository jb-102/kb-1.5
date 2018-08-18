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
	$("#testimonial-slider").owlCarousel({
		items:2,
		itemsDesktop:[1000,2],
		itemsDesktopSmall:[979,2],
		itemsTablet:[768,2],
		pagination:false,
		navigation:true,
		margin:10,
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

// mobile menu 
$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
       isClosed = false;

    function buttonSwitch() {

        if (isClosed === true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    trigger.click(function () {
        buttonSwitch();
    });

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });
});

$("#showFooter").click(function (){
	if($('footer').is(":hidden")) {
		$('footer').slideDown();
		$('html, body').animate({
	        'scrollTop' : $("footer").position().top
	    });
	    $("#showFooter span i").removeClass("fa-angle-down");
	    $("#showFooter span i").addClass("fa-angle-up");
	} else {
		$('footer').slideUp();
	    $("#showFooter span i").removeClass("fa-angle-up");
	    $("#showFooter span i").addClass("fa-angle-down");
	}
	
})