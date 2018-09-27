class Github {
	constructor(){
		this.client_id = 'd930Baacf8b204d361fd';
		this.client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b';
	}
	//Get user by name
	getUser(name){
		return new Promise((resolve,reject) => {
			fetch(`https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
				.then(res => res.json())
				.then(user => resolve(user))
				.catch(err => reject(err));
		})
	}

	//Get repos by name
	getRepos(user){
		return new Promise((resolve,reject) => {
			if(!user.login) reject('User not found');

			fetch(`https://api.github.com/users/${user.login}/repos?per_page=${5}&sort=${'created: asc'}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
				.then(res => res.json())
				.then(user => resolve(user))
				.catch(err => reject(err));
		})
	}
}