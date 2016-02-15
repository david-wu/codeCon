angular.module('views')
    .controller('CouponCreator', [
        '$scope',
        'Coupon',
        'ShopifyGroup',
        CouponCreator
    ]);

function CouponCreator($scope, Coupon, ShopifyGroup){
    var defaultForm = {
        type: 'flat',
        value: 10,
        minimumOrder: 40,
        usageLimit: 2,
        endDate: new Date(Date.now()+7*24*60*60),
        shop: ShopifyGroup.children[0],
    };

    $scope.form = _.clone(defaultForm);
    $scope.ShopifyGroup = ShopifyGroup;

    $scope.couponTypeButtons = [
        {
            text: 'Flat',
            value: 'flat',
        },
        {
            text: '%',
            value: 'percent',
        }
    ];

    $scope.create = function(){
        var coupon = new Coupon($scope.form);
        return coupon.save()
            .then(function(){
                $scope.form = _.clone(defaultForm);
            });
    };

}
