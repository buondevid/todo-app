// import { arrProjects, renderProjects } from './projects';
import { taskOpener, setColorPriority } from './task';

export const taskArr = [];

// factory function to create todo
function taskFactory(
	title,
	priority,
	date,
	description,
	project,
	checked,
	id,
) {
	return {
		title,
		priority,
		date,
		description,
		project,
		checked,
		id,
	};
}

export function createTask(e) {
	const taskPanel = e.target.closest('.task');
	const title = taskPanel.querySelector('input').value;
	const priority = taskPanel.querySelector('select').value;
	const date = taskPanel.querySelector('input[type="date"]').value;
	const description = taskPanel.querySelector('textarea').value;
	const project = taskPanel.querySelectorAll('[type="text"]')[1].value.toUpperCase();
	const { checked } = taskPanel.querySelector("[type='checkbox']");
	const id = taskPanel.dataset.key;

	const task = taskFactory(
		title,
		priority,
		date,
		description,
		project,
		checked,
		id,
	);

	// push a new object into array, or update the existing one by replacing
	if (taskArr.findIndex((item) => item.id === taskPanel.dataset.key) > -1) {
		const index = taskArr.findIndex((item) => item.id === taskPanel.dataset.key);
		taskArr[index] = task;
	} else taskArr.push(task);
}

// creating a module for persistence of varTimeout
export const deleteTask = (() => {
	let varTimeout;
	function a(input, task) {
		clearTimeout(varTimeout);
		if (input.checked === true) input.closest('.task').classList.add('task_erasing');
		else input.closest('.task').classList.remove('task_erasing');
		varTimeout = setTimeout(() => {
			input.checked && input.closest('.task').remove(); // delete task because it's done
			// eslint-disable-next-line max-len
			taskArr.splice(taskArr.findIndex((item) => item.id !== task.dataset.key), 1); // find and delete object in array
		},
		3000);
	}
	return { a };
}
)();

export function renderTasks(array) {
	const taskContainer = document.querySelector('.container__tasks');
	taskContainer.innerHTML = '';

	array.forEach((item) => {
		const task = document.createElement('div');
		task.classList.add('task', 'task_fading');
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
			<textarea readonly placeholder="Description"></textarea>
			<input type='text' placeholder=' Project' readonly>
			<div class="task__edit">
				<a href="#"><i class="far fa-check-circle"></i></a>
				<a href="#"><i class="far fa-edit"></i></a>
			</div>`;

		const title = task.querySelector('input');
		const priority = task.querySelector('select');
		const date = task.querySelector('input[type="date"]');
		const description = task.querySelector('textarea');
		const project = task.querySelectorAll('[type="text"]')[1];
		const checked = task.querySelector("[type='checkbox']");
		const id = task.dataset;

		title.value = item.title;
		priority.value = item.priority;
		date.value = item.date;
		description.value = item.description;
		checked.checked = item.checked;
		id.key = item.id;
		project.value = item.project;

		function countInArray(array1, what) {
			return array1.filter((item1) => item1 == what).length;
		}

		// task.addEventListener('keydown', (e) => {
		// 	if (e.keyCode === 13) {
		// 		console.log('render');
		// 		createTask(e);
		// 		updateProjects(e);
		// 		stopEdit(e);
		// 	}
		// });

		setColorPriority.call(priority);

		priority.addEventListener('change', setColorPriority);
		title.addEventListener('click', taskOpener.bind(task));

		checked.addEventListener('change', () => {
			const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
			const arrayCheck = [];
			allCheckboxes.forEach((item1) => {
				const bool = item1.checked;
				arrayCheck.push(bool);
			});
			if (countInArray(arrayCheck, true) > 1) {
				checked.checked = false;
				return;
			}
			deleteTask.a(checked, task);
		});

		taskContainer.prepend(task);
		setTimeout(() => task.classList.remove('task_fading'), 100);
	});
}
