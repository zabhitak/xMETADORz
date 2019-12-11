
$(window).load( function() {	

    if ($('#dl-menu').length) { 
        $(function() {
            $( '#dl-menu').dlmenu();
        });
     }

    //PAGE HEIGHT
    function resizedw(){
        var bheight = $('html').height();
        $('.page-bg').css({
            'height' : bheight + 'px'
        });
    }
    var doit;
    window.onresize = function(){
      clearTimeout(doit);
      doit = setTimeout(resizedw, 100);
    };
    resizedw();

    /* SOUND EFFECTS */
    var audioObj = document.createElement("audio");
    audioObj.volume = .6;
    audioObj.autoPlay = false;
    audioObj.preLoad = true;
    audioObj.controls = true;

    function playSound(audioName) {
        audioObj.src = $('body').data('sound') + audioName;
        var playPromise = audioObj.play();
        if (playPromise !== undefined) {
            playPromise.then(function (_) {}).catch(function (error) {});
        }
    }

    if($(window).width() >= 768){ 
        var soundHoverElements = 'a, button, input[type="submit"], .work-item';
        $(soundHoverElements).on('mouseenter', function() {
                playSound('hover.mp3');
        });
        $('.hamburger-box, a, .send-message').on('click', function() {
                    playSound('click.mp3');      
        });
        $('#fp-nav.right ul li a, .work-item .owl-nav button i').on('click', function() {
                    playSound('click.mp3');   
        });
    }
    
  
}); // window load end 

$(document).ready( function() {


// PRELOADER
$('#preloader').delay(500).fadeOut('slow');


//FULL PAGE JS
var delayX = 200;
var timeoutId;
var animationIsFinished = false;
 
if ($('#showcase').length) {   
    $('#showcase').fullpage({
        fadingEffect: true,
        navigation: true,
        navigationPosition: 'right',
        loopTop: true,
        loopBottom: true,
       onLeave: function(index, nextIndex, direction){
            $(this).addClass("slide-anime");
            var curTime = new Date().getTime();

            clearTimeout(timeoutId);

            timeoutId = setTimeout(function(){
                animationIsFinished = true;
                $.fn.fullpage.moveTo(nextIndex);
            }, delayX);

            return animationIsFinished;
        },

        afterLoad: function(anchorLink, index){
            $(this).removeClass("slide-anime");
            animationIsFinished = false;
            // showcase number
            var tot = $(this).index();
                $('#showcase-number').css({'top' : (tot * 38 + 4) * -1 + 'px'});
            }  
    });
}

    //MAGNIFIC LIGHTBOX JS
    if ($('.lightbox').length) {  
    $('.lightbox').magnificPopup({
        type:'image',
        gallery:{enabled:true},
        zoom:{enabled: true, duration: 300}
    });    

    }

        
    //HAMBURGER MENU ACTION
    $('.dl-trigger').on("click", function(){
        if($(window).width() <= 768){ 
            $('.page-content, .fullpage-wrapper, #fp-nav').toggleClass('blur'); 
        }
            $('.sidebar').toggleClass('blur'); 
            $('#fp-nav').toggleClass('yok'); 
    });

     $(document).mouseup(function (e) {
         var popup = $(".dl-menuwrapper");
         if (!$('.dl-trigger').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
        $('.page-content, .fullpage-wrapper, #fp-nav').removeClass('blur'); 
         }
     });


    //FIXED PROJECT NAVIGATION
    $(window).scroll(function() {               
    var scroll = $(window).scrollTop();
    var page = $(window).height() / 2;           

    if (scroll > page ) {                                             
        $(".project-nav").addClass('active');
        } else {
        $(".project-nav").removeClass('active');
        }
     }); 


    // PAGE TRANSITION EFFECT
    $(document).ready(function() {
      $(".animsition-overlay").animsition({
        inClass: 'overlay-slide-in-top',
        outClass: 'overlay-slide-out-top',
        inDuration: 1500,
        outDuration: 800,
        linkElement: 'a:not([target="_blank"]):not([href^="#"]):not(#fp-nav ul li a):not(.lightbox):not(.send-message)',
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : true,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
      });
    });


     //OWL CAROUSEL GENERAL JS
    var owlcar = $('.owl-carousel');
    if (owlcar.length) {
        owlcar.each(function () {
            var $owl = $(this);
            var itemsData = $owl.data('items');
            var autoplayData = $owl.data('autoplay');
            var autoPlayTimeoutData = $owl.data('autoplaytimeout');
            var dotsData = $owl.data('dots');
            var navData = $owl.data('nav');
            var marginData = $owl.data('margin');
            var stagePaddingData = $owl.data('stagepadding');
            var itemsDesktopData = $owl.data('items-desktop');
            var itemsTabletData = $owl.data('items-tablet');
            var itemsTabletSmallData = $owl.data('items-tablet-small');
            $owl.owlCarousel({
                  items: itemsData
                , dots: dotsData
                , nav: navData
                , margin: marginData
                , loop: true
                , stagePadding: stagePaddingData
                , autoplay: autoplayData
                , autoplayTimeout: autoPlayTimeoutData
                , navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"]
                , responsive:{
                        0:{
                            items:itemsTabletSmallData,
                            stagePadding:0
                        },
                        600:{
                            items:itemsTabletData,
                            stagePadding:0
                        },
                        1000:{
                            items:itemsDesktopData
                        }
                    }
            , });
        });
    }


$('#content').load('load-more.html');


}); // document read end 
