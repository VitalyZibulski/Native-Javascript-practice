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
		ui.showLoader();
		//Make http request
		github.getUser(userText)
			.then(user => {
				if(user.message === 'Not Found'){
					//Show alert
					ui.showAlert(`User: ${userText} not found`, `alert alert-danger`);
					//Clear profile
					ui.clearProfile();
					ui.hideLoader();
				} else {
					// Show Profile
					ui.showProfile(user);
				}
				return user
			})
			.then(github.getRepos.bind(github))
			.then(repos => {
				ui.showRepos(repos)
			.then(() => ui.hideLoader);
			})

			.catch(err => console.log(err));
	} else {
		//Clear profile
		ui.clearProfile();
	}
});

// async/await
async function getName(){
	// await
	let user = await github.getUser('ab'); // await work only async
	let repos = await github.getRepos(user);

	return { user, repos }; // this string will not working, until await don't get response
}

// console.log(getName(), new Date());

// getName()
// 	.then(value => console.log(value, new Date()));

function request1(){
	return new Promise((resolve,reject) => {
		setTimeout(() => resolve({
			data: 'Data',
			makeAnotherRequest: true
		}), 2000)
	})
}

function request2(){
	return new Promise((resolve,reject) => {
		setTimeout(() => resolve({
			data: 'Another Data'
		}), 2000);
	})
}

async function makeRequest2(){
	throw new Error('Error');
	const data = await request1();

	if(data.makeAnotherRequest){
		const moreData = await request2();
		return moreData;
	} else {
		return data;
	}
}

makeRequest2()
	.then (result => console.log(result))
	.catch (error => console.log(error));
