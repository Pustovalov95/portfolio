$(document).ready(function(){
    $('.carousel').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: true,
      speed: 900,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="../img/examples/arrow_l.png" alt="prev"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../img/examples/arrow_r.png" alt="next"></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            arrows: false,
            slidesToShow: 1,
            speed: 400,
            autoplay: true,
            autoplaySpeed: 2000
          }
        }
      ]
    });
  });