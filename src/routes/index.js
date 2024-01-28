const router = require('express').Router();
router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    res.send('API Inventory & Supplier');
});

router.use("/inventories", require('./inventories.route'));
router.use("/suppliers", require('./suppliers.route'));


module.exports = router;