var isSubmitted = false;
var isPlayer1Walkaway = false;
var isPlayer2Walkaway = false;

var player1Score = 0;
var player2Score = 0;


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