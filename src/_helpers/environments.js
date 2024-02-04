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

const GITHUB_CLIENT_SECRET = '7273230466bd780d717c2c3141f1dd4a7d8debb4';
const GITHUB_CLIENT_ID = 'b51154d7fb9b0719c89b';
const CALLBACK_URL = 'http://localhost:7443/github/callback';