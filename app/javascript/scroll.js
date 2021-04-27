let scroll = () => {
  $('.chat-form').on('submit', function(e){
    window.setTimeout(() => {
      $('.chat-main').animate({scrollTop: $('.chat-main')[0].scrollHeight}, 100);
    },200)
  });
};

$(function(){
  if($('.chat-form')){
    setInterval(scroll, 1000)
  }
});
