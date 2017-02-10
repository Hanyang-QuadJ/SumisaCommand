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

            const studentDatabase = database.ref("student/" );
            studentDatabase
                .once('value')
                .then(function (snapshot) {
                    console.log(snapshot.val().name);
                });
            return deferred.promise;
        };







    }
})();
