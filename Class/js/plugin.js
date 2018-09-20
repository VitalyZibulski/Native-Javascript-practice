// function Persone(firstname, lastname, age){
// 	this.firstname = firstname;
// 	this.lastname = lastname;
// }

// let user= new Persone('user', 'user1', 29);

// function Customer(firstname,lastname,phone,membership){
// 	Persone.call(this,firstname,lastname);

// 	this.phone = phone;
// 	this.membership = membership;
// }

// Customer.prototype = Object.create(Persone.prototype);

// Customer.prototype.constructor = Customer;

// let customer1 = new Customer('user2','customer','1111', 'Standart');
// console.log(customer1);

//classes ES6
class Persone{
	constructor(firstName, lastName){
		this.firstname = firstname;
		this.lastname = lastname;
	}

	greeting(){
		console.log(Persone.sumNumbers(1,2));
		return `${firstname}${lastname}`;
	}

	static sumNumbers(x,y){
		return x + y;
	}
}

class Customer extends Person{
	constructor(firstName,lastName, phone, membership){
		super(firstName,lastName); //similiar call
		this.phone = phone;
		this.membership = membership;
	}

	greeting(){
		console.log(super.greeting()); //call parent method
	}
}

const user = new Person ('user', 'user1');
const customer1 = new Customer('user2','customer','1111', 'Standart');

Persone.sumNumbers(1,2);