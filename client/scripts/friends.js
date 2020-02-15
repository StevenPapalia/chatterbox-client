var Friends = {

  toggleStatus: function(friend) {
    if (Friends[friend] === false) {
      Friends[friend] = true;
      console.log('added ' + friend + ' to friends list!');
    } else {
      Friends[friend] = false;
      console.log('removed ' + friend + ' from friends list!');
    }
  }

};