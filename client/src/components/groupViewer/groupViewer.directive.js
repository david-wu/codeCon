angular.module('components')
    .directive('groupViewer', [
        GroupViewer
    ]);

function GroupViewer(){
    return {
        scope: {
            items: '=?',
            columns: '=?',
            title: '@?'
        },
        templateUrl: 'components/groupViewer/groupViewer.tpl.html',
        link: linkFunc.bind(null),
    };
}

function linkFunc(scope, element, attrs){
    _.defaults(scope, {
        items: [],
        columns: [],
    });
}