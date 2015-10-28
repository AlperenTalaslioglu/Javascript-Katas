//
//
// This is the functions and variables clone of app.js for unit tests
//
//

var map;

//Get weather and details of selected city
function loadCityWeatherDetails(cityName){
    if(!cityName || !cityName.trim()){return "undefined City";}

    var status = "error";

	$.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+',uk',
        async:false,
        success: function() {
            status = "Valid";
        }
    });

    return status;
        
}

//Load google maps with city coords
function loadMap(lat,lng) {
    if(!lat || !lng){return "undefined coords";}
    else if(!isFloat(lat) || !isFloat(lng)){return "invalid inputs";}
    
  	// Create a map object and specify the DOM element for display.
	var mapProp = {
	    center:new google.maps.LatLng(parseFloat(lat),parseFloat(lng)),
	    zoom:10,
	};
	map = new google.maps.Map(document.getElementById("map"),mapProp);
}


function isFloat(n){
    return n === Number(n) && n % 1 !== 0;
}
