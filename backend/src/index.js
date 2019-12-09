const express = require('express');
const app = express();

app.get('/user', (req, res) => {
  res.json({
    id: 1,
    name: 'John Doe',
  });
});

app.use('*', (req, res) => {
  const error = new Error('Not found');
  error.status = 404;
  res.send(error);
});

app.listen(3000);
