import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { showTimer, showCalc } from "./switch.js";
import "./timer.js"

const dateCalcResult = document.getElementById("datecalc__result");
const dateCalcForm = document.getElementById("datecalc");
const timerIsShown = document.getElementById('switch-timer');
const calcIsShown = document.getElementById('switch-calc');

dateCalcForm.addEventListener("submit", handleCalcDates);
timerIsShown.onclick = showTimer;
calcIsShown.onclick = showCalc;

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}