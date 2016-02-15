var express = require('express');
var router = express.Router();

router.use('/shopify', require('./shopify.js'))
router.use('/coupon', require('./coupon.js'))

module.exports = router;