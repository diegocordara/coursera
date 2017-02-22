(function () {
    'use_strict';

    angular.module('common')
        .service('MenuData', MenuDataFn);

    MenuDataFn.$inject = ['$http', 'MenuAPIPath'];
    function MenuDataFn($http, API) {
        var service = this;
        var registeredUser = null;

        service.imagesPath = API.base + "images/";
        
        service.setRegisteredUser = function(_registeredUser){
            registeredUser = _registeredUser;
        };
        
        service.getRegisteredUser = function(){
            return registeredUser;
        };

        service.getMenuItem = function (itemShortName) {
            return $http.get(API.base + 'menu_items/' + itemShortName + '.json');               
        }
    }
})();