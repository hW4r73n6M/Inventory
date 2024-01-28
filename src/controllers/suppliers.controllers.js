const express = require('express');
const srvFn = require('../services/suppliers.services');
const { body, validationResult } = require('express-validator');


const getAllSuppliers = async (req, res) => {
    try {
        let iData = {};
        const response = await srvFn.getSuppliers(iData);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


const getSupplierById = async (req, res) => {
    try {
        let iData = {
            _id: req.params.id
        };
        const response = await srvFn.getSupplier(iData);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


const createNewSupplier = async (req, res) => {
    try {
        let iData = req.body;
        body('company').exists().isLength({ min: 3}).withMessage('must be at least 3 chars long.')
        body('firstName').exists().isLength({ min: 2}).withMessage('must be at least 2 chars long.')
        body('lastName').exists().isLength({ min: 3}).withMessage('must be at least 3 chars long.')
        body('email').exists().isEmail.withMessage('must contain a valid email address.')
        body('jobTitle').exists().not().isEmpty().withMessage('must contain a job title.')
        body('address').exists().not().isEmpty().withMessage('must contain an address.')
        body('city').exists().not().isEmpty().withMessage('must contain a city name.')
        body('state').exists().not().isEmpty().withMessage('must contain a state name.')
        
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }


        const response = await srvFn.createSupplier(iData);        
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


const modifySupplierById = async (req, res) => {
    try {
        let iData = {
            _id: req.params.id
        };
        const user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        };
        const response = await srvFn.modifySupplier(iData, user);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


const deleteSupplierById = async (req, res) => {
    try {
        let iData = {
            _id: req.params.id
        };
        const response = await srvFn.deleteSupplier(iData);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


module.exports = {
    getAllSuppliers,
    getSupplierById,
    createNewSupplier,
    modifySupplierById,
    deleteSupplierById
};