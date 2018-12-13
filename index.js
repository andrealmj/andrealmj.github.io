var startGame = function() {
    var startScreen = document.querySelector("#introScreen");
    startScreen.parentNode.removeChild(startScreen);
}

//What to do when 'start' button is clicked:
var startButton = document.querySelector("button");
startButton.addEventListener("click", startGame);