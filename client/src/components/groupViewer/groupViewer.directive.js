angular.module('components')
    .directive('groupViewer', [
        'Column',
        GroupViewer
    ]);

function GroupViewer(Column){
    return {
        scope: {
            data: '=?',
            columns: '=?',
            title: '@?'
        },
        templateUrl: 'components/groupViewer/groupViewer.tpl.html',
        link: linkFunc.bind(null, Column),
    };
}

function linkFunc(Column, scope, element, attrs){
    _.defaults(scope, {
        data: [],
        columns: [],
    });

    scope.$watch(scope.columns, function(column){
        scope.viewerColumns = _.map(scope.columns, function(column){
            return new Column(column);
        });
    })
}