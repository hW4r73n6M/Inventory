const environment = require('../_helpers/environments.js');

const getSuppliers = async (iData) => {
    try {
        const client = await environment.MongoClient.connect(environment.mongoServer);
        const db = client.db(environment.mongoDB);
        let docs = await db.collection('supplier').find({}).toArray();
        await client.close();
        console.log("getSuppliers >> Response: ", docs);
        return {
            error: false,
            message: 'The data query completed successfully.',
            docs: docs
        };
    } catch (err) {
        console.error("getSuppliers >> Error: ", err);
        throw err;
    }
}

const getSupplier = async (iData) => {
    try {
        const docId = new environment.ObjectId(iData._id)
        const client = await environment.MongoClient.connect(environment.mongoServer);
        const db = client.db(environment.mongoDB);
        let doc = await db.collection('supplier').findOne({"_id": docId});
        await client.close();
        console.log("getSupplier >> Response: ", doc);
        return {
            error: false,
            message: 'The data query completed successfully.',
            doc: doc
        };

    } catch (err) {
        console.error("getSupplier >> Error: ", err);
        throw err;
    }
}

const createSupplier = async (iData) => {
    try {
        const client = await environment.MongoClient.connect(environment.mongoServer);
        const db = client.db(environment.mongoDB);
        let doc = await db.collection('supplier').insertOne(iData);
        await client.close();
        console.log("createSupplier >> Response: ", doc);
        return {
            error: false,
            message: 'The record was created successfully.',
            id: doc.insertedId
        };
    } catch (err) {
        console.error("createSupplier >> Error: ", err);
        throw err;
    }
}

const modifySupplier = async (iData, user) => {
    try {
        const docId = new environment.ObjectId(iData);
        const docBody = JSON.stringify(iData.body);
        const client = await environment.MongoClient.connect(environment.mongoServer);
        const db = client.db(environment.mongoDB);
        let doc = await db.collection('supplier').replaceOne({ "_id": docId }, user);
        await client.close();
        console.log("modifySupplier >> Response: ", doc);
        console.log("DEBUG >> docBody: ", docBody);
        return {
            error: false,
            message: 'The record was updated successfully.',
            id: iData._id
        };
    } catch (err) {
        console.error("modifySupplier >> Error: ", err);
        throw err;
    }
}


const deleteSupplier = async (iData) => {
    try {
        const docId = new environment.ObjectId(iData._id)
        const client = await environment.MongoClient.connect(environment.mongoServer);
        const db = client.db(environment.mongoDB);
        let doc = await db.collection('supplier').deleteOne({"_id": docId});
        await client.close();
        console.log("deleteSupplier >> Response: ", doc);
        return {
            error: false,
            message: 'The delete completed successfully.',
            doc: doc
        };

    } catch (err) {
        console.error("deleteSupplier >> Error: ", err);
        throw err;
    }
}



module.exports =  {
    getSuppliers,
    getSupplier,
    createSupplier,
    modifySupplier,
    deleteSupplier,
    modifySupplier,
    deleteSupplier
}