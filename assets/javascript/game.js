  
  
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