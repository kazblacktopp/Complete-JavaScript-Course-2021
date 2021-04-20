"use strict";
console.log(`Coding Challenge #3:`);

// TEST DATA 1:

let DolphinsAverageScore = (96 + 108 + 89) / 3;
let KoalasAverageScore = (88 + 91 + 110) / 3;

// // TEST DATA BONUS 1:

// DolphinsAverageScore = (97 + 112 + 101) / 3;
// KoalasAverageScore = (109 + 95 + 123) / 3;

// // TEST DATA BONUS 2:

// DolphinsAverageScore = (97 + 112 + 101) / 3;
// KoalasAverageScore = (109 + 95 + 106) / 3;

console.log(DolphinsAverageScore, KoalasAverageScore);

if (DolphinsAverageScore > KoalasAverageScore && DolphinsAverageScore >= 100)
  console.log(`The Dolphins win!`);
else if (KoalasAverageScore > DolphinsAverageScore && KoalasAverageScore >= 100)
  console.log(`Koalas win!`);
else if (
  DolphinsAverageScore === KoalasAverageScore &&
  DolphinsAverageScore >= 100 &&
  KoalasAverageScore >= 100
)
  console.log(`It's a draw!`);
else console.log(`There is no trophy winner`);
