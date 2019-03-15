$('.template-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: false,
  nav: true,
  items: 1,
  center:true,
  autoHeight: true,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  navText: [
    "<i class='mdi mdi-arrow-left'></i>", 
    "<i class='mdi mdi-arrow-right'></i>"
  ],
  autoplaySpeed: 1000,
});

$(document).ready(() => {
  const windowWidth = document.body.clientWidth;
  const pageUrl = window.location.href;

  
  // GO TOP
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.menu').addClass('down animated slideInDown');
    } else {
      $('.menu').removeClass('down animated slideInDown');

    }
  });

  $(".menu a").each( function () {
    if (url == (this.href)) {
      $(this).closest("a").addClass("active");
    }
  });
  
  $('.toggleMenu').click(() => {
    $('.nav').addClass('out');
    $('.overlay-menu').addClass('overlay-in');
  });

  $('.overlay-menu, .nav-close').click(function() {
    $('.overlay-menu').removeClass('overlay-in');
    $('.nav').removeClass('out');
    $('.left').removeClass('active');
  });

  $('.category-btn').click(() => {
    $('.left').addClass('active');
  })

  $('.category-close').click(() => {
    $('.left').removeClass('active');
  });
});
