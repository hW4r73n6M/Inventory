exports.MongoClient = require('mongodb').MongoClient;
exports.ObjectId = require('mongodb').ObjectId;
exports.mongoServer = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SERVER}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
exports.mongoDB = `${process.env.MONGO_DB}`;
exports.ENV = 'Development';
exports.HTTP_PORT = '7443';
