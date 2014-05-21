'use strict';

describe('Controller: RequestitemCtrl', function () {

  // load the controller's module
  beforeEach(module('altamiraWebApp'));

  var RequestitemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RequestitemCtrl = $controller('RequestitemCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
