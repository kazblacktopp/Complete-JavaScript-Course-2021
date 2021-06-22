"use strict";

const calcAverageHumaneAge = ages => {
  return Math.trunc(
    ages
      .map(age => (age <= 2 ? age * 2 : age * 4 + 16))
      .filter(age => age >= 18)
      .reduce((acc, age, _, arr) => acc + age / arr.length, 0)
  );
};

console.log(calcAverageHumaneAge([16, 6, 10, 5, 6, 1, 4]));
console.log(calcAverageHumaneAge([5, 2, 4, 1, 15, 8, 3]));
