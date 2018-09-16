let tasks = [
	"Learn JS",
	"Learn Angular",
	"Learn PHP"
];

let ul = document.querySelector('.list-group');
let deleteBtns = document.getElementsByClassName('delete-item');

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

	setDeleteEvent();
}

function addList(list){
	tasks.unshift(list);
	generateList(tasks);
}

function setDeleteEvent(){
		for(let i=0; i<deleteBtns.length;i++){
		deleteBtns[i].addEventListener('click', function(){
			console.log('click');
		})
	}
}

generateList(tasks);

