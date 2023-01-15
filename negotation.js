// Click button start timer
    function timerCount () {
        const timer = document.getElementById('timer');

        // Create variables
        let timerCounter;
        let seconds = 60;
        
        // set counter(interval)
        timerCounter = setInterval(function () {
        seconds--;
        
        // once time is up, reset timer
        if (seconds==0){
            clearInterval(timerCounter);
            alert('Time up next player. Click continue to start timer');
        }

        // Check if submit button clicked for both users
        if((document.getElementById('submitButton1').clicked == true) && (document.getElementById('submitButton2').clicked == true)){
            alert("Success");
        }

        // Check if anyone walked away
        //Player 1 check
        if(document.getElementById('walkButton1').clicked == true) {
            alert("Player 1 walked out");
        }
        //Player 2 check
        if(document.getElementById('walkButton2').clicked == true) {
            alert("Player 2 walked out");
        }

        }, 1000);
}
