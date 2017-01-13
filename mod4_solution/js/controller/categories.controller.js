(function(){
    'use_strict';

    angular.module('MenuApp')
    .controller('CategoriesCtrl',CategoriesCtrlFn);

    CategoriesCtrlFn.$inject = ['resolvedCategories'];
    function CategoriesCtrlFn(resolvedCategories){
        var controller = this;

        controller.data = resolvedCategories.then(function(data){
            return data;
        },function(error){
            console.error("xhr error", error);
        });

    }
})();