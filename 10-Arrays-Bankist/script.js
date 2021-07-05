"use strict";

/////////////////////////////////////////////////
////////////////// BANKIST APP //////////////////
/////////////////////////////////////////////////

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2020-02-28T09:15:04.904Z",
    "2020-03-01T10:17:24.185Z",
    "2020-04-08T14:11:59.604Z",
    "2021-05-22T17:01:17.194Z",
    "2021-06-14T23:36:17.929Z",
    "2021-06-28T23:36:17.929Z",
    "2021-07-01T23:36:17.929Z",
    "2021-07-03T23:36:17.929Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2021-02-29T13:15:33.035Z",
    "2021-03-24T09:48:16.867Z",
    "2021-04-17T06:04:23.907Z",
    "2021-05-25T14:18:46.235Z",
    "2021-06-05T16:33:06.386Z",
    "2021-06-30T14:43:26.374Z",
    "2021-07-02T18:49:59.371Z",
    "2021-07-04T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];
let activeAccount;
let sorted = false;

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const formatMovementDate = (locale, date) => {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date1 - date2) / (1000 * 60 * 60 * 24)));
  const daysPassed = calcDaysPassed(Date.now(), date);
  if (daysPassed === 0) return `today`;
  if (daysPassed === 1) return `yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCurrency = (value, locale, currency) =>
  new Intl.NumberFormat(locale, {
    style: `currency`,
    currency: currency,
  }).format(value);

// Displays stored movements after login
const displayMovements = function (acct, sort = false) {
  const movts = sort
    ? acct.movements.slice().sort((a, b) => a - b)
    : acct.movements;
  containerApp.style.opacity = 1;

  containerMovements.innerHTML = "";

  movts.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const movementDate = new Date(acct.movementsDates[i]);
    const displayDate = formatMovementDate(acct.locale, movementDate);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    }: ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatCurrency(
          mov,
          acct.locale,
          acct.currency
        )}</div>
      </div>
   `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// Create usernames for each stored account
const createUsername = accts => {
  accts.forEach(acct => {
    acct.username = acct.owner
      .toLowerCase()
      .split(" ")
      .map(name => name[0])
      .join("");
  });
};

createUsername(accounts);

// Function to round number to 2 decimal places
const round = num => {
  const roundedNum = Math.round((num * 100).toPrecision(15)) / 100;
  return roundedNum;
};

const calcDisplaySummary = acct => {
  const sumIn = acct.movements
    .filter(mov => mov > 0)
    .reduce((acct, mov) => acct + mov, 0);

  labelSumIn.textContent = formatCurrency(sumIn, acct.locale, acct.currency);

  const sumOut = acct.movements
    .filter(mov => mov < 0)
    .reduce((acct, mov) => acct + mov, 0);

  labelSumOut.textContent = formatCurrency(
    Math.abs(sumOut),
    acct.locale,
    acct.currency
  );

  const sumInterest = round((sumIn * acct.interestRate) / 100);

  labelSumInterest.textContent = formatCurrency(
    sumInterest,
    acct.locale,
    acct.currency
  );
};

const calcDisplayBalance = acct => {
  acct.balance = acct.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCurrency(
    acct.balance,
    acct.locale,
    acct.currency
  );
};

const displayUI = acct => {
  const currentDate = new Date();
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  labelDate.textContent = new Intl.DateTimeFormat(
    activeAccount.locale,
    options
  ).format(currentDate);

  displayMovements(acct);
  calcDisplayBalance(acct);
  calcDisplaySummary(acct);
};

// Event handler
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  activeAccount = accounts.find(
    acct => acct.username === inputLoginUsername.value.toLowerCase()
  );

  if (activeAccount?.pin === +inputLoginPin.value) {
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginUsername.blur();
    inputLoginPin.blur();
    labelWelcome.textContent = `Welcome back, ${
      activeAccount.owner.split(" ")[0]
    }`;
    displayUI(activeAccount);
  }
});

btnTransfer.addEventListener("click", e => {
  e.preventDefault();

  const recipient = accounts.find(
    acct => acct.username === inputTransferTo.value.toLowerCase()
  );
  const transAmount = round(inputTransferAmount.value);
  const transDate = new Date().toISOString();

  if (
    transAmount > 0 &&
    recipient &&
    activeAccount.balance >= transAmount &&
    recipient.username != activeAccount.username
  ) {
    activeAccount.movements.push(-transAmount);
    activeAccount.movementsDates.push(transDate);
    recipient.movements.push(transAmount);
    recipient.movementsDates.push(transDate);
    displayUI(activeAccount);
  }

  inputTransferTo.value = inputTransferAmount.value = "";
});

btnLoan.addEventListener("click", e => {
  e.preventDefault();
  const loanAmount = round(inputLoanAmount.value);

  if (
    loanAmount > 0 &&
    activeAccount.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    activeAccount.movements.push(loanAmount);
    activeAccount.movementsDates.push(new Date().toISOString());
    displayUI(activeAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", e => {
  e.preventDefault();

  const user = inputCloseUsername.value.toLowerCase();
  const userPin = +inputClosePin.value;

  if (activeAccount.username === user && activeAccount.pin === userPin) {
    const confirmation = confirm(
      "Are you sure you want to delete your account? Click OK to close account or click Cancel."
    );
    if (confirmation) {
      const index = accounts.findIndex(
        acc => acc.username === activeAccount.username
      );
      accounts.splice(index, 1);
      activeAccount = {};
      containerApp.style.opacity = 0;
      labelWelcome.textContent = `Log in to get started`;
    }
    inputCloseUsername.value = inputClosePin.value = "";
  }
});

btnSort.addEventListener("click", e => {
  e.preventDefault();
  displayMovements(activeAccount, !sorted);
  sorted = !sorted;
});

// FAKE ALWAYS LOGGED IN

activeAccount = account1;
displayUI(activeAccount);

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);
