import { createTask, taskArr } from './objects';
import { arrProjects, renderProjects } from './projects';

/* eslint-disable no-restricted-syntax */
const tasks = document.getElementsByClassName('task');
const taskContainer = document.getElementsByClassName('container__tasks')[0];
const newButton = document.getElementsByClassName('new-button')[0];

// makes task full size
function taskOpener() {
	if ((this.style.maxHeight === '' || this.style.maxHeight === '7rem')) {
		this.style.height = '35rem';
	}
}

// minify task
function minifyTask(e) {
	if (e.target.classList.contains('fa-check-circle')) {
		e.target.closest('.task').style.height = '';
	}
}

// put task in edit mode
function editTask(e) {
	if (e.target.classList.contains('fa-edit')) {
		const container = e.target.closest('.task');
		const textInput = container.querySelector('input[type="text"]');
		const selectInput = container.querySelector('select');
		const dateInput = container.querySelector('input[type="date"]');
		const textArea = container.querySelector('textarea');
		const textInput2 = container.querySelectorAll('input[type="text"]')[1];
		const arrayInput = [textInput, selectInput, dateInput, textArea, textInput2];

		for (const inp of arrayInput) {
			inp.removeAttribute('disabled');
			inp.removeAttribute('readonly');
			inp.classList.add('task_edit-active');
		}
	}
}

// put task in readonly mode
function stopEdit(e) {
	if (e.target.classList.contains('fa-check-circle')) {
		const container = e.target.closest('.task');
		const textInput = container.querySelector('input[type="text"]');
		const selectInput = container.querySelector('select');
		const dateInput = container.querySelector('input[type="date"]');
		const textArea = container.querySelector('textarea');
		const textInput2 = container.querySelectorAll('input[type="text"]')[1];
		const arrayInput = [textInput, selectInput, dateInput, textArea, textInput2];

		selectInput.setAttribute('disabled', '');
		for (const inp of arrayInput) {
			inp.setAttribute('readonly', '');
			inp.classList.remove('task_edit-active');
		}

		createTask(e);
		updateProjects(e);
	}
}

// CREATE or UPDATE projects html and arrayProjects
const updateProjects = (e) => {
	if (e.target.classList.contains('fa-check-circle')) {
		const task = e.target.closest('.task');
		const textInput2 = task.querySelectorAll('input[type="text"]')[1];
		const tag = textInput2.value.toUpperCase() || 'ALL';
		if (!arrProjects.includes(tag)) {
			arrProjects.push(tag);
			renderProjects();
		}
	}
};

function setColorPriority() {
	this.parentElement.className = 'task';
	switch (this.value) {
	case 'Normal':
		this.parentElement.classList.add('task_normal');
		break;
	case 'Timely':
		this.parentElement.classList.add('task_medium');
		break;
	case 'Urgent':
		this.parentElement.classList.add('task_urgent');
		break;
	default:
	}
}

function taskDOMCreator() {
	const task = document.createElement('div');
	task.classList.add('task', 'task_fading');
	task.setAttribute('data-key', Date.now());
	task.innerHTML = `
				<div class="task__first-line">
					<input readonly type="text" placeholder="> Title">
					<label class="checkbox">
						<span class="checkbox__input">
							<input type="checkbox" name="checked">
							<span class="checkbox__control">
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
									<path fill='none' stroke='currentColor' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' />
								</svg>
							</span>
						</span>
					</label>
					<!-- <input type="checkbox"> -->
				</div>
				<select disabled>
					<option selected disabled>> Priority</option>
					<option>Normal</option>
					<option>Timely</option>
					<option>Urgent</option>
				</select>
				<input readonly type="date">
				<textarea readonly placeholder="> Description"></textarea>
				<input type='text' placeholder='> Project' readonly>
				<div class="task__edit">
					<a href="#"><i class="far fa-check-circle"></i></a>
					<a href="#"><i class="far fa-edit"></i></a>
				</div>`;
 // fade in trasnition task rendered

	const inputCheckbox = task.querySelector('input[type="checkbox"]');
	const input1 = task.getElementsByTagName('input')[0];
	const select = task.querySelector('select');

	input1.addEventListener('click', taskOpener.bind(task)); // open modal

	// DELETE object from screen and array
	let deleteTimeout; // to reset timeout when changing mind about delete
	inputCheckbox.addEventListener('change', () => {
		clearTimeout(deleteTimeout);
		if (inputCheckbox.checked === true) inputCheckbox.closest('.task').classList.add('task_erasing');
		else inputCheckbox.closest('.task').classList.remove('task_erasing');
		deleteTimeout = setTimeout(() => {
			inputCheckbox.checked && inputCheckbox.closest('.task').remove(); // delete task because it's done
			taskArr.splice(taskArr.findIndex((item) => item.id !== task.dataset.key), 1); // find and delete object in array
		},
		3000);
	});

	// CREATE project tag
	// const textInput2 = task.querySelectorAll('input[type="text"]')[1];
	// textInput2.addEventListener('change', () => {
	// 	const tag = textInput2.value.toLowerCase();
	// 	if (arrProjects.findIndex((item) => item.project === tag) > -1) {
	// 		const index = arrProjects.findIndex((item) => item.project === tag);
	// 		arrProjects[index] = task;
	// 	} else {arrProjects.push(textInput2.value); }
	// 	renderProjects();
	// });

	select.addEventListener('change', setColorPriority);

	taskContainer.prepend(task);
	setTimeout(() => task.classList.remove('task_fading'), 100);

	console.log(taskArr);
}

// module to attach event listeners at DOMload
(function a() {
	taskDOMCreator();
	renderProjects();

	// icon Save to reduce the task window & stop Edit when you confirm
	// icon Edit to edit the task window
	taskContainer.addEventListener('click', (e) => {
		minifyTask(e);
		editTask(e);
		stopEdit(e);
	});
	newButton.addEventListener('click', taskDOMCreator); // create a new task
}());
