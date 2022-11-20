// Burger menu
$(document).ready(function () {
  $('.header-burger').click(function (e) {
    $('.header-burger,.header-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

// Slick slider
$(document).ready(function () {
  $('.slider-slick').slick({
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});
