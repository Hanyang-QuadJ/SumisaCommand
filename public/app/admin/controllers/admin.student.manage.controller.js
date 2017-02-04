// title : admin-student 탭의 data table을 위한 컨트롤러
/*todo List---------------------------
    파이어 베이스와 연결만 해놓은 상태
    아직 데이터 테이블도 안만들어져있고 여기서 할거 없음
 */

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