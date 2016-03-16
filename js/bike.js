exports.displayAllBikes = function(bikes) {
  for(i = 0; i < stolen_bikes.length; i++) {
    output.push(response.bikes[i].title);
  }

};

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
