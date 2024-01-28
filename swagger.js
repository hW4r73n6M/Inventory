const environment = require('./src/_helpers/environments.js');
const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "Inventory API",
        description: "Inventory Application Programming Interface"
    },
    host: "localhost:".concat(environment.HTTP_PORT),
    schemes: ["http"],
};

const outputFile = './swagger.json';
const endpointsFiles = ["./src/routes/inventories.route.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);