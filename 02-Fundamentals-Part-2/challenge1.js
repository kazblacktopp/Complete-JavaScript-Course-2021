const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// TEST DATA 1:

let avgScoreDolphins = calcAverage(44, 23, 71);
let aveScoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgScoreDolphins, aveScoreKoalas
) => {
    if (avgScoreDolphins >= aveScoreKoalas
        * 2) {
        return `Dolphins win 🏆 (${avgScoreDolphins} vs. ${aveScoreKoalas
            })`;
    } else if (aveScoreKoalas
        >= avgScoreDolphins * 2) {
        return `Koalas win 🏆 (${aveScoreKoalas
            } vs. ${avgScoreDolphins})`;
    } else {
        return `No team wins..`;
    }
}
console.log(avgScoreDolphins, aveScoreKoalas
);
console.log(checkWinner(avgScoreDolphins, aveScoreKoalas
));

// TEST DATA 2:

avgScoreDolphins = calcAverage(85, 54, 41);
aveScoreKoalas = calcAverage(23, 34, 27);

console.log(avgScoreDolphins, aveScoreKoalas
);
console.log(checkWinner(avgScoreDolphins, aveScoreKoalas
));