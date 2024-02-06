const { route } = require('./swagger');
const router = require('express').Router();
const passport = require('passport');

router.use('/', require('./swagger'));

// router.get('/', (req, res) => {
//     res.send('API Inventory & Supplier');
// });

router.use("/inventories", require('./inventories.route'));
router.use("/suppliers", require('./suppliers.route'));

router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

module.exports = router;