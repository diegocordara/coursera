(function () {
    'use_strict';

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesCtrlFn);

    CategoriesCtrlFn.$inject = ['resolvedCategories'];
    function CategoriesCtrlFn(resolvedCategories){
        var controller = this;
        controller.data = resolvedCategories;
    }
})();