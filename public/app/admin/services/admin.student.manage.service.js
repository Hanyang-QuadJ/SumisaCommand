(function() {
    "use strict";

    angular
        .module('app.admin')
        .factory('adminStudentManageService', adminStudentManageService);

    adminStudentManageService.$inject = ['$q','$firebaseArray'];

    function adminStudentManageService($q,$firebaseArray) {

        var deferred = $q.defer();
        var service = {

            getStudentArray : getStudentArray

        };
        return service;

        ////////////

        function getStudentArray() {
            var studentRefObject = firebase.database().ref().child('student');
            var arr = $firebaseArray(studentRefObject);
            deferred.resolve(arr);
            return deferred.promise;
        };






    }
})();