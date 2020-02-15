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
  }

};