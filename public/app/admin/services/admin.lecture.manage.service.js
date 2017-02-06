(function() {
    "use strict";

    angular
        .module('app.admin')
        .factory('adminLectureManageService', adminLectureManageService);

    adminLectureManageService.$inject = ['$q','$firebaseArray'];

    function adminLectureManageService($q,$firebaseArray) {

        var deferred = $q.defer();
        var service = {

            getLectureArray: getLectureArray

        };
        return service;

        ////////////

        function getLectureArray() {
            var lectureRefObject = firebase.database().ref().child('lecture');
            var lectureArr = $firebaseArray(lectureRefObject);
            deferred.resolve(lectureArr);
            return deferred.promise;
        };

    }
})();