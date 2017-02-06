(function() {
    "use strict";

    angular
        .module('app.admin')
        .factory('adminLectureManageService', adminLectureManageService);

    adminLectureManageService.$inject = ['$q','$firebaseArray'];

    function adminLectureManageService($q,$firebaseArray) {

        var deferred = $q.defer();
        var service = {

            getSemesterArray: getSemesterArray

        };
        return service;

        ////////////

        function getSemesterArray() {
            var refObject = firebase.database().ref().child('semester');
            var arr = $firebaseArray(refObject);
            deferred.resolve(arr);
            return deferred.promise;
        };


    }
})();