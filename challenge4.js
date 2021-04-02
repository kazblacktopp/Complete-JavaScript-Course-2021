/*
CODING CHALLENGE #4:

Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!).

2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

Test data:

DATA 1: Test for bill with value 275.

DATA 2: Test for bill with value 40.

DATA 3: Test for bill with value 430.
*/

console.log(`Coding challenge #4:`);

// TEST DATA 1:

let bill = 275;

// // TEST DATA 2:

// bill = 40;

// // TEST DATA 3:

// bill = 430;

const tip = bill * ((bill >= 50 && bill <= 300 ? 15 : 20) / 100);
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value was $${bill + tip}`);
