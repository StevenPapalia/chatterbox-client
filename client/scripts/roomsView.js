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

};