var compareColor = require('./../js/bike.js').compareColor;

$(document).ready(function() {
  $('#stolen_bikes').click(function() {
    event.preventDefault();
    var city = $('#location').val();
    var search_color = $('#input_color').val();
    console.log(search_color);
    $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=40&proximity=' + city + '&proximity_square=100', function(response) {
      console.log(response);
      if (search_color !== "") {
        bikes = compareColor(search_color, response.bikes);
      };
      console.log(response);
      var bikes = response.bikes;
        bikes.forEach(function(elem, index) {
          console.log(elem, index);
          document.body.innerHTML += ('<h3>Bike name: ' + elem.title + '<br> Serial Number: ' + elem.serial + '<br> Color: ' + elem.frame_colors[0]) + '</h3>';
        });
    });
  });
});
