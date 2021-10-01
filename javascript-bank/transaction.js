/* exported Transaction */

function Transaction(type, amount) {
  if ((type === 'deposit' || type === 'withdrawal') && (typeof amount === 'number' && amount > 0)) {
    this.type = type;
    this.amount = amount;
  }
}
