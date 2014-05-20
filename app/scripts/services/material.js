'use strict';

angular.module('altamiraWebApp')
  .factory('Material', function (Restangular) {
    var Material = Restangular.all('materials');

    // Public API...
    return {
      save: function (newMaterial) {
        return Material.post(newMaterial);
      }
    };
  });
