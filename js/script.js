var slider,
  oBxSettings = { 
    slideWidth: 260,
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 30,
    controls: true,
    pager: false,
    auto: true,
    clones: false,
    pause: 80000,
    randomStart: false 
  };

function init() {
  // Set maxSlides depending on window width
  var containerSlidesWidth = $('.slider-products').width();
  var numberSlides = Math.floor(containerSlidesWidth / 300);
  console.log(numberSlides);
  oBxSettings.maxSlides = numberSlides;
}

function scrollDisplay (currentPosition) {
  var sectionPosition = $('section.living').offset().top;
  var validator = sectionPosition < currentPosition ? $('.scroll-to-top').fadeIn() : $('.scroll-to-top').fadeOut();
}

$(document).ready(function() {
  $('.slider-brands').bxSlider({ 
    auto:true, 
    autoControls:false,
    speed:1000,
    autoHover:true,
    pause:4500,
    minSlides:2,
    maxSlides:5,
    slideWidth:250,
    controls:false});

  scrollDisplay();
  $('.slider').bxSlider({
    auto: true
  });

  init();
  // Initial bxSlider setup
  slider = $('.slider-products').bxSlider(oBxSettings);

  $('.scroll-to-top').click( (e) => {
     e.preventDefault();
     $('html, body').animate({ scrollTop: 0}, 'slow');
    });
  $(window).scroll( () => {
    scrollPosition = $(this).scrollTop();
    scrollDisplay(scrollPosition);
  })
});

$(window).resize(function() {
  // Update bxSlider when window crosses 430px breakpoint
  if ((window.outerWidth<430 && window.prevWidth>=430)
    || (window.outerWidth>=430 && window.prevWidth<430)) {
    init();
    slider.reloadSlider(oBxSettings);
  }
  window.prevWidth = window.outerWidth;
});