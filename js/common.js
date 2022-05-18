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

});
