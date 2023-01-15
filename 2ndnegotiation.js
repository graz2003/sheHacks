  // Click button start timer
  var counter = 60;
  setInterval( function(){
  counter--;
  if (counter>=0){
    id = document.getElementById("timer");
    id.innerHTML = counter;
  }
  if (counter==0){
      alert("Timer done.")
  }
  }, 1000);

  document.getElementById('final-button').addEventListener('click', function(){ 
    console.log("hi");
    alert ("Success"); 
  });
  
  document.getElementById('p1-walk-button').addEventListener('click', function(){ 
    console.log("hi");
    alert ("Player 1 walked away"); 
  });

  document.getElementById('p2-walk-button').addEventListener('click', function(){ alert ("Player 2 walked away") });



