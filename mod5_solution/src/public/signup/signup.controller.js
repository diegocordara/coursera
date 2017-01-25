(function () {
    'use_strict';

    angular.module('public')
        .controller('SignUpController', SignUpControllerFn);

    SignUpControllerFn.$inject = ['MenuData','$scope'];
    function SignUpControllerFn(MenuData,$scope) {
        var controller = this;
        var service = MenuData;

        controller.favDishErrMsg = '';
        controller.successSignUp = false;        

        var registeredUser = {
            firstName: '',
            lastName: '',
            email: '',
            telephone: '',
            favoriteDish: ''
        };

        controller.registeredUser = angular.copy(registeredUser);

        controller.signUp = function () {
            if (controller.registeredUser.favoriteDish) {
                service.getMenuItem(controller.registeredUser.favoriteDish)
                    .then(function (response) {
                        controller.registeredUser.favoriteDish = response.data;
                        service.setRegisteredUser(controller.registeredUser);                                                                        
                        controller.successSignUp = true;
                        $scope.signupForm.$setUntouched();
                        controller.registeredUser = angular.copy(registeredUser);
                        controller.favDishErrMsg = "";
                        console.log(service.getRegisteredUser());
                    },
                    function (error) {
                        controller.favDishErrMsg = "No such menu number exists";
                        controller.successSignUp = false;
                    });
            } else {
                controller.favDishErrMsg = "Please, provide a menu name";
                controller.successSignUp = false;
            }
        };
    };
})();