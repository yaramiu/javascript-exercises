const palindromes = function (string) {
  string = string.toLowerCase();
  string = string.replace(/\W|_/g, "");
  let charactersArray = string.split("");

  let reversedCharactersArray = [];

  for (let i = string.length - 1; i >= 0; i--) {
    reversedCharactersArray.push(string[i]);
  }

  if (charactersArray.join() === reversedCharactersArray.join()) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
