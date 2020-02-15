var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('#rooms button').on('click', function() {
      Rooms.add();
    });
  },

  renderRoom: function(roomname) {
    var render = _.template(`<option><%-roomname%></option>`);
    $('#rooms select').append(render({roomname: roomname}));
  },

  add: function() {
    var input;
    input = prompt("Please enter the desired room name:");
    if (input === null || input === "") {
      console.log("Prompt cancelled.");
    } else {
      this.renderRoom(input);
      console.log("Added room name " + input);
    }
  }

};