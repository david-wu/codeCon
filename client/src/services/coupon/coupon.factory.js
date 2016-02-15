angular.module('services')
    .factory('Coupon', [
        '$http',
        '$location',
        CouponFactory
    ]);

function CouponFactory($http, $location){

    function Coupon(options){
        _.extend(this, options);
    }

    Coupon.prototype.baseUrl = function(){
        return '/api/Coupon';
    }

    Coupon.prototype.save = function(query){
        var options = {
            method: 'POST',
            url: this.baseUrl(),
            data: JSON.stringify(this),
        };
        return $http(options)
            .then(function(res){
                console.log(res)
            });
    };

    return Coupon;
}

