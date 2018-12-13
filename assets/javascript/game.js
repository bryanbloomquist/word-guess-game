//set array of monsters
var monsters = [
    "beholder", "doppleganger", "dragon", "drider", "flumph", "githyanki", "gnoll",
    "illithid", "lich", "mimic", "owlbear", "slaad", "troll", "vampire", "wraith"
]


//set variable to be filled later
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var lettersUsed = [];
var answerArray = [];


//set the game function
function game() {
    //select random word from array
    var word = monsters[Math.floor(Math.random()*monsters.length)];
        console.log(word);
    //seperate random word into new array
    letters = word.split("");
        console.log(letters);
    //count number of letters in array to set __ in display
    blanks = letters.length;
        console.log(blanks);
    //create __ for each letter in array
    for (var i = 0; i < blanks; i++) {
        answerArray.push("_");
    }
    //display the word to be guessed in html
    document.getElementById("wordSpan").innerHTML = answerArray.join("  ");
}


//set the reset function
function reset () {
    var guessesRemaining = 10;
    var answerArray = [];
    var lettersUsed = [];
    game ();
}


//check the user guess with words in the array


//check if the user won the game


//run the game
game ();


//get the users guess
