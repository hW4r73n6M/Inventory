const express = require('express');
const router = express.Router();
const ctrlFn = require('../controllers/suppliers.controllers');
const validation = require('../middleware/validate');


router.use('/', require('./swagger'));

router.get('/', ctrlFn.getAllSuppliers);
router.get('/:id', ctrlFn.getSupplierById);
router.post('/', validation.saveSupplier, ctrlFn.createNewSupplier);
router.put('/:id', validation.saveSupplier, ctrlFn.modifySupplierById);
router.delete('/:id', ctrlFn.deleteSupplierById);

module.exports = router;