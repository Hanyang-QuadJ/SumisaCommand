(function(){
    angular
        .module('app.login')
        .controller('loginController',loginController);


    loginController.$inject = ['$window','$timeout','$cookies'];


    function loginController($window,$timeout,$cookies) {

        var vm = this;
        const studentRefObject = firebase.database().ref().child('student');

        vm.submit = function () {
            //If exists, return true
            var ID = vm.ID;
            $cookies.put('ID',ID);
            studentRefObject.orderByChild("s_id").equalTo(vm.ID).once("value", function(snapshot) {

                var userData = snapshot.val();

                $timeout(function() {
                    if (userData===null){
                        $window.location.href= "index";
                    }else {
                        $window.location.href= "student";
                    }
                });
            });
        }

    };
})();





// var checking = function() {

