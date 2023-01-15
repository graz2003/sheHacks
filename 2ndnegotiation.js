  

  var player1Score = 0;
  var player2Score = 0;

  // Click button start timer
  var counter = 60;
  setInterval( function(){
  counter--;
  if (counter>=0){
    id = document.getElementById("timer");
    id.innerHTML = counter;
  }
  if (counter==0){
      player1Score--;
      player2Score--;
      document.getElementById('message').innerHTML = "You have failed to reach and agreement.";
      document.getElementById('sub-message').innerHTML = "Try to communicate more efficiently next time.";
      document.getElementById('p1Score').innerHTML = player1Score;
      document.getElementById('p2Score').innerHTML = player2Score;
      document.getElementById('p1Title').innerHTML = "Player 1:";
      document.getElementById('p2Title').innerHTML = "Player 2:";
      document.getElementById('play-again').style.opacity = 1;
      document.getElementById('reset-score').style.opacity = 1;
  }
  }, 1000);

  document.getElementById('final-button').addEventListener('click', function(){ 
    player1Score++;
    player2Score++;
    document.getElementById('message').innerHTML = "Congratulations! You successfully reached an agreement!";
    document.getElementById('sub-message').innerHTML = "Both players have met their needs.";
    document.getElementById('p1Score').innerHTML = player1Score;
    document.getElementById('p2Score').innerHTML = player2Score;
    document.getElementById('p1Title').innerHTML = "Player 1:";
    document.getElementById('p2Title').innerHTML = "Player 2:";
    document.getElementById('play-again').style.opacity = 1;
    document.getElementById('reset-score').style.opacity = 1;
  });
  
  document.getElementById('p1-walk-button').addEventListener('click', function(){ 
    player2Score--;
    document.getElementById('message').innerHTML = "Player 1 Walkaway";
    document.getElementById('sub-message').innerHTML = "Player 1 has selected to walkaway from the situation";
    document.getElementById('p1Score').innerHTML = player1Score;
    document.getElementById('p2Score').innerHTML = player2Score;
    document.getElementById('p1Title').innerHTML = "Player 1:";
    document.getElementById('p2Title').innerHTML = "Player 2:";
    document.getElementById('play-again').style.opacity = 1;
    document.getElementById('reset-score').style.opacity = 1;
  });

  document.getElementById('p2-walk-button').addEventListener('click', function(){ 
    player1Score--;
    document.getElementById('message').innerHTML = "Player 2 Walkaway";
    document.getElementById('sub-message').innerHTML = "Player 2 has selected to walkaway from the situation";
    document.getElementById('p1Score').innerHTML = player1Score;
    document.getElementById('p2Score').innerHTML = player2Score;
    document.getElementById('p1Title').innerHTML = "Player 1:";
    document.getElementById('p2Title').innerHTML = "Player 2:";
    document.getElementById('play-again').style.opacity = 1;
    document.getElementById('reset-score').style.opacity = 1;
  });

  document.getElementById('reset-score').addEventListener("click", function (){
    resetGame();
    console.log("reset");
  });

function resetGame(){
    player1Score = 0; 
    player2Score = 0; 
    document.getElementById('p1Score').innerHTML = player1Score;
    document.getElementById('p2Score').innerHTML = player2Score;
}

