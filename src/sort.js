import { renderTask, taskArr } from './objects';

const calendar = document.querySelector('.fa-calendar-alt');

calendar.addEventListener('click', () => {
	taskArr.forEach((item) => {
		renderTask(item);
	});
});

function filterTasks(string) {
	const filteredArray = taskArr.filter((item, index) => {
		return string === item.project;
	});

	filteredArray.forEach((item) => renderTask(item));
}
