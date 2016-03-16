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

//compare models
//compare blue vs red, etc
//display stolen date (date converter function from UNIX timestamp)
