/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount) === true) {
    this.transactions.push(new Transaction('deposit', amount));
    // console.log('Deposited: ', amount, 'from account ', this.number);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount) === true) {
    this.transactions.push(new Transaction('withdrawal', amount));
    // console.log('Withdrew: ', amount, 'from account ', this.number);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var balance = 0;
  if (this.transactions.length === 0) {
    // console.log('Balance is Zero');
  } else if (this.transactions.length > 0) {
    // console.log('Balance is NOT Zero');
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        balance += this.transactions[i].amount;
        // console.log('Added ', this.transactions[i].amount, ' to balance.');
      } else if (this.transactions[i].type === 'withdrawal') {
        balance -= this.transactions[i].amount;
        // console.log('Added ', this.transactions[i].amount, ' to balance.');
      }
    }
  }
  // console.log('Balance is: ', balance);
  return balance;
};
