'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (checkNum(arguments[i])) {
      return null;
    } else {
      sum += arguments[i];
    }
  }
  return sum;
};

arithmetic.subtract = function () {
  let num = arguments[0];
  if (checkNum(num)) {
    for (let i = 1; i < arguments[i]; i++) {
      if (!checkNum(arguments[i])) {
        return null;
      } else {
        num -= arguments[i];
      }
    }
  } else {
    num = null;
  }
  return num;
};

function checkNum (num) {
  if (typeof num !== 'number') {return false;}
  if (typeof num == 'number') {return true;}
}
