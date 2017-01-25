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

var app = angular.module('loginApp', ['ngCookies']);
//ngCookies Added
app.controller('loginController', ['$scope','$cookies','$window', function ($scope,$cookies,$window) {

    const studentRefObject = firebase.database().ref().child('student');
    $scope.submit = function () {
            ID = $scope.ID;
            $cookies.put('ID',ID);
        //If exists, return true
        studentRefObject.orderByChild("s_id").equalTo(ID).once("value", function(snapshot) {
            var userData = snapshot.val();
            if (userData===null){
                $window.location.href= "index";
            }else {
                $window.location.href= "student";
            }

        });
    }
}]);




// var checking = function() {
    app
        .controller('introduceController', ['$scope','$cookies','$timeout', function ($scope,$cookies,$timeout) {

            const studentRefObject = firebase.database().ref().child('student');



            studentRefObject.orderByChild("s_id").equalTo($cookies.get('ID')).on("child_added", function(snapshot) {
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

