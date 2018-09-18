let intel = {
	name:'Intel i7 3.5 Ghz',
	price:100,
	discount:10,
	count:50,
	getPrice: function(){
		return `this product cost ${intel.price}`;
	}
};

intel.getPrice();