(function(){

    angular
        .module('app.student')
        .controller('introduceController',introduceController);


    introduceController.$inject = ['$scope','$timeout','$cookies'];


    function introduceController($scope,$timeout,$cookies) {

        const studentRefObject = firebase.database().ref().child('student');

        var student = function (s_id, s_name, s_school, s_phone, s_state) {
            this.s_id = s_id;
            this.s_name = s_name;
            this.s_school = s_school;
            this.s_phone = s_phone;
            this.s_state = s_state;
        };



        var s = new student();



        studentRefObject.orderByChild("s_id").equalTo($cookies.get('ID')).on("child_added", function(snapshot) {

            s.s_name = snapshot.child('s_name').val();
            s.s_id = snapshot.child('s_id').val();
            s.s_phone = snapshot.child('s_phone').val();
            s.s_school = snapshot.child('s_school').val();
            s.s_state = snapshot.child('s_state').val();

            $timeout(function() {
                $scope.name = s.s_name;
                $scope.id = s.s_id;
                $scope.phone = s.s_phone;
                $scope.school = s.s_school;

            });
        });


    };


})();

