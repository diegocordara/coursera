(function () {
    'use_strict';

    angular.module('public')
        .controller('SignUpController', SignUpControllerFn);

    SignUpControllerFn.$inject = ['MenuData'];
    function SignUpControllerFn(MenuData) {
        var controller = this;
        var service = MenuData;

        controller.favDishErrMsg = '';

        controller.registeredUser = {
            firstName: '',
            lastName: '',
            email: '',
            telephone: '',
            favoriteDish: ''
        };

        controller.signUp = function () {
            console.log(controller.registeredUser.favoriteDish);
            if (controller.registeredUser.favoriteDish) {
                var response = service.getMenuItem(controller.registeredUser.favoriteDish);
                processResponse(response);                
            } else {
                controller.favDishErrMsg = "Please, provide a menu name";
            }
        };

        function processResponse(response){
            switch(response.status){
                case 1:
                    console.log(response.value);
                    controller.favDishErrMsg = "";
                    break;
                case 500:
                    controller.favDishErrMsg = "No such menu number exists";
                    break;
                default:
                    controller.favDishErrMsg = "Unexpected error";
                    break;
            }
        }

    };
})();