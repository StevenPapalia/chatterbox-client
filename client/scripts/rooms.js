var Rooms = {

  add: function() {
    var input;
    input = prompt('Please enter the desired room name:');
    if (input === null || input === '') {
      console.log('Prompt cancelled.');
    } else {
      RoomsView.renderRoom(input);
      console.log('Added room name ' + input);
    }
  },

  isSelected: function() {
    // trying to determine which room we are in so that I can filter, ran out of time
    return $('select').children("option:selected").val();
    // if (Rooms.isSelected() === Messages[key].roomname) { filter messages shown}
  }

};