$(function(){
    $('.main_slide').slick({
        arrows: false,
        dots: true,
        // autoplay: true,
    });

    $('.sub_slide01').slick({
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 2
    });
    

    $('.sub_slide02').slick({
        arrows: false,
        dots: true,
    });

    // $('.sub_slide02').slick({
    //     arrows: false,
    //     dots: true,
    //     infinite: false,
    //     speed: 300,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 7,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //       // You can unslick at a given breakpoint now by adding:
    //       // settings: "unslick"
    //       // instead of a settings object
    //     ]
    //   });
                      

});