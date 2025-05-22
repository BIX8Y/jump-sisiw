<?php
session_start();
// Optional: Track high score using session
if (!isset($_SESSION['highscore'])) {
    $_SESSION['highscore'] = 0;
}

if (isset($_POST['score'])) {
    $score = (int)$_POST['score'];
    if ($score > $_SESSION['highscore']) {
        $_SESSION['highscore'] = $score;
    }
    echo $_SESSION['highscore'];
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Jump sisiw Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Jump sisiw 🐣</h1>
    <p>Score: <span id="score">0</span> | High Score: <span id="highscore"><?php echo $_SESSION['highscore']; ?></span></p>
    
    <div id="game">
        <div id="dino"></div>
        <div id="cactus"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
