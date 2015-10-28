describe('ForecastService', function() {
  beforeEach(module('weatherPicker'));

 describe('ForecastService Tests', function() {
    var factory = null;
    beforeEach(inject(function(ForecastService) {
      factory = ForecastService;
    }))

    it('Empty Input Check', function() {
      expect(factory.getWeatherData()).toEqual("Empty City Name");
    });

  });

});

