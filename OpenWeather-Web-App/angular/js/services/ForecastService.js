app.factory('ForecastService', ['$http', function($http) {
  return {
  		getWeatherData: function(cityName) {
  			if(cityName){
       			return $http.get('http://api.openweathermap.org/data/2.5/weather?q='+cityName+',uk&units=metric&appid=6b4fec3cfeb666ed226daff42cb09a95');
       		}else{
       			return "Empty City Name";
       		}
   		}
   	}
}]);
