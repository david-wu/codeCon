angular.module('components')
    .directive('codeViewer', [
        CodeViewer
    ]);

function CodeViewer(Code, CodeGroup){
    return {
        scope: {
            code:'=',
        },
        templateUrl: 'components/codeViewer/codeViewer.tpl.html',
        link: linkFunc.bind(null),
    };
}

function linkFunc(scope, element, attr){

}