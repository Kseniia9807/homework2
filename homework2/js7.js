document.addEventListener("DOMContentLoaded", function() {
    let secret = 7
    let guess = parseInt(prompt("Guess the secret number"))
    if (secret == guess) {
        alert("Congratulations! You've guessed the secret number.")
    } 
    else {
        alert("Sorry, you didn't guess the secret number")
    }
  
});
    
    