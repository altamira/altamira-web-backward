'use strict';

angular.module('altamiraWebApp')
  .filter('treatment', function () {
    var treatments = { 'PR' : 'Chapa Preta', 'DE' : 'Decapado', 'GA' : 'Galvanizado' };

    return function (input) {
      var treatment = treatments[input];

      return treatment;
    };
  });
