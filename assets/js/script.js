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
    
}

function checkAnswer() {
    
}

function incrementCorrect() {
    
}

function incrementWrong() {
    
}

function disableButtons() {
    
}

function enableButtons() {
    
}

function nextQuestion() {

}

function gameOver() {

}