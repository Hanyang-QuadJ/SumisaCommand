/**
 * Created by pleiades on 2017. 2. 4..
 */
(function(){
    'use strict';
    //admin모듈에 컨트롤러 생성
    angular
        .module('app.admin')
        .controller('adminLectureManageController', adminLectureManageController);
    //'DTOptionsBuilder' : 테이블의 속성 설정하기 위한 datatable library method
    //'DTColumnDefBuilder' : 테이블의 컬럼을 추가해주는 datatable library method
    //'adminLectureManageService' : 파이어 베이스와 연동을 위한 서비스
    adminLectureManageController.$inject = [
        'DTOptionsBuilder',
        'DTColumnDefBuilder',
        'adminLectureManageService'
    ];

    function adminLectureManageController(
        DTOptionsBuilder,
        DTColumnDefBuilder,
        adminLectureManageService
    ) {

        var vm = this;

        adminLectureManageService.getLectureArray().then(
            function(s) {
                vm.lectures = s;
            },
            function(err) {
                // handle error
            }
        )

        //data table 속성 부과
        vm.dtOptions = DTOptionsBuilder.newOptions()
            .withOption("order", [[1, "asc"]])
            .withPaginationType('full_numbers');
        // vm.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
        //     var defer = $q.defer();
        //     $http.get('data.json').then(function(result) {
        //         defer.resolve(result.data);
        //     });
        //     return defer.promise;
        // }).withPaginationType('full_numbers');


        //data table에 5개의 컬럼 생성
        vm.dtColumnDefs = [
            DTColumnDefBuilder.newColumnDef(0),
            DTColumnDefBuilder.newColumnDef(1),
            DTColumnDefBuilder.newColumnDef(2),
            DTColumnDefBuilder.newColumnDef(3),
            DTColumnDefBuilder.newColumnDef(4).notSortable()
        ];

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
        }

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
