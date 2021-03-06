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
					e.target.remove(); // delete task because it's done
					arrProjects.splice(arrProjects.findIndex((item) => item.project === e.target.innerText), 1);
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

// let varTimeout;
// export function deleteTask(input, task) {
// 	clearTimeout(varTimeout);
// 	if (input.checked === true) input.closest('.task').classList.add('task_erasing');
// 	else input.closest('.task').classList.remove('task_erasing');
// 	varTimeout = setTimeout(() => {
// 		input.checked && input.closest('.task').remove(); // delete task because it's done
// 		// eslint-disable-next-line max-len
// 		taskArr.splice(taskArr.findIndex((item) => item.id !== task.dataset.key), 1); // find and delete object in array
// 	},
// 	3000);
// }

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
