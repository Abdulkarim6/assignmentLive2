/* step : # 1 */
document.getElementById("calculate-btn").addEventListener("click", function () {
    // step : 1
    const playerLengthElement = document.querySelectorAll("#ol-list li");
    const playerNumbers = playerLengthElement.length;
    // step : 1.2
    const playerNumber = playerNumbers;
    // step : 1.3
    const perPlayerBudget = getInputFeildValueById("per-player-budget");
    // step : 1.4
    const totalPlayerBudget = playerNumber * perPlayerBudget;
    // step :  1.5
    const totalPlayerBudgetElement = document.getElementById("total-player-budget");
    totalPlayerBudgetElement.innerText = totalPlayerBudget;

})

// step : # 2
document.getElementById("calculate-total-btn").addEventListener("click", function () {
    // step : 2
    const totalPlayerBudgetElement = document.getElementById("total-player-budget");
    const totalPlayerBudgetElementString = totalPlayerBudgetElement.innerText;
    const totalPlayerBudget = parseFloat(totalPlayerBudgetElementString);
    // step : 3
    const managerBudget = getInputFeildValueById("manager-budget");
    // step : 4
    const coachBudget = getInputFeildValueById("coach-budget");
    // step : 5
    const totalCost = totalPlayerBudget + managerBudget + coachBudget;
    // step : 6
    const totalCostElement = document.getElementById("total-cost");

    totalCostElement.innerText = totalCost;

})

