angular.module('components')
    .factory('Column', [
        ColumnFactory
    ]);

function ColumnFactory($http, $location){

    function Column(options){
        _.extend(this, options);
    }

    Column.prototype.clickHandler = function(){};

    Column.prototype.class = function(){};

    Column.prototype.html = function(){return ''};

    return Column;
}

