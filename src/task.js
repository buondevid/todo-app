import { createTask, taskArr } from './objects';
import { arrProjects, renderProjects } from './projects';

/* eslint-disable no-restricted-syntax */
const taskContainer = document.getElementsByClassName('container__tasks')[0];

// makes task full size
export function taskOpener() {
	if ((this.style.maxHeight === '' || this.style.maxHeight === '7rem')) {
		this.style.height = '35rem';
	}
}

// minify task
export function minifyTask(e) {
	if (e.target.classList.contains('fa-check-circle')) {
		e.target.closest('.task').style.height = '';
	}
}

// put task in edit mode
export function editTask(e) {
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

// put task in readonly mode
export function stopEdit(e) {
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

export function setColorPriority() {
	console.log(this);
	// this.parentElement.className = 'task';
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

export function deleteTask(input, varTimeout, task) {
	clearTimeout(varTimeout);
	if (input.checked === true) input.closest('.task').classList.add('task_erasing');
	else input.closest('.task').classList.remove('task_erasing');
	varTimeout = setTimeout(() => {
		input.checked && input.closest('.task').remove(); // delete task because it's done
		taskArr.splice(taskArr.findIndex((item) => item.id !== task.dataset.key), 1); // find and delete object in array
	},
	3000);
}

export function taskDOMCreator() {
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

	const input = task.querySelector('input[type="checkbox"]');
	const input1 = task.getElementsByTagName('input')[0];
	const select = task.querySelector('select');

	input1.addEventListener('click', taskOpener.bind(task)); // open modal
	select.addEventListener('change', setColorPriority);

	let deleteTimeout; // to reset timeout when changing mind about delete
	input.addEventListener('change', deleteTask.bind(null, input, deleteTimeout, task));

	taskContainer.prepend(task);
	// fade in transition task rendered
	setTimeout(() => task.classList.remove('task_fading'), 100);

	console.log(taskArr);
}
