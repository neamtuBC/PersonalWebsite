$(function(){
  mentoringBubbleClick();
  smoothScrool(1000);
  mobileNav();
  setInterval(function(){articleTada();},4000)

});

function articleTada(){
  var randNum = Math.floor(Math.random() * $('.article-thumb').length) + 1;

  $('.article-thumb').eq(randNum).addClass('is-empf').siblings().removeClass('is-empf');

}

function mobileNav(){
  $('.mobile-nav-toggle').on('click', function() {
    $(this).toggleClass('is-open');
    $('.mobile-nav').toggleClass('is-open');
  });
}

function smoothScrool (duration){
    $('a[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href'));

        if(target.length) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, duration);
        }
    });
}

function mentoringBubbleClick() {
  $('.face').on('click',function() {
    var $this = $(this)
        faceTop = $this.position().top,
        vertMath = -1 * (faceTop - 200),
        faceLeft = $this.position().left,
        horzMath = 0 - faceLeft;

    if($(window).width() > 640){
    $this.parent().css('top',vertMath +'px');
    } else {
      if($this.hasClass('back-btn')){
        mentoringNarrowStart();
      } else {
        $this.parent().css('left',horzMath +'px');
    }
    }
    if(!$this.hasClass('back-btn')){
      $this.addClass('has-bubble-open')
        .siblings().removeClass('has-bubble-open');
    }

  });

}

$(window).scroll(function(){
  youtubeVidScroll();
  startMentoring();
  startArticles();
});

function youtubeVidScroll() {
  var wScroll = $(window).scrollTop();
  $('.video-strip').css('background-position','center -'+wScroll+'px');
}

function startArticles(){
  var wScroll = $(window).scrollTop();

  if($('section.articles').offset().top - $(window).height()/2 < wScroll){
    $('.article-thumb').each(function(i){
      setTimeout(function(){
        $('.article-thumb').eq(i).addClass('is-visible');
      }, 100*i);
    });
  }
}

function startMentoring() {
  var wScroll = $(window).scrollTop();
  if($('section.mentoring').offset().top - $(window).height()/2 < wScroll){

    if($(window).width() > 640) {
      $('.faces').addClass('launched');
      if(!$('.face').hasClass('has-bubble-open')){
            setTimeout(function() {
              $('.face:nth-child(3)').addClass('has-bubble-open');
            }, 400);
      }
    } else {
      mentoringNarrowStart();
    }
  }

}

function mentoringNarrowStart() {
  $('.faces').css({
    'top': '235px',
    'left': '0px'
  });
  $('.face').first().addClass('has-bubble-open').siblings().removeClass('has-bubble-open');
}

function mentoringWideStart() {
  $('.faces').css({
    'top': '0px',
    'left': '0px'
  });
  $('.face:nth-child(3)').addClass('has-bubble-open').siblings().removeClass('has-bubble-open');
}


$(window).resize(function() {
  if($(window).width() > 640){
    mentoringWideStart();
  } else {
    mentoringNarrowStart();
  }
});
