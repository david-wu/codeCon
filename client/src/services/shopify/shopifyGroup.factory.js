angular.module('services')
    .factory('ShopifyGroup', [
        '$http',
        '$location',
        'Shopify',
        ShopifyGroupFactory
    ]);

function ShopifyGroupFactory($http, $location, Shopify){

    function ShopifyGroup(){
        this.children = [];
    }

    ShopifyGroup.prototype.initFromCookie = function(){
        var that = this;

        var cookies = Cookies.get('shops');
        var shopifyJsons = cookies && JSON.parse(cookies);

        _.each(shopifyJsons, function(shopifyJson){
            that.children.push(new Shopify(shopifyJson));
        });
    };

    ShopifyGroup.prototype.baseUrl = function(){
        return '/api/ShopifyGroup';
    };

    ShopifyGroup.prototype.save = function(){
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

    var shopifyGroup = new ShopifyGroup();
    shopifyGroup.initFromCookie();

    return shopifyGroup;
}

