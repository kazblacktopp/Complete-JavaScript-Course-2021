"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task 1:
const [players1, players2] = game.players;
console.log(`Task 1:`);
console.log(players1);
console.log(players2);

// Task 2:
const [gk, ...fieldPlayers] = players1;
console.log(`Task 2:`);
console.log(gk);
console.log(fieldPlayers);

// Task 3:
const allPlayers = [...players1, ...players2];
console.log(`Task 3:`);
console.log(allPlayers);

// Task 4:
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(`Task 4:`);
console.log(players1Final);

// Task 5:
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(`Task 5:`);
console.log(team1, draw, team2);

// Task 6:
const printGoals = function (...names) {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
  console.log(`Goals scored: ${names.length}`);
};

console.log(`Task 6:`);
console.log(`Test data 1:`);
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
console.log(`Test data 2:`);
printGoals(...game.scored);

// Task 7:
console.log(`Task 7:`);
team1 < team2 && console.log(`Team 1 is more likey to win`);
team2 < team1 && console.log(`Team 2 is more likey to win`);
draw < team1 && draw < team2 && console.log(`The game is likely to be a draw`);
