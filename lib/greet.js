'use strict';

const sayHello = {
  greeting: 'Hello',
  greetUser: (user, greetThem = sayHello.greeting) => {
    if (checkForString(user)) {
      return `${greetThem}, ${user}.`;
    }
  },
};

function checkForString (str) {
  if (typeof str != 'string') {
    return false;
  } else {
    return true;
  }
}

module.exports = sayHello;
