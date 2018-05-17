

// When the user clicks on a crystal it add a specific amount of points to user total score.
// the random number will be hidden until crystal is clicked
// update the user score when crystal is clicked
// User wins when users score is equal to beginning random number.
// User loses if users total is greater then randomNumber.

$(document).ready(function () {

  // variables
  var randomResult;
  var wins;
  var losses;
  var userTotal;

  $("#wins").html("Wins: ");
  $("#losses").html("Losses: ");

  // console.log(wins);
  //random number at the start of the game between 19 - 120.
  randomResult = Math.floor(Math.random() * 82) + 19;
  // console.log(randomResult);

  $("#result").html("Random Number: " + randomResult);


  // Each crystal has a random number between 1 - 12.
  for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 12);
    console.log(random);
    
    var crystal = $("<div>");
    crystal.attr({
      "class": "crystal",
      "data-random" : random
    });




    $(".crystals").append(crystal);


  }
  // console.log(random);





  $(".crystals").on("click", function () {


    // console.log($(this));

  });





});




// for (var i = 0; i < 4; i++) {}


// function computerNum(){
// randomNum = Math.floor((Math.random()* 120)- 1);

// alert(randomNum);
// }

// var num1 = Math.floor(Math.random() * 11) + 1;
//     var num2= Math.floor(Math.random() * 11) + 1;
//     var num3 = Math.floor(Math.random() * 11) + 1;
//     var num4 = Math.floor(Math.random() * 11) + 1;























