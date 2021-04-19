const calcTip = bill => (bill >= 50 && bill <= 300 ? 0.15 : 0.20) * bill;
console.log(calcTip(100));

const billValue = [125, 555, 44];
console.log(billValue);

const tips = [calcTip(billValue[0]), calcTip(billValue[1]), calcTip(billValue[2])];
console.log(tips);

const billTotals = [billValue[0] + tips[0], billValue[1] + tips[1], billValue[2] + tips[2]];
console.log(billTotals);