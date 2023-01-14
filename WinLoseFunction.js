
var player1Score = 0;
var player2Score = 0; 

function setup(){
creaCanvas(windowWidth, windowHeight);
}

function Display(){
    textSize(40);
    text(player1Score, 400, 30);
    text(player2Score,  800, 30);
  if  (player1Score > 10){
    text('player 1 wins!', 600, 500);
  }  
  if  (player2Score > 10){
    text('player 2 wins!', 600, 500);
  }  
}

function mousePressed(){
    if (mouse == '1'){
        player1Score =  player1Score+1;  
    }
    if(mouse == '2'){
        player2Score =  player2Score+1;
    }
}


