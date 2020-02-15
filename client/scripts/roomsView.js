var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
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



// function myFunction() {
//   var txt;
//   var person = prompt("Please enter your name:", "Harry Potter");
//   if (person == null || person == "") {
//     txt = "User cancelled the prompt.";
//   } else {
//     txt = "Hello " + person + "! How are you today?";
//   }
//   document.getElementById("demo").innerHTML = txt;
// }