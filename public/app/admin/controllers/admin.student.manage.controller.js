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
            //이 컨트롤러에서 사용할 메소드들 정의

            vm.addStudent = addStudent;
            vm.modifyStudent = modifyStudent;
            vm.removeStudent = removeStudent;

            //데이터 테이블에 들어갈 데이터 형태를 정의
            vm.studentToAdd = {
                id: '',
                name: '',
                school: '',
                year: '',
            }

            //데이터 추가(firebaseArray를 이용해 firebase와 웹화면에 동시에 추가됨
            function addStudent() {
                vm.students.$add(angular.copy(vm.studentToAdd));
            }
            //데이터 수정 (미완성)
            function modifyStudent(index) {
                vm.students.splice(index, 1, angular.copy(vm.studentToAdd));
            }
            //데이터 삭제(firebaseArray를 이용해 firebase와 웹화면에 동시에 추가됨
            function removeStudent(student) {
                vm.students.$remove(student);
            }
        }
})();