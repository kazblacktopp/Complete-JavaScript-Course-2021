# Code Challenges for JavaScript Fundamentals - Part 1

![JavaScript Fundamentals - Part 1 Coding Challenges](../images/js-fundamentals1.jpg)

## Welcome! 👋🏽

Here you will find the instructions for all the coding challenges for `JavaScript Fundamentals Part-1`.

Each coding challenge can be executed using the [index.html](./index.html) file in the [01-Fundamentals-Part-1](../01-Fundamentals-Part-1) directory.

The `<script>` line for each challenge has been included at the bottom of the `<body>` section of the `index.html` file so you will need to comment out the scripts that you don't need.

### Contents:

1. [Coding Challenge #1](#coding-challenge-1).
2. [Coding Challenge #2](#coding-challenge-2).
3. [Coding Challenge #3](#coding-challenge-3).
4. [Coding Challenge #4](#coding-challenge-4).

## Coding Challenge #1
[Back to top](#code-challenges-for-javascript-fundamentals---part-1)

### Instructions

Mark and John are trying to compare their BMI (Body Mass Index) which is calculated using the following formula (mass in kg and height in meters):

```
BMI = mass / (height ** 2)
```

OR

```
BMI = mass / (height * height)
```

### Your tasks

1. Store Mark's and John's mass and height in variables.

2. Calculate both their BMIs using the above formula (you can even implement both versions).

3. Create a Boolean variable `markHigherBMI` containing information about whether Mark has a higher BMI than John.

### Test data

**DATA 1**: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

**DATA 2**: Marks weighs 95 kg and is 1.88 m tall. John weighs 85 kg and is 1.76 m tall.

## Coding Challenge #2
[Back to top](#code-challenges-for-javascript-fundamentals---part-1)

### Instructions

Use the BMI example from [Coding Challenge #1](#coding-challenge-1), and the code you already wrote, and improve it.

### Your tasks:

1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Use a `template literal` to include the BMI values in the outputs.

### Example: 

```
"Mark's BMI (28.3) is higher than John's (23.9)!".
```

## CODING CHALLENGE #3:
[Back to top](#code-challenges-for-javascript-fundamentals---part-1)

There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a 🏆 trophy!

### Your tasks:

1. Calculate the average score for each team, using the test data below.
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
3. **Bonus 1**: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the at same time a score of at least 100 points.
<br>
<br>
**Hint**: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉.

### Test data:

**DATA 1**: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110.

**DATA BONUS 1**: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123.

**DATA BONUS 2**: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106.

## CODING CHALLENGE #4:
[Back to top](#code-challenges-for-javascript-fundamentals---part-1)

Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

### Your tasks:

1. Calculate the tip based on the bill value. Create a variable called `tip` for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!).
2. Print a string to the console containing the bill value, the tip, and the final value (`bill + tip`).

### Example: 

```
“The bill was 275, the tip was 41.25, and the total value 316.25”
```

### Test data:

**DATA 1**: Test for bill with value 275.

**DATA 2**: Test for bill with value 40.

**DATA 3**: Test for bill with value 430.