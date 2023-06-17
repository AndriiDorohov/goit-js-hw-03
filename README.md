# Admission criteria

- The repository `goit-js-hw-03` has been created
- When submitting homework, there is a link to the source files in the repository
- Each task is executed in a separate file named `task-task_number.js`.
  Use `<script type="module">` to close the task code in a separate
scope and avoid identifier name conflicts.
- The names of variables and functions are clear, descriptive
- The code is formatted with Prettier

# Task 1

Write a script that, for the `user` object, sequentially:

- adds the `mood` field with the value `happy"
- replaces the value of `hobby` with 'skydiving'
- replaces the value of `premium` with `false`
- outputs the contents of the `user` object in the `key' format:the value of ` using
  `Object.keys()` and `for...of`

```js
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
```

# Task 2

Write a function `countProps(obj)` that counts the number of properties in an object. The function
returns a number - the number of properties.

``js
const countProps = function(obj) {
// your code
};

/*
* Function calls to check the health of your implementation.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
```

# Task 3

Write a function `findBestEmployee(employees)`, which takes
an employee object and returns the name of the most productive (who completed the most
tasks). Employees and the number of completed tasks are contained as object properties in
the format `"name":"number of tasks"`.

``js
const findBestEmployee = function(employees) {
// your code
};

/*
* Function calls to check the health of your implementation.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
```

# Task 4

Write the function `countTotalSalary(employees)` accepting the object of salaries. The function
calculates the total amount of employees' wages and returns it. Each field of the object
passed to the function has the form `"name":"salary"`.

```js
const countTotalSalary = function(employees) {
  // your code
};

/*
* Function calls to check the health of your implementation.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
```

# Task 5

Write a function `getAllPropValues(arr, prop)`, which gets an array of objects and
a property name. Returns an array of values of a specific `prop` property from
each object in the array.

``js
const products = [
{ name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
{ name: 'Droid', price: 400, quantity: 7 },
{ name: 'Capture', price: 1200, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {
// your code
};

/*
* Function calls to check the health of your implementation.
 */
console.log(getAllPropValues(products, 'name')); // ['Radar', 'Scanner', 'Droid', 'Capture']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
```

# Task 6

Write a function `calculateTotalPrice(allProdcuts, ProductName)`, which gets
an array of objects and the product name (the value of the `name` property). Returns the total
cost of the product (price\* quantity).

Function calls to check the health of your implementation.

``js
const products = [
{ name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
{ name: 'Droid', price: 400, quantity: 7 },
{ name: 'Capture', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProdcuts, ProductName) {
// your code
};

/*
 * Function calls to check the health of your implementation.
 */
console.log(calculateTotalPrice(products, 'Radar')); // 5200

console.log(calculateTotalPrice(products, 'Droid')); // 2800
```

# Task 7 is optional, it is not necessary to perform

Write a script for managing the personal account of the Internet bank. There is an object `account`
in which it is necessary to implement methods for working with the balance and
transaction history.

``js
/*
* There are only two types of transatsky.
 * You can deposit or withdraw money from the account.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Each transaction is an object with properties: id, type and amount
 */

const account = {
  // Current Account balance
  balance: 0,

  // Transaction History
  transactions: [],

  /*
   * The method creates and returns a transaction object.
   * Accepts the amount and type of transaction.
   */
  createTransaction(amount, type) {},

  /*
   * The method responsible for adding the amount to the balance.
   * Accepts the transaction amount.
   * Calls createTransaction to create a transaction object
   * then adds it to the transaction history
*/
deposit(amount) {},

  /*
   * The method responsible for withdrawing the amount from the balance.
   * Accepts the transaction amount.
   * Calls createTransaction to create a transaction object
   * then adds it to the transaction history.
   *
   * If the amount is more than the current balance, display a message
   * that the withdrawal of such an amount is not possible, there are not enough funds.
   */
  withdraw(amount) {},

  /*
   * The method returns the current balance
   */
  getBalance() {},

  /*
   * The method searches for and returns a transaction object by id
*/
GetTransactionDetails(id) {},

  /*
   * The method returns the amount of funds
   * a certain type of transaction from the entire transaction history
*/
getTransactionTotal(type) {},
};
```
