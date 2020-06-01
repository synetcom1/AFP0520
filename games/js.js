let startGame = function () {
    gameLoop();
}

let loops = 0;
let peopleVisible = false;
let gameScore = 0;

let gameLoop = function () {
    peopleVisible = !peopleVisible;
    createCharacters();
    loops++;
    if (loops < 12) {
        setTimeout(gameLoop, peopleVisible ? 1000 : 3000);
    } else {
        alert("Game Over? You scored " + gameScore);
    }
}

let createCharacters = function () {
    let board = document.getElementById("board");
    let classToSet = peopleVisible ? "character visible" : "character hidden";
    for (let index = 0; index < 6; index++) {
        board.children[index].className = classToSet;
        board.children[index].innerHTML = "";
        board.children[index].onclick = function () {
            gameScore += -2;
        };
    }

    let randomNumber = Math.floor(Math.random() * 6 + 1);
    board.children[randomNumber - 1].innerHTML = "";
    board.children[randomNumber - 1].onclick = function () {
        gameScore += 1;
    }
    board.children[randomNumber - 1].className = classToSet + " thief";
}