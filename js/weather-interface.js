var apiKey = '2d7a6dd16947d5f5ab1a8bc26248335b';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      $('.weatherDescription').text("The weather is " + response.weather[0].description + ".");
      $('.weatherMain').text("The weather is " + response.weather[0].main + ".");
      $('.windSpeed').text("The wind speed is " + response.wind.speed + "m/s.");
      console.log(response);
    });
  });
});
