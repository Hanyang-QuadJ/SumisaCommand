/**
 * Created by pleiades on 2017. 2. 4..
 */
(function(){
    'use strict';
    //admin모듈에 컨트롤러 생성
    angular
        .module('app.admin')
        .controller('adminLectureContentManageController', adminLectureContentManageController);
    //'DTOptionsBuilder' : 테이블의 속성 설정하기 위한 datatable library method
    //'DTColumnDefBuilder' : 테이블의 컬럼을 추가해주는 datatable library method
    //'adminLectureManageService' : 파이어 베이스와 연동을 위한 서비스
    adminLectureContentManageController.$inject = [
        'DTOptionsBuilder',
        'DTColumnDefBuilder',
    ];

    function adminLectureContentManageController(
        DTOptionsBuilder,
        DTColumnDefBuilder
    ) {

        var vm = this;


        //data table 속성 부과
        vm.dtOptions = DTOptionsBuilder.newOptions()
            .withOption("order", [[1, "asc"]])
            .withPaginationType('full_numbers');


        //data table에 4개의 컬럼 생성
        vm.dtColumnDefs = [
            DTColumnDefBuilder.newColumnDef(0),
            DTColumnDefBuilder.newColumnDef(1),
            DTColumnDefBuilder.newColumnDef(2),
            DTColumnDefBuilder.newColumnDef(3).notSortable()
        ];

        //이 컨트롤러에서 사용할 메소드들 정의

        vm.person2Add = _buildPerson2Add(1);
        vm.addPerson = addPerson;
        vm.modifyPerson = modifyPerson;
        vm.removePerson = removePerson;

        //데이터 테이블에 들어갈 데이터 형태를 정의
        function _buildPerson2Add(id) {
            return {
                id: "",
                firstName: "",
                lastName: ""
            };
        }

        //데이터 추가(firebaseArray를 이용해 firebase와 웹화면에 동시에 추가됨
        function addPerson() {
            vm.persons.$add(angular.copy(vm.person2Add));
            vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
        }
        //데이터 수정 (미완성)
        function modifyPerson(index) {
            vm.persons.splice(index, 1, angular.copy(vm.person2Add));
            vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
        }
        //데이터 삭제(firebaseArray를 이용해 firebase와 웹화면에 동시에 추가됨
        function removePerson(person) {
            vm.persons.$remove(person);
            // vm.persons.splice(index, 1);
        }


    }
})();
