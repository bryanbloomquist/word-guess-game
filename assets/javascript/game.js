let monsters = [
	{ name: "aboleth", image: "assets/images/aboleth.jpeg" },
	{ name: "animated armor", image: "assets/images/animatedArmor.jpg" },
	{ name: "balor", image: "assets/images/balor.jpeg" },
	{ name: "banshee", image: "assets/images/banshee.jpeg" },
	{ name: "barlgura", image: "assets/images/barlgura.png" },
	{ name: "basilisk", image: "assets/images/basilisk.jpeg" },
	{ name: "behir", image: "assets/images/behir.jpeg" },
	{ name: "beholder", image: "assets/images/beholder.jpg" },
	{ name: "beholder zombie", image: "assets/images/beholderZombie.jpg" },
	{ name: "black dragon", image: "assets/images/blackDragon.jpeg" },
	{ name: "black pudding", image: "assets/images/blackPudding.jpeg" },
	{ name: "bone naga", image: "assets/images/boneNaga.jpg" },
	{ name: "bugbear", image: "assets/images/bugbear.jpeg" },
	{ name: "bulette", image: "assets/images/bulette.jpg" },
	{ name: "bullywug", image: "assets/images/bullywug.jpg" },
	{ name: "cambion", image: "assets/images/cambion.jpg" },
	{ name: "carrion crawler", image: "assets/images/carrionCrawler.jpg" },
	{ name: "centaur", image: "assets/images/centaur.jpg" },
	{ name: "chimera", image: "assets/images/chimera.jpeg" },
	{ name: "chuul", image: "assets/images/chuul.jpg" },
	{ name: "cockatrice", image: "assets/images/cockatrice.jpg" },
	{ name: "cyclops", image: "assets/images/cyclops.jpg" },
	{ name: "death knight", image: "assets/images/deathKnight.jpeg" },
	{ name: "death slaad", image: "assets/images/deathSlaad.jpg" },
	{ name: "death tyrant", image: "assets/images/deathTyrant.jpg" },
	{ name: "demilich", image: "assets/images/demilich.jpg" },
	{ name: "displacer beast", image: "assets/images/displacerBeast.jpg" },
	{ name: "doppleganger", image: "assets/images/doppleganger.jpg" },
	{ name: "dracolich", image: "assets/images/dracolich.jpeg" },
	{ name: "drider", image: "assets/images/drider.jpeg" },
	{ name: "drow", image: "assets/images/drow.jpg" },
	{ name: "flameskull", image: "assets/images/flameskull.png" },
	{ name: "flesh golem", image: "assets/images/fleshGolem.jpeg" },
	{ name: "flumph", image: "assets/images/flumph.jpeg" },
	{ name: "frost giant", image: "assets/images/frostGiant.jpeg" },
	{ name: "gelatinous cube", image: "assets/images/GelatinousCube.jpeg" },
	{ name: "ghast", image: "assets/images/ghast.jpeg" },
	{ name: "gibbering mouther", image: "assets/images/gibberingMouther.jpeg" },
	{ name: "githyanki", image: "assets/images/githyanki.png" },
	{ name: "glabrezu", image: "assets/images/glabrezu.jpeg" },
	{ name: "gnoll", image: "assets/images/gnoll.jpg" },
	{ name: "gorgon", image: "assets/images/gorgon.jpg" },
	{ name: "grell", image: "assets/images/grell.jpg" },
	{ name: "grey ooze", image: "assets/images/greyOoze.jpg" },
	{ name: "grick", image: "assets/images/grick.jpg" },
	{ name: "griffon", image: "assets/images/griffon.jpeg" },
	{ name: "hell hound", image: "assets/images/hellHound.jpg" },
	{ name: "helmed horror", image: "assets/images/helmedHorror.jpg" },
	{ name: "hill giant", image: "assets/images/hillGiant.jpeg" },
	{ name: "hippogriff", image: "assets/images/hippogriff.jpeg" },
	{ name: "homunculus", image: "assets/images/homunculus.jpeg" },
	{ name: "hook horror", image: "assets/images/hookHorror.jpg" },
	{ name: "hydra", image: "assets/images/hydra.jpeg" },
	{ name: "intellect devourer", image: "assets/images/intellectDevourer.jpg" },
	{ name: "kenku", image: "assets/images/kenku.jpg" },
	{ name: "kobold", image: "assets/images/kobold.jpeg" },
	{ name: "kuo toa", image: "assets/images/kuotoa.jpg" },
	{ name: "lich", image: "assets/images/lich.jpeg" },
	{ name: "manticore", image: "assets/images/manticore.jpg" },
	{ name: "marilith", image: "assets/images/marilith.jpeg" },
	{ name: "medusa", image: "assets/images/medusa.jpeg" },
	{ name: "mimic", image: "assets/images/mimic.jpeg" },
	{ name: "mind flayer", image: "assets/images/mindFlayer.jpg" },
	{ name: "minotaur skeleton", image: "assets/images/minotaurSkeleton.jpeg" },
	{ name: "mummy", image: "assets/images/mummy.jpg" },
	{ name: "myconid", image: "assets/images/myconid.png" },
	{ name: "nalfeshnee", image: "assets/images/nalfeshnee.jpg" },
	{ name: "nothic", image: "assets/images/nothic.jpg" },
	{ name: "ochre jelly", image: "assets/images/ochreJelly.jpeg" },
	{ name: "orc war chief", image: "assets/images/orc.jpg" },
	{ name: "otyugh", image: "assets/images/otyugh.jpeg" },
	{ name: "owlbear", image: "assets/images/owlbear.jpeg" },
	{ name: "pit fiend", image: "assets/images/pitFiend.jpeg" },
	{ name: "purple worm", image: "assets/images/purpleWorm.jpeg" },
	{ name: "quaggoth", image: "assets/images/quaggoth.jpg" },
	{ name: "quasit", image: "assets/images/quasit.jpeg" },
	{ name: "red dragon", image: "assets/images/redDragon.jpeg" },
	{ name: "rust monster", image: "assets/images/rustMonster.jpeg" },
	{ name: "scarecrow", image: "assets/images/scarecrow.jpg" },
	{ name: "shambling mound", image: "assets/images/shamblingMound.jpeg" },
	{ name: "spectator", image: "assets/images/spectator.png" },
	{ name: "spirit naga", image: "assets/images/spiritNaga.jpg" },
	{ name: "svirfneblin", image: "assets/images/svirfneblin.jpeg" },
	{ name: "tarrasque", image: "assets/images/tarrasque.jpeg" },
	{ name: "treant", image: "assets/images/treant.jpeg" },
	{ name: "troglodyte", image: "assets/images/troglodyte.jpg" },
	{ name: "troll", image: "assets/images/troll.jpeg" },
	{ name: "umber hulk", image: "assets/images/umberHulk.jpg" },
	{ name: "vampire", image: "assets/images/vampire.jpeg" },
	{ name: "vine blight", image: "assets/images/vineBlight.jpg" },
	{ name: "water weird", image: "assets/images/waterWeird.jpg" },
	{ name: "weretiger", image: "assets/images/weretiger.jpeg" },
	{ name: "wight", image: "assets/images/wight.jpeg" },
	{ name: "wraith", image: "assets/images/wraith.jpeg" },
	{ name: "xorn", image: "assets/images/xorn.jpeg" },
	{ name: "yeti", image: "assets/images/yeti.jpg" },
	{ name: "yochlol", image: "assets/images/yochlol.jpg" },
	{ name: "yuan ti", image: "assets/images/yuanti.jpg" },
	{ name: "zombie", image: "assets/images/zombie.jpeg" },
	{ name: "zombie wyvern", image: "assets/images/zombieWyvern.jpg" },
]

let level = 1;
let health = 1;
let guessesRemaining = 10;
let lettersGuessed = [">"];
let index = 99;
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
