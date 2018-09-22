const xhr = new XMLHttpRequest();

// xhr.addEventListener('readystatechange', function(e){
// 	console.log(xhr.readyState);
// 	if(xhr.readyState === 4){
// 		console.log(xhr.responseText);
// 	}
// })

xhr.addEventListener('load', function (e){
	console.log(xhr.responseText);
});

xhr.addEventListener('error', function(e){
	console.log(xhr.responseText);
})

xhr.open('GET','https://jsonplaceholder.typicode.com/posts');

xhr.send();

