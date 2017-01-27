(function() {
    "use strict";

    angular
        .module('app.student')
        .factory('studentService', studentService);


    studentService.$inject = ['$cookies','$q'];




    function studentService($cookies,$q) {

        var student = function (s_id, s_name, s_school, s_phone, s_state) {
            this.s_id = s_id;
            this.s_name = s_name;
            this.s_school = s_school;
            this.s_phone = s_phone;
        };

        var s = new student();

        var deferred = $q.defer();

        var service = {

            studentInfo: studentInfo


        };
        return service;

        ////////////

        function studentInfo() {
            const studentRefObject = firebase.database().ref().child('student');
            studentRefObject.orderByChild("s_id").equalTo($cookies.get('ID')).once("child_added", function(snapshot) {
                s.s_name = snapshot.child('s_name').val();
                s.s_id = snapshot.child('s_id').val();
                s.s_phone = snapshot.child('s_phone').val();
                s.s_school = snapshot.child('s_school').val();
                deferred.resolve(s);
            });
            return deferred.promise;
        };






    }
})();