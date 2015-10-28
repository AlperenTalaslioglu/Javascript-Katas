describe('CartController', function() {
  beforeEach(module('shoppingCart'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('Defined Items', function() {
    
    it('Is there 3 item initially', function() {
      var $scope = {};
      var controller = $controller('CartController', { $scope: $scope });
      expect($scope.items.length).toEqual(3);
    });

    it('Is first item Cotton T-shirt', function() {
        var $scope = {};
        var controller = $controller('CartController', { $scope: $scope });
        expect($scope.items[0].product).toEqual("Cotton T-shirt, Medium");
    });

    it('Is second item Baseball Cap', function() {
        var $scope = {};
        var controller = $controller('CartController', { $scope: $scope });
        expect($scope.items[1].product).toEqual("Baseball Cap, One Size");
    });

    it('Is third item Swim Shorts', function() {
        var $scope = {};
        var controller = $controller('CartController', { $scope: $scope });
        expect($scope.items[2].product).toEqual("Swim Shorts, Medium");
    }); 

    it('Initally Transition Spinner is Hidden', function() {
        var $scope = {};
        var controller = $controller('CartController', { $scope: $scope });
        expect($scope.isLoading).toEqual(true);
    });

    it('Initally Total Item Sum = 0', function() {
        var $scope = {};
        var controller = $controller('CartController', { $scope: $scope });
        expect($scope.itemsTotal).toEqual(0);
    });

  });
});


describe('CartController', function() {
  beforeEach(module('shoppingCart'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('Method Tests', function() {
    
    it('Remove Item Method', function() {
      var $scope = {};
      var controller = $controller('CartController', { $scope: $scope });
      $scope.removeItem(0);
      expect($scope.items.length).toEqual(2);
    });

    it('Remove Item Method Corner Case', function() {
      var $scope = {};
      var controller = $controller('CartController', { $scope: $scope });
      $scope.removeItem(0);
      $scope.removeItem(0);
      $scope.removeItem(0);
      $scope.removeItem(0);
      $scope.removeItem(0);
      $scope.removeItem(0);
      expect($scope.items.length).toEqual(0);
    });

    it('Calculate Subtotal Method Empty Check',function(){
      var $scope = {};
      var controller = $controller('CartController', { $scope: $scope });
      $scope.calculateSubTotal();
      expect($scope.itemsTotal).toEqual(0);
    });

    it('Calculate Subtotal Method Valid Check with Item1',function(){
      var $scope = {};
      var controller = $controller('CartController', { $scope: $scope });
      $scope.items[0].qty = 1;
      $scope.calculateSubTotal();
      expect($scope.itemsTotal).toEqual(1.99);
    });

    it('Calculate Subtotal Method Valid Check with Item1 + Item2',function(){
      var $scope = {};
      var controller = $controller('CartController', { $scope: $scope });
      $scope.items[0].qty = 1;
      $scope.items[1].qty = 1;
      $scope.calculateSubTotal();
      expect($scope.itemsTotal).toEqual(4.98);
    });

    it('Calculate Subtotal Method Valid Check with Item1 + Item2 + Item3',function(){
      var $scope = {};
      var controller = $controller('CartController', { $scope: $scope });
      $scope.items[0].qty = 1;
      $scope.items[1].qty = 1;
      $scope.items[2].qty = 1;
      $scope.calculateSubTotal();
      expect($scope.itemsTotal).toEqual(8.97);
    });
  });
});

