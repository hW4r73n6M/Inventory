const express = require('express');
const router = express.Router();
const ctrlFn = require('../controllers/suppliers.controllers');
const validation = require('../middleware/validate');
const { isAuthenticated } = require('../middleware/authenticate');


router.use('/', require('./swagger'));

router.get('/', ctrlFn.getAllSuppliers);
router.get('/:id', ctrlFn.getSupplierById);
router.post('/', isAuthenticated, validation.saveSupplier, ctrlFn.createNewSupplier);
router.put('/:id', isAuthenticated, validation.saveSupplier, ctrlFn.modifySupplierById);
router.delete('/:id', isAuthenticated, ctrlFn.deleteSupplierById);

module.exports = router;