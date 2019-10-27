console.log ("This is working well")

//variables

var words = ["inception", "ironman", "matrix", "transformers", "harrypotter", "avengers", "lordofrings"];

var randomWord = "";
var lettersOfWord = [];
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

var wins = 0;
var losses = 0;
var guessesRemaining = 9;


// Functions
function Game() {
    //computer generates random word from words array
    randomWord = words[Math.floor(Math.random() * words.length)];

    // split the individual word into separate arrays, and store in new array 
    lettersOfWord = randomWord.split("");

    //store length of word in blanks, for later use
    blanks = lettersOfWord.length;

    //creating a loop to generate "_" for each letter in array stored in blanks
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push ("_");
        
    }

    //showing the "_" within HTML
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    //console logging 
    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}


    // Check in keypressed is between A-Z or a-z
    function isAlpha (ch){
        return /^[A-Z]$/i.test(ch);
    }


//**AUDIO FUNCTION

//variables for audio function
var a = document.getElementById("inception");
var ironman = document.getElementById("ironman");
var matrix = document.getElementById("matrix");
var harrypotter = document.getElementById("harrypotter");
var avengers = document.getElementById("avengers");
var transformers = document.getElementById("transformers");
var lordofrings = document.getElementById("lordofrings");


function aud() {
    //inception Audio & Image
    //---------------------------
    if (randomWord === words[0]) {
        matrix.pause();
        harrypotter.pause();
        avengers.pause();
        transformers.pause();
        lordofrings.pause();
        ironman.pause();
        a.play();
        document.getElementById("image").src="./assets/images/inception.jpg"; 
    }
    //Ironman Audio & Image
    //---------------------------
    else if (randomWord === words[1]) {
        matrix.pause();
        harrypotter.pause();
        avengers.pause();
        transformers.pause();
        lordofrings.pause();
        a.pause();
        ironman.play();
        document.getElementById("image").src="./assets/images/ironman.jpg";
    }
    //Matrix Audio & Image
    //---------------------------
    else if (randomWord === words[2]) {
        harrypotter.pause();
        avengers.pause();
        transformers.pause();
        lordofrings.pause();
        ironman.pause();
        a.pause();
        matrix.play();
        document.getElementById("image").src="./assets/images/matrix.jpg";
    }
    //transformer Audio & Image
    //---------------------------
    else if (randomWord === words[3]) {
        matrix.pause();
        harrypotter.pause();
        avengers.pause();
        lordofrings.pause();
        ironman.pause();
        a.pause();
        transformers.play();
        document.getElementById("image").src="./assets/images/transformers.jpeg";
    }
    //harrypotter Audio & Image
    //---------------------------
    else if (randomWord === words[4]) {
        matrix.pause();
        avengers.pause();
        transformers.pause();
        lordofrings.pause();
        ironman.pause();
        a.pause();
        harrypotter.play();
        document.getElementById("image").src= ".assets/images/harrypotter.jpg";
    }
    // avengers Audio & Image
    //---------------------------
    else if (randomWord === words[5]) {
        matrix.pause();
        harrypotter.pause();
        transformers.pause();
        lordofrings.pause();
        ironman.pause();
        a.pause();
        avengers.play();
        document.getElementById("image").src="./assets/images/avengers.jpeg";
    }
    // lordoftherings Audio & Image
    //---------------------------
    else if (randomWord === words[6]) {
        matrix.pause();
        harrypotter.pause();
        avengers.pause();
        transformers.pause();
        ironman.pause();
        a.pause();
        lordofrings.play();
        document.getElementById("image").src="./assets/images/lordoftherings.jpeg";
    }
};


//RESET FUNCTION

function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}


//CHECK LETTERS/COMPARE FUNCTION


//If/Else, to see if letter selected matches random word
function checkLetters(letter) {
    var letterInWord = false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}


//check to see if player won...
function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //if WON...then alert, play audio, display image and reset new round
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud()
        reset()
        //display wins on screen
        document.getElementById("winstracker").innerHTML = " " + wins;

        //if LOST...then alert and reset new round
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/try-again.png"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}


//call start game function
Game()

//check for keyup, and convert to lowercase then store in guesses
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    //check to see if guess entered matches value of random word
    checkLetters(guesses);
    //process wins/loss 
    complete();
    //store player guess in console for reference 
    console.log(guesses);

    //display/store incorrect letters on screen
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}

