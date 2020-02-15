var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
    var render = _.template(`
      <div class="chat">
        <div onclick='Friends[this.innerHTML] = true; console.log(Friends);' class="username"><%-username%></div>
        <div><%-text%></div>
      </div>
    `);
    
    $('#chats').append(render({username: message.username, text: message.text, roomname: message.roomname}));
  }

};
  