let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

let ul = document.querySelector('.list-group');
let form = document.forms['addTodoItem'];
let inputText = form.elements['todoText'];

function generateId(){
	let id ='';
	let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

	for (let i=0; i<15;i++){
		let position = Math.floor(Math.random() * words.length);
		id += words [position];
	}

	return id;
}

function listTemplate(task){
	//Create list item
	let li = document.createElement('li');
	li.className = 'list-group-item d-flex align-items-center';
	li.setAttribute('data-id', task.id);
	let span = document.createElement('span');
	span.textContent = task.text;
	//Create tag i fa-trash-alt
	let iDelete = document.createElement('i');
	iDelete.className = 'fas fa-trash-alt delete-item ml-4'
	let iEdit = document.createElement('i');
	iEdit.className = 'fas fa-edit edit-item ml-auto'
	//Append delete icon to li
	li.appendChild(span);
	li.appendChild(iEdit);
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
	let newTask = {
		id:generateId(),
		text:list
	}
	tasks.unshift(newTask);
	//generateList(tasks);
	ul.insertAdjacentElement('afterbegin', listTemplate(newTask));
	//Add to localStorage
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteListItem(id){
	for (let i = 0; i<tasks.length; i++) {
		if(tasks[i].id === id){
			tasks.splice(i,1);
			break;
		}
	}
	
	//Update to localStorage
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

function editListItem(id, newValue){
	for (let i = 0; i<tasks.length; i++) {
		if(tasks[i].id === id){
			tasks[i].text = newValue;
			break;
		}
	}

	//Update to localStorage
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

ul.addEventListener('click', function(e){
	if(e.target.classList.contains('delete-item')){
		//Delete list item
		let parent = e.target.closest('li');
		let id = parent.dataset.id; // dataset have any object
		deleteListItem(id);
		parent.remove();
	} else if (e.target.classList.contains('edit-item')){
		e.target.classList.toggle('fa-save');
		let id = e.target.closest('li').dataset.id;
		let span = e.target.closest('li').querySelector('span');
		

		if(e.target.classList.contains('fa-save')){
			span.setAttribute('contenteditable', true);
			span.focus();
		} else {
			span.setAttribute('contenteditable', false);
			span.blur();
			editListItem(id,span.textContent);
		}
	}
});

generateList(tasks);

form.addEventListener('submit', function(e){
	e.preventDefault();
	//console.log(inputText.value);
	//addList(inputText.value);
	if(!inputText.value){
		//show error
		inputText.classList.add('is-invalid');
	} else {
		inputText.classList.remove('is-invalid');
		addList(inputText.value);
		form.reset();
	}
})

inputText.addEventListener('keyup', function(e){
	//console.log(this.value, e);
	if(inputText.value){
		inputText.classList.remove('is-invalid');
	}
})

