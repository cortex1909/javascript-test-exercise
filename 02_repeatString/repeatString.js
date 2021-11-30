let _string = "";
const repeatString = function (string, number) {
  if (number < 0) {
    return "ERROR";
  } else {
    _string = string.repeat(number);
  }
  return _string;
};

// Do not edit below this line
module.exports = repeatString;
