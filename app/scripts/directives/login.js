'use strict';

angular.module('altamiraWebApp')
  .directive('login', function () {
    return {
      templateUrl: 'views/login.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the login directive');
      }
    };
  });
