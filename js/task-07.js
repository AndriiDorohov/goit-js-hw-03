//Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],
 
     
  createTransaction(amount, type) {
/* Метод создает и возвращает объект транзакции. * Принимает сумму и тип транзакции. */

    const userTransaction = {id:Number(this.transactions.length+1),type:type, amount:amount,};
    return(userTransaction);
  },

  deposit(amount) {
  /* Метод отвечающий за добавление суммы к балансу. * Принимает сумму танзакции. * Вызывает createTransaction для создания объекта транзакции 
  / *после чего добавляет его в историю транзакций*/
  
      this.balance = (this.balance + Number(amount));
      this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },
    
   withdraw(amount) {
  /* Метод отвечающий за снятие суммы с баланса.  * Принимает сумму танзакции. * Вызывает createTransaction для создания объекта транзакции
  /* после чего добавляет его в историю транзакций.  *Если amount больше чем текущий баланс, выводи сообщение о том, что снятие такой суммы не возможно, недостаточно средств.*/

    if (this.balance < amount) {console.log("снятие такой суммы не возможно, недостаточно средств")}
    else {
    this.balance = (this.balance - Number(amount));
    this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));}

  },

  getBalance() {
  /* Метод возвращает текущий баланс */
    return(this.balance);
  },

  getTransactionDetails(id) {
  /* Метод ищет и возвращает объект транзации по id */
    return(this.transactions[id-1]);
  },

  getTransactionTotal(type) {
    let totalAmount = 0;
    for (let i = 0; i < this.transactions.length; i++) {
        if (type === this.transactions[i].type) {
          totalAmount = totalAmount + this.transactions[i].amount;
        }
    }
   return(totalAmount);
  /* Метод возвращает количество средств определенного типа транзакции из всей истории транзакций */
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
 console.table(`Общий баланс ${account.balance}`);
 console.log(account.getTransactionDetails(2));
 console.log(account.getTransactionDetails(5));

 console.log(`Всего снято денег со счета: ${account.getTransactionTotal(Transaction.WITHDRAW)}`);
 console.log(`Всего добавлено денег на счет: ${account.getTransactionTotal(Transaction.DEPOSIT)}`);



