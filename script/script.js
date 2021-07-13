
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

//map

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

// 주소로 좌표를 검색합니다
geocoder.addressSearch('광주광역시 서구 경열로3', function(result, status) {

    // 정상적으로 검색이 완료됐으면 
     if (status === kakao.maps.services.Status.OK) {

        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: coords
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:6px 0;">한울직업전문학교</div>'
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
    } 
});    