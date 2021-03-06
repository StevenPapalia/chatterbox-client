var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },



  fetch: function(callback = ()=>{ }) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      // add all data to messages.js 'Message'
      for (var i = 0; i < data.results.length; i++) {
        // if message has username roomname and text properties it is a message otherwise we dont want it
        if (data.results[i].username && data.results[i].roomname && data.results[i].text) {
          Messages[data.results[i].objectId] = data.results[i];
        }
        // if message has a roomname we want it
        if (data.results[i].roomname) {
          Rooms[data.results[i].roomname] = true;
        }
        // if message has a username and that username is not yet in the friends list
        if (data.results[i].username && Friends[data.results[i].username] === undefined) {
          // add it to the friends list and set it to false
          Friends[data.results[i].username] = false;
        }     
      }
      console.log(Messages);
      console.log(Rooms);
      console.log(Friends);

      // render all messages
      for (var key in Messages) {
        MessagesView.renderMessage(Messages[key]);
      }

      // render all rooms
      for (var key in Rooms) {
        RoomsView.renderRoom(key);
      }

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }

};
