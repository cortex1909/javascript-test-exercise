let newString = "";
const reverseString = function (str) {
  let myArray = str.split("");
  let arrayLength = myArray.length;
  let letter;
  let newMyArray = [];
  for (let i = 0; i < arrayLength; i++) {
    letter = myArray.pop();
    newMyArray.push([letter]);
  }
  newString = newMyArray.join("");
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
