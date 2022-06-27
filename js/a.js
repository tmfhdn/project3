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
// ------------------상메인 슬라이더---------------------