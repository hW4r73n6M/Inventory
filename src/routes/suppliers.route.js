const express = require('express');
const router = express.Router();
const ctrlFn = require('../controllers/suppliers.controllers');


router.use('/', require('./swagger'));

router.get('/', ctrlFn.getAllSuppliers);
router.get('/:id', ctrlFn.getSupplierById);
router.post('/', ctrlFn.createNewSupplier);
router.put('/:id', ctrlFn.modifySupplierById);
router.delete('/:id', ctrlFn.deleteSupplierById);

module.exports = router;