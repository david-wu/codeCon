angular.module('components')
    .directive('codeEditor', [
        CodeEditor
    ]);

function CodeEditor(){
    return {
        scope: {
            code: '=',
        },
        templateUrl: 'components/codeViewer/codeEditor/codeEditor.tpl.html',
        link: linkFunc.bind(null),
    };
}

function linkFunc(scope, element, attrs){

    var editor = ace.edit(element[0]);
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");


    scope.$watch('code', function(currCode, prevCode){
        prevCode.content = editor.getValue();
        editor.setValue(currCode.content);
    })

    scope.$on('$destroy', function(){
        scope.code.content = editor.getValue();
    })

}
