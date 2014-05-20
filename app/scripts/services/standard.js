'use strict';

angular.module('altamiraWebApp')
  .factory('Standard', function (Restangular) {
    var request = Restangular.one('standard');

    // Public API...
    return {
      getAll: function () {
        return request.get();
      }
    };
  });
