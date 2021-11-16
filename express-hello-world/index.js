const express = require('express');
const app = express();

app.use(function (req, res, next) {
  // eslint-disable-next-line no-console
  // console.log('Method:', req.method);
  res.send('String');
  next();
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening');
});
