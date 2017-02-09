(function() {
    "use strict";

    angular
        .module('app.login')
        .factory('loginService', loginService);

    loginService.$inject = ['$window','$firebaseArray'];

    function loginService($window,$firebaseArray) {

        var service = {

            authenticate : authenticate

        };
        return service;

        ////////////

        function authenticate(ID) {
            const studentRefObject = firebase.database().ref().child('student');
            const root = firebase.database().ref();
            studentRefObject.orderByChild("s_id").equalTo(ID).once("value", function(snapshot) {

                var userData = snapshot.val();

                if (userData===null){
                    $window.location.href= "index";
                }else {
                    $window.location.href= "student?uid=~~~";
                }
            });
        };


    }
})();