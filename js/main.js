// main.js
$(function(){

  $('.bx-slider').bxSlider({
    // 여기에 옵션 설정
    mode: 'horizontal',     // 효과설정
    auto: false,             // 자동재생
    easing: "ease-in-out",  // 가속도(timing-function)
    pause: 4000,            // 정지시간(대기)
    controls: false,        // prev, next 표시/비표시
    pager: true,           // 하단 인디케이터 표시/비표시
    responsive: false,
  });

});