(function() {
    "use strict";

    angular
        .module('app.admin')
        .factory('adminTeacherManageService', adminTeacherManageService);

    adminTeacherManageService.$inject = ['$q','$firebaseArray'];

    function adminTeacherManageService($q,$firebaseArray) {

        var deferred = $q.defer();
        var service = {

            getTeacherArray : getTeacherArray

        };
        return service;

        ////////////

        function getTeacherArray() {
            var teacherRefObject = firebase.database().ref().child('teacher');
            var arr = $firebaseArray(teacherRefObject);
            deferred.resolve(arr);
            return deferred.promise;
        };






    }
})();