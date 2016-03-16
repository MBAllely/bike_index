var compareColor = require('./../js/bike.js').compareColor;

// var apiKey = 'c607b23f7aff2bf5afa3958b47ffb18a884a20f2c6f107ab070ccab60a07e1f5'

$(document).ready(function() {
  $('#stolen_bikes').click(function() {
    var city = $('#location').val();
    var search_color = $('#input_color').val();
    console.log(city);
    $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=40&proximity=' + city + '&proximity_square=100', function(response) {

      console.log(response);
      bikes = compareColor(search_color, response.bikes);
      console.log(bikes);
      // console.log(response);

        bikes.forEach(function(elem, index) {
          console.log(elem, index);
          document.body.innerHTML += ('<h3>Bike name: ' + elem.title + '<br> Serial Number: ' + elem.serial + '<br> Color: ' + elem.frame_colors[0]) + '</h3>';
          // document.body.innerHTML += + '</br>';
        });
      // $('.stolen_bikes').text("Stolen bikes within 100 miles of " + city + ":\n" + response.bikes[0].title);
      // console.log(response);
    });
  });

  // make function to page through results

});
