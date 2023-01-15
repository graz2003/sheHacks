
document.getElementById('p1reset-score').addEventListener("click", function (){
    resetGame();
    console.log("reset");
});

document.getElementById('p2reset-score').addEventListener("click", function (){
    resetGame();
    console.log("reset");
});

function resetGame(){
    player1Score = 0; 
    Player2Score = 0; 
}




