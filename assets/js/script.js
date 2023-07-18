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

}

function openRulesWindow() {

}

function openHighscoreWindow() {

}