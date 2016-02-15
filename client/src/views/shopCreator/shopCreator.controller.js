angular.module('views')
    .controller('ShopCreator', [
        '$scope',
        '$q',
        '$filter',
        'Shopify',
        'ShopifyGroup',
        ShopCreator
    ]);

function ShopCreator($scope, $q, $filter, Shopify, ShopifyGroup){
    $scope.ShopifyGroup = ShopifyGroup;

    // Used for groupViewer
    $scope.shopifyColumns = [
        {
            headerName: 'Name',
            text: function(d){
                return d.shopName;
            },
        },
        {
            headerName: 'Vendor',
            text: function(d){
                return d.vendor;
            },
        },
        {
            headerName: 'Access Token',
            text: function(d){
                return d.accessToken;
            },
        },
        {
            headerName: 'Created At',
            text: function(d){
                return $filter('date')(new Date(d.timestamp), "MMM d, yyyy 'at' h:mm a");
            },
        }
    ];

    $scope.shopVendors = [
        {
            name: 'shopify',
        }
    ]

    $scope.form = {
        shopVendor: $scope.shopVendors[0],
    };

    $scope.create = function(){
        var shopify = new Shopify($scope.form);
        return shopify.save();
    };
}