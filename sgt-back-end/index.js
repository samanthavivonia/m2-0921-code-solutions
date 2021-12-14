const pg = require('pg');
const express = require('express');
const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
app.use(express.json());

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

// GET ALL GRADES --------------------------------------------------------------

app.get('/api/grades', (req, res, next) => {
  // query the database
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      // the query succeeded
      const grades = result.rows;
      res.json(grades);
    })
    .catch(err => {
      // the query failed for some reason
      console.error(err);
      // respond to the client with a generic 500 error message
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// GET GRADE BY ID REQUEST -----------------------------------------------------

app.get('/api/grades/:gradeId', (req, res, next) => {
  // validate the input(s)
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer.'
    });
    return;
  }
  // then query the database
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      // the query succeeded
      const grade = result.rows[0];
      if (!grade) {
        // the grade being requested doesn't exist!
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        // the grade was found in the database, yay!
        res.json(grade);
      }
    })
    .catch(err => {
      // the query failed for some reason
      console.error(err);
      // respond to the client with a generic 500 error message
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});

// POST NEW GRADE --------------------------------------------------------------

app.post('/api/grades', (req, res, next) => {
  // validate the input(s)
  if (!req.body.name) {
    res.status(400).json({
      error: 'Must include name'
    });
    return;
  }
  if (!req.body.course) {
    res.status(400).json({
      error: 'Must include course'
    });
    return;
  }
  if (!req.body.score) {
    res.status(400).json({
      error: 'Must include score'
    });
    return;
  }
  const scoreInt = Number(req.body.score);
  if (!Number.isInteger(scoreInt) || scoreInt < 0 || scoreInt > 100) {
    res.status(400).json({
      error: 'Score must be an integer between 0 and 100'
    });
    return;
  }
  // then query the database
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;
  const params = [req.body.name, req.body.course, req.body.score];
  db.query(sql, params)
    .then(result => {
      // the query succeeded
      const grade = result.rows[0];
      res.json(grade);
    })
    .catch(err => {
      // the query failed for some reason
      console.error(err);
      // respond to the client with a generic 500 error message
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});

// UPDATE GRADE BY ID REQUEST --------------------------------------------------

app.put('/api/grades/:gradeId', (req, res, next) => {
  // validate the input(s)
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  if (!req.body.name) {
    res.status(400).json({
      error: 'Must include name'
    });
    return;
  }
  if (!req.body.course) {
    res.status(400).json({
      error: 'Must include course'
    });
    return;
  }
  if (!req.body.score) {
    res.status(400).json({
      error: 'Must include score'
    });
    return;
  }
  const scoreInt = Number(req.body.score);
  if (!Number.isInteger(scoreInt) || scoreInt < 0 || scoreInt > 100) {
    res.status(400).json({
      error: 'Score must be an integer between 0 and 100'
    });
    return;
  }
  // then query the database
  const sql = `
    update "grades"
      set "name" = $2,
          "course" = $3,
          "score" = $4
      where "gradeId" = $1
      returning *;
  `;
  const params = [gradeId, req.body.name, req.body.course, req.body.score];
  db.query(sql, params)
    .then(result => {
      // the query succeeded
      const grade = result.rows[0];
      if (!grade) {
        // the grade being requested doesn't exist!
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        // the grade was found in the database, yay!
        res.json(grade);
      }
    })
    .catch(err => {
      // the query failed for some reason
      console.error(err);
      // respond to the client with a generic 500 error message
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// DELETE GRADE BY ID REQUEST --------------------------------------------------

app.delete('/api/grades/:gradeId', (req, res, next) => {
  // validate the input(s)
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  // then query the database
  const sql = `
    delete from "grades"
      where "gradeId" = $1
      returning *;
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      // the query succeeded
      const grade = result.rows[0];
      if (!grade) {
        // the grade being requested doesn't exist!
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        // the grade was found in the database, yay!
        res.json(grade);
      }
    })
    .catch(err => {
      // the query failed for some reason
      console.error(err);
      // respond to the client with a generic 500 error message
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
