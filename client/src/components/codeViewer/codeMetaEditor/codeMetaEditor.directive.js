angular.module('components')
    .directive('codeMetaEditor', [
        CodeMetaEditor
    ]);

function CodeMetaEditor(){
    return {
        scope: {
            code: '=',
        },
        templateUrl: 'components/codeViewer/codeMetaEditor/codeMetaEditor.tpl.html',
        link: linkFunc.bind(null),
    };
}

function linkFunc(scope, element, attrs){
    scope.licenseButtons = [
        {
            text: 'Public',
            value: 'public',
        },
        {
            text: 'Private',
            value: 'private',
        },
    ];
}
