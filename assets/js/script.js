$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $("header").addClass("header-active");
      } else {
        $("header").removeClass("header-active");
      }
    });
  });

$(document).ready(function () {
    $('.home-slider').slick({
        dots: false,
        infinite: true,
        speed: 400,
        autoplay: false,
        arrows: false
    });
  });
