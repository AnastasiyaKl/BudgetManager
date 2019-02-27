const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const consign = require('consign');
const cors = require('cors');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const app = express();
const passportConfig = require('./passport')(passport);
const config = require('./index.js');
const database = require('./database')(mongoose, config);

console.log("config/app");

app.use(express.static('.'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.set('budgetsecret', config.secret);
consign({ cwd: 'services' })
  .include('BudgetManagerAPI/app/setup')
  .then('BudgetManagerAPI/app/api')
  .then('BudgetManagerAPI/app/routes')
  .into(app);
// app.use(function(req, res, next) {
//   res.send('Hello World');
// });
//
// // requests will never reach this route
// app.get('/', function (req, res) {
//   res.send('Welcome');
// });
module.exports = app;