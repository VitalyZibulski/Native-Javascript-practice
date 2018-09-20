function makeCounter{
	let counter = 0;

	return function(){
		return ++counter;
	}
}

let counterState = makeCounter();

console.log(counterState); // get function

similiar
// let counterState = function(){
// 	return ++counter;
// }


counterState();
