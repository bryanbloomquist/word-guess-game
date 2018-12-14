//set array of monsters
var monsters = [
    "beholder", "doppleganger", "dragon", "drider", "flumph", "githyanki", "gnoll",
    "illithid", "lich", "mimic", "owlbear", "slaad", "troll", "vampire", "wraith"
]


//set variable to be filled later
var level = 1;
var health = 10;
var guessesRemaining = 10;
var lettersUsed = [];
var answerArray = [];


//set the game function
function game() {
    //select random word from array
    var word = monsters[Math.floor(Math.random()*monsters.length)];
        console.log(word);
    //seperate random word into new array
    guessWord = word.split("");
        console.log(guessWord);
    //create __ for each letter in array
    for (var i = 0; i < guessWord.length; i++) {
        answerArray.push("_");
    }
    //display the word to be guessed in html
    document.getElementById("wordSpan").innerHTML = answerArray.join("  ");
}


//set the reset function
function reset () {
    guessesRemaining = 10;
    lettersUsed = [];
    answerArray = [];
    game ();
}


//check the user guess with words in the array
function checkGuess (letter) {
    var letterMatch = false;
    for (var i=0; i < guessWord.length; i++) {
        if (guessWord[i]===letter) {
            letterMatch = true;
        }
    }
    //if guess is in the word
    if (letterMatch) {
        for (var i=0; i < guessWord.length; i++) {
            if (guessWord[i] == letter) {
                answerArray[i]=letter;
            }
        }
    }
    //if guess is not in the word
    else {
        lettersUsed.push(letter);
        guessesRemaining--;
    }
}


//check if the user won the game
function gameWin () {
    //if they won
    if (guessWord.toString() === answerArray.toString ()) {
        level++;
        reset ();
        document.getElementById("expLevel").innerHTML = +level;
    //if they lost but have more than 1 hit point remaining
    } else if (guessesRemaining === 0 && health > 1) {
        health--;
        reset ();
        document.getElementById("healthPoints").innerHTML = +health;
    // if they lost but have only 1 hit point
    } else if (guessesRemaining === 0 && health === 1) {
        health--;
        document.getElementById("healthPoints").innerHTML = +health;
        alert("You Died! Refresh Your Browser To Try Again!");

    //if the game continues
    }
    document.getElementById("wordSpan").innerHTML = " "+answerArray.join(" ");
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
}


//run the game
game ();


//get the users guess
document.onkeyup = function(event) {
    var guess = event.key;
        console.log(guess);
    checkGuess(guess);
    gameWin();
    document.getElementById("lettersGuessed").innerHTML = " " + lettersUsed.join("  ");
}

//game over