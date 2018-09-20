function Persone(firstname, lastname, age){
	this.firstname = firstname;
	this.lastname = lastname;
	this.age = age;

	this.getFullName = function(){
		return `${this.firstname} ${this.lastname}`
	}
}

let user= new Persone('user', 'user1', 29);
// console.log(user);
// console.log(user instanceof Persone);