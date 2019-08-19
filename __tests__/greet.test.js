'use strict';

const greeting = require('../lib/greet.js');
const faker = require('faker');

describe('Greet Test', () => {

  it('greets a random person appropriately', () => {
    let user = faker.random.word();
    expect(greeting.greetUser(user)).toEqual(`What's up, ${user}!!`);
  });

  it('greets a random person the way they want', () => {
    let user = faker.name.firstName();
    let greetThem = faker.lorem.words();
    expect(greeting.greetUser(user, greetThem)).toEqual(`${greetThem}, ${user}!!`);
  });

  it('returns null when you don\'t pass a string', () => {
    let notName = 4;
    expect(greeting.greetUser(notName)).toEqual(null);
  });

  it('hello worlds', () => {
    let user = 'world';
    let greetThem = 'Hello';
    expect(greeting.greetEm(user, greetThem)).toEqual(`${greetThem}, ${user}!!`);
  });
});