document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName("intro-btn");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            document.getElementById("intro-window").style.display = "none";
            if (this.getAttribute("id") === "start-btn") {
                openGameWindow();
            } else if (this.getAttribute("id") === "rules-btn") {
                openRulesWindow();
            } else if (this.getAttribute("id") === "highscore-btn") {
                openHighscoreWindow();
            };
        })
    }
})

function openGameWindow() {
    document.getElementById("game-window").style.display = "block";
    document.getElementById("score-container").style.display = "block";
    displayQuestion()
}

function openRulesWindow() {
    document.getElementById("rules-window").style.display = "block";
}

function openHighscoreWindow() {
    document.getElementById("highscore-window").style.display = "block";
}

function displayQuestion() {
    let randomIndex = Math.floor(Math.random() * questionsList.length);
    document.getElementById("question").src = questionsList[randomIndex].q;
    let buttons = document.getElementsByClassName("game-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = questionsList[randomIndex].a[i].option
        buttons[i].setAttribute(
            "data-correct",
            questionsList[randomIndex].a[i].correct
        );
        buttons[i].addEventListener("click", checkAnswer);
    }
    questionsList.splice(randomIndex, 1);
}

function checkAnswer(event) {
    const selectedOption = event.target;
    const isCorrect = selectedOption.getAttribute("data-correct") === "true";

    if (isCorrect) {
        selectedOption.style.background = "green"
        setTimeout(removeColor, 400, selectedOption)
        setTimeout(incrementCorrect, 400)
    } else {
        selectedOption.style.background = "red"
        setTimeout(removeColor, 400, selectedOption)
        setTimeout(incrementWrong, 400)
    }

    disableButtons()

    if (
        parseInt(document.getElementById("correct").innerText) +
        parseInt(document.getElementById("wrong").innerText) === 10
    ) {
        setTimeout(gameOver, 1500)
    } else {
        setTimeout(nextQuestion, 1500)
    }
}

function incrementCorrect() {
    let correctScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++correctScore;
}

function incrementWrong() {
    let wrongScore = parseInt(document.getElementById("wrong").innerText);
    document.getElementById("wrong").innerText = ++wrongScore;
}

function disableButtons() {
    const buttons = document.getElementsByClassName("game-btn");
    for (let button of buttons) {
        button.disabled = true;
    }
}

function enableButtons() {
    const buttons = document.getElementsByClassName("game-btn");
    for (let button of buttons) {
        button.disabled = false;
    }
}

function removeColor(button) {
    button.style.background = "rgba(0, 0, 0, 0.75)"
}

function nextQuestion() {
    enableButtons();
    displayQuestion();
}

function gameOver() {
    document.getElementById("game-window").style.display = "none";
    document.getElementById("score-container").style.display = "none";
    document.getElementById("game-over-window").style.display = "block";
    const finalScore = parseInt(document.getElementById("correct").innerText)
    document.getElementById("final-score").innerText = `Your final score is ${finalScore}`;
}