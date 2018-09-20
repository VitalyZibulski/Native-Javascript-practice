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
		if(!timerDisplay || !endTime) return console.log('Please init module first');
		if(!seconds || typeof seconds !== 'number') return console.log('Please provide seconds');

		const now = Date.now();
		const then = now + seconds * 1000;

		displayTimeLeft(seconds);
		displayEndTime(then);
	}

	function displayTimeLeft(seconds){
		const minutes = Math.floor(seconds/60);
		const reminderSeconds = seconds % 60;

		const display = `${minutes}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`;
		document.title = display;
		timerDisplay.textContent = display;
	}

	function displayEndTime(timestamp){
		const end = new Date(timestamp);
		const hour = end.getHours();
		const minutes = end.getMinutes();

		endTime.textContent = `Be back at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
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
	timer.start(seconds);
}

buttons.forEach(btn => btn.addEventListener('click',startTimer));