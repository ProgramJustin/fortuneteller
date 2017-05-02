//business logic
var determine = function(luckyCounter, unluckyCounter) {
  if (luckyCounter > unluckyCounter) {
    counter = luckyCounter;
    return "lucky";
  } else if (unluckyCounter > luckyCounter) {
    counter = unluckyCounter;
    return "unlucky";
  } else {
    counter = unluckyCounter + luckyCounter;
    return "middle-road";
  }
};

var counter = 0;

$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    var luckCounter = 0;
    var unluckyCounter = 0;

    $('input[name="lucky"]:checked').each(function() {
      luckCounter++;
    });

    $('input[name="unlucky"]:checked').each(function() {
      unluckyCounter++;
    });

    $('#' + determine(luckCounter, unluckyCounter)).show();
    $("#" + determine(luckCounter, unluckyCounter) + " span").text(counter);

  });

});
