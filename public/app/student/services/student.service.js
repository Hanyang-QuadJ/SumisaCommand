(function() {
    "use strict";

    angular
        .module('app.student')
        .factory('studentService', studentService);


    studentService.$inject = ['$q'];




    function studentService($q) {

        var student = {
            id: '',
            name: '',
            year: '',
            school: '',
        };

        var deferred = $q.defer();

        var service = {

            studentInfo: studentInfo

        };
        return service;

        ////////////

        function studentInfo() {
            const studentRefObject = firebase.database().ref().child('student');
            studentRefObject.orderByChild("id").equalTo('2014038122').once("child_added", function(snapshot) {
                student.name = snapshot.child('name').val();
                student.id = snapshot.child('id').val();
                student.year = snapshot.child('year').val();
                student.school = snapshot.child('school').val();
                deferred.resolve(student);
            });
            return deferred.promise;
        };







    }
})();