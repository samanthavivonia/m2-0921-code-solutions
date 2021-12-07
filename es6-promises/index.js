const takeAChance = require('./take-a-chance');

var takeAChanceSam = takeAChance('Sam')
  .then(
    resolve => console.log(resolve)
  )
  .catch(
    reject => console.log(reject)
  );
