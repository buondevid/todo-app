import { renderTasks, taskArr } from './objects';

export let arrProjects = ['ALL', 'FINANCE', 'GROCERY'];

function setStorage() {
	arrProjects = JSON.parse(localStorage.getItem('arrProjects'));
}

// localStorage.clear();
(localStorage.length !== 0 && Object.prototype.hasOwnProperty.call(localStorage, 'arrProjects') && localStorage.arrProjects !== []) && setStorage(); // load storage

export function populateStorageProjects() {
	localStorage.setItem('arrProjects', JSON.stringify(arrProjects));
}

export function addProjectToArr(string) {
	const newString = string.toLowerCase();
	if (arrProjects.includes(newString)) {
		return;
	}
	arrProjects.push(newString);
	populateStorageProjects();
}

export function renderProjects() {
	const container = document.querySelector('.container__project');
	container.innerHTML = '';
	arrProjects.forEach((element, index) => {
		const button = document.createElement('button');
		button.classList.add('project');
		if (index === 0) button.classList.add('project_active');
		button.innerText = element;
		container.appendChild(button);
	});
}

let executed = true;
let xTimeout;
export function deleteProject(e) {
	if (e.target.innerText !== 'ALL') {
		if (e.target.style.animation !== '1s ease 0s infinite normal none running proj' && executed) {
			executed = false;
			e.target.style.animation = 'proj 1s infinite';
			xTimeout = setTimeout(() => {
				if (e.target.style.animation === '1s ease 0s infinite normal none running proj') {
					e.target.remove(); // delete project from DOM
					arrProjects.splice(arrProjects.findIndex((item) => item === e.target.innerText), 1);
					populateStorageProjects();
					renderProjects(); // find and delete object in array
					executed = true;
				}
			},
			3000);
		} else if (e.target.style.animation === '1s ease 0s infinite normal none running proj') {
			clearTimeout(xTimeout);
			e.target.style.animation = '';
			executed = true;
		}
	}
}

// CREATE or UPDATE projects html and arrayProjects (from task form)
export const updateProjects = (e) => {
	if (e.target.classList.contains('fa-check-circle')) {
		const task = e.target.closest('.task');
		const textInput2 = task.querySelectorAll('input[type="text"]')[1];
		const tag = textInput2.value.toUpperCase() || 'ALL';
		if (!arrProjects.includes(tag)) {
			arrProjects.push(tag);
			populateStorageProjects();
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
