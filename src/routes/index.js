const router = require('express').Router();
router.use('/', require('./swagger'));

router.use("/inventories", require('./inventories.route'));
router.use("/suppliers", require('./suppliers.route'));


module.exports = router;