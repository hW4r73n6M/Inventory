const express = require('express');
const router = express.Router();
const ctrlFn = require('../controllers/suppliers.controllers');
const validation = require('../middleware/validate');
const { isAuthencated } = require('../middleware/authenticate');


router.use('/', require('./swagger'));

router.get('/', ctrlFn.getAllSuppliers);
router.get('/:id', ctrlFn.getSupplierById);
router.post('/', isAuthencated, validation.saveSupplier, ctrlFn.createNewSupplier);
router.put('/:id', isAuthencated, validation.saveSupplier, ctrlFn.modifySupplierById);
router.delete('/:id', isAuthencated, ctrlFn.deleteSupplierById);

module.exports = router;