app.controller('CartController', ['$scope','PaymentService',function($scope,PaymentService) { 

	//Items
	$scope.items = [
		{product: "Cotton T-shirt, Medium", price: "1.99", qty: 0},
		{product: "Baseball Cap, One Size", price: "2.99", qty: 0},
		{product: "Swim Shorts, Medium", price: "3.99", qty: 0}
	];

	//Sub Total
	$scope.calculateSubTotal = function() {
        var total = 0;
        angular.forEach($scope.items, function(item) {
            total += item.qty * item.price;
        })
        $scope.itemsTotal = total; 
        return total;
    }


	$scope.isLoading = true; // Spinner for transitions and data loadings
	$scope.itemsTotal = 0;   //for empty cart check

    //Remove item
    $scope.removeItem = function(index){
    	if($scope.items.length > 0){
    		$scope.items.splice(index,1);
    	}
    }

	//Rest query for get city weather data
	$scope.complete = function(){
		$scope.isLoading = false;

		if($scope.items.length > 0 &&  $scope.itemsTotal > 0){

			PaymentService.completeShopping($scope.items).
				then(function(response) {
					//Success
					alert("Shopping Completed!")
					$scope.isLoading = true;

				}, function(response) {
					//Error
					alert("An Error Occured!")
					$scope.isLoading = true;
				});
		}else{
			$scope.isLoading = true;
			alert("No items on cart!");
		}
	}
}]);
