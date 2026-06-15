let playAgain = true;

while (playAgain) {

    let randomNumber = Math.floor(Math.random() * 100) + 1;

    let attempts = 0;
    let maxAttempts = 10;
    let guessedCorrectly = false;

    alert("Welcome To Number Guessing Game");

    while (attempts < maxAttempts) {

        let guess = prompt("Enter a Number Between 1 and 100");

        if (guess === null) {
            break;
        }

        guess = Number(guess);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Please Enter a Valid Number Between 1 and 100");
            continue;
        }

        attempts++;

        let leftAttempts = maxAttempts - attempts;

        if (guess > randomNumber) {
            alert("Too High!\nAttempts Left : " + leftAttempts);
        }
        else if (guess < randomNumber) {
            alert("Too Low!\nAttempts Left : " + leftAttempts);
        }
        else {
            alert("Congratulations! You Win!\nTotal Attempts Used : " + attempts);
            guessedCorrectly = true;
            break;
        }
    }

    playAgain = prompt("Play Again ? (yes / no)");

    if (playAgain == "yes") {
        playAgain = true;
    }
    else {
        playAgain = false;
        alert("Thank You For Playing!");
    }
}
