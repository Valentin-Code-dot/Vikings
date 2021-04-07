$(function(){

    $('.menu__btn').on('click',function(){
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 1,
            showinfo: 0,
        }
    });

    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor: '.heroes__slider-text',
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-left.png" alt="prev"></img></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-right.png" alt="next"></img></button>',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                arrows: false,
              }
            }
          ]
    });

    $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-img',
        fade: true,
        arrows: false,
    });

});

