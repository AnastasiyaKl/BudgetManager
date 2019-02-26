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
app.use(bodyParser.json);
app.use(morgan('dev'));
app.use(cors());
app.set('budgetsecret', config.secret);

consign({cwd: 'services'})
    .include('../../app/setup/')
    .then('../../app/api/')
    .then('../../app/routes/')
    .into(app);

module.exports = app;