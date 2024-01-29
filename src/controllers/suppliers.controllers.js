const express = require('express');
const srvFn = require('../services/suppliers.services');
const ObjectId = require('mongodb').ObjectId;
// const { body, validationResult } = require('express-validator');


const getAllSuppliers = async (req, res) => {
    //#swagger.tags=['Suppliers']
    try {
        let iData = {};
        const response = await srvFn.getSuppliers(iData);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Internal System Error: ' + err});
    }
}


const getSupplierById = async (req, res) => {
    //#swagger.tags=['Suppliers']
    //validation of the id
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid id to retrieve the supplier.');
    } else {
        try {
            let iData = {
                _id: req.params.id
            };
            const response = await srvFn.getSupplier(iData);
            if (response.error) { return res.status(404).json(response)}
            return res.json(response)
        } catch (err) {
            return res.status(500).json({error: true, message: 'Internal System Error: ' + err});
        }
    }
}


const createNewSupplier = async (req, res) => {
    //#swagger.tags=['Suppliers']
    try {     
        const iData = {
            company: req.body.company,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            jobTitle: req.body.jobTitle,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state
        };

        const response = await srvFn.createSupplier(iData);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Internal System Error: ' + err});
    }
}


const modifySupplierById = async (req, res) => {
    //#swagger.tags=['Suppliers']
    //validation of the id
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid id to update the supplier.');
    } else {
        try {
            const supplierId = new ObjectId(req.params.id);
            const iData = {
                company: req.body.company,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                jobTitle: req.body.jobTitle,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state
            };
            const response = await srvFn.modifySupplier(supplierId, iData);
            if (response.error) { return res.status(404).json(response)}
            return res.json(response)
        } catch (err) {
            return res.status(500).json({error: true, message: 'Internal System Error: ' + err});
        }
    }
}


const deleteSupplierById = async (req, res) => {
    //#swagger.tags=['Suppliers']
    //validation of the id
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid id to delete the supplier.');
    } else {
        try {
            let iData = {
                _id: req.params.id
            };
            const response = await srvFn.deleteSupplier(iData);
            if (response.error) { return res.status(404).json(response)}
            return res.json(response)
        } catch (err) {
            return res.status(500).json({error: true, message: 'Internal System Error: ' + err});
        }
    }
}


module.exports = {
    getAllSuppliers,
    getSupplierById,
    createNewSupplier,
    modifySupplierById,
    deleteSupplierById
};