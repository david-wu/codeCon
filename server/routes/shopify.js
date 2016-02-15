var _ = require('lodash');
var fs = require('fs');
var secrets = JSON.parse(fs.readFileSync('./secret.keys'));
var Shopify = require('shopify-node-api');
var express = require('express');

var router = express.Router();

router.post('/', [sendData]);

var shopifys = {};
function sendData(req, res){
    var body = req.body;

    var options = _.extend({
        shop: body.shopName || '',
        nonce: (Math.floor(Math.random()*256*256)).toString(),
    }, secrets);

    var shopify = shopifys[body.shopName] = new Shopify(options);

    res.status(200).send(shopify.buildAuthURL());
}


router.get('/finish_auth', [finishAuth]);

function finishAuth(req, res){
    var query_params = req.query;
    var shopName = query_params.shop.replace('.myshopify.com', '')
    var Shopify = shopifys[shopName];

    Shopify.exchange_temporary_token(query_params, function(err, data){
        if(err){
            res.status(400).send(err)
        }else{

            try{
                var shops = JSON.parse(req.cookies.shops);
            }catch(err){
                var shops = [];
            }

            shops.push({
                vendor: 'shopify',
                shopName: shopName,
                accessToken: data.access_token,
                timestamp: +Date.now(),
            });

            res.cookie('shops', JSON.stringify(shops));
            res.redirect('/#/shopCreator');
        }
    });
}



module.exports = router;