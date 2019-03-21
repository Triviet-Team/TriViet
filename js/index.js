$('.template-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  autoplaySpeed: 1000,
  dots: true,
  nav: false,
  items: 2,
  center: true,
  margin: 100,
  navText: [
    "<i class='mdi mdi-arrow-left'></i>", 
    "<i class='mdi mdi-arrow-right'></i>"
  ],
  responsive : {
    0 : {
      items: 1
    },
    768 : {
      items: 2, 
    },
    992 : {
      items: 2, 
    },
    1450 : {
      items: 2,
    }
  }
});

wow = new WOW(
  {
  mobile: false,
  }
)
wow.init();

$(document).ready(() => {
  const windowWidth = document.body.clientWidth;
  const pageUrl = window.location.href;

  $.scrollify({
    section : ".one-page",
    sectionName : "section-name",
    easing: "easeOutExpo",
    scrollSpeed: 1000,
    scrollbars: true,
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:false,
    before:function(i,panels) {
      var ref = panels[i].attr("data-section-name");

      $(".pagination .active").removeClass("active");

      $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
      var pagination = "<ul class=\"pagination\">";
      var activeClass = "";
      $(".one-page").each(function(i) {
        activeClass = "";
        if(i===0) {
          activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });

      pagination += "</ul>"; 

      $(".pagination a, .order a").on("click",function() {
        $.scrollify.move($(this).attr("href"));
      });

      $(".pagination a").on("click",$.scrollify.move);
    }
  });
  
  if (windowWidth > 1200) {
    $('.box-template').hover(function() {
      $.scrollify.disable();
    });
  
    $('.box-template').mouseleave(function() {
      $.scrollify.enable();
    });
  }
  
  if (windowWidth < 1200) {
    $.scrollify({
      setHeights: false,
      overflowScroll: false,
    });

    $('.one-page').css('height', 'auto');
  }


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
  });

  $(window).scroll( function () {
    if ($(this).scrollTop() * 1.2 > ($('.design').position().top)) {

      $('.progress-bar').css("width",
        function() {
          return $(this).attr("aria-valuenow") + "%";
        }
      )
    }
  });

  $('.hosting-btn').click(() => {
    $('.hosting .right').addClass('active');
    $('.hosting .left').removeClass('active');
    $('.logo-white').removeClass('d-none');
    $('.logo-black').addClass('d-none');
  });

  $('.domain-btn').click(() => {
    $('.hosting .left').addClass('active');
    $('.hosting .right').removeClass('active');
    $('.logo-black').removeClass('d-none');
    $('.logo-white').addClass('d-none');
  });



  $(window).scroll( function () {
    if ($(this).scrollTop() == $('.hosting').position().top) {
      $('.logo-black').removeClass('d-none');
      $('.logo-white').addClass('d-none');
      $('.hosting .left').addClass('active');
      $('.hosting .right').removeClass('active');
      $('.menu .nav li a').addClass('gray');
    } else {
      $('.logo-white').removeClass('d-none');
      $('.logo-black').addClass('d-none');
      $('.menu .nav li a').removeClass('gray');
      
    }
  });
});

