let gauss = 0;
const sumAll = function (n1, n2) {
  if (n1 > n2) {
    gauss = (n1 * (n1 + 1)) / 2;
  } else {
    gauss = (n2 * (n2 + 1)) / 2;
  }
  if (n1 < 0 || n2 < 0 || typeof n1 != "number" || typeof n2 != "number") {
    return "ERROR";
  } else {
    return gauss;
  }
};

// Do not edit below this line
module.exports = sumAll;
