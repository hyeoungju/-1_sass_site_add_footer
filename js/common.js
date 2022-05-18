$(function(){

  function splitLocation(el){
    let href = el.attr("href").split("/");
    href = href[href.length-1].split(".");
    href = href[0];
    return href;
  };

  let currentHref = splitLocation($(location));
  $("#lnb a").each(function(){
    if (splitLocation($(this)) == currentHref) {
      $(this).addClass("on");
    }
  });

  $(".accordian dd:not(:first)").css({
    "display":"none",
    "height": 0
  });
  let isAni = $("dd").is(":animated");
  if (!isAni) {
  }
  $(".accordian dl dt").click(function(){
    let thisElem = $(this);
    if ($("+dd",thisElem).css("display") == "none") {
      let isAni = $("dd").is(":animated");
      if (!isAni) {
        $("dd").each(function(){
              if (parseInt($(this).css("height")) == 300) {
                $(this).animate({height:0},300,function(){
                  $(this).css("display","none");
                });
              }
            })
            $("+dd",thisElem).css("display","block").animate({height: 300},1000);
      }
    }
  });
  var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다
var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);   
});
