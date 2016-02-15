angular.module('views')
    .controller('CodeGroupViewer', [
        '$scope',
        'Code',
        'CodeGroup',
        CodeGroupViewer
    ]);

function CodeGroupViewer($scope, Coupon, CodeGroup){
    $scope.CodeGroup = CodeGroup;

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

    $scope.columns = [
        {
            headerText: 'Language',
            html: function(d){
                return d.language;
            }
        },
        {
            headerText: 'License',
            html: function(d){
                return d.license;
            }
        },
        {
            headerText: 'View',
            html: function(d){
                return '<i class="fa fa-eye button"></i>';
            },
            clickHandler: function(d){
                console.log(d)
            },
        },
    ];

    $scope.submitCode = function(){
        CodeGroup.createCode($scope.form);
    };


}
