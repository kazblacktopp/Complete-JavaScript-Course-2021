# Data Structures, Modern Operators and Strings

## Coding Challenge #1

We're building a football betting app (soccer for my American friends 😅)! Suppose we get data from a web service about a certain game (`game` variable in the code). In this challenge we're going to work with that data.

### Your tasks:

1. Create one player array for each team (variables `players1` and `players2`).
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable (`gk`) with the goalkeeper's name, and one array (`fieldPlayers`) with all the remaining 10 field players.
3. Create an array, `allPlayers`, containing all players of both teams (22 players).
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array (`players1Final`) containing all the original team1 players plus `Thiago`, `Coutinho` and `Perisic`.
5. Based on the `game.odds` object, create one variable for each odd (called `team1`, `draw` and `team2`).
6. Write a function (`printGoals`) that receives an arbitrary number of players names (**not** an array) and prints each of them to the console, along with the number of goals that were scored in total (number of players names passed in).
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, **without** using an `if/else` statement or the ternary operator.

### Test data for 6.:

First, use players `Davies`, `Muller`, `Lewandowski` and `Kimmich`. Then, call the function again with the players from `game.scored`.

Happy Coding! 🚀

## Coding Challenge #2

Let's continue with our football betting app! Keep using the `game` variable from before.

### Your Tasks:

1. Loop over the `game.scored` array and print each player name to the console, along with the goal number.

#### Example:

```
Goal 1: Lewandowski
```

2. Use a loop to calculate the average odds and log it to the console (We already studied how to calculate averages, you can go check if you don't remember).
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:

```
Odds of Bayern Munich victory: 1.33
Odds of draw: 3.25
Odds of Borrussia Dortmund victory: 6.5
```

4. **Bonus**: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:

```
{
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2
}
```

Happy Coding! 🚀
