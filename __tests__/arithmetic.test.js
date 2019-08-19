'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker');

describe('Addition Test', () => {

  it('takes a random number and adds it to nothing', () => {
    let number = faker.random.number();
    expect(arithmetic.add(number)).toEqual(number);
  });

  it('takes in three numbers and adds them together', () => {
    let num1 = faker.random.number();
    let num2 = faker.random.number();
    let num3 = faker.random.number();
    expect(arithmetic.add(num1, num2, num3)).toEqual(num1 + num2 + num3);
  });

  it('throws null for adding together letters', () => {
    let str = 'merp derp I\'m a string';
    expect(arithmetic.add(str)).toEqual(null);
  });
});
describe('Subtraction test', () => {
  it('takes a single number and returns that number', () => {
    let number = faker.random.number();
    expect(arithmetic.subtract(number)).toEqual(number);
  });

  it('takes three numbers and returns the result of subtracting them in turn', () => {
    let num1 = faker.random.number();
    let num2 = faker.random.number();
    let num3 = faker.random.number();
    expect(arithmetic.subtract(num1, num2, num3)).toEqual(num1 - num2 - num3);
  });

  it('throws null if you give it strings instead of numbers', () => {
    let str = 'this is silly string';
    expect(arithmetic.subtract(str)).toEqual(null);
  });
});
describe('Multiply test', () => {

  it('fails to multiply one thing', () => {
    let num = faker.random.number();
    expect(arithmetic.multiply(num)).toEqual(null);
  });

  it('multiplies three things correctly', () => {
    let num1 = faker.random.number();
    let num2 = faker.random.number();
    let num3 = faker.random.number();
    expect(arithmetic.multiply(num1, num2, num3)).toEqual(num1 * num2 * num3);
  });

  it('fails to multiply strings', () => {
    let str = 'bleep bloop beep I am a string you can do math with me I swear';
    expect(arithmetic.multiply(str)).toEqual(null);
  });

  it('fails to multiply when the second item is a string', () => {
    let num = faker.random.number();
    let str = 'fuuuuuuuuuu';
    expect(arithmetic.multiply(num, str)).toEqual(null);
  });
});
describe('Divide test', () => {

  it('throws null for one value', () => {
    let num = faker.random.number();
    expect(arithmetic.divide(num)).toEqual(null);
  });

  it('divides two things', () => {
    let num1 = faker.random.number();
    let num2 = faker.random.number();
    expect(arithmetic.divide(num1, num2)).toEqual(num1 / num2);
  });

  it('throws null for trying to divide by zeroes', () => {
    let num1 = 0;
    let num2 = faker.random.number();
    expect(arithmetic.divide(num1, num2)).toEqual(null);
  });

});
