/* function for all select button : # 1 */
function getSelectButttonValueById(playerEvent) {
    // step : 1.3
    const listLengthElement = document.querySelectorAll("#ol-list li");
    if (listLengthElement.length >=5 ) {
         alert("you can not add more player");
         return;
    }
    // step : 1
    const playerNameElement = document.getElementById(playerEvent);
    const playerName = playerNameElement.innerText;
    // step : 1.1
    const liParent = document.getElementById("ol-list");
    // step : 1.2
    const li = document.createElement("li");
    li.innerText = playerName;

    liParent.appendChild(li);
}

/* Function for calculate-btn and calculate-total-btn -1: #1, #2 */

function getInputFeildValueById(feildEvent) {
    const inputFeildElement = document.getElementById(feildEvent);
    const inputFeildElementString = inputFeildElement.value;
    const inputFeildValue = parseFloat(inputFeildElementString);
    
    inputFeildElement.value = '';

    if(isNaN(inputFeildValue)){
       alert ("Please! Enter an valid number");
    }
    return inputFeildValue;
}

/* Function for calculate-btn and calculate-total-btn -2 : #1, #2 */
function setListStyleById() {
    const listLengthElement = document.querySelectorAll("#ol-list li");
    for (const li of listLengthElement) {
         li.style.fontWeight = 600;
    }
}
