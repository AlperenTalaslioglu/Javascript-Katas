QUnit.test( "Inital undefined Map", function( assert ) {
  assert.ok( map === undefined, "Passed!" );
});

QUnit.test( "Map load function test without coord", function( assert ) {
  assert.ok( loadMap() === "undefined coords", "Passed!" );
});

QUnit.test( "Map load function test invalid inputs with strings", function( assert ) {
  assert.ok( loadMap("x","y") === "invalid inputs", "Passed!" );
  assert.ok( loadMap("x") === "undefined coords", "Passed!" );
  assert.ok( loadMap("","x") === "undefined coords", "Passed!" );
  assert.ok( loadMap("","") === "undefined coords", "Passed!" );
});

QUnit.test( "Map load function test invalid inputs with integers", function( assert ) {
  assert.ok( loadMap(1,2) === "invalid inputs", "Passed!" );
});

QUnit.test( "City weather data load function test without city name", function( assert ) {
  assert.ok( loadCityWeatherDetails() === "undefined City", "Passed!" );
  assert.ok( loadCityWeatherDetails("") === "undefined City", "Passed!" );
  assert.ok( loadCityWeatherDetails(" ") === "undefined City", "Passed!" );
  assert.ok( loadCityWeatherDetails("    ") === "undefined City", "Passed!" );
});


QUnit.test( "Valid city tests", function( assert ) {
  var done1 = assert.async();
  var done2 = assert.async();
  var done3 = assert.async();
  var done4 = assert.async();

  setTimeout(function() {
    assert.ok( loadCityWeatherDetails("London") === "Valid", "Passed!");
    done1();
  },200);
  setTimeout(function() {
    assert.ok( loadCityWeatherDetails("Manchester") === "Valid", "Passed!");
    done2();
  },200);
  setTimeout(function() {
    assert.ok( loadCityWeatherDetails("Luton") === "Valid", "Passed!");
    done3();
  },200);  
  setTimeout(function() {
    assert.ok( loadCityWeatherDetails("Birmingham") === "Valid", "Passed!");
    done4();
  },200);
});
