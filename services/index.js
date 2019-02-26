// require('module-alias/register');

const http = require('http');

const BudgetManagerAPI = require('./BudgetManagerAPI/config/');
// const BudgetManagerAPI = require('@BudgetManagerAPI');

const requestHandler = (request, response) => {
    console.log(response.status);
    response.end('Hello Node.js Server!');
};

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});
// const BudgetManagerServer = http.createServer(BudgetManagerAPI);

// const BudgetManagerServer = http.Server(BudgetManagerAPI);
const BudgetManagerServer = http.createServer();

const BudgetManagerPORT = 3001;
const port = 3000;
const LOCAL = '127.0.0.1';


// BudgetManagerServer.listen(BudgetManagerPORT, LOCAL, () =>
//     console.log(`BudgetManagerAPI running on ${BudgetManagerPORT}`)
// );

BudgetManagerServer.listen(27017, 'mongodb://127.0.0.1', () =>
    console.log(`BudgetManagerAPI running on ${BudgetManagerPORT}`)
);



server.listen(port, LOCAL, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`All ok =)`)
});

