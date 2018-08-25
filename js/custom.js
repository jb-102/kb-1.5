$(document).ready(function(){
	$(".dropdown").hover(            
		function() {
			$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).fadeIn(500);
			$(this).toggleClass('open');        
		},
		function() {
			$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).fadeOut(100);
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
				slidesToShow: 2
			}
		}]
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

function toogleHeader() {
	$('.menu-toggle').find('.fa').css("cssText", "padding: 0px !important; font-size: 20px !important;")
	if($('.menu-toggle').find('.fa').hasClass('fa-bars')){
		$('.menu-toggle').find('.fa').removeClass('fa-bars')
		$('.menu-toggle').find('.fa').addClass('fa-times')
		$('#mainHeader').addClass('hidden')
		$('#mainHeaderGrey').removeClass('hidden')
	} else {
		$('.menu-toggle').find('.fa').addClass('fa-bars')
		$('.menu-toggle').find('.fa').removeClass('fa-times')
		$('#mainHeader').removeClass('hidden')
		$('#mainHeaderGrey').addClass('hidden')
	}
}

jQuery(document).ready(function($) {
	jQuery('.stellarnav').stellarNav({
		theme: 'light'
	});
});

$(document).ready(function() {
  $('.drawer').drawer();
});

(function() {
	if(document.getElementById( 'morphsearch' ) !== null)
	{
		var morphSearch = document.getElementById( 'morphsearch' ),
		input = morphSearch.querySelector( 'input.morphsearch-input' ),
		searchIcon = morphSearch.querySelector( '#searchIcon' ),
		ctrlClose = morphSearch.querySelector( 'span.morphsearch-close' ),
		isOpen = isAnimating = false,
		// show/hide search area
		toggleSearch = function(evt) {
			// return if open and the input gets focused
			if( evt.type.toLowerCase() === 'focus' && isOpen ) return false;

			var offsets = morphsearch.getBoundingClientRect();
			if( isOpen ) {
				classie.remove( morphSearch, 'open' );

				// trick to hide input text once the search overlay closes 
				// todo: hardcoded times, should be done after transition ends
				if( input.value !== '' ) {
					setTimeout(function() {
						classie.add( morphSearch, 'hideInput' );
						setTimeout(function() {
							classie.remove( morphSearch, 'hideInput' );
							input.value = '';
						}, 300 );
					}, 500);
				}
				
				input.blur();
			}
			else {
				classie.add( morphSearch, 'open' );
			}
			isOpen = !isOpen;
		};

		// events
		input.addEventListener( 'focus', toggleSearch );
		searchIcon.addEventListener( 'click', toggleSearch );
		ctrlClose.addEventListener( 'click', toggleSearch );
		// esc key closes search overlay
		// keyboard navigation events
		document.addEventListener( 'keydown', function( ev ) {
			var keyCode = ev.keyCode || ev.which;
			if( keyCode === 27 && isOpen ) {
				toggleSearch(ev);
			}
		} );
	}
})();

$(function(){
    slider = $("#slider").slideReveal({
      width: "50%",
      // push: false,
      position: "right",
      speed: 600,
      trigger: $("#trigger"),
      // autoEscape: false,
      show: function(obj){
        console.log(obj);
      },
      shown: function(obj){
        console.log(obj);
      },
      hide: function(obj){
        console.log(obj);
      },
      hidden: function(obj){
        console.log(obj);
      },
      overlay: true
    });
});

$('.fa-minus').click(function (e){
	let span = $(e.target).parent().find( "span" )
	let value = span.text()
	value = parseInt(value)
	if(value > 1) {
		value--;
		span.text(value)
	}
})

$('.fa-plus').click(function(e){
	let span = $(e.target).parent().find( "span" )
	let value = span.text()
	value = parseInt(value)
	value++;
	span.text(value)
})

$('.fa-times').click(function(e){
	let row_id = '#' + $(e.target).data('value')
	let hr_id = '#' + $(e.target).data('value') + '_hr'
	$(row_id).remove();
	$(hr_id).remove();
})

$(function() {
    $( "#slider-range" ).slider({
      	range: true,
      	min: 99,
      	max: 99999,
      	values: [99, 99999],
    	slide: function( event, ui ) {
    		$('#min').text(ui.values[ 0 ])
    		$('#max').text(ui.values[ 1 ])
		}
	});
});

$(function() {
    $( "#slider-range-dialog" ).slider({
      	range: true,
      	min: 99,
      	max: 99999,
      	values: [99, 99999],
    	slide: function( event, ui ) {
    		$('#minFilter').text(ui.values[ 0 ])
    		$('#maxFilter').text(ui.values[ 1 ])
		}
	});
});

let el = document.getElementById('myProductCarousel')
$(document).ready(function() {

	$("#myProductCarousel").carousel({
	    interval: false
	}); 
	if(el !== null)
	{
		el.addEventListener('swr',function(){
			$("#myProductCarousel").carousel('prev')
		},false);
		
		el.addEventListener('swl',function(){
			$("#myProductCarousel").carousel('next') 
		},false);
	}


	window.onload=function(){
	(function(d){
	 var
	 ce=function(e,n){var a=document.createEvent("CustomEvent");a.initCustomEvent(n,true,true,e.target);e.target.dispatchEvent(a);a=null;return false},
	 nm=true,sp={x:0,y:0},ep={x:0,y:0},
	 touch={
	  touchstart:function(e){sp={x:e.touches[0].pageX,y:e.touches[0].pageY}},
	  touchmove:function(e){nm=false;ep={x:e.touches[0].pageX,y:e.touches[0].pageY}},
	  touchend:function(e){if(nm){ce(e,'fc')}else{var x=ep.x-sp.x,xr=Math.abs(x),y=ep.y-sp.y,yr=Math.abs(y);if(Math.max(xr,yr)>20){ce(e,(xr>yr?(x<0?'swl':'swr'):(y<0?'swu':'swd')))}};nm=true},
	  touchcancel:function(e){nm=false}
	 };
	 for(var a in touch){d.addEventListener(a,touch[a],false);}
	})(document);
	//EXAMPLE OF USE
	var h=function(e){
		// console.log(e.type,e)
	};
	document.body.addEventListener('fc',h,false);// 0-50ms vs 500ms with normal click
	document.body.addEventListener('swl',h,false);
	document.body.addEventListener('swr',h,false);
	document.body.addEventListener('swu',h,false);
	document.body.addEventListener('swd',h,false);
	}
});

$('#apply-coupon-text').click(function(){
	$('#apply-coupon-text').addClass('hidden');
	$('#apply-coupon-input-box').removeClass('hidden');
})

$('body').on('click','#switchToSignUp',function(){
	$('#loginBox').addClass('hidden');
	$('#signUpBox').removeClass('hidden');
})

$('body').on('click','#switchToLogin',function(){
	$('#loginBox').removeClass('hidden');
	$('#signUpBox').addClass('hidden');
})