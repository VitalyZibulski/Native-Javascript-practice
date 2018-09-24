class JsonPlaceholder {

	getPosts(id){
		return new Promise((resolve, reject) => {
			fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'GET'})
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err))
		});
	}

	getCommentsById(id){
		return new Promise((resolve, reject) => {
			fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { method: 'GET'})
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err))
		});
	}
}