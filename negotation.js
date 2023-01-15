// Click button start timer
const timer = document.getElementById('timer');
let time = 60;
setInterval(timerCount,1000);

function timerCount() {
    let seconds = 60;
    timer.innerHTML = `${seconds}`;
    time--;

    // once time is up, reset timer
    if (seconds==0){
        clearInterval(timerCount);
        alert('Time up next player. Click continue to start timer');
    }

    // Check if submit button clicked for both users
    document.getElementById('submitButton1').onclick = function() {
        alert("Succes");
    }​;​

    // Check if anyone walked away
    //Player 1 check
    document.getElementById('walkButton1').onclick = function() {
        alert("Player 1 walked out");
    }​;​

    //Player 2 check
    document.getElementById('walkButton2').onclick = function() {
        alert("Player 2 walked out");
    }​;​
}
