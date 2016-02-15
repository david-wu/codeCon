angular.module('views')
    .controller('CodeSubmitter', [
        '$scope',
        'Code',
        'CodeGroup',
        CodeSubmitter
    ]);

function CodeSubmitter($scope, Code, CodeGroup){
    $scope.CodeGroup = CodeGroup

    var defaultForm = {
        language: 'JavaScript',
        technologies: '',
    };

    $scope.form = _.clone(defaultForm);

    $scope.licenseButtons = [
        {
            text: 'MIT',
            value: 'mit',
        },
        {
            text: 'Private',
            value: 'private',
        },
    ];

    $scope.submitCode = function(){
        CodeGroup.createCode($scope.form);
    };

}
