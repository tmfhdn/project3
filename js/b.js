 src="https://unpkg.com/swiper/swiper-bundle.min.js"
 src="http://code.jquery.com/jquery-latest.js"
 
 
        const getHoverDirection = function (event) {
            var directions = ['top', 'right', 'bottom', 'left'];
            var item = event.currentTarget;

            // Width and height of current item
            var w = item.offsetWidth;
            var h = item.offsetHeight;

            // Calculate the x/y value of the pointer entering/exiting, relative to the center of the item.
            // Scale (sort of normalize) the coordinate on smallest side to the scale of the longest.
            var x = (event.clientX - item.getBoundingClientRect().left - (w / 2)) * (w > h ? (h / w) : 1);
            var y = (event.clientY - item.getBoundingClientRect().top - (h / 2)) * (h > w ? (w / h) : 1);

            // Calculate the angle to the center the pointer entered/exited
            // and convert to clockwise format (top/right/bottom/left = 0/1/2/3).
            var d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

            return directions[d];
        };

        document.addEventListener('DOMContentLoaded', function (event) {
            // Loop over items (in a IE11 compatible way).
            var items = document.getElementsByClassName('hover');
            for (var i = 0; i < items.length; i++) {

                // Loop over the registered event types.
                ['mouseenter', 'mouseleave'].forEach(function (eventname) {
                    items[i].addEventListener(eventname, function (event) {


                        var dir = getHoverDirection(event);


                        event.currentTarget.classList.remove('mouseenter');
                        event.currentTarget.classList.remove('mouseleave');
                        event.currentTarget.classList.remove('top');
                        event.currentTarget.classList.remove('right');
                        event.currentTarget.classList.remove('bottom');
                        event.currentTarget.classList.remove('left');

                        event.currentTarget.className += ' ' + event.type + ' ' + dir;

                    }, false);
                });
            }
        });
        
// -----------텍스트 이동-------------------------
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

