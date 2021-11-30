const ftoc = function (fahrenheit) {
  let roundedCelsius = ((fahrenheit) - 32) * (5 / 9);
  return Math.round(roundedCelsius * 10) / 10;
};

const ctof = function (celsius) {
  let roundedFahrenheit = (celsius) * (9 / 5) + 32;
  return Math.round(roundedFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
