
var player1Score = 0;
var player2Score = 0;

var currPlayer = 1;

var p1PlanContinueBtn = document.getElementById('p1-plan-button');

var isSubmitted = false;
var isPlayer1Walkaway = false;
var isPlayer2Walkaway = false;

p1PlanContinueBtn.addEventListener("click", () => {
    document.getElementById('planning-round-intro');
});

function planRound(currPlayer) {
    if (currPlayer == 1) {
        h1.innerHTML = "Player 1";

    }
}

submiBtn.addEventListner("click", () => { 
    if 
});

once the timer runs out{
    if (isSubmitted == true) {
        win();
    } else if (isPlayer1Walkaway == true) {
        walkaway(player1);
    } else if  {

    } else {
        lose();
    }
}

lose(){
    player1Score--;
    player2Score--;
}