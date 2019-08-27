$(function () {
   /*------------------------------------------- preloader settings ----------------------------------------*/
    $(window).ready(function () {
    // will first fade out the loading animation
    $(".cube").delay(6000).fadeOut(3000);
    // will fade out the whole DIV that covers the website.
    $(".loading").delay(6000).fadeOut(3000);
        });
    /*------------------------------------------- preloader settings ----------------------------------------*/
    /*------------------------------------------- header height settings ----------------------------------------*/
    $('.header').height($(window).height());
    $('.slider-text').each(function () {
       $(this).css('padding-top', ($('.header').height() - $('.slider-text').height()) / 1.8);
    });
     /*------------------------------------------- header height settings ----------------------------------------*/
     /*------------------------------------------- main slider settings ----------------------------------------*/
     $('.main-slider').owlCarousel({
            loop:true,
            nav:true,
            animateOut: 'fadeOut',
            autoplay: true,
            autoplayTimeout:4000,
            responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
     });
     /*------------------------------------------- main slider settings ----------------------------------------*/
     /*------------------------------------------- navbar settings ----------------------------------------*/
    $('.navbar-nav li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $(window).scroll(function() {
       if($(this).scrollTop() > 60)
                {
                    $('.navbar-default').addClass('fixed-top');
                }
        else    {
                    $('.navbar-default').removeClass('fixed-top');
                }
        });
    $('.navbar-nav li a').click(function () {
       $('html, body').animate({
           scrollTop: $('#' + $(this).data('scroll')).offset().top
       }, 1500);
    });
      if ($('.navbar-default').index) {
		$(window).scroll(function(){
            var scrollPos = $(window).scrollTop();
			$('.navbar-nav li a').each(function () {
				var currLink = $(this);
				var refElement = $('#' + currLink.data('scroll'));
				if (refElement.offset().top - 50 <= scrollPos) {
					$('.navbar-nav li').removeClass("active");
					currLink.closest('.navbar-nav li').addClass("active");
				}
			});
		});
	}
    $('.navbar-default .navbar-toggle').click(function () {
       $('.navbar-collapse').slideToggle(500); 
    });
    $('.navbar-nav li').click(function () {
       $('.navbar-collapse').slideToggle(500); 
    });
    /*------------------------------------------- navbar settings ----------------------------------------*/
    /*$(window).resize(function(){
	if ($(window).width() === 500){	
		$('.slider-text').each(function () {
       $(this).css('padding-top', ($('.header').height() - $('.slider-text').height()) - 30);
    });
	}	
    });*/
    /*------------------------------------------- counter settings ----------------------------------------*/
        $('.count-up').counterUp({
            delay: 10,
            time: 1000
        });
    /*------------------------------------------- counter settings ----------------------------------------*/
    /*------------------------------------------- team slider settings ----------------------------------------*/
    $('.team-wrk .team-slider').owlCarousel({    
        responsiveClass:true,
        responsive:{
            0: {
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        },
        smartSpeed: 1000,
        animateIn: 'linear',
        animateOut: 'linear'
    });
    /*------------------------------------------- team slider settings ----------------------------------------*/
    /*------------------------------------------- process slider settings ----------------------------------------*/
  $('.flexslider').flexslider({
    animation: "none",
    prevText: "<i class='fas fa-long-arrow-alt-left'></i>",
    nextText: "<i class='fas fa-long-arrow-alt-right'></i>"    
  });
    /*------------------------------------------- process slider settings ----------------------------------------*/
    /*------------------------------------------- work mixitup settings ----------------------------------------*/
    var mixer = mixitup('.work-mixer', {
    animation: {
    duration: 600
        }
    });
     $('.list ul li').click(function () {
       $(this).addClass('active').siblings().removeClass('active');
    });
    /*------------------------------------------- work mixitup settings ----------------------------------------*/
    /*------------------------------------------- work-follow slider settings ----------------------------------------*/
    $('.work-slider').carousel({
        interval: 2000
    });
    /*------------------------------------------- work-follow slider settings ----------------------------------------*/
    /*------------------------------------------- client slider settings ----------------------------------------*/
   $('.client-slider').owlCarousel({
    loop:true,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        400:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
   });
    /*------------------------------------------- client slider settings ----------------------------------------*/
    /*------------------------------------------- up button settings ----------------------------------------*/
    $(window).scroll(function() {
       if ($(this).scrollTop() > 60) {
               $('.up').css('opacity', '1');
           } else {
            $('.up').css('opacity', '0');
        }
    });
    $('.up').click(function () {
       $('html , body').animate({
          scrollTop : 0
       },1500); 
    });
    /*------------------------------------------- up button settings ----------------------------------------*/
});