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

arithmetic.multiply = function () {
  if (arguments.length < 2) { return null ;}
  let product = 1;
  for (let i = 0; i < arguments.length; i++) {
    if (!checkNum(arguments[i])) { return null ;}
    else { product = arguments[i] * product ;}
  }
  return product;
};

arithmetic.divide = function (a, b) {
  if (!checkNum(a) || !checkNum(b) || checkZ(a) || checkZ(b)) { return null;}
  return a / b;
};

function checkNum (num) {
  if (typeof num !== 'number') {return false;}
  if (typeof num == 'number') {return true;}

}
function checkZ(num) {
  if (num === 0) { return true ;}
  else { return false ;}
}
