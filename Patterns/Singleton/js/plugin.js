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
			return instance || (instance = createInstance());
		}
	}
}());

const counter1 = counterModule.getInstance();

// Factory
class SimpleMemberShip{
	constructor(name) {
		this.name = name;
		this.cost = '$5';
	}
}

class StandartMemberShip{
	constructor(name) {
		this.name = name;
		this.cost = '$15';
	}
}

class SuperMemberShip{
	constructor(name) {
		this.name = name;
		this.cost = '$25';
	}
}

function MemberFactory(){
	this.createMember = function(name, type) {
		let member;

		if(type === 'simple') {
			member = new SimpleMemberShip(name);
		} else if (type === 'standart') {
			member = new StandartMemberShip(name);
		} else if (type === 'super') {
			member = new SuperMemberShip(name);
		}

		member.type = type;

		member.define = function() {
			return `${this.name}(${this.type}) : ${this.cost}`;
		}

		return member;
	}
}

const members = [];

const factory = new MemberFactory();

factory.createMember('User','super');

members.push(factory.createMember('User','standart'));

members.push(factory.createMember('User1','simple'));