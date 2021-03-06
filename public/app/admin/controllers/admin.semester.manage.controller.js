// title : admin-lecture 탭의 data table을 위한 컨트롤러
/*todo List---------------------------
    1. (Completed by Jeonghyun)여기는 lecture와 semester를 관리하는 컨트롤러인데 함수와 변수이름이 엉뚱하게 되어있음. 문맥에 맞게 수정 필요
    2. (Completed by Jeonghyun)불필요한 함수 삭제
    3. semester 번호는 ID로 쓸거니까 아얘 유저한테 선택의 여지를 주지 말고 우리가 강제로 할당해 주는게 나을듯(중복,데이터 일관성등의 문제 때문)
*/



//-----------------------------------------------
(function(){
    'use strict';
    //admin모듈에 컨트롤러 생성
    angular
        .module('app.admin')
        .controller('adminSemesterManageController', adminSemesterManageController);
    //'adminLectureManageService' : 파이어 베이스와 연동을 위한 서비스
    adminSemesterManageController.$inject = [
        'adminSemesterManageService'
    ];

    function adminSemesterManageController(
        adminSemesterManageService
    ) {

        var vm = this;

        // firebase의 semester 데이터를 firebaseArray형태로 모두 읽어오는 service method
        adminSemesterManageService.getSemesterArray().then(
            function(s) {
                vm.semesters = s;
            },
            function(err) {
                // handle error
            }
        );

        //이 컨트롤러에서 사용할 메소드들 정의
        vm.clicked = "";
        vm.click = click;
        vm.addSemester = addSemester;
        vm.modifySemester = modifySemester;
        vm.removeSemester = removeSemester;
        //데이터 테이블에 들어갈 데이터 형태를 정의
        vm.semesterToAdd = {
                id: '',
                name: '',
                date: '',
        }

        //데이터 추가(firebaseArray를 이용해 firebase와 웹화면에 동시에 추가됨
        function click(clickedSemester){
            vm.clicked = clickedSemester;
        }
        function addSemester() {
            vm.semesters.$add(angular.copy(vm.semesterToAdd));
        }
        //데이터 수정 (미완성)
        function modifySemester(semester) {

        }
        //데이터 삭제(firebaseArray를 이용해 firebase와 웹화면에 동시에 삭제됨
        function removeSemester(semester) {
            vm.semesters.$remove(semester);
        }


    }
})();





