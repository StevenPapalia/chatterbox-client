var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
    var render = _.template(`
      <div class="chat">
        <div onclick="Friends.toggleStatus(this.innerHTML)" class="username"><%-username%></div>
        <div><%-text%></div>
      </div>
    `);
    
    $('#chats').append(render({username: message.username, text: message.text, roomname: message.roomname}));
  }

};