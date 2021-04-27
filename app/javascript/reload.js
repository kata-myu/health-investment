$(function(){
  function buildHTML(message) {
    let html =
      `<div class="message" data-index=${message.id}>
        <div class="upper-message">
          <div><img class="chat-user-image" src=${message.user_image}></div>
          <div class="message-user">
            ${message.user_name}
          </div>
          <div class="message-date">
            ${message.created_at}
          </div>
        </div> 
        <div class="lower-message">
          <div class="message-content">
            ${message.content}
          </div>
        </div>
      </div>`
    return html;
  };

  let reloadMessage = function() {
    if (document.querySelector('.chat-main')){
      let groupId = $('.current-group').data('group');
      let lastMessageId = $('.message:last').data('index');
      $.ajax({
        url: `/groups/${groupId}/messages/reload`,
        type: 'get',
        dataType: 'json',
        data: {id: lastMessageId}
      })
      .done(function(messages){
        console.log(messages.length);
        if (messages.length !== 0) {
          let insertHTML = '';
          $.each(messages, function(i, message){
            insertHTML += buildHTML(message)
          });
          $('.chat-main').append(insertHTML);
          $('.chat-main').animate({ scrollTop: $('.chat-main')[0].scrollHeight});
        }
      })
      .fail(function(){
        alert('error');
      });
    }
  };
  // setInterval(reloadMessage, 7000);
  // 動作しないように一時的にコメントアウト↑
});
