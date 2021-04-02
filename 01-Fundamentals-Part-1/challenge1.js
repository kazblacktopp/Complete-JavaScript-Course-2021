/*
CODING CHALLENGE #1:

Mark and John are trying to compare their BMI(Body Mass Index) which is calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height)(mass in kg
and height in meter).

Your tasks:

1. Store Mark's and John's mass and height in variables.

2. Calculate both their BMIs using the formula(you can even implement both versions).

3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:

DATA 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m tall.

DATA 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76 m tall.
*/

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
