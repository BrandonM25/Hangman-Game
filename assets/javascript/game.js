var words = ["javascript", "middlesex", "colts"];

var word = words[Math.floor(Math.random() * words.length)];

//Set up answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

//Create variable to keep track of letters that remain to be guessed
var remaingLetters = word.length;

//Game Loop
while (remainingLetters > 0) {
    //Show the player their progress
    var el = document.getElementById();
    el.innerHTML = answerArray.join(" ");
    //get a guess from player
    var guess = prompt("Guess a Letter, or click Cancel to stop playing. ");
    if (guess === null) {
        //exit the game loop
        break;
    }
    else if (guess.length !== 1) {
        alert("Please enter a single letter");
        else {
            //update the game state with the guess
            for (var j = 0; j < word.length; j++) {
                if (word[j] === guess) {
                    answerArray[j] = guess;
                    remaingLetters--;
                }
            }
        }
    }
}

el.innerHTML = answerArray.join("");
alert("Good job the answer was " + word + ".");
