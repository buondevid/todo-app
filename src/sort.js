import { renderTasks, taskArr } from './objects';

const calendar = document.querySelector('.fa-calendar-alt');

calendar.addEventListener('click', renderTasks.bind(null, taskArr));

export function filterProjectTasks(string) {
	const filteredArray = taskArr.filter((item) => string === item.project);
	renderTasks(filteredArray);
}
