//Init GitHub
const github = new Github();

//Init Ui
const ui = new UI();

// Init search input
const searchInput = document.getElementById('searchUser');

//Add Event Listener
searchInput.addEventListener('keyup',(e) => {
	// Get input TEext
	const userText = e.target.value;

	if(userText !== ''){
		//Make http request
		github.getUser(userText)
			.then(user => {
				if(user.message === 'Not Found'){
					//Show alert
					ui.showAlert(`User: ${userText} not found`, `alert alert-danger`);
				} else {
					// Show Profile
				}
			})
			.catch(err => console.log(err));
	} else {
		//Clear profile
	}
});