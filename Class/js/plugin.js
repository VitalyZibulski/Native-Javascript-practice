function Persone(firstname, lastname, age){
	this.firstname = firstname;
	this.lastname = lastname;
}

let user= new Persone('user', 'user1', 29);

function Customer(firstname,lastname,phone,membership){
	Persone.call(this,firstname,lastname);

	this.phone = phone;
	this.membership = membership;
}

let customer1 = new Customer('user2','customer','1111', 'Standart');
console.log(customer1);