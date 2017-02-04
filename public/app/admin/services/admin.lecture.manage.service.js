(function() {
    "use strict";

    angular
        .module('app.admin')
        .factory('adminLectureManageService', adminLectureManageService);

    adminLectureManageService.$inject = ['$q','$firebaseArray'];

    function adminLectureManageService($q,$firebaseArray) {

        var deferred = $q.defer();
        var service = {

            studentInfo: studentInfo

        };
        return service;

        ////////////

        function studentInfo() {
            var studentRefObject = firebase.database().ref().child('semester');
            var arr = $firebaseArray(studentRefObject);
            deferred.resolve(arr);
            return deferred.promise;
        };


    }
})();