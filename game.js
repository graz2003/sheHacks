
var player1Score = 0;
var player2Score = 0;

var p1PlanContinueBtn = document.getElementById('p1-plan-button');
var p1inputBarginningChips = "";
var p1inputKeyInterests = "";

var isSubmitted = false;
var isPlayer1Walkaway = false;
var isPlayer2Walkaway = false;

function game() {
    planRoundIntro(1);
    planRound(1);
    planRoundIntro(2);
    planRound(2);

    negotiationRound();
}

function planRoundIntro(currPlayer) {
    if (currPlayer == 1) {
        document.getElementById('plan-intro-title').innerHTML = "Planning Round: Player 1";
    } else if (currPlayer == 2) {
        document.getElementById('plan-intro-title').innerHTML = "Planning Round: Player 2"; 
    }
}

function planRound(currPlayer) {
    if(currPlayer == 1) {
        document.getElementById('needs').innerHTML = ;
        document.getElementById('key-interests').innerHTML = ;
        p1inputBarginningChips = document.getElementById('barginning-chips');
        p1inputKeyInterests = document.getElementById('walkaway-options');

    } else if(currPlayer == 2) {
        document.getElementById('needs').innerHTML = ;
        document.getElementById('key-interests').innerHTML = ;
        p2inputBarginningChips = document.getElementById('barginning-chips').value;
        p2inputKeyInterests = document.getElementById('walkaway-options').value;

    }
}

function negotiationRound() {
    
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