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

},{}],2:[function(require,module,exports){
var compareColor = require('./../js/bike.js').compareColor;

$(document).ready(function() {
  $('#stolen_bikes').click(function() {
    var city = $('#location').val();
    var search_color = $('#input_color').val();
    $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=40&proximity=' + city + '&proximity_square=100', function(response) {
      bikes = compareColor(search_color, response.bikes);
        bikes.forEach(function(elem, index) {
          console.log(elem, index);
          document.body.innerHTML += ('<h3>Bike name: ' + elem.title + '<br> Serial Number: ' + elem.serial + '<br> Color: ' + elem.frame_colors[0]) + '</h3>';
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
      $('.weatherDescription').text("The weather is " + response.weather[0].description + ".");
      $('.weatherMain').text("The weather is " + response.weather[0].main + ".");
      $('.windSpeed').text("The wind speed is " + response.wind.speed + "m/s.");
      console.log(response);
    });
  });
});

},{"./../js/bike.js":1}]},{},[2]);
