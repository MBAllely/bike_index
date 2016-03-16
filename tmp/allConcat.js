// var apiKey = 'c607b23f7aff2bf5afa3958b47ffb18a884a20f2c6f107ab070ccab60a07e1f5'

$(document).ready(function() {
  $('#stolen_bikes').click(function() {
    var city = $('#location').val();
    $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&proximity=' + city + '&proximity_square=100', function(response) {
      var bikes = response;
      // console.log(response);
      Object.keys(bikes).forEach(function(key){
        bikes[key].forEach(function(elem, index) {
          console.log(elem, index);
          document.body.innerHTML += ('<h3>Bike name: ' + elem.title + '<br> Serial Number: ' + elem.serial + '<br> Color: ' + elem.frame_colors[0]) + '</h3>';
          // document.body.innerHTML += + '</br>';
        });
      });
      // $('.stolen_bikes').text("Stolen bikes within 100 miles of " + city + ":\n" + response.bikes[0].title);
      // console.log(response);
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our bike email list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

var apiKey = '2d7a6dd16947d5f5ab1a8bc26248335b';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      $('.weatherDescription').text("The weather is " + response.weather[0].description + ".")
      $('.weatherMain').text("The weather is " + response.weather[0].main + ".")
      $('.windSpeed').text("The wind speed is " + response.wind.speed + "m/s.")
      console.log(response);
    });
  });
});
