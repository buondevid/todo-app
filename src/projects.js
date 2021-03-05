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

// eslint-disable-next-line import/no-mutable-exports
export let filteredArrayPerProjects = taskArr;
export function filterProjectTasks(string) {
	if (string === 'ALL') {
		renderTasks(taskArr);
		filteredArrayPerProjects = [...taskArr];
	} else {
		filteredArrayPerProjects = taskArr.filter((item) => string === item.project);
		renderTasks(filteredArrayPerProjects);
		console.log(`filteredArrayPerProjects:  + ${filteredArrayPerProjects}`);
	}
}
