//Init GitHub
const github = new Github();

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
				console.log(user);
			})
			.catch(err => console.log(err));
	} else {
		//Clear profile
	}
});