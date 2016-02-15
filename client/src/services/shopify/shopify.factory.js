angular.module('services')
    .factory('Shopify', [
        '$http',
        '$q',
        ShopifyFactory
    ]);

function ShopifyFactory($http, $q){

    function Shopify(options){
        _.extend(this, options);
    }

    Shopify.prototype.baseUrl = function(){
        return '/api/Shopify';
    };

    Shopify.prototype.save = function(query){
        if(!this.valid()){
            return $q.reject('Invalid Shopify');
        }

        var options = {
            method: 'POST',
            url: this.baseUrl(),
            data: JSON.stringify(this),
        };
        return $http(options)
            .then(function(res){
                window.location.replace(res.data);
            });
    };

    Shopify.prototype.valid = function(){
        return this.shopName;
    }

    return Shopify;
}

