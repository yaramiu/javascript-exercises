const reverseString = function (string) {
  const characterArray = string.split("");
  let reversedString = "";

  const reversedCharacterArray = characterArray.reverse();
  reversedString = reversedCharacterArray.join("");

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
