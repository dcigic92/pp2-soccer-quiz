/**
 * Waits for the DOM to finish loading before running the game.
 * Adds event listeners to the buttons.
 */
document.addEventListener("DOMContentLoaded", function() {
    let menuButtons = document.getElementsByClassName("menu-btn");
    let homeButtons = document.getElementsByClassName("home-btn");

    for (let button of homeButtons) {
        button.addEventListener("click", function() {
            window.location.reload(); // On click reloads page
        })
    }

    for (let button of menuButtons) {
        button.addEventListener("click", function() {
            // Hides menu window
            document.getElementById("menu-window").style.display = "none";
            if (this.getAttribute("id") === "start-btn") {
                openGameWindow();
            } else if (this.getAttribute("id") === "rules-btn") {
                openInstructionsWindow();
            } else if (this.getAttribute("id") === "highest-score-btn") {
                openHighestScoreWindow();
            };
        })
    }
})

/**
 * Opens game window and scores.
 * Calls displayQuestion function.
 */
function openGameWindow() {
    document.getElementById("game-window").style.display = "block";
    document.getElementById("score-container").style.display = "block";
    displayQuestion();
}

// Opens instructions window
function openInstructionsWindow() {
    document.getElementById("instructions-window").style.display = "block";
}

/**
 * Opens highest score window.
 * Gets highest score.
 * Shows highest score to the user.
 */
function openHighestScoreWindow() {
    document.getElementById("highest-score-window").style.display = "block";
    const highestScore = getHighestScore();
    document.getElementById("highest-score").innerText = `${highestScore}`;
}

/**
 * Generates random number 0-29 and uses it as index for questions list.
 * Gets question and answers.
 * Adds attribute with true or false value to each button.
 * Adds event listener to each button.
 */
function displayQuestion() {
    let randomIndex = Math.floor(Math.random() * questionsList.length);
    document.getElementById("question").src = questionsList[randomIndex].q;
    let buttons = document.getElementsByClassName("answer-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = questionsList[randomIndex].a[i].option;
        buttons[i].setAttribute("data-correct", questionsList[randomIndex].a[i].correct);
        buttons[i].addEventListener("click", checkAnswer);
    }
    // Removes question from the list
    questionsList.splice(randomIndex, 1);
}

/**
 * Checks if clicked button is correct answer.
 * Colors clicked answer and calls function to remove color after 0.4 sec.
 * Calls function to increment correct/wrong answer.
 * Disables buttons to avoid more than one click.
 * Checks if user answered on 10 questions.
 */
function checkAnswer(event) {
    const selectedOption = event.target;
    const isCorrect = selectedOption.getAttribute("data-correct") === "true";

    if (isCorrect) {
        selectedOption.style.background = "green";
        setTimeout(removeColor, 400, selectedOption);
        incrementCorrect();
    } else {
        selectedOption.style.background = "red";
        setTimeout(removeColor, 400, selectedOption);
        incrementWrong();
    }

    disableButtons();

    if (
        parseInt(document.getElementById("correct").innerText) +
        parseInt(document.getElementById("wrong").innerText) === 10
    ) {
        setTimeout(gameOver, 1500);
    } else {
        setTimeout(nextQuestion, 1500);
    }
}

// Gets correct score from the DOM and increments it by 1
function incrementCorrect() {
    let correctScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++correctScore;
}

// Gets wrong score from the DOM and increments it by 1
function incrementWrong() {
    let wrongScore = parseInt(document.getElementById("wrong").innerText);
    document.getElementById("wrong").innerText = ++wrongScore;
}

// Disables each answer button
function disableButtons() {
    const buttons = document.getElementsByClassName("answer-btn");
    for (let button of buttons) {
        button.disabled = true;
    }
}

// Enables each answer button
function enableButtons() {
    const buttons = document.getElementsByClassName("answer-btn");
    for (let button of buttons) {
        button.disabled = false;
    }
}

// Removes the color of tthe selected answer button
function removeColor(button) {
    button.style.background = "rgba(0, 0, 0, 0.75)";
}

// Calls enableButtons and displayQuestion functions
function nextQuestion() {
    enableButtons();
    displayQuestion();
}

/**
 * Hides game window and scores.
 * Opens game over window.
 * Shows final score to the user.
 * Calls updateHighestScore function. 
 */
function gameOver() {
    document.getElementById("game-window").style.display = "none";
    document.getElementById("score-container").style.display = "none";
    document.getElementById("game-over-window").style.display = "block";
    const finalScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("final-score").innerText = `Your final score is ${finalScore}!`;
    updateHighestScore();
}

// Gets highest score from local storage and returns it
function getHighestScore() {
    const highestScore = localStorage.getItem("highestScore");
    return highestScore !== null ? highestScore : 0;
}

// Updates highest score if current score is higher
function updateHighestScore() {
    const currentScore = parseInt(document.getElementById("correct").innerText);
    const highestScore = getHighestScore();

    if (currentScore > highestScore) {
        localStorage.setItem("highestScore", currentScore);
    }
}