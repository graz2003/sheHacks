
export var player1Score = 0;
export var player2Score = 0;

//planning round start
var player1btn = document.getElementById('p1Btn');
var player2btn = document.getElementById('p2Btn');


player1btn.addEventListener("click", () => { 
    player1btn.setAttribute("style", "opacity:0.5");
    
});

player2btn.addEventListener("click", () => { 
    player2btn.setAttribute("style", "opacity:0.5");
});
