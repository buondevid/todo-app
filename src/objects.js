export const taskArr = [];

export function getTaskArray() {
	return taskArr;
}

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

// add obj to array
function addTaskArray(obj) {
	taskArr.push(obj);
}

export function createTask(e) {
	const taskPanel = e.target.closest('.task');
	const title = taskPanel.querySelector('input').value;
	const priority = taskPanel.querySelector('select').value;
	const date = taskPanel.querySelector('input[type="date"]').value;
	const description = taskPanel.querySelector('textarea').value;
	const project = document.querySelector('.project_active').innerText ?? 'ALL';
	const { checked } = taskPanel.querySelector("[type='checkbox']");
	const id = Date.now();

	!taskPanel.hasAttribute('data-key') && taskPanel.setAttribute('data-key', id);

	const task = taskFactory(
		title,
		priority,
		date,
		description,
		project,
		checked,
		id,
	);
	addTaskArray(task);
	// renderTask(task);
	console.log(...taskArr);
}

function renderTask(obj) {
	const containerTasks = document.querySelector('.container__tasks');
	const renderedTask = document.createElement('div');
	renderedTask.classList.add('task');
	renderedTask.setAttribute('data-key', obj.id);

	renderedTask.innerHTML = `
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
<div class="task__edit">
	<a href="#"><i class="far fa-check-circle"></i></a>
	<a href="#"><i class="far fa-edit"></i></a>
</div>`;
	containerTasks.appendChild(renderedTask);

	const title = renderedTask.querySelector('input');
	const priority = renderedTask.querySelector('select');
	const date = renderedTask.querySelector('input[type="date"]');
	const description = renderedTask.querySelector('textarea');
	// const project = renderedTask.querySelector('.project_active');
	const checked = renderedTask.querySelector("[type='checkbox']");

	title.value = obj.title;
	priority.value = obj.priority;
	date.value = obj.date;
	description.value = obj.description;
	checked.checked = obj.checked;
}
