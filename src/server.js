const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const environment = require('./_helpers/environments.js');
const inventoryRoute = require('./routes/inventories.route');
const supplierRoute = require('./routes/suppliers.route');

const app = express();
const options = {
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
};

console.log("Running Environment: ", environment.ENV.toUpperCase());

app.use(cors(options))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use('/apis/inventory/', require('./routes/inventories.route'));
// app.use('/apis/supplier/', require('./routes/suppliers.route'));
app.use('/', require('./routes/index'));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

async function initializeService() {
    const server = app.listen(environment.HTTP_PORT);
    server.setTimeout(180000);
    console.log("Server Listening on Port: ", environment.HTTP_PORT);
}

initializeService();
