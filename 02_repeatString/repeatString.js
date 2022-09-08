const repeatString = function (string, num) {
  let cumulativeString = "";

  if (num < 0) {
    return "ERROR";
  }

  for (let i = 0; i < num; i++) {
    cumulativeString += string;
  }

  return cumulativeString;
};

// Do not edit below this line
module.exports = repeatString;
