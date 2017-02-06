(function() {
    "use strict";

    angular
        .module('app.admin')
        .factory('adminSemesterManageService', adminSemesterManageService);

    adminSemesterManageService.$inject = ['$q','$firebaseArray','$firebaseObject'];

    function adminSemesterManageService($q,$firebaseArray,$firebaseObject) {

        var deferred = $q.defer();
        var service = {

            getSemesterArray: getSemesterArray

        };
        return service;

        ////////////

        function getSemesterArray() {
            var semesterRefObject = firebase.database().ref().child('semester');
            var semesterArr = $firebaseArray(semesterRefObject);
            deferred.resolve(semesterArr);
            return deferred.promise;
        };


    }
})();