import { renderTasks, taskArr } from './objects';

export const arrProjects = ['ALL', 'FINANCE', 'GROCERY'];

export function addProjectToArr(string) {
	const newString = string.toLowerCase();
	if (arrProjects.includes(newString)) {
		return;
	}
	arrProjects.push(newString);
}

export function renderProjects() {
	const container = document.querySelector('.container__project');
	container.innerHTML = '';
	arrProjects.forEach((element) => {
		const button = document.createElement('button');
		button.classList.add('project');
		element === 'ALL' && button.classList.add('project_active');
		button.innerText = element;
		container.appendChild(button);
	});
}

// CREATE or UPDATE projects html and arrayProjects (from task form)
export const updateProjects = (e) => {
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

// eslint-disable-next-line import/no-mutable-exports
export let filteredArrayPerProjects = taskArr;
export function filterProjectTasks(string) {
	if (string === 'ALL') {
		renderTasks(taskArr);
		filteredArrayPerProjects = [...taskArr];
	} else {
		filteredArrayPerProjects = taskArr.filter((item) => string === item.project);
		renderTasks(filteredArrayPerProjects);
	}
}
