const express = require('express');
const bodyParser = require('body-parser');
const {sequelize, User} = require('./sequelize.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/user-list', (req, res) => {
  User.findAll()
    .then(userList => {
      res.json(userList);
    })
});

app.post('/user', (req, res) => {
  if (!req.body.name) {
    res.status(400);
    res.json();
    return;
  }

  User.create({
    name: req.body.name,
  })
    .then(() => {
      res.json({});
    })
});

app.use('*', (req, res) => {
  const error = new Error('Not found');
  error.status = 404;
  res.send(error);
});

app.listen(80);
