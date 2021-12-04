$(document).ready(function () {
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  responsive: {
    0: {
        items: 1
        // nav: true
    },
    480: {
        items: 2,
        nav: false
    },
    768: {
        items: 3,
        // nav: true,
        loop: false
    },
    992: {
        items: 4,
        // nav: true,
        loop: false
    }
},


    dot:false,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false
});
$(".owl-carousel-1").owlCarousel({
    items:3, 
    // items change number for slider display on desktop
    responsive: {
      0: {
          items: 1
          // nav: true
      },
      480: {
          items: 2,
          nav: false
      },
      768: {
          items: 3,
          // nav: true,
          loop: false
      },
      992: {
          items: 3,
          // nav: true,
          loop: false
      }
  },
      dot:false,
      loop:true,
      margin:5,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:false
 });
});
//texto
