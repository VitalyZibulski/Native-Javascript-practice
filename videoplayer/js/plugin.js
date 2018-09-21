class VideoPlayer{
	constructor(){
		this.player = document.querySelector('.player');
		this.video = this.player.querySelector('.viewer');
		this.progress = document.querySelector('.progress');
		this.progressBar = this.progress.querySelector('.progress__filled');
		this.toggle = this.player.querySelector('.toggle');
		this.skipButtons = this.player.querySelectorAll('[data-skip]');
		this.ranges = this.player.querySelectorAll('.player__slider');
	}

	init(){
		//Start plugin
		this.events();
	}

	events(){
		//All events
		//this.video.addEventListener('click',this.togglePlay.bind(this));
		this.video.addEventListener('click',(e) => {
			console.log(this);
		});
	}

	togglePlay(){
		//Play/pause video
		//console.log(this);
	}

	skip(){
		//Time skip
	}
}

const video = new VideoPlayer();
video.init();

console.log(video);
