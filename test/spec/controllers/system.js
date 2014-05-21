'use strict';

describe('Controller: SystemCtrl', function () {

  // load the controller's module
  beforeEach(module('altamiraWebApp'));

  var SystemctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SystemctrlCtrl = $controller('SystemCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
