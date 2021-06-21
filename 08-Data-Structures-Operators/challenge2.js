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

for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// Task 2:

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
console.log((average /= odds.length));

// Task 3:

for (const [team, odds] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? `draw` : `${game[team]} victory`;
  console.log(`Odds of ${teamStr}: ${odds}`);
}

// Task 4: Bonus

const scorers = {};
for (const player of game.scored)
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
console.log(scorers);
