const fs = require('fs');

let myNote = '';
for (var i = 2; i < process.argv.length; i++) {
  myNote += (process.argv[i] + ' ');
}

fs.writeFile('./note.txt', myNote, () => {
  myNote = '';
});
