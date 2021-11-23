const express = require('express');
const app = express();

var nextId = 1;
var grades = {};

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/grades', (req, res) => {
  var gradesArray = [];
  for (var property in grades) {
    gradesArray.push(grades[property]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  res.status(201);
  var newObj = req.body;
  newObj.id = nextId;
  grades[nextId] = newObj;
  nextId++;
  res.json(newObj);
});
