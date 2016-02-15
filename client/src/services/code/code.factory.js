angular.module('services')
    .factory('Code', [
        '$http',
        '$location',
        CodeFactory
    ]);

function CodeFactory($http, $location){

    function Code(options){
        _.extend(this, options);
        _.defaults(this, {
            content: '',
        })
    }

    Code.prototype.baseUrl = function(){
        return '/api/Code';
    }

    Code.prototype.save = function(query){
        var options = {
            method: 'POST',
            url: this.baseUrl(),
            data: JSON.stringify(this),
        };
        return $http(options)
            .then(function(res){
                console.log(res)
            });
    };

    return Code;
}

