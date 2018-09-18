function getPrice(){
	console.log(this);
	return `this product cost ${this.price}`;
}

let intel = {
	name:'Intel i7 3.5 Ghz',
	price:100,
	discount:10,
	count:50,
	getPrice: getPrice
};

let amd = {
	name:'AMD 3.5 Ghz',
	price:100,
	discount:10,
	count:50,
	getPrice: getPrice
};

intel.getPrice();
amd.getPrice();
getPrice();

