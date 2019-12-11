// Portfoilo Item JS
(function ($) {
    "use strict";
    // Navbar
    // browser window scroll (in pixels) after which the "menu" link is shown
    var offset = 300;

    var navigationContainer = $('#st-nav'),
        mainNavigation = navigationContainer.find('#st-main-nav ul');

    //hide or show the "menu" link
    checkMenu();
    $(window).scroll(function () {
        checkMenu();
    });

    //open or close the menu clicking on the bottom "menu" link
    $('.st-nav-trigger').on('click', function () {
        $(this).toggleClass('menu-is-open');
        //we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
        mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');

    });

    function checkMenu() {
        if ($(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
            navigationContainer.addClass('is-fixed').find('.st-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                mainNavigation.addClass('has-transitions');
            });
        } else if ($(window).scrollTop() <= offset) {
            //check if the menu is open when scrolling up
            if (mainNavigation.hasClass('is-visible') && !$('html').hasClass('no-csstransitions')) {
                //close the menu with animation
                mainNavigation.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    //wait for the menu to be closed and do the rest
                    mainNavigation.removeClass('is-visible is-hidden has-transitions');
                    navigationContainer.removeClass('is-fixed');
                    $('.st-nav-trigger').removeClass('menu-is-open');
                });
                //check if the menu is open when scrolling up - fallback if transitions are not supported
            } else if (mainNavigation.hasClass('is-visible') && $('html').hasClass('no-csstransitions')) {
                mainNavigation.removeClass('is-visible has-transitions');
                navigationContainer.removeClass('is-fixed');
                $('.st-nav-trigger').removeClass('menu-is-open');
                //scrolling up with menu closed
            } else {
                navigationContainer.removeClass('is-fixed');
                mainNavigation.removeClass('has-transitions');
            }
        }
    }

    // WOW Init
    new WOW().init();
    var sentences1 = ["Difesa"];
    var sentences2 = ["Banyard"];
    var sentences3 = ["Street Light Automation"];
    var sentences4 = ["Blind's Torch"];
    var sentences5 = ["Educate"];
    var sentences6 = ["e-Vaccinate"];
    var sentences7 = ["Music"];
    var sentences8 = ["Social Site"];
    var sentences9 = ["Banyard"];
    var sentences10 = ["Banyard"];
    var sentences11 = ["Banyard"];
    var sentences12 = ["Banyard"];
    // Typed JS
    $(".skilltechtypetext").typed({
        strings: sentences1,
        contentType: 'html',
        typeSpeed: 30,
        loop: false,
        backDelay: 1200,
        showCursor: true,
        cursorChar: "|"
    });
    $(".skilltechtypetext2").typed({
        strings: sentences2,
        contentType: 'html',
        typeSpeed: 30,
        loop: false,
        backDelay: 1200,
        showCursor: true,
        cursorChar: "|"
    });
    $(".skilltechtypetext3").typed({
        strings: sentences3,
        contentType: 'html',
        typeSpeed: 30,
        loop: false,
        backDelay: 1200,
        showCursor: true,
        cursorChar: "|"
    });
    $(".skilltechtypetext4").typed({
        strings: sentences4,
        contentType: 'html',
        typeSpeed: 30,
        loop: false,
        backDelay: 1200,
        showCursor: true,
        cursorChar: "|"
    });
    $(".skilltechtypetext5").typed({
        strings: sentences5,
        contentType: 'html',
        typeSpeed: 30,
        loop: false,
        backDelay: 1200,
        showCursor: true,
        cursorChar: "|"
    });
    $(".skilltechtypetext6").typed({
        strings: sentences6,
        contentType: 'html',
        typeSpeed: 30,
        loop: false,
        backDelay: 1200,
        showCursor: true,
        cursorChar: "|"
    });
    $(".skilltechtypetext7").typed({
        strings: sentences7,
        contentType: 'html',
        typeSpeed: 30,
        loop: false,
        backDelay: 1200,
        showCursor: true,
        cursorChar: "|"
    });
    $(".skilltechtypetext8").typed({
        strings: sentences8,
        contentType: 'html',
        typeSpeed: 30,
        loop: false,
        backDelay: 1200,
        showCursor: true,
        cursorChar: "|"
    });
    $(".skilltechtypetext9").typed({
        strings: sentences9,
        contentType: 'html',
        typeSpeed: 30,
        loop: false,
        backDelay: 1200,
        showCursor: true,
        cursorChar: "|"
    });
    $(".skilltechtypetext10").typed({
        strings: sentences10,
        contentType: 'html',
        typeSpeed: 30,
        loop: false,
        backDelay: 1200,
        showCursor: true,
        cursorChar: "|"
    });
    $(".skilltechtypetext11").typed({
        strings: sentences11,
        contentType: 'html',
        typeSpeed: 30,
        loop: false,
        backDelay: 1200,
        showCursor: true,
        cursorChar: "|"
    });
    $(".skilltechtypetext12").typed({
        strings: sentences12,
        contentType: 'html',
        typeSpeed: 30,
        loop: false,
        backDelay: 1200,
        showCursor: true,
        cursorChar: "|"
    });


    // Particles JS

    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 150,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "FFFFFF"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#FFFFFF"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.3,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "FFFFFF",
                "opacity": 0.3,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 4,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 231,
                    "line_linked": {
                        "opacity": 0.6
                    }
                },
                "bubble": {
                    "distance": 231,
                    "size": 12,
                    "duration": 1.542946703372556,
                    "opacity": 0.9,
                    "speed": 3
                },
                "repulse": {
                    "distance": 231,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Scroll Down
    $('#project-info').on('click', function () {
        $('html,body').animate({scrollTop: $('#portfolio-details').offset().top}, 1000, 'swing');
    });

})(jQuery);
