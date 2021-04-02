/*
CODING CHALLENGE #2:

Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:

1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Use a template literal to include the BMI values in the outputs.Example: "Mark's BMI (28.3) is higher than John's (23.9)!".
*/

console.log(`Coding Challenge #2:`);

// Test data 1:

// NOTE: variables: massMark, heightMark, massJohn, heightJohn, markBMI and johnBMI have already been defined in challenge1.js.

massMark = 78;
heightMark = 1.69;
massJohn = 92;
heightJohn = 1.95;

markBMI = massMark / heightMark ** 2;
johnBMI = massJohn / (heightJohn * heightJohn);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})!`);
}

// Test data 2:

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

markBMI = massMark / heightMark ** 2;
johnBMI = massJohn / (heightJohn * heightJohn);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})!`);
}
