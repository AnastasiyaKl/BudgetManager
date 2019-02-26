const passport= require('passport');
const config = require('../../config/index.js');
const models = require('../setup/index');

console.log("app/routes/user");

module.exports = (app) => {
    const api = app.BudgetManagerAPI.app.api.user;
    app.route('/api/v1/setup')
        .post(api.setup(models.User));
    app.route('/api/v1/users')
        .get(passport.authenticate('jwt', config.session), api.index(models.User, app.get('budgetsecret')));
    app.route('/api/v1/signup')
        .post(api.signup(models.User));
};