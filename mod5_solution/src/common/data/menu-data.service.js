(function () {
    'use_strict';

    angular.module('common')
        .service('MenuData', MenuDataFn);

    MenuDataFn.$inject = ['$http', 'MenuAPIPath'];
    function MenuDataFn($http, API) {
        var service = this;

        service.getMenuItem = function (itemShortName) {
            return $http.get(API.base + 'menu_items/' + itemShortName + '.json')
                .then(function (response) {
                    return response.data;
                },
                function (error) {
                    return error;             
                });
        }
    }
})();