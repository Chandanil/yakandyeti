/* ============== WOW jquery starts ============== --*/
   new WOW().init();
/* ============== WOW jquery ends ============== --*/

/* ============== Sticky Header jquery starts ============== --*/
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop(); 
        if (scroll >= 80) {
            $(".header").addClass("stickey animated fadeInDown");
        }
        if (scroll <= 80) {
            $(".header").removeClass("stickey");
        }
    });
/* ============== Sticky Header jquery ends ============== --*/

/* ============== Scroll header jquery starts ============== --*/

   ( function ( document, window, index )
    {
        'use strict';

        var elSelector  = '.header',
            element     = document.querySelector( elSelector );

        if( !element ) return true;

        var elHeight        = 0,
            elTop           = 0,
            dHeight         = 0,
            wHeight         = 0,
            wScrollCurrent  = 0,
            wScrollBefore   = 0,
            wScrollDiff     = 0;

        window.addEventListener( 'scroll', function()
        {
            elHeight        = element.offsetHeight;
            dHeight         = document.body.offsetHeight;
            wHeight         = window.innerHeight;
            wScrollCurrent  = window.pageYOffset;
            wScrollDiff     = wScrollBefore - wScrollCurrent;
            elTop           = parseInt( window.getComputedStyle( element ).getPropertyValue( 'top' ) ) + wScrollDiff;

            if( wScrollCurrent <= 0 ) // scrolled to the very top; element sticks to the top
                element.style.top = '0px';

            else if( wScrollDiff > 0 ) // scrolled up; element slides in
                element.style.top = ( elTop > 0 ? 0 : elTop ) + 'px';

            else if( wScrollDiff < 0 ) // scrolled down
            {
                if( wScrollCurrent + wHeight >= dHeight - elHeight )  // scrolled to the very bottom; element slides in
                    element.style.top = ( ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 0 ) + 'px';

                else // scrolled down; element slides out
                    element.style.top = ( Math.abs( elTop ) > elHeight ? -elHeight : elTop ) + 'px';
            }

            wScrollBefore = wScrollCurrent;
        });

    }( document, window, 0 ));
/* ============== Scroll header jquery ends ============== --*/

$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


$('.cat').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        swipe: false,
        infinite: true,
        default: true,
        arrow: true,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });