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
            var auth;

            auth = firebase.auth();

            auth.signInWithEmailAndPassword(ID, PW).catch(function (error) {
                console.log(error.code);
                console.log(error.message);
            }).then(function () {
                auth.onAuthStateChanged(function (user) {
                    if (user) {

                        console.log("uid="+user.uid);
                        sendUser(user);

                    } else {

                        $window.location.href = "index";
                    }
                });

                function sendUser(user) {
                    $.ajax({
                        url : "/submit",
                        type : 'POST',
                        data : {uid : user.uid},
                        success: function (data) {
                            $window.location.href = "student";
                        },
                        error : function (data) {
                            console.log("fail!");

                        }
                    });
                    // $.ajax({
                    //     url : "/submit",
                    //     type : 'POST',
                    //     data : {uid : user.uid},
                    //     success: function (data) {
                    //
                    //     },
                    //     error : function (data) {
                    //         console.log("fail!");
                    //
                    //     }
                    // });
                    // $.ajax({
                    //     url : "/submit",
                    //     type : 'POST',
                    //     data : {uid : user.uid},
                    //     success: function (data) {
                    //
                    //     },
                    //     error : function (data) {
                    //         console.log("fail!");
                    //
                    //     }
                    // });
                }
            });

            // auth.signInWithEmailAndPassword(ID, PW).catch(function (error) {
            //     console.log(error.code);
            //     console.log(error.message);
            // });
            //
            // auth.signInWithEmailAndPassword(ID, PW).catch(function (error) {
            //     console.log(error.code);
            //     console.log(error.message);
            // });


            // var user = firebase.auth().currentUser;
            //
            // if (user) {
            //     // User is signed in.
            //
            // } else {
            //     // No user is signed in.
            //
            // }





        }
    }
})();