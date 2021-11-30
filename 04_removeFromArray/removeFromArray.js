let myArray = [];
let numberArray = [];
const removeFromArray = function (array, ...number) {
  numberArray = [...number];
  console.log(numberArray);
  myArray = array;
  for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < numberArray.length; j++) {
      if (myArray[i] === numberArray[j]) {
        myArray.splice(i, 1);
        i--;
      }
    }
  }
  console.log(myArray);
  return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
