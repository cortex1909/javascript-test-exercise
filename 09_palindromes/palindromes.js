const palindromes = function (string) {
    let regexp = /[\W_]/g; // \W removes all non alphanumeric chars + _ removes space
    let lowerCaseString = string.toLowerCase().replace(regexp, '')
    let reverseString = lowerCaseString.split('').reverse().join('')
    console.log(reverseString)
    return lowerCaseString === reverseString
   
};
console.log(palindromes('A car, a man, a maraca.'))
// Do not edit below this line
module.exports = palindromes;
