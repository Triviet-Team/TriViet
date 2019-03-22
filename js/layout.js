
$(document).ready(() => {
  const windowWidth = document.body.clientWidth;
  const pageUrl = window.location.href;

  
  // GO TOP
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.menu, .logo, .order').addClass('down');
    } else {
      $('.menu, .logo, .order').removeClass('down');

    }
  });

  $(".menu a").each( function () {
    if (pageUrl == (this.href)) {
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

  $('.category h4').click(() => {
    $('.category ul').toggleClass('active');
  });

  $('.footer h4').click(function() {
    $(this).parent().find('ul').toggleClass('active')
  });
});
