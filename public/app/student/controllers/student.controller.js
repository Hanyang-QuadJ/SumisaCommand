(function(){
    'use strict';
    angular
        .module('app.student')
        .controller('introduceController',introduceController);


    introduceController.$inject = ['studentService'];


    function introduceController(studentService) {

        var vm = this;

        studentService.studentInfo().then(
            function(s) {
                vm.name = s.name;
                vm.id = s.id;
                vm.year = s.year;
                vm.school = s.school;
            },
            function(err) {
                // handle error
            }
        );
    };


})();

