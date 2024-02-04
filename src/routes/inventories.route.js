const express = require('express');
const router = express.Router();
const ctrlFn = require('../controllers/inventories.controllers');
const validation = require('../middleware/validate');
const { isAuthencated } = require('../middleware/authenticate');

router.use('/', require('./swagger'));

router.get('/', ctrlFn.getAllInventories);
router.get('/:id', ctrlFn.getInventoryById);
router.post('/', isAuthencated, validation.saveInventory, ctrlFn.createNewInventory);
router.put('/:id', isAuthencated, validation.saveInventory, ctrlFn.modifyInventoryById);
router.delete('/:id', isAuthencated, ctrlFn.deleteInventoryById);

module.exports = router;