const { error } = require('console');
const express = require('express');
const app = express();
const fs = require('fs');
// const { parse } = require('path');
const noteData = require('./data.json');

app.use(express.json());

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/notes', (req, res) => {
  var notesArray = [];
  for (var property in noteData.notes) {
    notesArray.push(noteData.notes[property]);
  }
  res.json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  if (req.params.id < 0 || isNaN(req.params.id)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!noteData.notes[req.params.id]) {
    res.status(404).json({ error: 'cannot find note with id ' + req.params.id });
  } else {
    res.json(noteData.notes[req.params.id]);
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (error) {
    res.status(500).json({ error: 'an unexpected error occurred' });
  } else {
    var newObj = req.body;
    newObj.id = noteData.nextId;
    noteData.notes[noteData.nextId] = newObj;
    noteData.nextId++;
    res.status(201).json(newObj);
    fs.writeFile('./data.json', JSON.stringify(noteData, null, 2), () => {
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  if (req.params.id < 0 || isNaN(req.params.id)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!noteData.notes[req.params.id]) {
    res.status(404).json({ error: 'cannot find note with id ' + req.params.id });
  } else {
    delete noteData.notes[req.params.id];
    res.sendStatus(204);
    fs.writeFile('./data.json', JSON.stringify(noteData, null, 2), () => {
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  if (req.params.id < 0 || isNaN(req.params.id)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } if (!req.body) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (!noteData.notes[req.params.id]) {
    res.status(404).json({ error: 'cannot find note with id ' + req.params.id });
  } else if (error) {
    res.status(500).json({ error: 'an unexpected error occurred' });
  } else {
    noteData.notes[req.params.id] = req.body;
    noteData.notes[req.params.id].id = parseInt(req.params.id);
    res.json(noteData.notes[req.params.id]);
    fs.writeFile('./data.json', JSON.stringify(noteData, null, 2), () => {
    });
  }
});
