(function(){
    'use_strict';

    angular.module('MenuApp')
    .component('items',{
        templateUrl:'template/component/items.html',
        bindings:{
            data: '<'
        }
    })
})();