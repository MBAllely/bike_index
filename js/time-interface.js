var populatetime = function() {
  $('#time').text(moment());
};

$(document).ready(function(){
  setInterval(populatetime, 1000);
});
