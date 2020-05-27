
//所有动画均采用animate.css动画库实现
$(function(){
  //文章底部标签添加动画效果
 $('.post-tags a').mouseenter(function(e){
   e.stopPropagation();
   $(this).siblings('a').removeClass('animated flipInY')
   $(this).addClass('animated flipInY');
 })
  $('.post-footer').mouseleave(function(e){
    e.stopPropagation()
    $('.post-tags a').removeClass('animated flipInY')
  })

  //时钟添加动画效果
  $('#clock').mouseenter(function(e){
    e.stopPropagation();
    $(this).removeClass('animated rollIn')
    $(this).addClass('animated hinge')
  })
  $('.sidebar-inner').mouseleave(function(e){
    e.stopPropagation();
    $('#clock').removeClass('animated hinge')
    $('#clock').addClass('animated rollIn')
  })

  //标题添加动画效果
  //
  // $('.post-header .post-title').mouseenter(function(e){
  //   e.stopPropagation();
  //   $(this).addClass('animated wobble')
  // })
  // $('.post-header').mouseleave(function(e){
  //   e.stopPropagation();
  //   $('.post-header .post-title').removeClass('animated wobble')
  // })

  //sidebar标题动画
  $('.header-inner .site-title').mouseenter(function(e){
    e.stopPropagation();
    $(this).addClass('animated rubberBand')
  })
  $('.site-brand-container').mouseleave(function(e){
    e.stopPropagation();
    $('.header-inner .site-title').removeClass('animated rubberBand')
  })

  //头像动画

  $('.site-author-image').mouseenter(function(e){
    e.stopPropagation();
    $('.site-author-image').removeClass('animated bounceIn')
    $(this).addClass('animated bounceOut')
  })
  $('.site-author').mouseleave(function(e){
    e.stopPropagation();
    $('.site-author-image').removeClass('animated bounceOut')
    $('.site-author-image').addClass('animated bounceIn')
  })
})
