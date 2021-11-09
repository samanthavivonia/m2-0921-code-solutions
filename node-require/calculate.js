const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

if (process.argv[3] === 'plus') {
  console.log(add(parseInt(process.argv[2]), parseInt(process.argv[4])));
}

if (process.argv[3] === 'minus') {
  console.log(subtract(parseInt(process.argv[2]), parseInt(process.argv[4])));
}

if (process.argv[3] === 'times') {
  console.log(multiply(parseInt(process.argv[2]), parseInt(process.argv[4])));
}

if (process.argv[3] === 'over') {
  console.log(divide(parseInt(process.argv[2]), parseInt(process.argv[4])));
}
