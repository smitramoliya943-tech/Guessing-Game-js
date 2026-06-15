function startGame() {
    let playAgain = true;

    while (playAgain) {

        let randomNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;
        let maxAttempts = 10;
        let guessedCorrectly = false;

        alert("Welcome to Number Guessing Game!\nGuess a number between 1 and 100.");

        while (attempts < maxAttempts) {

            let guess = prompt(
                `Attempt ${attempts + 1}/${maxAttempts}\nEnter your guess:`
            );

            if (guess === null) {
                alert("Game Cancelled!");
                return;
            }

            guess = Number(guess);

            if (isNaN(guess)) {
                alert("Please enter a valid number.");
                continue;
            }

            if (guess < 1 || guess > 100) {
                alert("Please enter a number between 1 and 100.");
                continue;
            }

            attempts++;

            if (guess > randomNumber) {
                alert("Too High!");
            }
            else if (guess < randomNumber) {
                alert("Too Low!");
            }
            else {
                alert(
                    ' Congratulations! You Win!\nYou guessed the number in ${attempts} attempts.'
                );
                guessedCorrectly = true;
                break;
            }
        }

        if (!guessedCorrectly && attempts === maxAttempts) {
            alert(
                ` Game Over!\nThe correct number was ${randomNumber}.`
            );
        }

        let choice = prompt("Do you want to Play Again? (Yes/No)");

        if (
            choice === null ||
            choice.toLowerCase() !== "yes"
        ) {
            alert("Thank You for Playing!");
            playAgain = false;
        }
    }
}