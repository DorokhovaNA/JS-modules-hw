const wrapperDateCalcForm = document.getElementById("wrapper");
const a = wrapperDateCalcForm.innerHTML;
const timer = document.getElementById("timer");

function showTimer() {
	while (wrapperDateCalcForm.firstChild) {
		wrapperDateCalcForm.removeChild(wrapperDateCalcForm.firstChild)
	}
	timer.classList.remove('hidden');
}

function showCalc() {
	timer.classList.add('hidden');
	wrapperDateCalcForm.innerHTML = a;
}

export {showTimer, showCalc};


