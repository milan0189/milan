  "use strict";

 (function($) {
     var ScriptsBundle = ScriptsBundle || {};
     var $window = $(window);
     // var position = $(window).scrollTop();

     $(function() {
         ScriptsBundle = {
             init: function() {
                 ScriptsBundle.scrollAnimation();
                 ScriptsBundle.sliderbanner();
                 ScriptsBundle.slidersmiles();
                 ScriptsBundle.sliderteam();
                 ScriptsBundle.menutoggle();
                 ScriptsBundle.submenutoggle();
             },
             scrollAnimation: function() {
                 var height = $(window).scrollTop();
                 if (height > 200) {
                     $(".site-header").addClass("headerup animate__animated animate__fadeInDown");
                 } else {
                     $(".site-header").removeClass("headerup animate__animated animate__fadeInDown");
                 }
             },
             sliderbanner: function() {
                 if (jQuery(".banner__slider").length === 0) {
                     return false;
                 }
                 $('.banner__slider').slick({
                     slidesToShow: 1,
                     arrows: false,
                     dots: true,
                     autoplay: true,
                     speed: 1000,
                     pauseOnHover: false,
                     autoplaySpeed: 2500,
                 });
             },
             slidersmiles: function() {
                 if (jQuery(".smiles__slider").length === 0) {
                     return false;
                 }
                 $('.smiles__slider').slick({
                     slidesToShow: 1,
                     arrows: false,
                     dots: true,
                     autoplay: true,
                     speed: 1000,
                     pauseOnHover: false,
                     autoplaySpeed: 3000,
                 });
             },
             sliderteam: function() {
                 if (jQuery(".team__slider").length === 0) {
                     return false;
                 }
                 $('.team__slider').slick({
                     slidesToShow: 4,
                     arrows: true,
                     dots: false,
                     autoplay: true,
                     speed: 1000,
                     pauseOnHover: false,
                     autoplaySpeed: 2500,
                     responsive: [{
                             breakpoint: 1200,
                             settings: {
                                 arrows: false,
                                 dots: true,
                             }
                         }, {
                             breakpoint: 1025,
                             settings: {
                                 arrows: false,
                                 dots: true,
                                 slidesToShow: 3,
                             }
                         },
                         {
                             breakpoint: 767,
                             settings: {
                                 arrows: false,
                                 dots: true,
                                 slidesToShow: 2,
                             }
                         },
                         {
                             breakpoint: 480,
                             settings: {
                                 arrows: false,
                                 dots: true,
                                 slidesToShow: 1,
                             }
                         }
                     ]
                 });
             },
             menutoggle: function() {
                 $(".menu-toggle").click(function() {
                     $(this).toggleClass("on");
                     $(".navbar>ul").slideToggle();
                 });
             },
             submenutoggle: function() {
                 var sWidth = $(window).width();
                 if (sWidth <= 1024) {
                     $('.navbar ul li a').click(function() {
                         $(this).siblings('.sub-menu').slideToggle('');
                     });
                 }
             }
         };

         $(document).ready(ScriptsBundle.init);
         $window.on("scroll", ScriptsBundle.scrollAnimation);
         //$window.on("resize", ScriptsBundle.mobileMenu);
     });
     $(window).on('resize', function() {
         var sWidth = $(window).width();
         if (sWidth <= 1024) {
             location.reload();
         }
     });
     //  window.onresize = function() {}

     $(window).ready(function($) {
         $("body").addClass("ready");
         new WOW().init();
     });


 })(jQuery);
