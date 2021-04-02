/*
CODING CHALLENGE #3:

There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a  trophy!

Your tasks:

1. Calculate the average score for each team, using the test data below.

2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.

Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉.

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

Test data:

DATA 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110.

DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123.

DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106.
*/

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

if (DolphinsAverageScore > KoalasAverageScore && DolphinsAverageScore >= 100) console.log(`The Dolphins win!`);
else if (KoalasAverageScore > DolphinsAverageScore && KoalasAverageScore >= 100) console.log(`Koalas win!`);
else if (DolphinsAverageScore === KoalasAverageScore && DolphinsAverageScore >= 100 && KoalasAverageScore >= 100) console.log(`It's a draw!`);
else console.log(`There is no trophy winner`);
