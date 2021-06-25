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
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
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
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];
let activeAccount = {};
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

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

// Displays stored movements after login
const displayMovements = function (movements, sort = false) {
  const movts = sort ? movements.slice().sort((a, b) => a - b) : movements;
  containerApp.style.opacity = 1;

  containerMovements.innerHTML = "";

  movts.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    }: ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
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

const calcDisplaySummary = acc => {
  const sumIn = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${sumIn.toFixed(2)}€`;

  const sumOut = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(sumOut).toFixed(2)}€`;

  const sumInterest = round((sumIn * acc.interestRate) / 100);

  labelSumInterest.textContent = `${sumInterest.toFixed(2)}€`;
};

const calcDisplayBalance = acct => {
  acct.balance = acct.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acct.balance.toFixed(2)}€`;
};

// Event handler
btnLogin.addEventListener("click", function (e) {
  e.preventDefault(); // prevents form from submitting
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

const displayUI = acct => {
  displayMovements(acct.movements);
  calcDisplayBalance(acct);
  calcDisplaySummary(acct);
};

btnTransfer.addEventListener("click", e => {
  e.preventDefault();

  const recipient = accounts.find(
    acct => acct.username === inputTransferTo.value.toLowerCase()
  );
  const transAmount = round(inputTransferAmount.value);

  if (
    transAmount > 0 &&
    recipient &&
    activeAccount.balance >= transAmount &&
    recipient.username != activeAccount.username
  ) {
    activeAccount.movements.push(-transAmount);
    recipient.movements.push(transAmount);
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
  displayMovements(activeAccount.movements, !sorted);
  sorted = !sorted;
});
