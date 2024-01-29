const express = require('express');
const srvFn = require('../services/inventories.services');
const ObjectId = require('mongodb').ObjectId;
// const { body, validationResult } = require('express-validator');


const getAllInventories = async (req, res) => {
    //#swagger.tags=['Inventories']
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
    //#swagger.tags=['Inventories']
    //validation of the id
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid id to retrieve the supplier.');
    } else {
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
}


const createNewInventory = async (req, res) => {
    //#swagger.tags=['Inventories']
    try {        
        const iData = {
            item: req.body.item,
            category: req.body.category,
            comments: req.body.comments,
            description: req.body.description,
            discontinued: req.body.discontinued,
            location: req.body.location,
            manufacture: req.body.manufacture,
            stock_level: req.body.stock_level,
            supplier: req.body.supplier
        };
        
        const response = await srvFn.createInventory(iData);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


const modifyInventoryById = async (req, res) => {
    //#swagger.tags=['Inventories']
    try {
        //validation of the id
        if (!ObjectId.isValid(req.params.id)) {
            res.status(400).json('Must use a valid id to update the inventory.');
        }
        const inventoryId = new ObjectId(req.params.id);
        const iData = {
            item: req.body.item,
            category: req.body.category,
            comments: req.body.comments,
            description: req.body.description,
            discontinued: req.body.discontinued,
            location: req.body.location,
            manufacture: req.body.manufacture,
            stock_level: req.body.stock_level,
            supplier: req.body.supplier
        };
        const response = await srvFn.modifyInventory(inventoryId, iData);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


const deleteInventoryById = async (req, res) => {
    //#swagger.tags=['Inventories']
    //validation of the id
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid id to delete the supplier.');
    } else {
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
}


module.exports = {
    getAllInventories,
    getInventoryById,
    createNewInventory,
    modifyInventoryById,
    deleteInventoryById
};