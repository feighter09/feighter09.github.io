// $('.carousel').carousel({
//   interval: 100
// }).on('slide.bs.carousel', function (e) {
//   console.log("hi");
//   var nextH = $(e.relatedTarget).height();
//   $(this).find('.active').parent().animate({ height: nextH }, 500);
// });

$(document).ready(function(){
  $('#beliefs').slick({
    arrows: false,
    adaptiveHeight: true,
    touchMove: false,
    swipeToSlide: false,
    draggable: false
  });

  $('#beliefs').slick('slickGoTo', 8, false);
});