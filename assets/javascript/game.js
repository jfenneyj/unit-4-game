

// When the user clicks on a crystal it add a specific amount of points to user total score.
// the random number will be hidden until crystal is clicked
// update the user score when crystal is clicked
// User wins when users score is equal to beginning random number.
// User loses if users total is greater then randomNumber.

$(document).ready(function () {

  // variables
  var randomResult;
  var wins = 0;
  var losses = 0;
  var previous = 0;


  function resetGame() {
    
    var images = ["assets/images/crystal.png", "assets/images/blue.png", "assets/images/green.png", "assets/images/Amethyst.png"]

    // console.log(wins);
    //random number at the start of the game between 19 - 100.
    randomResult = Math.floor(Math.random() * 82) + 19;
    // console.log(randomResult);

    $("#result").html("Random Number: " + randomResult);

    $(".crystals").html("");
    // Each crystal has a random number between 1 - 12.
    for (var i = 0; i < 4; i++) {

      var random = Math.floor(Math.random() * 11) + 1;
      console.log(random);

      // object
      var crystal = $("<div>");

      // setting value
      crystal.attr({

        "class": "crystal",
        "dataRandom": random,
        
      });

      crystal.css({
        "background-image":"url('" + images[i] + "')",
         "background-size" : "cover"   
      });

      $(".crystals").append(crystal);

    }
    // console.log(random);
    $(".crystal").on("click", function () {

      var result;
  
  
      // parseInt converts to a number

      var num = parseInt($(this).attr("dataRandom"));

      // console.log("This is not my day", num);
      // adding to the previous amount

      previous += num;

      $("#previous").html("Total score: " + previous);


      console.log(previous);

      if (previous > randomResult) {
        randomResult = Math.floor(Math.random() * 82) + 19;

        losses++;

        $("#losses").html("You loss: " + losses);

        previous = 0;

        resetGame();

      } else if (previous === randomResult) {

        wins++;

        $("#wins").html("You win: " + wins);

        previous = 0;

        resetGame();
      }
    });
  }

  resetGame();
});


































