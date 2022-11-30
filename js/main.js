// Burger menu
$(document).ready(function () {
  $('.header-burger').click(function (e) {
    $('.header-burger,.header-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

$(document).ready(function () {
  $('.header__link').click(function (e) {
    $('.header-burger,.header-menu').removeClass('active');
    $('body').removeClass('lock');
  });
});

// Slick slider
// slider section
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

// Price mobile section

// Add class
$(window).ready(function () {
  if ($(window).width() < 768) {
    return $('.price__list').addClass('price-mobile');
  } else {
    return $('.price__list').removeClass('price-mobile');
  }
});

// price section slider
$(document).ready(function () {
  $('.price-mobile').slick({
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 1,
  });
});
