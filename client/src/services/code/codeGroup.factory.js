angular.module('services')
    .factory('CodeGroup', [
        '$http',
        '$location',
        'Code',
        CodeGroupFactory
    ]);

function CodeGroupFactory($http, $location, Code){

    function CodeGroup(){
        this.children = [];
    }

    // CodeGroup.prototype.baseUrl = function(){
    //     return '/api/CodeGroup';
    // }

    // CodeGroup.prototype.save = function(query){
    //     var options = {
    //         method: 'POST',
    //         url: this.baseUrl(),
    //         data: JSON.stringify(this),
    //     };
    //     return $http(options)
    //         .then(function(res){
    //             console.log(res)
    //         });
    // };

    CodeGroup.prototype.createCode = function(opt){
        this.children.push(new Code(opt));
    }

    return new CodeGroup();
}

