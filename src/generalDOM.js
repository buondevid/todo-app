const containerProject = document.querySelector('.container__project');
const projectsButtons = document.querySelectorAll('.project');

containerProject.addEventListener('click', (e) => {
	if (e.target.classList.contains('project')) {
		projectsButtons.forEach( (button) => button.classList.remove('project_active'));
		e.target.classList.add('project_active');
	}
});
