// let date = new Date();

// let methods;

// 	methods = date.getSeconds();

// console.log(methods);

let date = new Date();

let methods;

date.setMinutes(date.getMinutes() + 10);

date = date.toLocaleString('ru-Ru',{
	year:'2-digit',
	month:'short',
	weekday:'long'
});

console.log(date);