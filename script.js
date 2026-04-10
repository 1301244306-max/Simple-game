console.log("scriptStarted")

let score = 0;
let totalSquares = 18;
let gameTimer;

function start() {
    console.log("start clicked");
    createShape();
}

function createShape() {
    let shape = document.createElement("div");
    shape.innerText = Math.floor(Math.random() * 20) + 1;
    
    let colors = ["blue", "red", "green", "orange", "purple"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    shape.style.backgroundColor = randomColor;
    
    shape.style.width = "100px";
    shape.style.height = "100px"; 
    shape.style.position = "absolute";
    shape.style.left = getRandomX() + "px";
    shape.style.top = getRandomY() + "px";
    
    shape.className = "game-square";
    
    shape.addEventListener("click", handleShapeClick);
    
    document.body.appendChild(shape);
}

function getRandomX() {
    return Math.random() * (window.innerWidth - 100);
}

function getRandomY() {
    return Math.random() * (window.innerHeight - 100);
}

function handleShapeClick(event) {
    let shape = event.target;
    console.log("Square clicked!");
    shape.remove();
    
    score++;
    console.log("Score: " + score);
    
    if (score >= totalSquares) {
        alert("You won! All squares clicked!");
    }
}

function resetGame() {
    if (gameTimer) {
        clearTimeout(gameTimer);
    }
    
    let allSquares = document.querySelectorAll(".game-square");
    for (let i = 0; i < allSquares.length; i++) {
        allSquares[i].remove();
    }
    
    score = 0;
    console.log("Game reset!");
    
}

function startGame() {
    score = 0;
    
    for (let i = 1; i <= 18; i++) {
        createShape();
    }
    
    gameTimer = setTimeout(endGame, 10000);
}

function endGame() {
    alert("Time's up! You clicked " + score + " out of " + totalSquares + " squares!");
}

let resetButton = document.createElement("button");
resetButton.innerText = "Reset Game";
resetButton.style.position = "fixed";
resetButton.style.bottom = "10px";
resetButton.style.left = "10px";
resetButton.style.padding = "10px";
resetButton.style.fontSize = "16px";
resetButton.addEventListener("click", resetGame);
document.body.appendChild(resetButton);
