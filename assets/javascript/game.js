//set array of monsters
var monsters = [
    {name: "beholder", image: "assets/images/beholder.png"},
    {name: "doppleganger", image: "assets/images/doppleganger.jpg"},
    {name: "dragon", image: "assets/images/dragon.jpeg"},
    {name: "drider", image: "assets/images/drider.jpeg"},
    {name: "flumph", image: "assets/images/flumph.jpeg"},
    {name: "githyanki", image: "assets/images/githyanki.png"},
    {name: "gnoll", image: "assets/images/gnoll.jpg"},
    {name: "illithid", image: "assets/images/illithid.png"},
    {name: "lich", image: "assets/images/lich.jpeg"},
    {name: "mimic", image: "assets/images/mimic.jpeg"},
    {name: "owlbear", image: "assets/images/owlbear.jpeg"},
    {name: "slaad", image: "assets/images/slaad.jpg"},
    {name: "troll", image: "assets/images/troll.jpeg"},
    {name: "vampire", image: "assets/images/vampire.jpeg"},
    {name: "wraith", image: "assets/images/wraith.jpeg"}
]


//set variable to be filled later
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var lettersUsed = [];
var answerArray = [];
var randomNumber = Math.floor(Math.random()*monsters.length);
var word = " ";

//set the game function
function game() {
    word = monsters[randomNumber].name;
    //seperate random word into new array
    guessWord = word.split("");
        console.log(guessWord);
    //create __ for each letter in array
    for (var i = 0; i < guessWord.length; i++) {
        answerArray.push("_");
    }
    //display the word to be guessed in html
    document.getElementById("wordSpan").innerHTML = answerArray.join(" ");
}


//get image for game win
function victoryLap () {
    document.getElementById("monsterImage").src = monsters[randomNumber].image;
}


//set the reset function
function reset () {
    randomNumber = Math.floor(Math.random()*monsters.length);
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
    if (letterMatch) {   //if guess is in the word
        for (var i=0; i < guessWord.length; i++) {
            if (guessWord[i] == letter) {
                answerArray[i]=letter;
            }
        }
    } else {  //if guess is not in the word
        lettersUsed.push(letter);
        guessesRemaining--;
    }
}


//check if the user won the game
function gameWin () {
    //if they won
    if (guessWord.toString() === answerArray.toString ()) {
        wins++;
        document.getElementById("playerWins").innerHTML = +wins;
        victoryLap ();
        reset();
    //if they lost
    } else if (guessesRemaining === 0) {
        losses++;
        document.getElementById("playerLosses").innerHTML = +losses;
        document.getElementById("monsterImage").src = "assets/images/critFail.jpg";
        reset ();
    }  
    //if the game continues
    document.getElementById("wordSpan").innerHTML = " "+answerArray.join(" ");
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
}

//run the game
game ();

//get the users guess
document.onkeyup = function(event) {
    var guess = event.key;
    checkGuess(guess);
    gameWin();
    document.getElementById("lettersGuessed").innerHTML = " " + lettersUsed.join("  ");
}