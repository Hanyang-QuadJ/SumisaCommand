/**
 * Created by pleiades on 2017. 2. 4..
 */
(function(){
    'use strict';
    //admin모듈에 컨트롤러 생성
    angular
        .module('app.admin')
        .controller('adminLectureManageController', adminLectureManageController);
    //'adminLectureManageService' : 파이어 베이스와 연동을 위한 서비스
    adminLectureManageController.$inject = [
        'adminLectureManageService'
    ];

    function adminLectureManageController(
        adminLectureManageService
    )
    {
        var vm = this;

        adminLectureManageService.getLectureArray().then(
            function(s) {
                vm.lectures = s;
            },
            function(err) {
                // handle error
            }
        )
        //이 컨트롤러에서 사용할 메소드들 정의

        vm.addLecture = addLecture;
        vm.modifyLecture = modifyLecture;
        vm.removeLecture = removeLecture;

        //데이터 테이블에 들어갈 데이터 형태를 정의
        vm.lectureToAdd = {
            id: '',
            name: '',
            maximum: '',
            fee: '',
            semester: '',
        };

        //데이터 추가(firebaseArray를 이용해 firebase와 웹화면에 동시에 추가됨
        function addLecture() {
            vm.lectures.$add(angular.copy(vm.lectureToAdd));
        }
        //데이터 수정 (미완성)
        function modifyLecture(index) {
            vm.lectures.splice(index, 1, angular.copy(vm.lectureToAdd));
        }
        //데이터 삭제(firebaseArray를 이용해 firebase와 웹화면에 동시에 추가됨
        function removeLecture(lecture) {
            vm.lectures.$remove(lecture);
            // vm.persons.splice(index, 1);
        }


    }
})();
