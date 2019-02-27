// const models = require('../setup/index');
// require('module-alias/register');
const models = require('@BudgetManager/app/setup');

console.log("app/routes/auth");

module.exports = (app) => {
    const api = app.BudgetManagerAPI.app.api.auth;
    app/*.route('/')*/
      .get('/',function(req, res) {
          res.send('Budget Manager API');
}
      );
    app.route('/api/v1/auth')
        .post(api.login(models.User));
};
