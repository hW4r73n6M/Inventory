const express = require('express');
const router = express.Router();
const ctrlFn = require('../controllers/inventories.controllers');
const validation = require('../middleware/validate');
const { isAuthenticated } = require('../middleware/authenticate');

router.use('/', require('./swagger'));

router.get('/', ctrlFn.getAllInventories);
router.get('/:id', ctrlFn.getInventoryById);
router.post('/', isAuthenticated, validation.saveInventory, ctrlFn.createNewInventory);
router.put('/:id', isAuthenticated, validation.saveInventory, ctrlFn.modifyInventoryById);
router.delete('/:id', isAuthenticated, ctrlFn.deleteInventoryById);

module.exports = router;