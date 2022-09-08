const removeFromArray = function (array, ...removableElements) {
  return array.filter((element) => !removableElements.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
