function getPrice(currency,price){
	console.log(this);
	return `this product ${price} ${currency}${this.price}`;
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
};

intel.getPrice = getPrice.bind(intel);

setTimeout(intel.getPrice, 1000);
// getPrice.call(amd, '$');
//getPrice.call(amd, ['$','price']);

// intel.getPrice();
// amd.getPrice();
// getPrice();

