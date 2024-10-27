var auto_refresh = 0;
function autocbk() {
  auto_refresh = setTimeout(function () {
    $(".callback").addClass("hover").animate({ right: "0" });
  }, 10000);
  auto_refresh = setTimeout(function () {
    $(".callback").stop(true).removeClass("hover").animate({ right: "-165px" });
  }, 13000);
}
$(document).ready(function () {
  $(".callbkBtn").mouseover(function () {
    $(this).addClass("sel");
    $(".callback").addClass("hover").animate({ right: "0" });
    clearTimeout(auto_refresh);
  });
  $(".callback").mouseleave(function () {
    $(".callbkBtn").removeClass("sel");
    $(".callback").stop(true).removeClass("hover").animate({ right: "-308px" });
  });
  var liHeight = 47;
  var nextCon = 1;
  var lengthTs = $(".callbackList li").length;
  var moveSize = liHeight * 4;
  $(".ud_prevBtn").click(function () {
    if (nextCon == 1) return;
    if (nextCon - 1) {
      var imageUrl = "images/uparrowdisable.png";
      var imageUrl1 = "images/downarrow.png";
      $(this).addClass("disable");
      $(this).css("background-image", "url(" + imageUrl + ")");
      $(".ud_nextBtn").removeClass("disable");
      $(".ud_nextBtn").css("background-image", "url(" + imageUrl1 + ")");
    }
    nextCon--;
    slideMoveSize = moveSize * (nextCon - 1);
    $(".callbackList").animate({ marginTop: -slideMoveSize });
  });
  $(".ud_nextBtn").click(function () {
    if (nextCon - 1) return;
    if (nextCon == 1) {
      var imageUrl = "images/downarrowdisable.png";
      var imageUrl1 = "images/uparrow.png";
      $(this).addClass("disable");
      $(this).css("background-image", "url(" + imageUrl + ")");
      $(".ud_prevBtn").removeClass("disable");
      $(".ud_prevBtn").css("background-image", "url(" + imageUrl1 + ")");
    }
    slideMoveSize = moveSize * nextCon;
    $(".callbackList").animate({ marginTop: -slideMoveSize });
    nextCon++;
  });
});
