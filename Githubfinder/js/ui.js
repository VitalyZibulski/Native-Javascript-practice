class UI {
	constructor(){
		this.profile = document.getElementById('profile');
		this.search_container = document.querySelector('.searchContainer');
	}

	//Display profile
	showProfile(){

	}

	//Display repos
	showRepos (repos) {

	}

	// Display alert message
	showAlert(message = '', className = 'alert alert-info') {
		//Clear any alert
		this.clearAlert();

		//Create template
		const alert = `<div class="${className}">${message}</div>`;

		this.search_container.insertAdjacentHTML('afterbegin',alert);

		//Hide alert after 2s
		setTimeout(() => this.clearAlert(), 2000);
	}

	//clearAlert
	clearAlert() {
		const currentAlert = document.querySelector('.alert');

		if(currentAlert) {
			currentAlert.remove();
		}
	}
}