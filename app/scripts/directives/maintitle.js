'use strict';

angular.module('altamiraWebApp')
  .directive('maintitle', function () {
    return {
      templateUrl: 'views/maintitle.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the maintitle directive');
      }
    };
  });
