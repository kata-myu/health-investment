let scroll = () => {
  if (document.querySelector('.chat-main')){
    $('.chat-form').on('submit', function(e){
      window.setTimeout(() => {
        $('.chat-main').animate({scrollTop: $('.chat-main')[0].scrollHeight}, 100);
      },200)
    });
  }
};

$(function(){
  setInterval(scroll, 1000)
});
