"use strict";

/////////////////////////////////////////////////
////////////////// BANKIST APP //////////////////
/////////////////////////////////////////////////

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
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
        <div class="movements__value">${mov}€</div>
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

const calcDisplaySummary = acc => {
  const sumIn = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${sumIn}€`;

  labelSumOut.textContent = `${Math.abs(
    acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0)
  )}€`;

  labelSumInterest.textContent = `${(sumIn * acc.interestRate) / 100}€`;
};

const calcDisplayBalance = acct => {
  acct.balance = acct.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acct.balance}€`;
};

// Event handler
btnLogin.addEventListener("click", function (e) {
  e.preventDefault(); // prevents form from submitting
  activeAccount = accounts.find(
    acct => acct.username === inputLoginUsername.value.toLowerCase()
  );

  if (activeAccount?.pin === Number(inputLoginPin.value)) {
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
  const transAmount = Number(inputTransferAmount.value);

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
  const loan = Number(inputLoanAmount.value);

  if (loan > 0 && activeAccount.movements.some(mov => mov >= loan * 0.1)) {
    activeAccount.movements.push(loan);
    displayUI(activeAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", e => {
  e.preventDefault();

  const user = inputCloseUsername.value.toLowerCase();
  const userPin = Number(inputClosePin.value);

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
