
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
    var wins=0;
    var losses=0;
    var guesses=[];
    var guessesLeft=9;
    var getRandomLetter= null;
    

    document.getElementById("wins").innerHTML=wins;
    document.getElementById("losses").innerHTML=losses;
    document.getElementById("guesses").innerHTML=guesses;
    document.getElementById("guessesLeft").innerHTML=guessesLeft;
    

    function updateGuessesLeft(){
        document.querySelector("#guessesLeft").innerHTML="Guesses Left " + guessesLeft
    };

   function updateGuesses(){
       document.querySelector("#guesses").innerHTML ="Your Guesses " + guesses.join(", " )
   };

    function updateWins() {
      document.querySelector("#wins").innerHTML = "Wins " + wins
    };

     function updateLosses() {
      document.querySelector("#losses").innerHTML = "Losses " + losses
    };
    
    function updateGetRandomLetter() {
       this.getRandomLetter = this.letters[Math.floor(Math.random() * this.letters.length)];
        console.log(getRandomLetter)    
};

// grabs random number for computer
   var getRandomLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(getRandomLetter)

// variable to reset computers guesses


// resets game
    var reset = function() {
  guesses = [];
  guessesLeft = 9;
  updateGetRandomLetter();
  updateGuesses(); 
  updateGuessesLeft();
};


// tracks user key press
    document.onkeyup = function(event){
      var userInput = event.key.toLowerCase();
      guesses.push(userInput);
        
      
            updateGuesses();
        console.log(userInput)
            alert(userInput)

            guessesLeft--
            updateGuessesLeft();

        if (userInput === getRandomLetter) {
          alert("Correct!");
          wins++;
        updateWins("");
        reset();
        }
       
        else if (guessesLeft==0) { 
          alert("Wrong!");
          guessesLeft--
          updateGuessesLeft();
          losses++
          updateLosses();
          reset();
    };

};