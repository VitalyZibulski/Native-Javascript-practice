class UI {
	constructor(){
		this.profile = document.getElementById('profile');
		this.search_container = document.querySelector('.searchContainer');
	}

	//Display profile
	showProfile(user){
		this.profile.innerHTML = `
			<div class="car card-body mb-3">
				<div class="row">
					<div class="col-md-3">
						<img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
						<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
					</div>
				<div>
			<div>
		`
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