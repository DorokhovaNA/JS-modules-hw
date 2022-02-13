import { HowlToExport } from './howler.js';

let inputOfMinutes = document.getElementById("time-minutes"); 
let inputOfSeconds = document.getElementById("time-seconds");

let resultOfMinutes = document.getElementById("result-minutes");
let resultOfSeconds = document.getElementById("result-seconds");

let buttonRun = document.getElementById("button-run");
let buttonStop = document.getElementById("button-stop");
let timerInit;

const sound = new HowlToExport({
    src: ["../sound/gong.mp3"],
})

buttonRun.addEventListener("click", (event) => {
	resultOfMinutes.textContent = inputOfMinutes.value;
	resultOfSeconds.textContent = inputOfSeconds.value;

	let minutes = resultOfMinutes.textContent;
	let seconds = resultOfSeconds.textContent;

	timerInit = setInterval(() => {
		resultOfMinutes.textContent = minutes;
		resultOfSeconds.textContent = --seconds;

		if (minutes < 10) {
			resultOfMinutes.textContent = `0${minutes}`;
		} else {
			resultOfMinutes.textContent = minutes;
		}

		if (seconds < 10) {
			resultOfSeconds.textContent = `0${seconds}`;
		} else {
			resultOfSeconds.textContent = seconds;
		}

		if (seconds == 0) {
			seconds = 59;
			--minutes;

			if (minutes < 0) {
				clearInterval(timerInit);
				sound.play()
			}
		}
	}, 1000);
	event.preventDefault();
});


buttonStop.addEventListener("click", (event) => {
    clearInterval(timerInit);
	event.preventDefault();
})