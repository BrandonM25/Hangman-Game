var words = ["javascript", "middlesex", "colts", "animation"];

// var el = document.getElementById("element");
// el.innerHTML = words;

var word = words[Math.floor(Math.random() * words.length)];

// set up answer array

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

//Create variable to keep track of letters that remain to be guessed
var remainingLetters = word.length;

//Game Loop!!

while (remainingLetters > 0) {
    //show the player their progress
    var el = document.getElementById("element");
    el.innerHTML = answerArray.join(" ");
    //Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing");
    if (guess === null) {
        //Exit the game loop
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        //Update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
    //End of game loop
}

el.innerHTML = answerArray.join(" ");
alert("Good job!! The answer was " + word + ".");


