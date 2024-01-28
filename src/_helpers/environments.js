const MONGO_USER = 'hguillen';
const MONGO_PASSWORD = 'aWDRzW4u4qfmxXb2';
const MONGO_SERVER = 'cluster0.q5nojgs.mongodb.net';
const MONGO_DB = 'cse341';

exports.MongoClient = require('mongodb').MongoClient;
exports.ObjectId = require('mongodb').ObjectId;
exports.mongoServer = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_SERVER}/${MONGO_DB}?retryWrites=true&w=majority`;
exports.mongoDB = `${MONGO_DB}`;
exports.ENV = 'Development';
exports.HTTP_PORT = '7443';