class VideoPlayer{
	constructor() {
		this.player = document.querySelector('.player');
		this.video = this.player.querySelector('.viewer');
		this.progress = document.querySelector('.progress');
		this.progressBar = this.progress.querySelector('.progress__filled');
		this.toggle = this.player.querySelector('.toggle');
		this.skipButtons = this.player.querySelectorAll('[data-skip]');
		this.ranges = this.player.querySelectorAll('.player__slider');
	}

	init() {
		//const self = this;
		//Start plugin
		this.events();
	}

	events() { //self in function
		//All events
		//this.video.addEventListener('click',this.togglePlay.bind(this));
		// this.video.addEventListener('click',(e) => {
		// 	this.togglePlay(); });
		this.video.addEventListener('click', e => this.togglePlay());
		this.toggle.addEventListener('click', e => this.togglePlay());
		this.ranges.forEach(range => range.addEventListener('change', e => this.handleRangeUpdate(e)));
		this.ranges.forEach(range => range.addEventListener('mousemove', e => this.handleRangeUpdate(e)));
		
	}

	handleRangeUpdate(e){
		//if volume, this.video['volume'] = e.target.value;
		//if playBackRate, this.video['playBackRate'] = e.target.value;
		console.log(e.target);
		this.video[e.target.name] = e.target.value;
	}

	togglePlay() {
		//Play/pause video
		console.log(this);
		const method = this.video.paused ? 'play' : 'pause';
		const icon = this.video.paused ? '||' : '>';
		this.toggle.textContent = icon;
		this.video[method]();
		// similiar
		// this.video.play();
		// this.video.pause();
	}

	skip() {
		//Time skip
	}
}

const video = new VideoPlayer();
video.init();
console.log(video);
