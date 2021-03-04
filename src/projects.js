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
		button.innerText = element;
		container.appendChild(button);
	});
}
