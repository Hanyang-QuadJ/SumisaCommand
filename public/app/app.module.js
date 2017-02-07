//Root module 각 페이지의 모듈들을 여기서 sumisaApp하나로 합침
(function(){
    'use strict';
    angular.module('sumisaApp', [
        'app.login',
        'app.student',
        'app.admin'
    ]);
})();