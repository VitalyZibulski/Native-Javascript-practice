//LexicalEnviroment0

function makeCounter{
	//LexicalEnviroment1
	let counter = 0;

	return function(){
		return ++counter;
	}
}

let counterState = makeCounter();

console.log(counterState); // get function

//similiar
// let counterState = function(){
// 	return ++counter;
// }


let module = (function() {

	let counter = 0;

	function setCounter(value){
		counter = value;
	}

	function plusCounter(){
		counter++;
	}

	function getCounter(){
		return counter;
	}

	function reset(){
		counter = 0;
	}

	return {
		setCounter: setCounter,
		getCounter: getCounter,
		plusCounter: plusCounter,
		reset: reset
	}

}());

console.log(module);

//module.setCounter(); for example
