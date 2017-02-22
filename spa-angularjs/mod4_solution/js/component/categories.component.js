(function(){
    'use_strict';

    angular.module('MenuApp')
    .component('categories',{
        templateUrl:'template/component/categories.html',        
        bindings:{
            data: '<'
        }
    });
})();