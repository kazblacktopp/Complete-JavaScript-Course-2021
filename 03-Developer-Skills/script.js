"use strict";

// CHALLENGE:
// 1. Display values from a given array as strings.
// 2. The 'n' in "... (n) days ..." is index + 1.

// TODO:
// 1. Create function `printForecast` that takes `arr` as an argument. ✅
// 2. Create a variable to hold the string to be logged. ✅
// 3. Traverse array, `arr`, using a loop. ✅
// 4. Add the temp and day to the `tempString` variable in each loop. ✅
// 5. Log the final "tempString" to console. ✅

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = arr => {
  let tempString = "";
  for (let i = 0; i < arr.length; i++) {
    tempString += `${arr[i]}˚C in ${i + 1} day${i != 0 ? "s" : ""} ... `;
  }
  console.log(`... ` + tempString);
};
printForecast(data1);
printForecast(data2);
