angular.module('views', [])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/codeGroupViewer');

        $stateProvider
            .state('profileViewer', {
                url: '/profileViewer',
                controller: 'ProfileViewer',
                templateUrl: 'views/profileViewer/profileViewer.tpl.html',
            });

        $stateProvider
            .state('codeGroupViewer', {
                url: '/codeGroupViewer',
                controller: 'CodeGroupViewer',
                templateUrl: 'views/codeGroupViewer/codeGroupViewer.tpl.html',
            });

    });