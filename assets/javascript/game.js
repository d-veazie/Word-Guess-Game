

//Pick a random word
//While the word hasn't been guessed 
 //Show the players current progress
 //Get a guess from the player
 
 //Else If the guess is not a single letter {
 //Tell the player to pick a single letter
 //}
 //Else {
 //If the guess is in the word {
// Update the player's progress with the guess
// }
//}
//}


// create array of words
let game = [
    "nasa",
    "moon",
    "orbit",
    "sun",
    "alien",
    "star",
    "planet",
    "spacex"
];



// pick a random word from the array
let choice = game[Math.floor(Math.random() * game.length)];
//error vv unsolved
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength; 
let letters = answer.split('');
let triesRemaining = 9;
let output = "";
let playerLetter = "";



//let attemptsLeft = 15;
 





const setup = function() { 

        for (let i = 0; i < answer.length; i++) {
            display[i] = "_"; 
            output = output + diplay[i];
        }

        document.getElementById("p").text = output;
        output = "";
     
}

// shout out to Meri Engel on youtube for helping me understand the above code better. 

// test code 
function gameFunction() {


   $(".words").text = output; 
   output = ""; 
     document.getElementById("game").innerHtml = output;
    output = ""; 
} 

for (let i = 0; i < answer.length; i++) {
    
}
// if guessed word then tell the user they won 
if (win < 1) {
    document.getElementById('winCount').innerHTML = "Nice Work!";
// otherwise tell them they are losing 
} else if (triesRemaining < 1) {
    document.getElementById('lossCount').text = "Try Again!";

// tell user how many guesses they have left
} else {
    document.getElementById('remainingGuesses').text = 'You have ' + triesRemaining + ' more guesses.';
 }
//if (answer) ;

//~~~~~~~



// original test code vv 
//creating a for loop to put underscores up
//let answerArray = [];
//for (let i = 0; i < word.length; i++) {
  //  answerArray[i] = "_"; 
//}

//let remainingLetters = word.length; 

//while (remainingLetters > 0) {
    
