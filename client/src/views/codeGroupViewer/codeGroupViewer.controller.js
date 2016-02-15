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
            headerText: 'File Name',
            html: function(d){
                return d.fileName;
            }
        },
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
                if($scope.code === d){
                    $scope.code = undefined;
                }else{
                    $scope.code = d;
                }
            },
        },
    ];

    $scope.submitCode = function(){
        CodeGroup.createCode($scope.form);
    };

    $scope.newCode = function(){
        $scope.code = CodeGroup.createCode({});
    }


}
