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
var level = 1;
var health = 10;
var guessesRemaining = 10;
var lettersUsed = [];
var answerArray = [];


//set the game function
function game() {
    //select random word from array
    var randomNumber = Math.floor(Math.random()*monsters.length);
    var word = monsters[randomNumber].name;
    var currentImage = monsters[randomNumber].image;
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
    document.getElementById("monsterImage").src = currentImage;
}


//set the reset function
function reset () {
    guessesRemaining = 10;
    monsterImage.style.opacity = 0;
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
//ONLY WORKS ON THE FIRST MISS
        monsterImage.style.opacity =+ .05;
    }
}


//check if the user won the game
function gameWin () {
    //if they won
    if (guessWord.toString() === answerArray.toString ()) {
        level++;
        
//DOESN"T WORK//monsterImage.style.opacity = 1;

//DOESN"T WORK// alert("You defeated the "+word+"! \n You gained 1 experience level! \n Press ENTER to keep playing.");

        reset();
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