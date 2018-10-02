//Module pattern
const Module = (function(){
	// Function body

	return {
		// methods
	}
})();

// ES6 - exist modules; export and import;

// Singleton

const counterModule = (function() {
	let instance,
		counter = 0;

	const getCounter = function() {
		return counter;
	}

	const increaseCounter = function() {
		counter++;
	}

	const createInstance = function() {
		return {
			getCounter,
			increaseCounter
		}
	}

	return {
		getInstance: function() {
			return instance || instance = (createInstance());
		}
	}
}());

const counter1 = counterModule.getInstance();