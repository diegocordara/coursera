(function () {
    'use_strict';

    angular.module('MenuApp')
        .controller('ItemsController', ItemsControllerFn);

    ItemsControllerFn.$inject = ['resolvedCategoryItems'];
    function ItemsControllerFn(resolvedCategoryItems) {
        var controller = this;

        controller.data = resolvedCategoryItems;
    };
})();