(function () {
    'use_strict';

    angular.module('MenuApp')
        .config(RoutesConfig);


    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function RoutesConfig($stateProvider,$urlRouterProvider,$locationProvider) {

        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('home'); 

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
            });                      
    }
})();