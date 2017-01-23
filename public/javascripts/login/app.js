// Initialize Firebase
var student = function (s_id, s_name, s_school, s_phone, s_state) {
    this.s_id = s_id;
    this.s_name = s_name;
    this.s_school = s_school;
    this.s_phone = s_phone;
    this.s_state = s_state;
};
var s = new student();
var login = angular.module('loginApp',  ["ngRoute"]);
login.controller('loginController', ['$scope','$window', function ($scope,$window) {
        $scope.student = true;
        $scope.submit = function () {
            var ID = $scope.ID;


            if ($scope.student) {
                const studentRefObject = firebase.database().ref().child('student');

                //If exists, return true
                studentRefObject.orderByChild("s_id").equalTo(ID).once("value", function(snapshot) {
                    var userData = snapshot.val();
                    if (userData===null){
                        $window.location.href= "indexError";
                    }

                });

                //Ordering and finding
                studentRefObject.orderByChild("s_id").equalTo(ID).on("child_added", function(snapshot) {

                    s.s_name = snapshot.child('s_name').val();
                    s.s_id = snapshot.child('s_id').val();
                    s.s_phone = snapshot.child('s_phone').val();
                    s.s_school = snapshot.child('s_school').val();
                    s.state = snapshot.child('s_state').val();

                });
            }
        }
    }]);
login.config(function($routeProvider) {
    $routeProvider
        .when("/login", {
            template : "올바르지 않은 회원정보 입니다."
        });

});
var student = angular.module('studentApp', []);
student
    .controller('profileController', ['$scope', function ($scope) {
        // $scope.name =
    }]);
