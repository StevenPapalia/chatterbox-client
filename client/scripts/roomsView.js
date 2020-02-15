var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(roomname) {
    var render = _.template(`<option><%-roomname%></option>`);
    
    $('#rooms select').append(render({roomname: roomname}));

    // //$('#chats').append(MessageView.render(message));
    //     <option value="dog">Dog</option>
  }

};