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
