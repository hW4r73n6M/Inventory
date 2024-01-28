const express = require('express');
const router = express.Router();
const ctrlFn = require('../controllers/inventories.controllers');


router.use('/', require('./swagger'));

router.get('/', ctrlFn.getAllInventories);
router.get('/:id', ctrlFn.getInventoryById);
router.post('/', ctrlFn.createNewInventory);
router.put('/:id', ctrlFn.modifyInventoryById);
router.delete('/:id', ctrlFn.deleteInventoryById);

module.exports = router;