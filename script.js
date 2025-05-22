const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreDisplay = document.getElementById("score");
const highScoreDisplay = document.getElementById("highscore");

let isJumping = false;
let score = 0;

document.addEventListener("keydown", jump);
document.addEventListener("click", jump);

function jump() {
    if (isJumping) return;
    isJumping = true;
    dino.classList.add("jump");
    setTimeout(() => {
        dino.classList.remove("jump");
        isJumping = false;
    }, 500);
}

// Collision Detection
let checkCollision = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("right"));

    if (800 - cactusLeft < 100 && 800 - cactusLeft > 50 && dinoTop < 50) {
        alert("Game Over! Your score: " + score);
        sendScore(score);
        score = 0;
        scoreDisplay.textContent = 0;
    } else {
        score++;
        scoreDisplay.textContent = score;
    }
}, 200);

// Send score to PHP
function sendScore(score) {
    fetch("index.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "score=" + score
    })
    .then(response => response.text())
    .then(highscore => {
        highScoreDisplay.textContent = highscore;
    });
}
