(function () {
    'use_strict';

    angular.module('Data')
        .service('MenuDataService', MenuDataServiceFn)
        .constant('API', {
            domain: 'https://davids-restaurant.herokuapp.com/',
            categories: 'categories.json',
            items: 'menu_items.json'
        });

    MenuDataServiceFn.$inject = ['$http', 'API'];
    function MenuDataServiceFn($http, API) {
        var service = this;

        service.getAllCategories = function () {
            return $http.get(API.domain + API.categories)
                .then(function (response) {
                    return response.data;
                },
                function (error) {
                    console.error("getAllCategoriesXhr error", error);
                });
        };

        service.getItemsForCategory = function (categoryShortName) {            
            return $http.get(API.domain + API.items + '?category=' + categoryShortName)
                .then(function (response) {
                    return response.data.menu_items;
                },
                function (error) {
                    console.error("getItemsForCategoryXhr error", error);
                });
        };
    }

})();