(function ($) {
"use strict";

    // Mobile Menu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "767"
    });

    // Slider active
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: true,
            fade: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="lnr lnr-arrow-left"></i>prev</button>',
            nextArrow: '<button type="button" class="slick-next"><i class="lnr lnr-arrow-right"></i>next</button>',
            arrows: true,
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ],
            responsive: [
                { breakpoint: 1064, settings: { dots: true, arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();

    // Services Slider Active
    $('.services-active').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i> prev</button>',
        nextArrow:  '<button type="button" class="slick-next">next <i class="fas fa-long-arrow-alt-right"></i></button>',
        responsive: [
            { breakpoint: 767, settings: { dots: false, arrows: false, slidesToShow: 2 } }
        ]
      });

      // Video popup
      $('.video-popup').magnificPopup({
          type:'iframe'
    });


     // Cases Slider Active
     $('.cases-active').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
        nextArrow:  '<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
        responsive: [
            { breakpoint: 1024, settings: { dots: false, arrows: false, slidesToShow: 3, slidesToScroll: 3 } }
        ],
        responsive: [
            { breakpoint: 767, settings: { dots: false, arrows: false, slidesToShow: 2, slidesToScroll: 1 } }
        ],
      });

      // Nice select
      $('#select').niceSelect();


      // Testimonial Slider Active
     $('.testimonial-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
        nextArrow:  '<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
        responsive: [
            { breakpoint: 767, settings: { dots: false, arrows: false } }
        ]
      });


      // Brand Slider Active
     $('.brand-active').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [
            { breakpoint: 767, settings: { dots: false, arrows: false } }
        ],
        responsive: [
            { breakpoint: 1024, settings: { dots: false, arrows: false, slidesToShow: 4, slidesToScroll: 1 } }
        ]
      });
    
})(jQuery);