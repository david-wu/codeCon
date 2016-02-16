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
    scope.accessButtons = [
        {
            text: 'Private',
            value: 'private',
        },
        {
            text: 'Public',
            value: 'public',
        },
    ];
}
