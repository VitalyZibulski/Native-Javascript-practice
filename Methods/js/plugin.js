// forEach, filter, map, every, some, reduce
let numbers = [10,20,-10,2,-5];
let users = [
	{
		name:'user',
		age: 26,
		gender:'male'
	},
	{
		name:'user1',
		age: 28,
		gender:'female'
	},
	{
		name:'user2',
		age: 29,
		gender:'male'
	}
]

//Filter

let res = numbers.filter((item, i, arr) => {
	// console.log(item,i,arr);
	return item >= 0;
})

// res = users.filter(user => {
// 	return user.gender === 'male';
// });

res = users.filter(user => user.gender === 'male');

// console.log(res);

//Map

let mapRes = users.map(user => {
	return user.name;
});
	mapRes = users.map(user => {
		user.age = user.age + ' years old';
		return user;	
})

console.log(mapRes);