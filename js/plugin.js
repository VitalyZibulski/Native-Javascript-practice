let tasks = [
	"Learn JS",
	"Learn Angular",
	"Learn PHP"
];

let ul = document.querySelector('.list-group');

function listTemplate(task){
	//Create list item
	let li = document.createElement('li');
	li.textContent = task;
	li.className = 'list-group-item d-flex align-items-center';
	//Create tag i fa-trash-alt
	let iDelete = document.createElement('i');
	iDelete.className = 'fas fa-trash-alt delete-item ml-auto'
	//Append delete icon to li
	li.appendChild(iDelete);
	
	return li;
}

function clearList(){
	ul.innerHTML = '';
}

function generateList(tasksArray){
	clearList();

	for(let i=0;i<tasksArray.length;i++){
		let li = listTemplate(tasksArray[i]);
		ul.appendChild(li);
	}
}

function addList(list){
	tasks.unshift(list);
	generateList(tasks);
}

generateList(tasks);

let btn = document.querySelector('.clear-btn');
