const express = require('express');
const router = express.Router();
const ctrlFn = require('../controllers/inventories.controllers');
const validation = require('../middleware/validate');

router.use('/', require('./swagger'));

router.get('/', ctrlFn.getAllInventories);
router.get('/:id', ctrlFn.getInventoryById);
router.post('/', validation.saveInventory, ctrlFn.createNewInventory);
router.put('/:id', validation.saveInventory, ctrlFn.modifyInventoryById);
router.delete('/:id', ctrlFn.deleteInventoryById);

module.exports = router;