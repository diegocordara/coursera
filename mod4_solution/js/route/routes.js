(function(){
    'use_strict';
    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
    function RoutesConfig($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('categories',{
                url:'/categories',
                templateUrl:'template/view/categories.html',
                resolve:{
                    resolvedCategories: ['MenuDataService', function(MenuDataService){
                        return MenuDataService.getAllCategories();
                    }]
                },
                controller: "CategoriesController as ctrl"
            });
    }
})();