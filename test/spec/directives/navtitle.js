'use strict';

describe('Directive: navtitle', function () {

  // load the directive's module
  beforeEach(module('altamiraWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<navtitle></navtitle>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the navtitle directive');
  }));
});
