$(function(){
  mentoringBubbleClick();
});

function mentoringBubbleClick() {
  $('.face').on('click',function() {

    var $this = $(this)
        faceTop = $this.position().top,
        vertMath = -1 * (faceTop - 200);

    console.log(vertMath);

    $this.parent().css('top',vertMath +'px')

    $this.addClass('has-bubble-open')
      .siblings().removeClass('has-bubble-open');
  });

  //when i click a face
  //get the distance of the face from its parent
  //move the whole container up 100 + the count
  //add the is-open class to the face

}


$(window).scroll(function(){
  youtubeVidScroll();
});

function youtubeVidScroll() {
  var wScroll = $(window).scrollTop();
  $('.video-strip').css('background-position','center -'+wScroll+'px');
}
