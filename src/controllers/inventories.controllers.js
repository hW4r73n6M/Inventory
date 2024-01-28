const express = require('express');
const srvFn = require('../services/inventories.services');
const { body, validationResult } = require('express-validator');


const getAllInventories = async (req, res) => {
    try {
        let iData = {};
        const response = await srvFn.getInventories(iData);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


const getInventoryById = async (req, res) => {
    try {
        let iData = {
            _id: req.params.id
        };
        const response = await srvFn.getInventory(iData);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


const createNewInventory = async (req, res) => {
    try {
        let iData = req.body;
        body('item').exists().isLength({ min: 5}).withMessage('must be at least 5 chars long.')
        body('category').exists().isLength({ min: 7}).withMessage('must be at least 7 chars long.')
        body('comments').isString().withMessage('must be a valid comment.')
        body('description').exists().not().isEmpty().withMessage('must contain an item description.')
        body('discontinued').exists().isBoolean().withMessage('must be true/false.')
        body('location').exists().not().isEmpty().withMessage('must contain an address.')
        body('manufacture').exists().not().isEmpty().withMessage('must contain a manufacture name.')
        body('stock_level').exists().isNumeric().withMessage('must be a valid number.')
        body('supplier').exists().not().isEmpty().withMessage('must contain a supplier name.')
        
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }


        const response = await srvFn.createInventory(iData);        
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


const modifyInventoryById = async (req, res) => {
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
        const response = await srvFn.modifyInventory(iData, user);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


const deleteInventoryById = async (req, res) => {
    try {
        let iData = {
            _id: req.params.id
        };
        const response = await srvFn.deleteInventory(iData);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


module.exports = {
    getAllInventories,
    getInventoryById,
    createNewInventory,
    modifyInventoryById,
    deleteInventoryById
};