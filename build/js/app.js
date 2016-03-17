(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.compareColor = function(searchColor, stolenBikes) {
  var matchedBikes = [];
  stolenBikes.forEach(function(bike) {

    bike.frame_colors.forEach(function(color) {
      if (color === searchColor) {
        matchedBikes.push(bike);
      }
    });
  });
  return matchedBikes;
};
// 
// exports.returnByColor = function(searchColor, colorMatchedBikes, searchNumber) {
//   var colorMatchedBikes = [];
//
//   colorMatchedBikes.forEach(bike) {
//
//   }
//   if (searchColor.length > 0) {
//     for(i = 0; i < searchNumber; i++) {
//
//     }
//   }
// };

},{}],2:[function(require,module,exports){
var compareColor = require('./../js/bike.js').compareColor;
var color2 = "";
$(document).ready(function() {

  $('#stolen_bikes').click(function() {
    event.preventDefault();
    var city = $('#location').val();
    var search_color = $('#input_color').val();
    var results_total = $('#number_of_results').val();
    var search_radius = $('#search_radius').val();
    console.log("color" + search_color);
    $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=' + results_total + '&proximity=' + city + '&proximity_square=' + search_radius, function(response) {

      if (search_color.length > 0) {
        bikes = compareColor(search_color, response.bikes);
      } else {
        bikes = response.bikes;
      }

      console.log(bikes);
        bikes.forEach(function(elem, index) {
          if (undefined === elem.frame_colors[1]) {
            elem.frame_colors[1] = '';
            color2 = "";
          } else {
            color2 = (" and " + elem.frame_colors[1]);
          }
          if (null === elem.large_img) {
            elem.large_img = "http://www.novelupdates.com/img/noimagefound.jpg";
          }

          var myDate = new Date(elem.date_stolen * 1000);
          $('#list').append('Bike name: ' + elem.title + '<br> Serial Number: ' + elem.serial + '<br> Color: ' + elem.frame_colors[0] + color2 + '<br>Date stolen: ' + myDate + '<br><br><img src="' + elem.large_img + '" width="200">' + '<hr>');
      });
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

var populatetime = function() {
  $('#time').text(moment());
};

$(document).ready(function(){
  setInterval(populatetime, 1000);
});

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

},{"./../js/bike.js":1}]},{},[2]);
