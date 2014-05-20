'use strict';

angular.module('altamiraWebApp')
  .factory('Request', function (Restangular) {
    var request = Restangular.all('requests');

    var treatments = [{ desc : 'Chapa Preta', value : 'PR' }, { desc : 'Decapado', value : 'DE' }, { desc : 'Galvanizado', value : 'GA' }];

    var thicknesses = [0.65, 0.85, 0.90, 1.20, 1.40, 2.00, 2.20];

    var widths = [80, 90, 100, 120, 200, 240, 260, 300, 320, 330, 350, 400, 450];

    var lengths = [0, 100, 200, 500, 800, 900, 950, 1000, 1100, 1200, 1500, 1750, 1900, 2000, 2100, 2200, 2400, 3000, 3200];

    // Public API...
    return {
      getTreatments : function () {
        return treatments;
      },
      getThicknesses : function () {
        return thicknesses;
      },
      getWidths : function () {
        return widths;
      },
      getLengths : function () {
        return lengths;
      },
      getCurrentRequest: function () {
        return request.get('current');
      },
      save : function(requestToSave) {
        return request.customPUT(requestToSave);
      },
      sendCurrentRequest: function () {
        return request.customPOST();
      }
    };
  });