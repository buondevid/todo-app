import { renderTasks, taskArr } from './objects';
import { filteredArrayPerProjects } from './projects';

const calendar = document.querySelector('.fa-calendar-alt');
const exclamation = document.querySelector('.fa-exclamation');
const az = document.querySelector('.fa-sort-alpha-down');

calendar.addEventListener('click', () => {
	const active = document.querySelector('.project_active').textContent;
	sortByDate(active);});
exclamation.addEventListener('click', () => {
	const active = document.querySelector('.project_active').textContent;
	sortByPriority(active);
});
az.addEventListener('click', () => {
	const active = document.querySelector('.project_active').textContent;
	sortByAz(active);
});

export function filterProjectTasks(string) {
	const filteredArray = taskArr.filter((item) => string === item.project);
	renderTasks(filteredArray);
}

function sortByDate() {
	filteredArrayPerProjects.sort((a, b) => (new Date(a.date) - new Date(b.date)));
	renderTasks(filteredArrayPerProjects);
}

function sortByAz() {
	console.log(filteredArrayPerProjects);
	filteredArrayPerProjects.sort((a, b) => b.title.localeCompare(a.title));
	renderTasks(filteredArrayPerProjects);
}

function sortByPriority() {
	const sortPriority = ['Urgent', 'Timely', 'Normal', '> Priority'];
	taskArr.forEach((item) => console.log(item.priority));
	filteredArrayPerProjects.sort((a, b) => sortPriority.indexOf(b.priority) - sortPriority.indexOf(a.priority));
	renderTasks(filteredArrayPerProjects);
}

// Turn your strings into dates, and then subtract them
// to get a value that is either negative, positive, or zero.

// function filterTasks(element) {
// 	if ( === 'ALL') renderTasks(taskArr);
// 	else {
// 		const filteredArray = taskArr.filter((item) => === item.project);
// 		renderTasks(filteredArray);
// 	}
// }
