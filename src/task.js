// makes task full size
export function taskOpener() {
	if ((this.style.height === '')) {
		this.style.height = '35rem';
	} else if (this.style.height === '35rem' && !this.children[1].classList.contains('task_edit-active')) {
		this.style.height = '';
	}
}

// minify task
export function minifyTask(e) {
	if (e.target.classList.contains('fa-check-circle')) {
		e.target.closest('.task').style.height = '';
	}
}

// put task in edit mode
export function editTask(e) {
	if (e.target.classList.contains('fa-edit')) {
		const container = e.target.closest('.task');
		const textInput = container.querySelector('input[type="text"]');
		const selectInput = container.querySelector('select');
		const dateInput = container.querySelector('input[type="date"]');
		const textArea = container.querySelector('textarea');
		const textInput2 = container.querySelectorAll('input[type="text"]')[1];
		const arrayInput = [textInput, selectInput, dateInput, textArea, textInput2];

		// ARIBNB guide doesn't suggest it...
		// for (const inp of arrayInput) {
		// 	inp.removeAttribute('disabled');
		// 	inp.removeAttribute('readonly');
		// 	inp.classList.add('task_edit-active');
		// }

		arrayInput.forEach((inp) => {
			inp.removeAttribute('disabled');
			inp.removeAttribute('readonly');
			inp.classList.add('task_edit-active');
		});
	}
}

// put task in readonly mode
export function stopEdit(e) {
	const container = e.target.closest('.task');
	const textInput = container.querySelector('input[type="text"]');
	const selectInput = container.querySelector('select');
	const dateInput = container.querySelector('input[type="date"]');
	const textArea = container.querySelector('textarea');
	const textInput2 = container.querySelectorAll('input[type="text"]')[1];
	const arrayInput = [textInput, selectInput, dateInput, textArea, textInput2];

	selectInput.setAttribute('disabled', '');

	arrayInput.forEach((inp) => {
		inp.setAttribute('readonly', '');
		inp.classList.remove('task_edit-active');
	});

	// AIRBNB doesn't suggest it...
	// for (const inp of arrayInput) {
	// 	inp.setAttribute('readonly', '');
	// 	inp.classList.remove('task_edit-active');
	// }
}

export function setColorPriority() {
	this.parentElement.classList.remove('task_normal', 'task_medium', 'task_urgent');
	switch (this.value) {
	case 'Normal':
		this.parentElement.classList.add('task_normal');
		break;
	case 'Timely':
		this.parentElement.classList.add('task_medium');
		break;
	case 'Urgent':
		this.parentElement.classList.add('task_urgent');
		break;
	default:
	}
}
