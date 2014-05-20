'use strict';

describe('Service: Dateutil', function () {

  // load the service's module
  beforeEach(module('altamiraWebApp'));

  // instantiate service
  var Dateutil;
  beforeEach(inject(function (_Dateutil_) {
    Dateutil = _Dateutil_;
  }));

  it('should do something', function () {
    expect(!!Dateutil).toBe(true);
  });

});
