 //* Entering Game*//
 var name = prompt("What's your name?");
    console.log("Hello " + name); 
  
  // Gets Link for Theme Song
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/");

    // Theme Button
    $(".theme-button").on("click", function() {
      audioElement.play();
    });
    $(".theme2-button").on("click", function() {
        audioElement.setAttribute("src", "assets/");
      audioElement.play();
    });
    $(".theme3-button").on("click", function() {
        audioElement.setAttribute("src", "assets/");
      audioElement.play();
    });
    $(".theme4-button").on("click", function() {
        audioElement.setAttribute("src", "assets/");
    audioElement.play();
    });

    // VARIABLES
    // ==========================================================================

    // The array of questions for our quiz game.
    var currentWord =  (" _ " +  " _ " + " _ " + " _ " + " _ " + " _ " + " _ " +  " _ " + " _ ")
      // We start the game with a score of 0.
      var score = 0;
      // Variable to hold the index of current question.
      var currentWordIndex = 0;

