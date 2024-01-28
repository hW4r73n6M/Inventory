const environment = require('../_helpers/environments.js');

const getInventories = async (iData) => {
    try {
        const client = await environment.MongoClient.connect(environment.mongoServer);
        const db = client.db(environment.mongoDB);
        let docs = await db.collection('inventory').find({}).toArray();
        await client.close();
        console.log("getInventories >> Response: ", docs);
        return {
            error: false,
            message: 'The data query completed successfully.',
            docs: docs
        };
    } catch (err) {
        console.error("getInventories >> Error: ", err);
        throw err;
    }
}

const getInventory = async (iData) => {
    try {
        const docId = new environment.ObjectId(iData._id)
        const client = await environment.MongoClient.connect(environment.mongoServer);
        const db = client.db(environment.mongoDB);
        let doc = await db.collection('inventory').findOne({"_id": docId});
        await client.close();
        console.log("getInventory >> Response: ", doc);
        return {
            error: false,
            message: 'The data query completed successfully.',
            doc: doc
        };

    } catch (err) {
        console.error("getInventory >> Error: ", err);
        throw err;
    }
}

const createInventory = async (iData) => {
    try {
        const client = await environment.MongoClient.connect(environment.mongoServer);
        const db = client.db(environment.mongoDB);
        let doc = await db.collection('inventory').insertOne(iData);
        await client.close();
        console.log("createInventory >> Response: ", doc);
        return {
            error: false,
            message: 'The record was created successfully.',
            id: doc.insertedId
        };
    } catch (err) {
        console.error("createInventory >> Error: ", err);
        throw err;
    }
}

const modifyInventory = async (iData, user) => {
    try {
        const docId = new environment.ObjectId(iData);
        const docBody = JSON.stringify(iData.body);
        const client = await environment.MongoClient.connect(environment.mongoServer);
        const db = client.db(environment.mongoDB);
        let doc = await db.collection('inventory').replaceOne({ "_id": docId }, user);
        await client.close();
        console.log("modifyInventory >> Response: ", doc);
        console.log("DEBUG >> docBody: ", docBody);
        return {
            error: false,
            message: 'The record was updated successfully.',
            id: iData._id
        };
    } catch (err) {
        console.error("modifyInventory >> Error: ", err);
        throw err;
    }
}


const deleteInventory = async (iData) => {
    try {
        const docId = new environment.ObjectId(iData._id)
        const client = await environment.MongoClient.connect(environment.mongoServer);
        const db = client.db(environment.mongoDB);
        let doc = await db.collection('inventory').deleteOne({"_id": docId});
        await client.close();
        console.log("deleteInventory >> Response: ", doc);
        return {
            error: false,
            message: 'The delete completed successfully.',
            doc: doc
        };

    } catch (err) {
        console.error("deleteInventory >> Error: ", err);
        throw err;
    }
}



module.exports =  {
    getInventories,
    getInventory,
    createInventory,
    modifyInventory,
    deleteInventory,
    modifyInventory,
    deleteInventory
}