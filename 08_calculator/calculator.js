const add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sum = function (numberArray) {
  let total = 0;
  numberArray.forEach((number) => (total += number));
  return total;
};

const multiply = function (numberArray) {
  let total = 0;
  if (numberArray.length === 0) {
    return 0;
  }

  for (let i = 0; i < numberArray.length; i++) {
    if (i === 0) {
      total = numberArray[0];
    } else {
      total *= numberArray[i];
    }
  }

  return total;
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (number) {
  if (number === 0) {
    return 1;
  }

  let total = 1;
  for (let i = 1; i <= number; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
