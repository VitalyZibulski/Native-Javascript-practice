const xhr = new XMLHttpRequest();

// xhr.addEventListener('readystatechange', function(e){
// 	console.log(xhr.readyState);
// 	if(xhr.readyState === 4){
// 		console.log(xhr.responseText);
// 	}
// })

// xhr.addEventListener('load', function (e){
// 	console.log(xhr.responseText);
// 	//xhr.status
// 	//xhr.statusText
// });

// xhr.addEventListener('error', function(e){
// 	console.log(xhr.responseText);
// })

// xhr.addEventListener('timeout', function(e){
// 	console.log('timeout');
// });

// xhr.open('GET','https://jsonplaceholder.typicode.com/posts');

// xhr.timeout = 3000;

// xhr.setRequestHeader('Content-type', 'application/json');

// //xhr.getResponseHeader('Content-type');
// //xhr.getAllResponseHeaders();

// xhr.send();

ajax.send({
	method:'GET',
	url:'https://jsonplaceholder.typicode.com/posts',
	success: function(res){
		let response = JSON.parse(res);
		console.log(response);
	},
	error:function(err){
		console.log(err);
	}
});

ajax.send({
	method:'POST',
	url:'https://jsonplaceholder.typicode.com/posts',
	data:JSON.stringify({
		title:'foo',
		body:'bar',
		userId: 1
	}),
	success: function(res){
		let response = JSON.parse(res);
		console.log(response);
	},
	error:function(err){
		console.log(err);
	}
});














