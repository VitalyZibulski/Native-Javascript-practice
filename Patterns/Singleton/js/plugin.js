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

//Observer pattern
class EventObserver{
	constructor() {
		// all subscribes
		this.observers = [];
	}
	// subscribe on event
	subscribe(fn) {
		this.observers.push(fn);
	}

	// unsubscribe
	unsubscribe(fn) {
		this.observers = this.observers.filter(item => {
			if(item !== fn){
				return item;
			}
		})
	}

	fire(args){
		this.observers.forEach(fn => {
			fn.call(null,args);
		})
	}
}

// const ev = new EventObserver();
// function fn1{
// 	console.log('Hello')
// }

// function fn2{
// 	console.log('Hello1')
// }
// ev.subscribe(fn1);
// ev.subscribe(fn2);

const addNewTask = new EventObserver();

function alertMessage(msg) {
	alert(msg);
}

function consoleMessage(msg) {
	console.log(msg);
}

addNewTask.subscribe(alertMessage);
addNewTask.subscribe(consoleMessage);

addNewTask.fire('message');