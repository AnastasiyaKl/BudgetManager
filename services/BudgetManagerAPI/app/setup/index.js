const mongoose = require('mongoose');
const UserModel = require('@BudgetManagerModels/user');
const BudgetModel = require('@BudgetManagerModels/budget');
const ClientModel = require('@BudgetManagerModels/client');


const models = {
    User: mongoose.model('User'),
    Budget: mongoose.model('Budget'),
    Client: mongoose.model('Client'),
};

console.log("app/setup/index");

module.exports = models;