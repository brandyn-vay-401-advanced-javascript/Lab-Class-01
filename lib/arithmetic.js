'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function (a, b) {
  if (!checkNum(a) || checkNum(b)) {
    return null;
  }
  return a + b;
};

arithmetic.subtract = function (a, b) {
  if (!checkNum(a) || checkNum(b)) {
    return null;
  }
  return a - b;
};

function checkNum (num) {
  if (typeof num !== 'number') {return false;}
  if (typeof num == 'number') {return true;}
}
