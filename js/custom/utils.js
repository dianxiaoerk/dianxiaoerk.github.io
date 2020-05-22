$(function(){
  //相关书籍点击查看
  $('.show-books .icon').click(function(){
    var flag = $(this).hasClass('icon-right');
    if(flag){
      $(this).addClass('icon-down').removeClass('icon-right')

    }else{
      $(this).addClass('icon-right').removeClass('icon-down')
    }
    $('.popular-posts').slideToggle()
  })
})
