'use strict';

const sayHello = {
  greeting: 'Hello',
  greetUser: (user, greetThem = sayHello.greeting) => {
    return `${greetThem}, ${user}.`;
  },
};

module.exports = sayHello;
