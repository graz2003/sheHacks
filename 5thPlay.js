
//planning round p1 play
var p2PlanSaveBtn = document.getElementById('p2-plan-save-button');
var p2PlanSubmitBtn = document.getElementById('p2-plan-submit-button');
var p2inputBarginningChips = "";
var p2inputWalkaway = "";

p2PlanSaveBtn.addEventListener("click", () => {
    p2inputBarginningChips = document.getElementById('p2-barginning-chips').value;
    p2inputWalkaway = document.getElementById('p2-walkaway-options').value;
});
