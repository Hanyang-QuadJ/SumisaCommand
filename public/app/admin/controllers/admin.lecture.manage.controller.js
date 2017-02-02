'use strict';
(function(){

    angular
        .module('app.admin')
        .controller('adminLectureManageController', adminLectureManageController);

    adminLectureManageController.$inject = [
        '$resource',
        'DTOptionsBuilder',
        'DTColumnDefBuilder',
        'adminLectureManageService',
        '$firebaseArray'
    ];

    function adminLectureManageController(
        $resource,
        DTOptionsBuilder,
        DTColumnDefBuilder,
        adminLectureManageService,
        $firebaseArray
    ) {

        var vm = this;
        adminLectureManageService.studentInfo().then(
            function(s) {
                vm.students = s;
                vm.persons = s;
            },
            function(err) {
                // handle error
            }
        )

        vm.dtOptions = DTOptionsBuilder.newOptions()
            .withOption("order", [[1, "asc"]])
            .withPaginationType('full_numbers');
        vm.message ='';
        vm.dtColumnDefs = [
            DTColumnDefBuilder.newColumnDef(0),
            DTColumnDefBuilder.newColumnDef(1),
            DTColumnDefBuilder.newColumnDef(2),
            DTColumnDefBuilder.newColumnDef(3).notSortable()
        ];
        vm.someClickHandler = someClickHandler;
        vm.person2Add = _buildPerson2Add(1);
        vm.addPerson = addPerson;
        vm.modifyPerson = modifyPerson;
        vm.removePerson = removePerson;

        function _buildPerson2Add(id) {
            return {
                id: "",
                firstName: "",
                lastName: ""
            };
        }
        function addPerson() {
            vm.persons.$add(angular.copy(vm.person2Add));
            vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
        }
        function modifyPerson(index) {
            vm.persons.splice(index, 1, angular.copy(vm.person2Add));
            vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
        }
        function removePerson(person) {
            vm.persons.$remove(person);
            // vm.persons.splice(index, 1);
        }
        function someClickHandler(persons) {
            vm.message = persons.id + ' - ' + persons.firstName;
        }
        function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
            // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
            $('td', nRow).unbind('click');
            $('td', nRow).bind('click', function() {
                $scope.$apply(function() {
                    vm.someClickHandler(aData);
                });
            });
            return nRow;
        }


    }
})();





