console.log(`Coding Challenge #1:`);

// TEST DATA 1:

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let markBMI = massMark / heightMark ** 2;
let johnBMI = massJohn / (heightJohn * heightJohn);
let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

// TEST DATA 2:

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

markBMI = massMark / heightMark ** 2;
johnBMI = massJohn / (heightJohn * heightJohn);
markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);
