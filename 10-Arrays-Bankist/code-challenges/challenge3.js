"use strict";

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// Task 1:

const calcRecFood = dogsArr =>
  dogsArr.forEach(dog => {
    const recFoodPortion = Math.round(dog.weight ** 0.75 * 28);
    dog.recFood = recFoodPortion;
  });

calcRecFood(dogs);
console.log(`Task 1:`, dogs);

// Task 2:

const sarahDog = dogs.find(dog => dog.owners.includes("Sarah"));

console.log(
  `Task 2:`,
  sarahDog.curFood > sarahDog.recFood * 1.1
    ? "Sarah's dog eats too much"
    : "Sarah's dog doesn't eat too much"
);

// Task 3:

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood * 1.1)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood * 0.9)
  .flatMap(dog => dog.owners);
console.log(`Task 3:`, ownersEatTooMuch, ownersEatTooLittle);

// Task 4:

// My solution using reduce():
// const string = (arr, tooMuch) =>
//   arr
//     .reduce((str, owner, i, strArr) => {
//       str += i < strArr.length - 1 ? owner + " and " : owner + "'s ";
//       return str;
//     }, "")
//     .concat(`dogs eat too ${tooMuch ? "much" : "little"}!`);

// console.log(string(ownersEatTooMuch, true));
// console.log(string(ownersEatTooLittle, false));

// Jonas's solution using join():
console.log(`Task 4.a: ${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(
  `Task 4.b: ${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`
);

// Task 5:

console.log(
  "Task 5:",
  dogs.some(dog => dog.curFood === dog.recFood)
);

// Task 6:

const isFoodOkay = dog =>
  dog.curFood >= dog.recFood * 0.9 && dog.curFood <= dog.recFood * 1.1;

console.log(`Task 6:`, dogs.some(isFoodOkay));
// same as: dogs.some(dog => isFoodOkay(dog))

// Task 7:

const dogsEatingOkay = dogs.filter(isFoodOkay);

console.log(`Task 7:`, dogsEatingOkay);

// Task 8:

const dogs2 = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(`Task 8.a - Unsorted:`, dogs);

console.log(`Task 8.b - Sorted:`, dogs2);

// Array methods used in this challenge:
// forEach(), find(), includes(), filter(), flatMap(), join(), some(), slice(), sort() = 9!!
