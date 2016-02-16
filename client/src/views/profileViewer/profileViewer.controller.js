angular.module('views')
    .controller('ProfileViewer', [
        '$scope',
        'Code',
        'CodeGroup',
        ProfileViewer
    ]);

function ProfileViewer($scope, Code, CodeGroup){

    $scope.selectSize = 10;

    $scope.files = [
        {
            name: 'a',
        },
        {
            name: 'b',
        },
        {
            name: 'c',
        },
    ];

}
