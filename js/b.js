

$(function(){
  // 왼쪽에서
  $('.s1').css("transform","translateX(0px)").css("opacity","1");
  
  $(window).scroll(function(){
    var ws=$(this).scrollTop();
    // 오른쪽에서
    var s2=$('.s2').offset().top;
    if(ws>s2-700){
      $('.s2').css("transform","translateX(0px)").css("opacity","1");
    }
    // 아래에서
    var s3=$('.s3').offset().top;
    if(ws>s3-700){
      $('.s3').css("transform","translateY(0px)").css("opacity","1");
    }
    // 위에서
    var s4=$('.s4').offset().top;
    if(ws>s4-700){
      $('.s4').css("transform","translateY(0px)").css("opacity","1");
    }
    // 왼쪽위에서
    var s5=$('.s5').offset().top;
    if(ws>s5-700){
      $('.s5').css("transform","translate(0px,0px)").css("opacity","1");
    }
    // 오른쪽위에서
    var s6=$('.s6').offset().top;
    if(ws>s6-700){
      $('.s6').css("transform","translate(0px,0px)").css("opacity","1");
    }
  });
});

//--------------이미지 텍스트효과---------------------------------- 

let horizontalBar = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav:first-child a");
let verticalMenus = document.querySelectorAll("nav:nth-child(2) a");

function verticalIndicator(e) {
  verticalBar.style.left = e.offsetLeft + "px";
  verticalBar.style.width = e.offsetWidth + "px";
  verticalBar.style.top = e.offsetTop + e.offsetHeight + "px";
}

function horizontalIndicator(e) {
  horizontalBar.style.left = e.offsetLeft + "px";
  horizontalBar.style.width = e.offsetWidth + "px";
  horizontalBar.style.top = e.offsetTop + e.offsetHeight + "px";
}

horizontalMenus.forEach((menu) =>
  menu.addEventListener("click", (e) =>
    horizontalIndicator(e.currentTarget)
  )
);

verticalMenus.forEach((menu) =>
  menu.addEventListener("click", (e) => verticalIndicator(e.currentTarget))
);
//----------------메뉴따라다니는컬러---------------------- 
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

