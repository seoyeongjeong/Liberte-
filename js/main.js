$(function(){
    //슬라이드
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        arrows:false,
        slidesToShow : 1,
        dots : true,
        autoplay : true,			// 자동 스크롤 사용 여부
autoplaySpeed : 10000, 	
      });
      //인트로 슬라이드
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav,.slider-for2'
      });
      $('.slider-for2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav,.slider-for'
      });
      $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for, .slider-for2',
        dots: false,
        focusOnSelect: true
      });
          
      // 객실 버튼 슬라이드 다운
      var sta = 0
      $('.room-p').click(function(){
        if (sta == 0)
         {
        $('.room-list').slideDown();
        $(this).text('객실 선택');
      
        sta = 1; 
      } else 
       {
        $('.room-list').slideUp();
        $(this).text('객실 선택');
        sta = 0; 
      }
      })
      //체크인 달력
      $.datepicker.setDefaults({
        closeText: "닫기",
        prevText: "이전달",
        nextText: "다음달",
        currentText: "오늘",
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월",
          "7월", "8월", "9월", "10월", "11월", "12월"
        ],
        monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월",
          "7월", "8월", "9월", "10월", "11월", "12월"
        ],
        dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
        dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
        dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
        weekHeader: "주",
        dateFormat: "yy.m.d", // 날짜형태 예)yy년 m월 d일
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: "년"
      })
  
      $(".datepicker").datepicker({
        minDate: 0
      })
      $(".datepicker2").datepicker({
        minDate: 0
      })
     //From의 초기값을 오늘 날짜로 설정
     $('.datepicker').datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
     //To의 초기값을 내일로 설정
     $('.datepicker2').datepicker('setDate', '+1D'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후) 
    
//인트로 탭

//$('.tabSet').each(function(){       
  var anchor = $(this).find('.tabs a');
  var anchor_on = $(this).find('.tabs a.on');
var phref_on =  anchor_on.attr('phref');
var this_panel = $(this).find('.panel')

  $(phref_on).show();
  anchor.each(function(){
       var phref = $(this).attr('phref');
   
        $(this).click(function(){
    this_panel.hide();
          anchor.removeClass('on'); //$('.tabs a')
          $(phref).show();
          $(this).addClass('on');

      }) //click
   }) //anchor
// })  //tabSet

//아코디언
$(".section01 .cont").mouseover(function(){					
  $(".section01 .cont").removeClass("on");
  $(this).addClass("on");  
});

jQuery('.section01  a').click(function () {
  return false;


});
//패키지 슬라이드
$('.center').slick({
  centerMode: true,
  slidesToShow: 3,
  dots : true,
  responsive: [    //반응형               
  {  breakpoint: 1100,    //몇 픽셀부터 바꿀건지
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1
         }
    }, {  breakpoint: 760,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           centerMode: false,//반응형일땐 센터 안 함
        
         }
    }
] 
});//a작동 안하게
jQuery('.center  a').click(function () {
  return false;
});
//지도
new daum.roughmap.Lander({
  "timestamp" : "1652148323071",
  "key" : "2a6em",
  "mapWidth" : "1440",
  "mapHeight" : "543"
}).render();

//언어변경 슬라이드 다운
var sta = 0
$('.lan button').click(function(){
  if (sta == 0)
   {
  $('.language').slideDown();
  $(this).text('KO');

  sta = 1; 
} else 
 {
  $('.language').slideUp();
  $(this).text('KO');
  sta = 0; 
}
})



//팝업
var open_on = 0;
$('.open').click(function(){
  if (open_on == 0) {
   //$('.content2').animate({right:0});
   $('.content2').addClass("opencontent")
   $(this).css({'background-color':'#4FAAD1',color:'#fff'});
   $(this).text('〉');
   open_on = 1;
  } else {
  // $('.content2').animate({right:'-1020px'});
  $('.content2').removeClass("opencontent")
   $(this).css({'background-color':'#4FAAD1',color:'#000'});
   $(this).text('〈');
   open_on = 0;
  }
}) 
//예약 팝업
$('.close1').click(function(){
  $('#content2').animate({right:'-200px'});
  $('.close1').hide();
  $('.open1').show();  
})    

$('#header .button a').each(function(){
   $('.pop').hide();
   $(this).click(function(){
     var ahref = $(this).attr('href');
     $('.pop').hide();
     $(ahref).fadeIn();
     $('#header .button a').css({background:'none'});
     $(this).css({'background-color':'orange'});

     $('.close').click(function(){
       $(ahref).fadeOut(500);
         })


    
   })
   
})
;//a작동 안하게
jQuery('.button  a').click(function () {
  return false;
});
//nav팝업

$(window).scroll(function(){
  //만약 scrollTop의 위치가 300보다 크면 
  if ($(document).scrollTop() >= 300) {
    $('header').css({background:'#fff'})
  }else {
    $('header').css({background:'rgba(0,0,0,0)'})
  }
})

$(".depth1 > li").each(function(){
  var sub = $(this).find('.nav-box');

    $(this).hover(function(){
      sub.stop().slideDown();},function(){
      sub.stop().slideUp(); })
 }) 
//모바일 서비스
 if ($(window).width() < 750) {
  $('.depth1').hide();
  $('#section4 .service img').attr('src','images/service-banner1-m.jpg');//서비스배너
  $('#section1 .slider1 img').attr('src','images/slide1-m.jpg');//슬라이드1m
  $('#section1 .slider2 img').attr('src','images/slide2-m.jpg');//슬라이드2m
 
}else {
  $('.depth1').show();
  $('#section4 .service img').attr('src','images/service-banner1-pc.jpg');//서비스배너
  $('#section1 .slider1 img').attr('src','images/slide1-pc.jpg');//슬라이드1pc
  $('#section1 .slider2 img').attr('src','images/slide2-pc.jpg');//슬라이드2pc


} 
$(window).resize(function(){
if ($(window).width() < 750) {
  $('.depth1').hide();
  $('#section4 .service img').attr('src','images/service-banner1-m.jpg');//서비스배너
  $('#section1 .slider1 img').attr('src','images/slide1-m.jpg');//슬라이드1m
  $('#section1 .slider2 img').attr('src','images/slide2-m.jpg');//슬라이드2m

}else {
 $('.depth1').show();
  $('#section4 .service img').attr('src','images/service-banner1-pc.jpg');//서비스배너
  $('#section1 .slider1 img').attr('src','images/slide1-pc.jpg');//슬라이드1pc
  $('#section1 .slider2 img').attr('src','images/slide2-pc.jpg');//슬라이드2pc

}
})//모바일 서비스 닫기

//모바일 네비

$('ul li:has(ul)').addClass('has-submenu');
$('ul li ul').addClass('sub-menu');
$('ul.dropdown li').hover(function () {
    $(this).addClass('hover');
}, function () {
    $(this).removeClass('hover');
});
var $menu = $('#menu'), $menulink = $('#spinner-form'), $search = $('#search'), $search_box = $('.search_box'), $menuTrigger = $('.has-submenu > a');
$menulink.click(function (e) {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    if ($search.hasClass('active')) {
        $('.menu.active').css('padding-top', '50px');
    }
});
$search.click(function (e) {
    e.preventDefault();
    $search_box.toggleClass('active');
});
$menuTrigger.click(function (e) {
    e.preventDefault();
    var t = $(this);
    t.toggleClass('active').next('ul').toggleClass('active');
});
$('ul li:has(ul)');



})//ready

