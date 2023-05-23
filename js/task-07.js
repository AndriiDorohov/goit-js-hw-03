// Write a script to manage a personal internet banking account. There is an account object in which methods need to be implemented to work with the balance and transaction history.

/*

There are only two types of transactions.
You can either deposit or withdraw money from the account.
*/

const Transaction = {
	DEPOSIT: 'deposit',
	WITHDRAW: 'withdraw',
  };
  
  /*
   * Each transaction is an object with properties: id, type, and amount.
   */
  
  const account = {
	// Current account balance
	balance: 0,
  
	// Transaction history
	transactions: [],
  
	createTransaction(amount, type) {
	  /* This method creates and returns a transaction object.
	   * It takes the amount and transaction type as parameters.
	   */
  
	  const userTransaction = {
		id: this.transactions.length + 1,
		type: type,
		amount: amount,
	  };
	  return userTransaction;
	},
  
	deposit(amount) {
	  /* This method is responsible for adding the amount to the balance.
	   * It takes the transaction amount as a parameter.
	   * It calls createTransaction to create a transaction object
	   * and then adds it to the transaction history.
	   */
  
	  this.balance += Number(amount);
	  this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
	},
  
	withdraw(amount) {
	  /* This method is responsible for deducting the amount from the balance.
	   * It takes the transaction amount as a parameter.
	   * It calls createTransaction to create a transaction object
	   * and then adds it to the transaction history.
	   * If the amount is greater than the current balance,
	   * it displays a message that withdrawal is not possible due to insufficient funds.
	   */
  
	  if (this.balance < amount) {
		console.log("Withdrawal is not possible, insufficient funds");
	  } else {
		this.balance -= Number(amount);
		this.transactions.push(
		  this.createTransaction(amount, Transaction.WITHDRAW)
		);
	  }
	},
  
	getBalance() {
	  /* This method returns the current balance */
	  return this.balance;
	},
  
	getTransactionDetails(id) {
	  /* This method searches and returns the transaction object by id */
	  return this.transactions[id - 1];
	},
  
	getTransactionTotal(type) {
	  let totalAmount = 0;
	  for (let i = 0; i < this.transactions.length; i++) {
		if (type === this.transactions[i].type) {
		  totalAmount += this.transactions[i].amount;
		}
	  }
	  return totalAmount;
	  /* This method returns the total amount of funds for a specific transaction type from the entire transaction history */
	},
  };
  
  console.log(account.deposit(100));
  console.log(account.deposit(150));
  console.log(account.deposit(300));
  console.log(account.withdraw(560));
  console.log(account.withdraw(60));
  console.log(account.withdraw(160));
  console.log(account.deposit(500));
  
  console.table(account.transactions);
  console.log(`Current balance: ${account.balance}`);
  console.log(account.getTransactionDetails(2));
  console.log(account.getTransactionDetails(5));
  
  console.log(`Total amount withdrawn: ${account.getTransactionTotal(Transaction.WITHDRAW)}`);
  console.log(`Total amount deposited: ${account.getTransactionTotal(Transaction.DEPOSIT)}`);
  