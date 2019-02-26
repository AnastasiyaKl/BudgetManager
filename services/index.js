// require('module-alias/register');

const http = require('http');

const BudgetManagerAPI = require('./BudgetManagerAPI/config/');
// const BudgetManagerAPI = require('@BudgetManagerAPI');

const requestHandler = (request, response) => {
    console.log(response.status);
    response.end('Hello Node.js Server!');
};

// const BudgetManagerServer = http.createServer(requestHandler);
const BudgetManagerServer = http.Server(BudgetManagerAPI);
const BudgetManagerPORT = 3001;
const LOCAL = '0.0.0.0';


BudgetManagerServer.listen(BudgetManagerPORT, LOCAL, () => console.log(`BudgetManagerAPI running on ${BudgetManagerPORT}`));


// BudgetManagerServer.listen(BudgetManagerPORT,  (err) => {
//     if (err) {
//         return console.log('something bad happened', err)
//     }
//     console.log(`BudgetManagerAPI running on port ${BudgetManagerPORT}`)
// });
