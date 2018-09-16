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

	//setDeleteEvent();
}

function addList(list){
	tasks.unshift(list);
	generateList(tasks);
}

function deleteListItem(target){
	let parent = target.closest('li');
		let text = parent.textContent;
		let index = tasks.indexOf(text);
		tasks.splice(index,1);
		parent.remove();
}

ul.addEventListener('click', function(e){
	if(e.target.classList.contains('delete-item')){
		//Delete list item
		deleteListItem(e.target);
	}
});

generateList(tasks);

