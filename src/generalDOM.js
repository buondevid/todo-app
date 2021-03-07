import {
	renderProjects, filterProjectTasks, updateProjects, deleteProject,
} from './projects';
// eslint-disable-next-line object-curly-newline
import { minifyTask, editTask, stopEdit, taskOpener, setColorPriority } from './task';
import {
	createTask, deleteTask, renderTasks, taskArr,
} from './objects';

const containerProject = document.querySelector('.container__project');

containerProject.addEventListener('click', (e) => {
	const projectsButtons = containerProject.querySelectorAll('.project');
	if (e.detail === 3 && e.target.classList.contains('project')) {
		deleteProject(e);
	}
	if (e.detail === 1 && e.target.classList.contains('project')) {
		filterProjectTasks(e.target.textContent);
		projectsButtons.forEach((button) => {
			button.classList.remove('project_active');
		});
		e.target.classList.add('project_active');
	}
});

const taskContainer = document.querySelector('.container__tasks');
const newButton = document.getElementsByClassName('new-button')[0];

function taskDOMCreator() {
	const task = document.createElement('div');
	task.classList.add('task', 'task_fading');
	task.setAttribute('data-key', Date.now());
	task.setAttribute('tabindex', '0');
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

	function countInArray(array, what) {
		return array.filter((item) => item == what).length;
	}

	const input = task.querySelector('input[type="checkbox"]');
	const input1 = task.getElementsByTagName('input')[0];
	const select = task.querySelector('select');

	// task.addEventListener('keydown', (e) => {
	// 	if (e.keyCode === 13) {
	// 		console.log('ciao');
	// 	}
	// });

	input1.addEventListener('click', taskOpener.bind(task)); // open modal
	select.addEventListener('change', setColorPriority);

	input.addEventListener('change', () => {
		const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
		const arrayCheck = [];
		allCheckboxes.forEach((item) => {
			const bool = item.checked;
			arrayCheck.push(bool);
		});
		if (countInArray(arrayCheck, true) > 1) {
			input.checked = false;
			return;
		}
		deleteTask.a(input, task);
	});

	taskContainer.prepend(task);
	// fade in transition task rendered
	setTimeout(() => task.classList.remove('task_fading'), 100);
}

// module to attach event listeners at DOMload
(function init() {
	// taskDOMCreator();
	renderTasks(taskArr);
	renderProjects();

	// icon Save to reduce the task window & stop Edit when you confirm
	// icon Edit to edit the task window
	taskContainer.addEventListener('click', (e) => {
		minifyTask(e);
		editTask(e);
		if (e.target.classList.contains('fa-check-circle')) {
			createTask(e);
			updateProjects(e);
			stopEdit(e);
		}
	});
	newButton.addEventListener('click', taskDOMCreator); // create a new task
}());
