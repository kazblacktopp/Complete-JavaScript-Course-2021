const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => (bill >= 50 && bill <= 300 ? 0.15 : 0.20) * bill;

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

const calcAverage = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(bills);
console.log(tips);
console.log(totals);
console.log(`Average Bill: ${calcAverage(bills)}`);
console.log(`Average Tip: ${calcAverage(tips)}`);
console.log(`Average Total: ${calcAverage(totals)}`);