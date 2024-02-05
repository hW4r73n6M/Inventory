const dotenv = require('dotenv');
dotenv.config();  

exports.MongoClient = require('mongodb').MongoClient;
exports.ObjectId = require('mongodb').ObjectId;
exports.mongoServer = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_SERVER}/${MONGO_DB}?retryWrites=true&w=majority`;
exports.mongoDB = `${MONGO_DB}`;
exports.ENV = 'Development';
exports.HTTP_PORT = '7443';
