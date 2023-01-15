// Click button start timer
var counter = 60;
  setInterval( function(){
    counter--;
    if (counter>=0){
      id = document.getElementById("timer");
      id.innerHTML = counter;
    }
  }, 1000);

  document.querySelector('#submitButton1').addEventListener('click', function(){ alert ("The button was clicked!") });
  
  document.querySelector('#walkButton1').addEventListener('click', function(){ alert ("The button1 was clicked!") });

  document.querySelector('#walkButton2').addEventListener('click', function(){ alert ("The button2 was clicked!") });
