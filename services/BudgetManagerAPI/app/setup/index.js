const mongoose = require('mongoose');
// const UserModel = require('../models/user');
const UserModel = require('@BudgetManagerModels/user');
const models = {
    User: mongoose.model('User')
};

console.log("app/setup/index");

module.exports = models;