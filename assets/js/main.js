$(document).ready(function() {
    AOS.init();

    $(".products-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: false
    });

    $(".testimonials-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: false
    });

});



// Instantiate Scrolls
var scroll = new SmoothScroll('a[href*="#"]:not([data-easing])');

if (document.querySelector('[data-easing]')) {
    var linear = new SmoothScroll('[data-easing="linear"]', {
        easing: 'linear'
    });

    var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', {
        easing: 'easeInQuad'
    });
    var easeInCubic = new SmoothScroll('[data-easing="easeInCubic"]', {
        easing: 'easeInCubic'
    });
    var easeInQuart = new SmoothScroll('[data-easing="easeInQuart"]', {
        easing: 'easeInQuart'
    });
    var easeInQuint = new SmoothScroll('[data-easing="easeInQuint"]', {
        easing: 'easeInQuint'
    });

    var easeInOutQuad = new SmoothScroll('[data-easing="easeInOutQuad"]', {
        easing: 'easeInOutQuad'
    });
    var easeInOutCubic = new SmoothScroll('[data-easing="easeInOutCubic"]', {
        easing: 'easeInOutCubic'
    });
    var easeInOutQuart = new SmoothScroll('[data-easing="easeInOutQuart"]', {
        easing: 'easeInOutQuart'
    });
    var easeInOutQuint = new SmoothScroll('[data-easing="easeInOutQuint"]', {
        easing: 'easeInOutQuint'
    });

    var easeOutQuad = new SmoothScroll('[data-easing="easeOutQuad"]', {
        easing: 'easeOutQuad'
    });
    var easeOutCubic = new SmoothScroll('[data-easing="easeOutCubic"]', {
        easing: 'easeOutCubic'
    });
    var easeOutQuart = new SmoothScroll('[data-easing="easeOutQuart"]', {
        easing: 'easeOutQuart'
    });
    var easeOutQuint = new SmoothScroll('[data-easing="easeOutQuint"]', {
        easing: 'easeOutQuint'
    });
}

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll < 50) {
        $('.fixed-top').css('background', 'transparent');
        $('.fixed-top').css('transition', 'all 0.4s ease-in-out 0s');
    } else {
        $('.fixed-top').css('background', '#ccc');
        $('.nav-link').css('background', '#');
        $('.fixed-top').css('transition', 'all 0.4s ease-in-out 0s');

    }
});
$(window).scroll(function() {
    if ($(document).scrollTop() == 0) {
        $('.navbar').removeClass('tiny');
    } else {
        $('.navbar').addClass('tiny');
    }
});