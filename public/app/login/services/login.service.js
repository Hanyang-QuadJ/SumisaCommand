(function () {
    "use strict";

    angular
        .module('app.login')
        .factory('loginService', loginService);

    loginService.$inject = ['$window'];

    function loginService($window) {
        var service = {

            authenticate: authenticate

        };
        return service;

        ////////////

        function authenticate(ID, PW) {
            var auth, userInfo;

            auth = firebase.auth();

            auth.signInWithEmailAndPassword(ID, PW).catch(function (error) {
                console.log(error.code);
                console.log(error.message);
            });

            auth.onAuthStateChanged(function (user) {
                if (user) {
                    userInfo = user;
                    $.ajax({
                        url : "/submit",
                        type : 'POST',
                        data : {uid : userInfo.uid},
                        success: function (data) {
                            $window.location.href = "student";
                        },
                        error : function (data) {
                            console.log("fail!");

                        }
                    });

                } else {
                    $window.location.href = "index";

                }
            });

        }
    }
})();