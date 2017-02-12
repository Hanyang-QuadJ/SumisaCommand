(function() {
    "use strict";

    angular
        .module('app.student')
        .factory('studentService', studentService);

    studentService.$inject = ['$q'];




    function studentService($q) {
        var database = firebase.database();
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

            var uid = document.querySelector('#uid').innerHTML;
            const studentDatabase = database.ref("student/" + uid);
            studentDatabase
                .once('value')
                .then(function (snapshot) {

                    student.id = snapshot.val().id;
                    student.name = snapshot.val().name;
                    student.year = snapshot.val().year;
                    student.school = snapshot.val().school;
                    deferred.resolve(student);
                });

            return deferred.promise;
        };
    }
})();
