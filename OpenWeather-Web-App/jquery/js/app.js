var map;

$(document).ready(function() {

	$('#cityWeatherContent').hide(); //initially hide the content before ajax call

	//Initially select first city
	loadCityWeatherDetails($('#citySelect').val());

	//Bind event handler to city selectpicker
	$('#citySelect').on('change', function(){
		loadCityWeatherDetails(this.value);
	});

	//Get weather and details of selected city
	function loadCityWeatherDetails(cityName){
		if(!cityName){return "undefined City";}

		$.ajax({
			url: 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+',uk&units=metric&appid=6b4fec3cfeb666ed226daff42cb09a95',

			dataType: "jsonp",
			beforeSend: function(request) {
				//Call transition waiting spin
				$('#cityWeatherContent').hide();
				$('#loading').show();
			},
			success: function(data) {

				$('#cityName').text(data.name);
				$('#cityNameHeader').text(data.name);

				//Hide spinner
				$('#loading').hide();

				//Show data
				$('#cityWeatherContent').show();

				//Append contents

				//Coordinates
				$('#coords').text(" - Coords : {" + data.coord.lat + "," + data.coord.lon +"}");

				//Load Map
				loadMap(data.coord.lat,data.coord.lon);

				//Current City Weather Status
				var icon = '<img src="http://openweathermap.org/img/w/'+data.weather[0].icon+'.png" alt="'+data.weather[0].main+'"/>';
				$('#currentWeather').html(icon + data.weather[0].description);

				//Temps
				$('#currentTemp').html(data.main.temp);
				$('#minTemp').html(data.main.temp_min);
				$('#maxTemp').html(data.main.temp_max);

				//Pressure
				$('#currentPressure').html(data.main.pressure);

				//Humidity
				$('#currentHumidity').html(data.main.humidity);
			},
			error: function(request, error){
				return "no Data";
			}
		});

	}

	//Load google maps with city coords
	function loadMap(lat,lng) {
		if(!lat || !lng){return "undefined coords";}

		// Create a map object and specify the DOM element for display.
		var mapProp = {
			center:new google.maps.LatLng(parseFloat(lat),parseFloat(lng)),
			zoom:10,
		};
		map = new google.maps.Map(document.getElementById("map"),mapProp);
	}


});
