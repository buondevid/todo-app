import { renderTasks } from './objects';
import { filteredArrayPerProjects, filterProjectTasks } from './projects';

const calendar = document.querySelector('.fa-calendar-alt');
const exclamation = document.querySelector('.fa-exclamation');
const az = document.querySelector('.fa-sort-alpha-down');

function colorSortButton(buttonSort) {
	const arraySort = [calendar, exclamation, az];
	arraySort.forEach((button) => {
		button.classList.remove('_active');
	});
	buttonSort.classList.add('_active');
}

function sortByDate(project) {
	colorSortButton(calendar);
	filteredArrayPerProjects.sort((a, b) => (new Date(a.date) - new Date(b.date)));
	filterProjectTasks(project);
	renderTasks(filteredArrayPerProjects);
}

function sortByAz(project) {
	colorSortButton(az);
	filterProjectTasks(project);
	filteredArrayPerProjects.sort((a, b) => b.title.localeCompare(a.title));
	renderTasks(filteredArrayPerProjects);
}

function sortByPriority(project) {
	colorSortButton(exclamation);
	const sortPriority = ['Urgent', 'Timely', 'Normal', '> Priority'];
	filterProjectTasks(project);
	// eslint-disable-next-line max-len
	filteredArrayPerProjects.sort((a, b) => sortPriority.indexOf(b.priority) - sortPriority.indexOf(a.priority));
	renderTasks(filteredArrayPerProjects);
}

calendar.addEventListener('click', () => {
	const active = document.querySelector('.project_active').textContent;
	sortByDate(active);
});
exclamation.addEventListener('click', () => {
	const active = document.querySelector('.project_active').textContent;
	sortByPriority(active);
});
az.addEventListener('click', () => {
	const active = document.querySelector('.project_active').textContent;
	sortByAz(active);
});
