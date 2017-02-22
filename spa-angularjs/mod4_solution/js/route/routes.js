(function () {
    'use_strict';

    angular.module('MenuApp')
        .config(RoutesConfig);


    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function RoutesConfig($stateProvider,$urlRouterProvider,$locationProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'template/view/home.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'template/view/categories.html',
                controller: 'CategoriesController as ctrl',
                resolve: {
                    resolvedCategories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('items',{
                url: '/categories/{short_name}',
                templateUrl: 'template/view/items.html',
                controller: 'ItemsController as ctrl',
                resolve: {
                    resolvedCategoryItems: ['MenuDataService','$stateParams', function(MenuDataService,$stateParams){
                        return MenuDataService.getItemsForCategory($stateParams.short_name);
                    }]
                }
            });     
    }
})();