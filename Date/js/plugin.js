const buttons = document.querySelectorAll('[data-time]');

const timer = (function(){
	let countDown,
		timerDisplay,
		endTime,
		alarmSound

	function init(settings){
		console.log(settings);
		timerDisplay = document.querySelector(settings.timeLeftSelector);
		endTime = document.querySelector(settings.timeEndSelector);

		if(settings.alarmSound){
			alarmSound = new Audio(settings.alarmSound);
		}
	}

	function start(seconds){

	}

	function displayTimeLeft(seconds){

	}

	function displayEndTime(timestamp){

	}

	function stop(){

	}

	function playSound(){

	}

	return {
		init,
		start,
		stop
	}

})();

// Init timer
timer.init({
	timeLeftSelector:'.display__time-left',
	timeEndSelector:'.display__end-time',
	alarmSound:'audio/bell.mp3'
})

//Start timer by click
function startTimer(e){
	const seconds = parseInt(this.dataset.time);
	//console.log(seconds);
	timerStart(seconds);
}

buttons.forEach(btn => btn.addEventListener('click',startTimer));