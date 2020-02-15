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

    // Parse.create(message);
 
    Parse.create(message, () => {
      console.log('hi');
    }, errorCB = null);

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
