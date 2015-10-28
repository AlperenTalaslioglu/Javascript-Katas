describe('SelectController', function() {
  beforeEach(module('weatherPicker'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('Defined Cities', function() {
    it('Is there 4 cities initially', function() {
      var $scope = {};
      var controller = $controller('SelectController', { $scope: $scope });
      expect($scope.options.length).toEqual(4);
    });

   it('Is London first city and exists', function() {
        var $scope = {};
        var controller = $controller('SelectController', { $scope: $scope });
        expect($scope.options[0].label).toEqual("London");
    });

   it('Is Luton second city and exists', function() {
        var $scope = {};
        var controller = $controller('SelectController', { $scope: $scope });
        expect($scope.options[1].label).toEqual("Luton");
    });

   it('Is Manchester third city and exist', function() {
        var $scope = {};
        var controller = $controller('SelectController', { $scope: $scope });
        expect($scope.options[2].label).toEqual("Manchester");
    });

   it('Is Birmingham fourth city and exist', function() {
        var $scope = {};
        var controller = $controller('SelectController', { $scope: $scope });
        expect($scope.options[3].label).toEqual("Birmingham");
    });

  });
});



describe('SelectController', function() {
  beforeEach(module('weatherPicker'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('Initially defined variables\' check' , function() {
    it('Initial selected city is London', function() {
      var $scope = {};
      var controller = $controller('SelectController', { $scope: $scope });
      expect($scope.citySelect).toEqual("London");
    });

    it('Transition spinner is active', function() {
      var $scope = {};
      var controller = $controller('SelectController', { $scope: $scope });
      expect($scope.isLoading).toEqual(true);
    });  

  });
});
