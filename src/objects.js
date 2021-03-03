const taskArr = [];

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
		dueDate,
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

function createTask() {
	const taskPanel = this.closest('.task');
	const title = taskPanel.querySelector('input').value;
	const priority = taskPanel.querySelector('select').value;
	const date = taskPanel.querySelector('input[type="date"]').value;
	const description = taskPanel.querySelector('textarea').value;
	const project = taskPanel.querySelector('.project_active').innerText;
	const { checked } = taskPanel.querySelector("[type='checkbox']");
	const id = Date.now;

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
}

function renderTask(task) {

}
