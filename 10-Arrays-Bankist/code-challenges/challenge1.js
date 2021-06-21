"use strict";

// Data set 1:
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

// Data set 2:
// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];

const checkDogs = function (arr1, arr2) {
  const juliaArr = arr1.slice(1, -2);
  const finalArr = juliaArr.concat(arr2);
  console.log(finalArr);

  finalArr.forEach(function (age, i) {
    console.log(
      `Dog number ${i + 1} is ${
        age >= 3 ? `an adult, and is ${age} years old` : "a puppy 🐶"
      }.`
    );
  });
};
checkDogs(dogsJulia, dogsKate);
