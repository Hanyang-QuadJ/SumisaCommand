// Initialize Firebase

var student = function (s_id, s_name, s_school, s_phone, s_state) {
    this.s_id = s_id;
    this.s_name = s_name;
    this.s_school = s_school;
    this.s_phone = s_phone;
    this.s_state = s_state;
};

var ID;

var s = new student();

var login = angular.module('loginApp',  ['studentApp']);
login.controller('loginController', ['$scope','$window', function ($scope,$window) {
    const studentRefObject = firebase.database().ref().child('student');
    $scope.student = true;
        $scope.submit = function () {
            ID = $scope.ID;
            $scope.$broadcast('update_parent_controller', $scope.ID);


            if ($scope.student) {

                //If exists, return true
                studentRefObject.orderByChild("s_id").equalTo(ID).once("value", function(snapshot) {
                    var userData = snapshot.val();
                    if (userData===null){
                        $window.location.href= "indexError";
                    }else {
                        $window.location.href= "student";
                    }

                });
            }
        }
    }]);



var studen = angular.module('studentApp', []);
// var checking = function() {
    studen
        .controller('introduceController', ['$scope','$timeout', function ($scope,$timeout) {

            const studentRefObject = firebase.database().ref().child('student');

            var ID;

            $scope.$on("update_parent_controller", function(event, message) {
                 $scope.id = message;
                 console.log($scope.id);
            });

            studentRefObject.orderByChild("s_id").equalTo("2014038122").on("child_added", function(snapshot) {
                    s.s_name = snapshot.child('s_name').val();
                    s.s_id = snapshot.child('s_id').val();
                    s.s_phone = snapshot.child('s_phone').val();
                    s.s_school = snapshot.child('s_school').val();
                    s.s_state = snapshot.child('s_state').val();

                // $scope.name = $firebaseArray(studentRefObject);
                $timeout(function() {
                    $scope.name = s.s_name;
                    $scope.id = s.s_id;
                    $scope.phone = s.s_phone;
                    $scope.school = s.s_school;

                });
            });



        }]);

