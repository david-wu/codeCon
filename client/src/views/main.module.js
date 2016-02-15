angular.module('views', [])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/shopCreator');

        $stateProvider
            .state('shopCreator', {
                url: '/shopCreator',
                controller: 'ShopCreator',
                templateUrl: 'views/shopCreator/shopCreator.tpl.html',
            });

        $stateProvider
            .state('couponCreator', {
                url: '/couponCreator',
                controller: 'CouponCreator',
                templateUrl: 'views/couponCreator/couponCreator.tpl.html',
            });

    });