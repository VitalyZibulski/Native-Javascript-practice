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

let btn = document.querySelector('.clear-btn');

function onLick(e){
	console.log('click 1', e);
}

function onLick2(e){
	console.log('click 2', e);
}

btn.addEventListener("click", onClick);
btn.addEventListener("click", onClick2);

btn.removeEventListener("click",onClick2);
