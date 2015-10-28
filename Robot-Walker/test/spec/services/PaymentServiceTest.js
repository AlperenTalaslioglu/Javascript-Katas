describe('PaymentService', function() {
  beforeEach(module('shoppingCart'));

 describe('PaymentService Tests', function() {
    var factory = null;
    beforeEach(inject(function(PaymentService) {
      factory = PaymentService;
    }))

    it('Empty Input Check', function() {
      expect(factory.completeShopping()).toEqual("Empty Shopping Cart");
    });

  });

});

