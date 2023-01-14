
//planning round p1 play
var p1PlanSaveBtn = document.getElementById('p1-plan-save-button');
var p1PlanSubmitBtn = document.getElementById('p1-plan-submit-button');
var p1inputBarginningChips = "";
var p1inputWalkaway = "";

p1PlanSaveBtn.addEventListener("click", () => {
    p1inputBarginningChips = document.getElementById('barginning-chips').value;
    p1inputWalkaway = document.getElementById('walkaway-options').value;
});
