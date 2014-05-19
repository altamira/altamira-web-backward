'use strict';

angular.module('altamiraWebApp')
  .controller('RequestCtrl', function ($rootScope, $scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.title = "Requisição de Compra";
  });
