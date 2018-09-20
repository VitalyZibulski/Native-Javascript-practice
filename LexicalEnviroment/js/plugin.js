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

		return this;
	}

	function plusCounter(){
		counter++;

		return this;
	}

	function getCounter(){
		return counter;

		return this;
	}

	function reset(){
		counter = 0;

		return this;
	}

	return {
		setCounter,
		getCounter,
		plusCounter,
		reset
	}

}());

console.log(module);

//module.setCounter(); for example

//module.setCounter().plusCounter();
