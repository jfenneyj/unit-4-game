

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
  var previous = 0;
  

  $("#wins").html("Wins: ");
  $("#losses").html("Losses: ");

  // console.log(wins);
  //random number at the start of the game between 19 - 100.
  randomResult = Math.floor(Math.random() * 82) + 19;
  // console.log(randomResult);

  $("#result").html("Random Number: " + randomResult);


  // Each crystal has a random number between 1 - 12.
  for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;
    // console.log(random);
    
    // object
    var crystal = $("<div>");
    // setting value
    crystal.attr({
      "class": "crystal",
      "dataRandom" : random

    });

    $(".crystals").append(crystal);

  }
  // console.log(random);

  $(".crystal").on("click", function () {

    var result;

    console.log(previous);

    // parseInt converts to a number
    var num = parseInt($(this).attr("dataRandom"));
    // adding to the previous amount
    previous += num;

    if(previous > randomResult){

      console.log("Sorry, You loss try again!")

    } else if(previous === randomResult){
      console.log("You Win!!")
    }

    




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























