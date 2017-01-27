(function(){
    "use strict";
    angular
        .module('app.login')
        .controller('loginController',loginController);


    loginController.$inject = ['loginService'];


    function loginController(loginService) {

        var vm = this;
        vm.submit = submit;
        vm.ID = "";


        function submit(){

            loginService.authenticate(vm.ID);

        };



    }
})();






