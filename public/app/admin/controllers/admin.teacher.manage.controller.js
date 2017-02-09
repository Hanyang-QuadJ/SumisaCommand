

(function(){
    'use strict';
    angular
        .module('app.admin')
        .controller('adminTeacherManageController',adminTeacherManageController);

    adminTeacherManageController.$inject = ['adminTeacherManageService'];

    function adminTeacherManageController(adminTeacherManageService){
        var vm = this;

        adminTeacherManageService.getTeacherArray().then(
            function(s) {
                vm.teachers = s;
            },
            function(err) {
                // handle error
            }
        )
        //이 컨트롤러에서 사용할 메소드들 정의

        vm.addTeacher = addTeacher;
        vm.modifyTeacher = modifyTeacher;
        vm.removeTeacher = removeTeacher;

        //데이터 테이블에 들어갈 데이터 형태를 정의
        vm.teacherToAdd = {
            id: '',
            name: '',
            career: '',
            phone: '',
        }

        //데이터 추가(firebaseArray를 이용해 firebase와 웹화면에 동시에 추가됨
        function addTeacher() {
            vm.teachers.$add(angular.copy(vm.teacherToAdd));
        }
        //데이터 수정 (미완성)
        function modifyTeacher(index) {
            vm.teachers.splice(index, 1, angular.copy(vm.teacherToAdd));
        }
        //데이터 삭제(firebaseArray를 이용해 firebase와 웹화면에 동시에 추가됨
        function removeTeacher(teacher) {
            vm.teachers.$remove(teacher);
        }
    }
})();