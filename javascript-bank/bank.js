/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) === true && balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  var match = null;
  for (var i = 0; i < this.accounts.length; i++) {
    if (Number.isInteger(number) === true && number > 0 && number === this.accounts[i].number) {
      match = this.accounts[i];
    }
  }
  return match;
};

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    // console.log(this.accounts[i]);
    totalAssets += this.accounts[i].getBalance();
    // console.log(this.accounts[i].balance, 'added to balance.');
  }
  return totalAssets;
};
