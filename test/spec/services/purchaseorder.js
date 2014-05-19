'use strict';

describe('Service: Purchaseorder', function () {

  // load the service's module
  beforeEach(module('altamiraWebApp'));

  // instantiate service
  var Purchaseorder;
  beforeEach(inject(function (_Purchaseorder_) {
    Purchaseorder = _Purchaseorder_;
  }));

  it('should do something', function () {
    expect(!!Purchaseorder).toBe(true);
  });

});
