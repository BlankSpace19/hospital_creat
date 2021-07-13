
//1. bxslider
$(document).ready(function(){
    $('.bxslider').bxSlider({
      auto: true, //자동으로 애니메이션 시작
      speed: 500, //애니메이션 속도
      pause: 3000, //애니메이션 유지 시간 (1000은 1초)
      mode: 'horizontal', //슬라이드 모드('fade', 'horizontal', 'vertical' 이 있음)
      autoControls: false, //시작 및 중지버튼 보여짐
      pager: false, //페이지 표시 보여짐
      captions: false //이미지 위에 텍스트를 넣을 수 있음
    });
  });

$(function(){
    //2. navi
    $('.screen-header__navi__depth01 > li').mouseenter(function(){
        $('.screen-header__navi__depth02').stop().slideDown();
        $('.screen-header__navi__background').stop().slideDown();
    });
    $('.screen-header__navi__depth01 > li').mouseleave(function(){
        $('.screen-header__navi__depth02').stop().slideUp();
        $('.screen-header__navi__background').stop().slideUp();
    });
    
});

 //3. modal
 $(function(){
 
  $('.close').click(function(){
$('#modal').hide(); //닫기
});
});
let myPopup = document.querySelector('.popup'),
    checkbox = document.querySelector('#popup'),
    popupClose = document.querySelector('.close');

//쿠키생성
function setCookie(name, value, day){
  let date = new Date();
  date.setDate(date.getDate() + day); //하루전 날로 지정

  let mycookie = '';
  //setCookie += 'CookiName=ABC;';
  mycookie += name + '='+ value + ';';
  mycookie += 'Expires=' + date.toUTCString();

  document.cookie = mycookie; //쿠키 설정
}

//쿠키삭제
function delcookie(name){
  let date = new Date();
  date.setDate(date.getDate() - 1); //하루전 날로 지정

  let setCookie = '';

  setCookie += name + '=Main;';
  setCookie += 'Expires=' + date.toUTCString();

  document.cookie = setCookie; //쿠키 설정
}

//쿠키확인
function checkCookie(name){
 let cookies = document.cookie.split(';');
 console.log(cookies); 
 let visited = false;

  for(var i in cookies){
    if(cookies[i].indexOf(name) > -1){ //방문한적이 있다
      //alert('다시 방문해주셔서 감사합니다.');
      visited = true;
    }
  }

  //if(visited == true)
  if(visited){
    //참->재방문
    myPopup.style.display = 'none';
  }else{
    //거짓->신규방문
    myPopup.style.display = 'block';
  }
} 
checkCookie('CCC');

popupClose.addEventListener('click', function(){
//a.checked => ture /false
  if(checkbox.checked){
    //팝업을 다시 안보겠다. 팝업닫고, 쿠키 생성
    setCookie('CCC', 'Main', 1);
    myPopup.style.display = 'none';
  }else{
    //팝업을 계속 보겠다. 팝업닫고, 쿠키 삭제
    delcookie('CCC');
    myPopup.style.display = 'none';
  }
});