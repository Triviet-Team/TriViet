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

wow = new WOW(
  {
  mobile: true,
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
    touchScroll:true,
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

      
      

      $(".pagination a").on("click",function() {
        $.scrollify.move($(this).attr("href"));
      });

      $(".pagination a").on("click",$.scrollify.move);
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


});
