angular.module('components')
    .directive('codeViewer', [
        CodeViewer
    ]);

function CodeViewer(){
    return {
        scope: {
        },
        templateUrl: 'components/codeViewer/codeViewer.tpl.html',
        link: linkFunc.bind(null),
    };
}

function linkFunc(scope, element, attrs){

    var editor = ace.edit(element[0]);
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");

    console.log(editor)

}
