var currentScrollTop = 0;
$(document).ready(function () {
  scrollController();
  $(window).scroll(function () {
    scrollController();
  });
});
function scrollController() {
  currentScrollTop = $(window).scrollTop();
  if (currentScrollTop > 100) {
    $("#nav").addClass("fixed");
    $("#nav a").addClass("txtCh");
  } else {
    $("#nav").removeClass("fixed");
    $("#nav a").removeClass("txtCh");
  }
}
// -----------------------------상메인------------------------
var item6 = new item6(".myitem6", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
// ------------------메인슬라이드-----------------------------
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });