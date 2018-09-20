const buttons = document.querySelectorAll('[data-time]');

const timer = (function(){
	let countDown,
		timerDisplay,
		endTime

	function init(settings){

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