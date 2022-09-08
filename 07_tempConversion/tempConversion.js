const ftoc = function (degreesFahrenheit) {
  return Number(((degreesFahrenheit - 32) / 1.8).toFixed(1));
};

const ctof = function (degreesCelsius) {
  return Number((degreesCelsius * 1.8 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
