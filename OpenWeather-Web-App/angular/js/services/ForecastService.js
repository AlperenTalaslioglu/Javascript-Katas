app.factory('ForecastService', ['$http', function($http) { 
  return { 
  		getWeatherData: function(cityName) {
  			if(cityName){
       			return $http.get('http://api.openweathermap.org/data/2.5/weather?q='+cityName+',uk');
       		}else{
       			return "Empty City Name";
       		}
   		}
   	}
}]);
