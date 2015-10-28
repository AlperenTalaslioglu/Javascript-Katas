app.controller('SelectController', ['$scope','ForecastService', function($scope,ForecastService) { 

	//Cities
	$scope.options = [
		{label: "London", value: "London"},
		{label: "Luton", value: "Luton"},
		{label: "Manchester", value: "Manchester"},
		{label: "Birmingham", value: "Birmingham"}
	];

	$scope.citySelect = "London"; //inital selection
	$scope.isLoading = true; // Spinner for transitions and data loadings

	//Rest query for get city weather data
	$scope.getCityWeatherData = function(){
		$scope.isLoading = true; // processing
		ForecastService.getWeatherData($scope.citySelect).success(function(data){
			$scope.isLoading = false; // data is gathered

			//Binding json data to view
			$scope.coord = " - Coord : {" + data.coord.lat + "," + data.coord.lon + "}";
			$scope.cityName = data.name;
			$scope.iconID = data.weather[0].icon;
			$scope.imgDesc = data.weather[0].main;
			$scope.weather = data.weather[0].description;
			$scope.temp = data.main.temp;
			$scope.max = data.main.temp_max;
			$scope.min = data.main.temp_min;
			$scope.humidity = data.main.humidity;
			$scope.pressure = data.main.pressure;
		});
	}

	$scope.getCityWeatherData($scope.citySelect); //Initial city data load
	 	
}]);
