app.factory('PaymentService', ['$http', function($http) { 
  return { 
  		completeShopping: function(products) {
  			if(products){
  				return $http.post('', {products:products});
       		}else{
       			return "Empty Shopping Cart";
       		}
   		}
   	}
}]);
