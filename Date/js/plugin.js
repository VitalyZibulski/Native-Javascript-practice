let date = new Date();

let methods;

date.setMinutes(date.getMinutes() + 10);

date = date.toLocaleString('ru-Ru',{
	year:'2-digit',
	month:'short',
	weekday:'long'
});

setInterval(()=>{
	console.log(Date.now());
},500);