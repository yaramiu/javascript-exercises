const fibonacci = function (number) {
  if (number < 0) {
    return "OOPS";
  } else if (number == 0) {
    return 0;
  }

  let fibonacciNumbersArray = [];

  if (number == 1 || number == 2) {
    return 1;
  }

  fibonacciNumbersArray.push(1);
  fibonacciNumbersArray.push(1);

  for (let i = 2; i < number; i++) {
    let currentFibonacciNumber =
      fibonacciNumbersArray[i - 1] + fibonacciNumbersArray[i - 2];
    fibonacciNumbersArray.push(currentFibonacciNumber);
  }

  return fibonacciNumbersArray[fibonacciNumbersArray.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
