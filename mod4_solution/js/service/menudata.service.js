(function(){
    'use_strict';

    angular.module('Data')
    .service('MenuDataService',MenuDataServiceFn)
    .constant('API',{
        domain: 'https://davids-restaurant.herokuapp.com/',
        categories: 'categories.json',
        items:'menu_items.json'
    });
    
    MenuDataServiceFn.$inject = ['$http','API'];
    function MenuDataServiceFn($http,API){
        var service = this;

        service.getAllCategories = function(){
            return $http.get({
                url:API.domain + API.categories
            }).then(function(response){
                return response.data;
            })
        };

        service.getItemsForCategory = function(categoryShortName){
            return $http.get({
                url:API.domain + API.items + '?category=' + categoryShortName
            }).then(function(response){
                return response.data;
            })
        };        
    }

})();