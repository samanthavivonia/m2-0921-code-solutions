const fs = require('fs');
const noteData = require('./data.json');

if (process.argv[2] === 'read') {
  for (var property in noteData.notes) {
    console.log(`${property}. ${noteData.notes[property]}`);
  }
}

var noteBody = '';
if (process.argv[2] === 'create') {
  for (var i = 3; i < process.argv.length; i++) {
    noteBody += (process.argv[i] + ' ');
    noteBody = noteBody.trim();
  }
  noteData.notes[noteData.nextId] = noteBody;
  noteBody = '';
  noteData.nextId++;
  fs.writeFile('./data.json', JSON.stringify(noteData, null, 2), () => {
    console.log('Note created!');
  });
}

if (process.argv[2] === 'delete') {
  delete noteData.notes[process.argv[3]];
  fs.writeFile('./data.json', JSON.stringify(noteData, null, 2), () => {
    console.log('Note deleted!');
  });
}

if (process.argv[2] === 'update') {
  for (i = 4; i < process.argv.length; i++) {
    noteBody += (process.argv[i] + ' ');
    noteBody = noteBody.trim();
  }
  noteData.notes[process.argv[3]] = noteBody;
  noteBody = '';
  fs.writeFile('./data.json', JSON.stringify(noteData, null, 2), () => {
    console.log('Note Updated!');
  });
}
