 "use strict";

 (function($) {
     var ScriptsBundle = ScriptsBundle || {};
     var $window = $(window);
     // var position = $(window).scrollTop();

     $(function() {
         ScriptsBundle = {
             init: function() {
                 ScriptsBundle.scrollAnimation();
                 ScriptsBundle.sliderTestimonials();
                 ScriptsBundle.sliderPrice();
             },
             scrollAnimation: function() {
                 var height = $(window).scrollTop();
                 if (height > 1000) {
                     $(".site-header").addClass("headerup animate__animated animate__fadeInDown");
                 } else {
                     $(".site-header").removeClass("headerup animate__animated animate__fadeInDown");
                 }
                 if ($window.scrollTop() >= 200) {
                     $(".scroll__top").fadeIn("slow");
                 } else {
                     $(".scroll__top").fadeOut("slow");
                 }
             },
             sliderTestimonials: function() {
                 if (jQuery(".testimonials__slider").length === 0) {
                     return false;
                 }
                 $('.testimonials__slider').slick({
                     slidesToShow: 3,
                     arrows: true,
                     dots: true,
                     autoplay: true,
                     pauseOnHover: false,
                     autoplaySpeed: 1500,
                     responsive: [{
                         breakpoint: 767,
                         settings: {
                             arrows: false,
                         }
                     }]
                 });
             },
             sliderPrice: function() {
                 if (jQuery(".price-range").length === 0) {
                     return false;
                 }
                 $(".price-range").slider({
                     step: 500,
                     range: true,
                     min: 0,
                     max: 350000,
                     values: [0, 350000],
                     slide: function(event, ui) { $(".priceRange").val(ui.values[0] + " - " + ui.values[1]); }
                 });
                 $(".priceRange").val($(".price-range").slider("values", 0) + " - " + $(".price-range").slider("values", 1));
             },

         };

         $(document).ready(ScriptsBundle.init);
         $window.on("scroll", ScriptsBundle.scrollAnimation);
         //$window.on("resize", ScriptsBundle.mobileMenu);
     });

     $(window).ready(function($) {
         $("body").addClass("ready");
         new WOW().init();
     });

     $window.on("load", function() {

     });

     function setCookie(cname, cvalue, exdays) {
         var d = new Date();
         d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
         var expires = "expires=" + d.toGMTString();
         document.cookie = cname + "=" + cvalue + "; " + expires;
     }

     function getCookie(cname) {
         var name = cname + "=";
         var ca = document.cookie.split(';');
         for (var i = 0; i < ca.length; i++) {
             var c = ca[i];
             while (c.charAt(0) == ' ') c = c.substring(1);
             if (c.indexOf(name) == 0) {
                 return c.substring(name.length, c.length);
             }
         }
         return "";
     }
 })(jQuery);