(function(){
    'use_strict';

    angular.module('public')
    .controller('MyInfoController',MyInfoControllerFn);

    MyInfoControllerFn.$inject = ['MenuData'];
    function MyInfoControllerFn(MenuData){
        var controller = this;
        var service = MenuData;

        //controller.isUserRegistered = service.isUserRegistered();
        controller.registeredUser = service.getRegisteredUser();
        controller.imagesPath = service.imagesPath;

    }
})();