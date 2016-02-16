angular.module('views')
    .controller('CodeGroupViewer', [
        '$scope',
        'Code',
        'CodeGroup',
        CodeGroupViewer
    ]);

function CodeGroupViewer($scope, Coupon, CodeGroup){
    $scope.CodeGroup = CodeGroup;

    $scope.form = {};

    // $scope.licenseButtons = [
    //     {
    //         text: 'MIT',
    //         value: 'mit',
    //     },
    //     {
    //         text: 'Private',
    //         value: 'private',
    //     },
    // ];

    // $scope.columns = [
    //     {
    //         headerText: 'File Name',
    //         html: function(d){
    //             return d.fileName;
    //         }
    //     },
    //     {
    //         headerText: 'Language',
    //         html: function(d){
    //             return d.language;
    //         }
    //     },
    //     {
    //         headerText: 'Access',
    //         html: function(d){
    //             return d.access;
    //         }
    //     },
    //     {
    //         headerText: 'View',
    //         html: function(d){
    //             return '<i class="fa fa-eye button"></i>';
    //         },
    //         clickHandler: function(d){
    //             if($scope.code === d){
    //                 $scope.code = undefined;
    //             }else{
    //                 $scope.code = d;
    //             }
    //         },
    //     },
    // ];


    $scope.newCode = function(){
        // $scope.code = CodeGroup.createCode({});
        $scope.form.currentFile = CodeGroup.createCode({})
    }


}
