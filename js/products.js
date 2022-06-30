

const  slider = $(document).ready(function(){
    $('.products').slick({ 
        arrows : false 
     });
  });

  $('.products-slider__arrow--direction--prev').on("click",  e => {
    e.preventDefault();

   let currentSlidePrev = $('.products').slick('slickPrev');
  });

  $('.products-slider__arrow--direction--next').on("click",  e => {
    e.preventDefault();
   let currentSlideNext = $('.products').slick('slickNext');
  });

