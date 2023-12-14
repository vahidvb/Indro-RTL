$(document).ready(function () {
    $('[data-toggle=tooltip]').tooltip();
    /* remove pre loading section */
    $('.page-preloader-cover').delay(4000).fadeOut('slow', function () {
        $(this).remove()
    });
    /* remove pre loading section */
    // start header & button-up show
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $('header').addClass('sticky');
            $('.btn-up').show();
        } else {
            $('.btn-up').hide();
            $('header').removeClass('sticky');
        }
    });
    $(".btn-up").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    })
    // end header & button-up show
    // start close navbar
    $('.header-btn').click(function () {
        $('.header-navbar').css('transform', 'translateX(0px)');
        $('.hover-menu').css('visibility', 'visible');
        $('.hover-menu').click(function () {
            $('.header-navbar').css('transform', 'translateX(-100%)');
            $('.hover-menu').css('visibility', 'hidden');
        });
    })
    $('.close').click(function () {
        $('.header-navbar').css('transform', 'translateX(-100%)');
        $('.hover-menu').css('visibility', 'hidden');
    })
    // end close navbar
    // start full-slider
    $('.full-carousel').owlCarousel({
        loop: true,
        rtl: true,
        margin: 0,
        autoWidth: false,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    // end full-slider
    // start box-slider
    $('.box-slider').owlCarousel({
        loop: true,
        rtl: true,
        margin: 0,
        autoWidth: false,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    // end box-slider
    // start img-slider
    $('.img-slider').owlCarousel({
        loop: true,
        rtl: true,
        margin: 0,
        autoWidth: false,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            577: {
                items: 4
            },
            992: {
                items: 6
            }
        }
    });
    // end img-slider
    // start clients image slider
    $('.clients-img-slider').owlCarousel({
        loop: true,
        rtl: true,
        margin: 0,
        autoWidth: false,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    // end clients image slider
    // start clients content slider
    $('.clients-content-slider').owlCarousel({
        loop: true,
        rtl: true,
        margin: 0,
        autoWidth: false,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    // end clients content slider
})