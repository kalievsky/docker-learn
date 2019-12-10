const express = require('express');
const app = express();

const request = require('request');

app.use('/api', (req, res) => {
  request(`http://back${req.url}`, (error, response, body) => {
    if (error) {
      res.send(error);
      return;
    }

    res.json(JSON.parse(body));
  });
});

app.use('/', (req, res) => {
  request(`http://frontend${req.url}`, (error, response, body) => {
    if (error) {
      res.send(error);
      return;
    }

    res.send(body);
  });
});

app.use('*', (req, res) => {
  const error = new Error('Not found');
  error.status = 404;
  res.send(error);
});

app.listen(80);