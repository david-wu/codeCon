angular.module('views', [])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/shopCreator');

        $stateProvider
            .state('codeSubmitter', {
                url: '/codeSubmitter',
                controller: 'CodeSubmitter',
                templateUrl: 'views/codeSubmitter/codeSubmitter.tpl.html',
            });

        $stateProvider
            .state('codeGroupViewer', {
                url: '/codeGroupViewer',
                controller: 'CodeGroupViewer',
                templateUrl: 'views/codeGroupViewer/codeGroupViewer.tpl.html',
            });

    });