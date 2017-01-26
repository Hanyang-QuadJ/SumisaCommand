(function(){
    angular
        .module('app.login')
        .controller('loginController',loginController);


    loginController.$inject = ['$scope','$window','$timeout','$cookies'];


    function loginController($scope,$window,$timeout,$cookies) {

        const studentRefObject = firebase.database().ref().child('student');

        $scope.submit = function () {
            //If exists, return true
            ID = $scope.ID;
            $cookies.put('ID',ID);
            studentRefObject.orderByChild("s_id").equalTo(ID).once("value", function(snapshot) {

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

