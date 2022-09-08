const sumAll = function (startNumber, endNumber) {
  if (!isValidNumber(startNumber) || !isValidNumber(endNumber)) {
    return "ERROR";
  }

  let sum = 0;

  if (startNumber <= endNumber) {
    for (let i = startNumber; i <= endNumber; i++) {
      sum += i;
    }
  } else {
    for (let i = startNumber; i >= endNumber; i--) {
      sum += i;
    }
  }

  return sum;
};

function isValidNumber(number) {
  if (number < 0 || !(typeof number === "number")) {
    return false;
  } else {
    return true;
  }
}

// Do not edit below this line
module.exports = sumAll;
