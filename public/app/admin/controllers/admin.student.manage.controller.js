(function(){
    'use strict';
    angular
        .module('app.admin')
        .controller('adminStudentManageController',adminStudentManageController);

        adminStudentManageController.$inject = ['adminStudentManageService'];

        function adminStudentManageController(adminStudentManageService){
            var vm = this;
            adminStudentManageService.getStudentArray().then(
                function(s) {
                    vm.students = s;
                },
                function(err) {
                    // handle error
                }
            )
            vm.name = "";
            vm.grade = "";
            vm.school = "";
            vm.parent_phone = "";
            vm.student_phone = "";
            vm.addStudents = addStudents;

            ///////////

            function addStudents(){
                vm.students.$add({
                    s_name : vm.name,
                    s_grade : vm.grade,
                    s_school : vm.school,
                    s_parent_id : vm.parent_phone,
                    s_id : vm.student_phone,
                    s_phone : vm.student_phone
                });
                vm.name = "";
                vm.grade = "";
                vm.school = "";
                vm.parent_phone = "";
                vm.student_phone = "";
                alert("등록완료");


            }

        }
})();