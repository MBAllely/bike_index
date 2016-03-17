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
