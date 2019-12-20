// main.js

// 상품리스트 추가(매개변수 카테고리명: all, man, woman)
function show_product(category_name) {
  var item_list = $('.item_list'); // 상품 목록 위치
  var list = '';  // 삽입될 html data
  var list_num = 10;   // 상품목록 개수
  var kwd = '원';
  var origin_price = '';
  var buff = [];

  // 카테고리 소트 후 버퍼 배열에 저장
  for(var i = 0; i < product_data.length; i++) {
    if(category_name !== 'all' && product_data[i].category !== category_name){
      continue;
    }
    buff.push(product_data[i]);
  }
  // console.log('buff 길이 ', buff.length);

  if(list_num > buff.length) list_num = buff.length;

  for(var i = 0; i < list_num; i++) {
    list += '<li>';
    list += '<a href="#">';
    list += '<img src="' + buff[i].img_url + '">';
    list += '<span class="title">' + buff[i].title + '</span>';
    list += '<span class="name">' + buff[i].name + '</span>'

    if(buff[i].origin_price == "") {
      kwd = "&nbsp;";
      origin_price = "";
    } else { origin_price = buff[i].origin_price;}

    list += '<del class="origin_price">' + origin_price + kwd + '</del>';
    list += '<ins class="sale_price"><strong>' + buff[i].sale_price + '원</strong></ins>';
  }

  item_list.empty();
  item_list.append(list); // 상품목록 추가
  buff = [];  // 버퍼 초기화
}


$(function(){

  // 상품목록 추가(매개변수 카테고리명: all, man, woman)
  show_product('all');

  // 카테고리 토글 버튼
  $('#category_btn').click(function(){
    $('#category').slideToggle();
  });

  // 다른데 누르면 자동으로 닫히기
  $('header, section').click(function(){
    $('#category').slideUp();
  })  

  // TOP SELLER 상품 카테고리 변경(ALL | WOMAN | MAN)
  $('.category_menu > a').click(function(){
    console.log($(this).index());
    var idx = $(this).index();
    // var btn = 
    // show_product
    return false;
  });


  // BX슬라이더
  $('.bx-slider').bxSlider({
    // 여기에 옵션 설정
    mode: 'horizontal',     // 효과설정
    auto: true,             // 자동재생
    easing: "ease-in-out",  // 가속도(timing-function)
    pause: 4000,            // 정지시간(대기)
    controls: false,        // prev, next 표시/비표시
    pager: true,           // 하단 인디케이터 표시/비표시
    responsive: false,
  });

  $('.brand-slider').bxSlider({
    // 여기에 옵션 설정
    pager: false,           // 하단 인디케이터 표시/비표시
    responsive: false,
    slideWidth: 1200,
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 1,
  });  


}); // end$