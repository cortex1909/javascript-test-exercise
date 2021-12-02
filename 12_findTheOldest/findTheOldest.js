const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(people) {
let howManyAge = people.map(el => {
    let age = el.yearOfDeath == undefined ? new Date().getFullYear() - el.yearOfBirth : el.yearOfDeath - el.yearOfBirth;    
    return age
})
let maxAge = Math.max(...howManyAge)
let index = howManyAge.indexOf(maxAge)
return people[index]
};
console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
