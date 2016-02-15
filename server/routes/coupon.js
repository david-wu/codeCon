var _ = require('lodash');
var fs = require('fs');
var secrets = JSON.parse(fs.readFileSync('./secret.keys'));
var Shopify = require('shopify-node-api');
var express = require('express');

var router = express.Router();
router.post('/', [ensureShop, ensureCoupon, postCoupon]);

function ensureShop(req, res, next){
    if(!req.body.shop || !req.body.shop.shopName || !req.body.shop.accessToken){
        res.status(400).send({
            message: 'Missing shop.shopName or shop.accessToken'
        });
    }

    var options = _.extend({
        shop: req.body.shop.shopName,
        access_token: req.body.shop.accessToken,
    }, secrets);

    req.shopify = new Shopify(options);
    next();
}

function ensureCoupon(req, res, next){
    if(!req.body.type || !req.body.value){
        res.status(400).send({
            message: 'Missing type or value'
        });
    }

    req.coupon = {
        discount_type: req.body.type==='flat' ? 'fixed_amount' : 'percentage',
        value: req.body.value,
        code: req.body.couponCode,
        minimum_order_amount: req.body.minimumOrder,
        usage_limit: req.body.usageLimit,
    };

    next();
}

function postCoupon(req, res){

    req.shopify.post('/admin/discounts.json', req.coupon, function(err, data){
        if(err){
            res.status(400).send({
                payload: req.coupon,
                error: err,
            });
        }else{
            res.status(200).send(data);
        }
    })

    // // I don't know how to post discounts without Shopify+, this is just to make sure the access token is correct
    // req.shopify.get('/admin/products.json', function(err, data){
    //     if(err){
    //         res.status(400).send(err);
    //     }else{
    //         res.status(200).send(data);
    //     }
    // });

}

module.exports = router;