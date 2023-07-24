// counter funtion start
$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({end: 2500,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 300,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 120,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 30,duration: 2500});
// counter funtion end

//owl-carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayHoverPause:true,
        autoplayTimeout:2000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            }
        }
    })
});
//owl-carousel