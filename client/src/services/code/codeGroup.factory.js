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

    CodeGroup.prototype.createCode = function(opt){
        var code = new Code(opt)
        this.children.push(code);
        return code;
    }

    return new CodeGroup();
}

