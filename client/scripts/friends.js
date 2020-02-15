var Friends = {

  toggleStatus: function(friend) {
    if (Friends[friend] === false) {
      Friends[friend] = true;
    } else {
      Friends[friend] = false;
    }
  }

};