'use strict';

describe('Service: Purchaseplanning', function () {

  // load the service's module
  beforeEach(module('altamiraWebApp'));

  // instantiate service
  var Purchaseplanning;
  beforeEach(inject(function (_Purchaseplanning_) {
    Purchaseplanning = _Purchaseplanning_;
  }));

  it('should do something', function () {
    expect(!!Purchaseplanning).toBe(true);
  });

});
