let level = 1;
let health = 10;
let guessesRemaining = 10;
let lettersGuessed = [">"];
let index = 0;
let currentWord;
let currentImage;
let answerArray = [];
let hashedWord;
let currentOpacity = 0;
let gameOn = true;

const alphabet = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];
const audio = document.createElement("audio");
const chat = document.querySelector( "#adventure-log" );

const shuffle = (array) => { //Fisher-Yates shuffle algorithm
	let currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};

const selectWord = () => {
	currentWord = monsters[ index ].name;
	currentImage = monsters[ index ].image;
	document.querySelector( "#monsterImage" ).src = currentImage;
	hashWord();
};

const hashWord = () => {
	for ( let i = 0; i < currentWord.length; i++ ) {
		if ( currentWord[ i ] === " " ) {
			answerArray.push( " - " );
		} else {
			answerArray.push( " _ ")
		}
	}
	displayHash();
};

const displayHash = () => {
	hashedWord = answerArray.join( " " );
	document.querySelector( "#wordSpan" ).innerHTML = hashedWord;
};

document.onkeyup = ( event ) => { //checks to see if game is still going
	if ( gameOn ) {
		let guess = event.key.toLowerCase();
		validKey( guess );
	} 
};

const validKey = ( guess ) => { //checks to see if guess is a valid letter or not.
	if ( alphabet.includes( guess )) {
		checkGuess( guess );
	}
};

const checkGuess = ( guess ) => { //checks to see if the letter has been guessed already this round
	if ( lettersGuessed.includes( guess )) {
		chat.innerHTML = 'You have already guessed "' + guess + '", try another letter.'
	} else {
		lettersGuessed.push( guess );
		document.querySelector( "#lettersGuessed" ).innerHTML = lettersGuessed.join( " " );
		validateLetter( guess );
	}
};

const validateLetter = ( guess ) => { //checks to see if the letter is in the word
	if ( currentWord.indexOf( guess ) === -1 ) {
		chat.innerHTML = '"' + guess +'" is not in the monsters name. <br> It moves closer to you.';
		guessesRemaining--;
		document.querySelector( "#guessesRemaining" ).innerHTML = guessesRemaining;
		currentOpacity += .05;
		monsterImage.style.opacity = currentOpacity;
		sufferWound();
	} else {
		for ( let i = 0; i < currentWord.length; i++ ) {
			if ( currentWord[ i ] === guess ) {
				answerArray[ i ] = guess;
			}
		}
		displayHash();
		checkWord();
	}
};

const sufferWound = () => {
	if ( guessesRemaining === 0 ) {
		chat.innerHTML = "The " + currentWord + " hit you! <br> You lost 1 Hit Point.";
		audio.setAttribute( "src", "assets/wilhelmscream.wav" );
		audio.play();
		health--;
		index++;
		document.querySelector( "#healthPoints" ).innerHTML = health;
		checkHP();
	}
}

const checkHP = () => { //checks to see if player has any health left to continue
	if ( health > 0 ) {
		reset();
	} else {
		death();
	}
}

const death = () => { //game over
	gameOn = false;
	currentOpacity = 1.0;
	monsterImage.style.opacity = currentOpacity;
	document.querySelector( "#logo" ).src = "assets/images/youdied.png";
	document.querySelector( "#monsterImage" ).src = "assets/images/critFail.jpg";
	document.querySelector( "#gameover" ).innerHTML = "Refresh your browser to play again.";
	document.querySelector( "#adventure-log" ).innerHTML = "You were slain by the " + currentWord + "!<br> Refresh your broswer to play again.";
}

const checkWord = () => { //checks to see if the word has been completely guessed
	if ( answerArray.indexOf( " _ " ) === -1 ) {
		audio.setAttribute( "src", "assets/victorybyte.wav" );
		audio.play();
		level++;
		index++;
		document.querySelector( "#expLevel" ).innerHTML = level;
		checkIndex();
	}
}

const checkIndex = () => { //checks to see if there are anymore monsters to slay
	if ( index < monsters.length ) {
		chat.innerHTML = "You defeated the " + currentWord + "! <br> You gained 1 experience level.";
		reset();
	} else {
		gameWin();
	}
}

const gameWin = () => { //if there are no more monsters the game is over
	gameOn = false;
	currentOpacity = 1.0;
	monsterImage.style.opacity = currentOpacity;
	document.getElementById("monsterImage").src = "assets/images/youwon.png";
	document.getElementById("gameover").innerHTML = "Refresh your browser to play again.";
	document.getElementById("adventure-log").innerHTML = "You've won all of D & D! <br> Refresh your broswer to play again.";
}

const reset = () => { //resets the varaibles and selectst new word for the next round
	answerArray = [];
	lettersGuessed = [ ">" ];
	guessesRemaining = 10;
	currentOpacity = 0;
	monsterImage.style.opacity = currentOpacity;
	document.querySelector( "#lettersGuessed" ).innerHTML = lettersGuessed;
	document.querySelector( "#guessesRemaining" ).innerHTML = guessesRemaining;
	selectWord();
}

shuffle( monsters ); //shuffle the monster array
selectWord(); //pick the first word and start the game
