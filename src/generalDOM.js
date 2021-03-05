import { renderProjects, filterProjectTasks } from './projects';
import {
	taskDOMCreator, minifyTask, editTask, stopEdit,
} from './task';

const containerProject = document.querySelector('.container__project');

containerProject.addEventListener('click', (e) => {
	const projectsButtons = containerProject.querySelectorAll('.project');
	if (e.target.classList.contains('project')) {
		filterProjectTasks(e.target.textContent);
		projectsButtons.forEach((button) => {
			button.classList.remove('project_active');
		});
		e.target.classList.add('project_active');
	}
});

const taskContainer = document.querySelector('.container__tasks');
const newButton = document.getElementsByClassName('new-button')[0];

// module to attach event listeners at DOMload
(function init() {
	taskDOMCreator();
	renderProjects();

	// icon Save to reduce the task window & stop Edit when you confirm
	// icon Edit to edit the task window
	taskContainer.addEventListener('click', (e) => {
		minifyTask(e);
		editTask(e);
		stopEdit(e);
	});
	newButton.addEventListener('click', taskDOMCreator); // create a new task
}());
