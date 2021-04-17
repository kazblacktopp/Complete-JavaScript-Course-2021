console.log(`Coding challenge #4:`);

// TEST DATA 1:

let bill = 275;

// // TEST DATA 2:

// bill = 40;

// // TEST DATA 3:

// bill = 430;

const tip = bill * ((bill >= 50 && bill <= 300 ? 15 : 20) / 100);
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value was $${bill + tip}`);
