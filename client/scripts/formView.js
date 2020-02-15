var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();


    var messageRoom = 'g';
    var messageText = document.getElementById('message').value;
    var message = {
      username: App.username,
      roomname: 'doesnt matter for now',
      text: messageText
    };
    Messages[message] = message;
    // still puts message on bottom
    FormView.renderSubmittedMessage(message);

    // Parse.create(message);
 
    Parse.create(message, () => {
      console.log('hi');
    }, errorCB = null);

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },


  renderSubmittedMessage: function(message) {
    var render = _.template(`
      <div class="chat">
        <div onclick="Friends.toggleStatus(this.innerHTML)" class="username"><%-username%></div>
        <div><%-text%></div>
      </div>
    `);

    
    $('#chats').prepend(render({username: message.username, text: message.text, roomname: message.roomname}));
  }

};
