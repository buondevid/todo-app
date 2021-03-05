// import { container } from 'webpack';
import { renderProjects, filterProjectTasks } from './projects';
import {
	taskDOMCreator, minifyTask, editTask, stopEdit,
} from './task';

const containerProject = document.querySelector('.container__project');
const projectsButtons = document.getElementsByClassName('project');
const arrayButtons = Array.from(projectsButtons);

containerProject.addEventListener('click', (e) => {
	if (e.target.classList.contains('project')) {
		console.log(projectsButtons);
		console.log(arrayButtons);
		for (const i = 0; i < projectsButtons; i++) {
			projectsButtons[i].classList.remove('project_active');
		}
		e.target.classList.add('project_active');
	}
});

// containerProject.addEventListener('click', (e) => {
//     if (e.target.classList.contains('project')) {
//         console.log(e.target);
//         projectsButtons.forEach((button) => {
//             button.classList.remove('project_active');
//             console.log(button);
//         });
//         e.target.classList.add('project_active');
//     }
// });

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