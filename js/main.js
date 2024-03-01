$(document).ready(function(){
  // Fade scroll /////////////////////
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight() + 800; 
    $(".index .container").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});


// Fade out scroll /////////////////////
$(window).scroll(function(){
  // 현재 스크롤 위치
  var scrollPosition = $(window).scrollTop();

  // 스크롤 다운 여부 확인
  if (scrollPosition > 0) {
    // 스크롤 다운 시
    $(".fade_scroll").addClass("sticky");
  } else {
    // 스크롤 다운이 아닐 시
    $(".fade_scroll").removeClass("sticky");
  }

  // fade 효과 처리
  $(".fade_scroll").css("opacity", 1 - scrollPosition / 250);
});



});
