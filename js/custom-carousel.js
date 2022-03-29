
  jQuery(document).ready(function($){
    $('.autoplay').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows:true,
      dots:true
    });
  });
    $('.testi-carousel').owlCarousel({
   loop:true,
   margin:10,
   autoplay: false,
   autoplayHoverPause: true,
   smartSpeed: 1000,
   nav:false,
   dots:true,
   autoHeight: true,
   responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
  }
})
   $('.trip-slider').owlCarousel({
   loop:true,
   margin:0,
   autoplay: false,
   autoplayHoverPause: true,
   smartSpeed: 1000,
   nav:false,
   dots:true,
   autoHeight: false,
   responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
  }
})
      $('.destination-carousel').owlCarousel({
   loop:true,
   margin:10,
   autoplay: false,
   autoplayHoverPause: true,
   smartSpeed: 1000,
   nav:true,
   dots:false,
   autoHeight: false,
   responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:2
    }
  }
})
        $('.selling-slider').owlCarousel({
   loop:true,
   margin:10,
   autoplay: false,
   autoplayHoverPause: true,
   smartSpeed: 1000,
   nav:true,
   dots:false,
   autoHeight: true,
   responsive:{
    0:{
      items:1
    },
    600:{
      items:2
    },
    1000:{
      items:4
    }
  }

})