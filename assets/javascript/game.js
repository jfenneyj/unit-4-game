

// When the user clicks on a crystal it add a specific amount of points to user total score.
// the random number will be hidden until crystal is clicked
// update the user score when crystal is clicked
// User wins when users score is equal to beginning random number.
// User loses if users total is greater then randomNumber.

$(document).ready(function () {


  var randomResult;
  var wins;
  var loses;
  var userTotal;

  // console.log(wins);
 //random number at the start of the game between 19 - 120.
  randomResult = Math.floor(Math.random() * 82) + 19;
  // console.log(randomResult);

  $("#result").html("Random Number: " + randomResult);

  for (var i = 0; i < 4; i++) {
// Each crystal has a random number between 1 - 12.
    var random = Math.floor(Math.random() * 11) + 1;
    // console.log(random);

  }

  $(".crystals").on("click",function(){

    // console.log($(this));
  });


});







// function computerNum(){
// randomNum = Math.floor((Math.random()* 120)- 1);

// alert(randomNum);
// }

























