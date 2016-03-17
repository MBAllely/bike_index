var compareColor = require('./../js/bike.js').compareColor;

$(document).ready(function() {

  $('#stolen_bikes').click(function() {
    event.preventDefault();
    var city = $('#location').val();
    var search_color = $('#input_color').val();
    var results_total = $('#number_of_results').val();
    console.log("color" + search_color);
    $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=' + results_total + '&proximity=' + city + '&proximity_square=100', function(response) {

      console.log(response);
      if (search_color.length > 0) {
        bikes = compareColor(search_color, response.bikes);
      } else {
        console.log("blank");
        bikes = response.bikes;
      }
        bikes.forEach(function(elem, index) {
          var myDate = new Date(elem.date_stolen * 1000);
          $('#list').append('Bike name: ' + elem.title + '<br> Serial Number: ' + elem.serial + '<br> Color: ' + elem.frame_colors[0] + " and " +  elem.frame_colors[1] + '<br>Date stolen: ' + myDate + '<br>' + '<br>');
      });
      //   bikes.forEach(function(elem, index) {
      //     var myDate = new Date(elem.date_stolen * 1000);
      //     console.log(elem, index);
      //     console.log("test");
      //     document.body.innerHTML += ('<h3>Bike name: ' + elem.title + '<br> Serial Number: ' + elem.serial + '<br> Color: ' + elem.frame_colors[0] + " and " +  elem.frame_colors[1]) + '<br>Date stolen: ' + myDate + '</h3>';
      // });
    });
  });
});
