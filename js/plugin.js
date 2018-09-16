let tasks = [
	"Learn JS",
	"Learn Angular",
	"Learn PHP"
];

let ul = document.querySelector('.list-group');

function listTemplate(task){
	let li = document.createElement('li');
	li.textContent = task;
	li.className = 'list-group-item';

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
