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
                vm.name = s.s_name;
                vm.id = s.s_id;
                vm.phone = s.s_phone;
                vm.school = s.s_school;
            },
            function(err) {
                // handle error
            }
        );
    };


})();

