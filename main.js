/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/generalDOM.js":
/*!***************************!*\
  !*** ./src/generalDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n\n// eslint-disable-next-line object-curly-newline\n\n\n\nconst containerProject = document.querySelector('.container__project');\n\ncontainerProject.addEventListener('click', (e) => {\n\tconst projectsButtons = containerProject.querySelectorAll('.project');\n\tif (e.detail === 3 && e.target.classList.contains('project')) {\n\t\t(0,_projects__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(e);\n\t}\n\tif (e.detail === 1 && e.target.classList.contains('project')) {\n\t\t(0,_projects__WEBPACK_IMPORTED_MODULE_0__.filterProjectTasks)(e.target.textContent);\n\t\tprojectsButtons.forEach((button) => {\n\t\t\tbutton.classList.remove('project_active');\n\t\t});\n\t\te.target.classList.add('project_active');\n\t}\n});\n\nconst taskContainer = document.querySelector('.container__tasks');\nconst newButton = document.getElementsByClassName('new-button')[0];\n\nfunction taskDOMCreator() {\n\tconst task = document.createElement('div');\n\ttask.classList.add('task', 'task_fading');\n\ttask.setAttribute('data-key', Date.now());\n\ttask.setAttribute('tabindex', '0');\n\ttask.innerHTML = `\n\t\t\t\t<div class=\"task__first-line\">\n\t\t\t\t\t<input readonly type=\"text\" placeholder=\"> Title\">\n\t\t\t\t\t<label class=\"checkbox\">\n\t\t\t\t\t\t<span class=\"checkbox__input\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"checked\">\n\t\t\t\t\t\t\t<span class=\"checkbox__control\">\n\t\t\t\t\t\t\t\t<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n\t\t\t\t\t\t\t\t\t<path fill='none' stroke='currentColor' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' />\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</label>\n\t\t\t\t\t<!-- <input type=\"checkbox\"> -->\n\t\t\t\t</div>\n\t\t\t\t<select disabled>\n\t\t\t\t\t<option selected disabled>> Priority</option>\n\t\t\t\t\t<option>Normal</option>\n\t\t\t\t\t<option>Timely</option>\n\t\t\t\t\t<option>Urgent</option>\n\t\t\t\t</select>\n\t\t\t\t<input readonly type=\"date\">\n\t\t\t\t<textarea readonly placeholder=\"> Description\"></textarea>\n\t\t\t\t<input type='text' placeholder='> Project' readonly>\n\t\t\t\t<div class=\"task__edit\">\n\t\t\t\t\t<a href=\"#\"><i class=\"far fa-check-circle\"></i></a>\n\t\t\t\t\t<a href=\"#\"><i class=\"far fa-edit\"></i></a>\n\t\t\t\t</div>`;\n\n\tfunction countInArray(array, what) {\n\t\treturn array.filter((item) => item == what).length;\n\t}\n\n\tconst input = task.querySelector('input[type=\"checkbox\"]');\n\tconst input1 = task.getElementsByTagName('input')[0];\n\tconst select = task.querySelector('select');\n\n\t// task.addEventListener('keydown', (e) => {\n\t// \tif (e.keyCode === 13) {\n\t// \t\tconsole.log('ciao');\n\t// \t}\n\t// });\n\n\tinput1.addEventListener('click', _task__WEBPACK_IMPORTED_MODULE_1__.taskOpener.bind(task)); // open modal\n\tselect.addEventListener('change', _task__WEBPACK_IMPORTED_MODULE_1__.setColorPriority);\n\n\tinput.addEventListener('change', () => {\n\t\tconst allCheckboxes = document.querySelectorAll('input[type=\"checkbox\"]');\n\t\tconst arrayCheck = [];\n\t\tallCheckboxes.forEach((item) => {\n\t\t\tconst bool = item.checked;\n\t\t\tarrayCheck.push(bool);\n\t\t});\n\t\tif (countInArray(arrayCheck, true) > 1) {\n\t\t\tinput.checked = false;\n\t\t\treturn;\n\t\t}\n\t\t_objects__WEBPACK_IMPORTED_MODULE_2__.deleteTask.a(input, task);\n\t});\n\n\ttaskContainer.prepend(task);\n\t// fade in transition task rendered\n\tsetTimeout(() => task.classList.remove('task_fading'), 100);\n}\n\n// module to attach event listeners at DOMload\n(function init() {\n\ttaskDOMCreator();\n\t(0,_projects__WEBPACK_IMPORTED_MODULE_0__.renderProjects)();\n\n\t// icon Save to reduce the task window & stop Edit when you confirm\n\t// icon Edit to edit the task window\n\ttaskContainer.addEventListener('click', (e) => {\n\t\t(0,_task__WEBPACK_IMPORTED_MODULE_1__.minifyTask)(e);\n\t\t(0,_task__WEBPACK_IMPORTED_MODULE_1__.editTask)(e);\n\t\tif (e.target.classList.contains('fa-check-circle')) {\n\t\t\t(0,_objects__WEBPACK_IMPORTED_MODULE_2__.createTask)(e);\n\t\t\t(0,_projects__WEBPACK_IMPORTED_MODULE_0__.updateProjects)(e);\n\t\t\t(0,_task__WEBPACK_IMPORTED_MODULE_1__.stopEdit)(e);\n\t\t}\n\t});\n\tnewButton.addEventListener('click', taskDOMCreator); // create a new task\n}());\n\n\n//# sourceURL=webpack://todo-appnew/./src/generalDOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n/* harmony import */ var _generalDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generalDOM */ \"./src/generalDOM.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sort */ \"./src/sort.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-appnew/./src/index.js?");

/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskArr\": () => (/* binding */ taskArr),\n/* harmony export */   \"createTask\": () => (/* binding */ createTask),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"renderTasks\": () => (/* binding */ renderTasks)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n// import { arrProjects, renderProjects } from './projects';\n\n\nconst taskArr = [];\n\n// factory function to create todo\nfunction taskFactory(\n\ttitle,\n\tpriority,\n\tdate,\n\tdescription,\n\tproject,\n\tchecked,\n\tid,\n) {\n\treturn {\n\t\ttitle,\n\t\tpriority,\n\t\tdate,\n\t\tdescription,\n\t\tproject,\n\t\tchecked,\n\t\tid,\n\t};\n}\n\nfunction createTask(e) {\n\tconst taskPanel = e.target.closest('.task');\n\tconst title = taskPanel.querySelector('input').value;\n\tconst priority = taskPanel.querySelector('select').value;\n\tconst date = taskPanel.querySelector('input[type=\"date\"]').value;\n\tconst description = taskPanel.querySelector('textarea').value;\n\tconst project = taskPanel.querySelectorAll('[type=\"text\"]')[1].value.toUpperCase();\n\tconst { checked } = taskPanel.querySelector(\"[type='checkbox']\");\n\tconst id = taskPanel.dataset.key;\n\n\tconst task = taskFactory(\n\t\ttitle,\n\t\tpriority,\n\t\tdate,\n\t\tdescription,\n\t\tproject,\n\t\tchecked,\n\t\tid,\n\t);\n\n\t// push a new object into array, or update the existing one by replacing\n\tif (taskArr.findIndex((item) => item.id === taskPanel.dataset.key) > -1) {\n\t\tconst index = taskArr.findIndex((item) => item.id === taskPanel.dataset.key);\n\t\ttaskArr[index] = task;\n\t} else taskArr.push(task);\n}\n\n// creating a module for persistence of varTimeout\nconst deleteTask = (() => {\n\tlet varTimeout;\n\tfunction a(input, task) {\n\t\tclearTimeout(varTimeout);\n\t\tif (input.checked === true) input.closest('.task').classList.add('task_erasing');\n\t\telse input.closest('.task').classList.remove('task_erasing');\n\t\tvarTimeout = setTimeout(() => {\n\t\t\tinput.checked && input.closest('.task').remove(); // delete task because it's done\n\t\t\t// eslint-disable-next-line max-len\n\t\t\ttaskArr.splice(taskArr.findIndex((item) => item.id !== task.dataset.key), 1); // find and delete object in array\n\t\t},\n\t\t3000);\n\t}\n\treturn { a };\n}\n)();\n\nfunction renderTasks(array) {\n\tconst taskContainer = document.querySelector('.container__tasks');\n\ttaskContainer.innerHTML = '';\n\n\tarray.forEach((item) => {\n\t\tconst task = document.createElement('div');\n\t\ttask.classList.add('task', 'task_fading');\n\t\ttask.setAttribute('tabindex', '0');\n\n\t\ttask.innerHTML = `\n\t\t\t\t<div class=\"task__first-line\">\n\t\t\t\t<input readonly type=\"text\" placeholder=\"> Title\">\n\t\t\t\t<label class=\"checkbox\">\n\t\t\t\t\t<span class=\"checkbox__input\">\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"checked\">\n\t\t\t\t\t\t<span class=\"checkbox__control\">\n\t\t\t\t\t\t\t<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n\t\t\t\t\t\t\t\t<path fill='none' stroke='currentColor' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' />\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t\t</label>\n\t\t\t\t<!-- <input type=\"checkbox\"> -->\n\t\t\t</div>\n\t\t\t<select disabled>\n\t\t\t\t<option selected disabled>> Priority</option>\n\t\t\t\t<option>Normal</option>\n\t\t\t\t<option>Timely</option>\n\t\t\t\t<option>Urgent</option>\n\t\t\t</select>\n\t\t\t<input readonly type=\"date\">\n\t\t\t<textarea readonly placeholder=\"Description\"></textarea>\n\t\t\t<input type='text' placeholder=' Project' readonly>\n\t\t\t<div class=\"task__edit\">\n\t\t\t\t<a href=\"#\"><i class=\"far fa-check-circle\"></i></a>\n\t\t\t\t<a href=\"#\"><i class=\"far fa-edit\"></i></a>\n\t\t\t</div>`;\n\n\t\tconst title = task.querySelector('input');\n\t\tconst priority = task.querySelector('select');\n\t\tconst date = task.querySelector('input[type=\"date\"]');\n\t\tconst description = task.querySelector('textarea');\n\t\tconst project = task.querySelectorAll('[type=\"text\"]')[1];\n\t\tconst checked = task.querySelector(\"[type='checkbox']\");\n\t\tconst id = task.dataset;\n\n\t\ttitle.value = item.title;\n\t\tpriority.value = item.priority;\n\t\tdate.value = item.date;\n\t\tdescription.value = item.description;\n\t\tchecked.checked = item.checked;\n\t\tid.key = item.id;\n\t\tproject.value = item.project;\n\n\t\tfunction countInArray(array1, what) {\n\t\t\treturn array1.filter((item1) => item1 == what).length;\n\t\t}\n\n\t\t// task.addEventListener('keydown', (e) => {\n\t\t// \tif (e.keyCode === 13) {\n\t\t// \t\tconsole.log('render');\n\t\t// \t\tcreateTask(e);\n\t\t// \t\tupdateProjects(e);\n\t\t// \t\tstopEdit(e);\n\t\t// \t}\n\t\t// });\n\n\t\t_task__WEBPACK_IMPORTED_MODULE_0__.setColorPriority.call(priority);\n\n\t\tpriority.addEventListener('change', _task__WEBPACK_IMPORTED_MODULE_0__.setColorPriority);\n\t\ttitle.addEventListener('click', _task__WEBPACK_IMPORTED_MODULE_0__.taskOpener.bind(task));\n\n\t\tchecked.addEventListener('change', () => {\n\t\t\tconst allCheckboxes = document.querySelectorAll('input[type=\"checkbox\"]');\n\t\t\tconst arrayCheck = [];\n\t\t\tallCheckboxes.forEach((item1) => {\n\t\t\t\tconst bool = item1.checked;\n\t\t\t\tarrayCheck.push(bool);\n\t\t\t});\n\t\t\tif (countInArray(arrayCheck, true) > 1) {\n\t\t\t\tchecked.checked = false;\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tdeleteTask.a(checked, task);\n\t\t});\n\n\t\ttaskContainer.prepend(task);\n\t\tsetTimeout(() => task.classList.remove('task_fading'), 100);\n\t});\n}\n\n\n//# sourceURL=webpack://todo-appnew/./src/objects.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arrProjects\": () => (/* binding */ arrProjects),\n/* harmony export */   \"addProjectToArr\": () => (/* binding */ addProjectToArr),\n/* harmony export */   \"renderProjects\": () => (/* binding */ renderProjects),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"updateProjects\": () => (/* binding */ updateProjects),\n/* harmony export */   \"filteredArrayPerProjects\": () => (/* binding */ filteredArrayPerProjects),\n/* harmony export */   \"filterProjectTasks\": () => (/* binding */ filterProjectTasks)\n/* harmony export */ });\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n\n\nconst arrProjects = ['ALL', 'FINANCE', 'GROCERY'];\n\nfunction addProjectToArr(string) {\n\tconst newString = string.toLowerCase();\n\tif (arrProjects.includes(newString)) {\n\t\treturn;\n\t}\n\tarrProjects.push(newString);\n}\n\nfunction renderProjects() {\n\tconst container = document.querySelector('.container__project');\n\tcontainer.innerHTML = '';\n\tarrProjects.forEach((element, index) => {\n\t\tconst button = document.createElement('button');\n\t\tbutton.classList.add('project');\n\t\tif (index === 0) button.classList.add('project_active');\n\t\tbutton.innerText = element;\n\t\tcontainer.appendChild(button);\n\t});\n}\n\nlet executed = true;\nlet xTimeout;\nfunction deleteProject(e) {\n\tif (e.target.innerText !== 'ALL') {\n\t\tif (e.target.style.animation !== '1s ease 0s infinite normal none running proj' && executed) {\n\t\t\texecuted = false;\n\t\t\te.target.style.animation = 'proj 1s infinite';\n\t\t\txTimeout = setTimeout(() => {\n\t\t\t\tif (e.target.style.animation === '1s ease 0s infinite normal none running proj') {\n\t\t\t\t\te.target.remove(); // delete task because it's done\n\t\t\t\t\tarrProjects.splice(arrProjects.findIndex((item) => item.project === e.target.innerText), 1);\n\t\t\t\t\trenderProjects(); // find and delete object in array\n\t\t\t\t\texecuted = true;\n\t\t\t\t}\n\t\t\t},\n\t\t\t3000);\n\t\t} else if (e.target.style.animation === '1s ease 0s infinite normal none running proj') {\n\t\t\tclearTimeout(xTimeout);\n\t\t\te.target.style.animation = '';\n\t\t\texecuted = true;\n\t\t}\n\t}\n}\n\n// let varTimeout;\n// export function deleteTask(input, task) {\n// \tclearTimeout(varTimeout);\n// \tif (input.checked === true) input.closest('.task').classList.add('task_erasing');\n// \telse input.closest('.task').classList.remove('task_erasing');\n// \tvarTimeout = setTimeout(() => {\n// \t\tinput.checked && input.closest('.task').remove(); // delete task because it's done\n// \t\t// eslint-disable-next-line max-len\n// \t\ttaskArr.splice(taskArr.findIndex((item) => item.id !== task.dataset.key), 1); // find and delete object in array\n// \t},\n// \t3000);\n// }\n\n// CREATE or UPDATE projects html and arrayProjects (from task form)\nconst updateProjects = (e) => {\n\tif (e.target.classList.contains('fa-check-circle')) {\n\t\tconst task = e.target.closest('.task');\n\t\tconst textInput2 = task.querySelectorAll('input[type=\"text\"]')[1];\n\t\tconst tag = textInput2.value.toUpperCase() || 'ALL';\n\t\tif (!arrProjects.includes(tag)) {\n\t\t\tarrProjects.push(tag);\n\t\t\trenderProjects();\n\t\t}\n\t}\n};\n\n// eslint-disable-next-line import/no-mutable-exports\nlet filteredArrayPerProjects = _objects__WEBPACK_IMPORTED_MODULE_0__.taskArr;\nfunction filterProjectTasks(string) {\n\tif (string === 'ALL') {\n\t\t(0,_objects__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(_objects__WEBPACK_IMPORTED_MODULE_0__.taskArr);\n\t\tfilteredArrayPerProjects = [..._objects__WEBPACK_IMPORTED_MODULE_0__.taskArr];\n\t} else {\n\t\tfilteredArrayPerProjects = _objects__WEBPACK_IMPORTED_MODULE_0__.taskArr.filter((item) => string === item.project);\n\t\t(0,_objects__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(filteredArrayPerProjects);\n\t}\n}\n\n\n//# sourceURL=webpack://todo-appnew/./src/projects.js?");

/***/ }),

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\nconst calendar = document.querySelector('.fa-calendar-alt');\nconst exclamation = document.querySelector('.fa-exclamation');\nconst az = document.querySelector('.fa-sort-alpha-down');\n\nfunction colorSortButton(buttonSort) {\n\tconst arraySort = [calendar, exclamation, az];\n\tarraySort.forEach((button) => {\n\t\tbutton.classList.remove('_active');\n\t});\n\tbuttonSort.classList.add('_active');\n}\n\nfunction sortByDate(project) {\n\tcolorSortButton(calendar);\n\t_projects__WEBPACK_IMPORTED_MODULE_1__.filteredArrayPerProjects.sort((a, b) => (new Date(a.date) - new Date(b.date)));\n\t(0,_projects__WEBPACK_IMPORTED_MODULE_1__.filterProjectTasks)(project);\n\t(0,_objects__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(_projects__WEBPACK_IMPORTED_MODULE_1__.filteredArrayPerProjects);\n}\n\nfunction sortByAz(project) {\n\tcolorSortButton(az);\n\t(0,_projects__WEBPACK_IMPORTED_MODULE_1__.filterProjectTasks)(project);\n\t_projects__WEBPACK_IMPORTED_MODULE_1__.filteredArrayPerProjects.sort((a, b) => b.title.localeCompare(a.title));\n\t(0,_objects__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(_projects__WEBPACK_IMPORTED_MODULE_1__.filteredArrayPerProjects);\n}\n\nfunction sortByPriority(project) {\n\tcolorSortButton(exclamation);\n\tconst sortPriority = ['Urgent', 'Timely', 'Normal', '> Priority'];\n\t(0,_projects__WEBPACK_IMPORTED_MODULE_1__.filterProjectTasks)(project);\n\t// eslint-disable-next-line max-len\n\t_projects__WEBPACK_IMPORTED_MODULE_1__.filteredArrayPerProjects.sort((a, b) => sortPriority.indexOf(b.priority) - sortPriority.indexOf(a.priority));\n\t(0,_objects__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(_projects__WEBPACK_IMPORTED_MODULE_1__.filteredArrayPerProjects);\n}\n\ncalendar.addEventListener('click', () => {\n\tconst active = document.querySelector('.project_active').textContent;\n\tsortByDate(active);\n});\nexclamation.addEventListener('click', () => {\n\tconst active = document.querySelector('.project_active').textContent;\n\tsortByPriority(active);\n});\naz.addEventListener('click', () => {\n\tconst active = document.querySelector('.project_active').textContent;\n\tsortByAz(active);\n});\n\n\n//# sourceURL=webpack://todo-appnew/./src/sort.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskOpener\": () => (/* binding */ taskOpener),\n/* harmony export */   \"minifyTask\": () => (/* binding */ minifyTask),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"stopEdit\": () => (/* binding */ stopEdit),\n/* harmony export */   \"setColorPriority\": () => (/* binding */ setColorPriority)\n/* harmony export */ });\n// makes task full size\nfunction taskOpener() {\n\tif ((this.style.height === '')) {\n\t\tthis.style.height = '35rem';\n\t} else if (this.style.height === '35rem' && !this.children[1].classList.contains('task_edit-active')) {\n\t\tthis.style.height = '';\n\t}\n}\n\n// minify task\nfunction minifyTask(e) {\n\tif (e.target.classList.contains('fa-check-circle')) {\n\t\te.target.closest('.task').style.height = '';\n\t}\n}\n\n// put task in edit mode\nfunction editTask(e) {\n\tif (e.target.classList.contains('fa-edit')) {\n\t\tconst container = e.target.closest('.task');\n\t\tconst textInput = container.querySelector('input[type=\"text\"]');\n\t\tconst selectInput = container.querySelector('select');\n\t\tconst dateInput = container.querySelector('input[type=\"date\"]');\n\t\tconst textArea = container.querySelector('textarea');\n\t\tconst textInput2 = container.querySelectorAll('input[type=\"text\"]')[1];\n\t\tconst arrayInput = [textInput, selectInput, dateInput, textArea, textInput2];\n\n\t\t// ARIBNB guide doesn't suggest it...\n\t\t// for (const inp of arrayInput) {\n\t\t// \tinp.removeAttribute('disabled');\n\t\t// \tinp.removeAttribute('readonly');\n\t\t// \tinp.classList.add('task_edit-active');\n\t\t// }\n\n\t\tarrayInput.forEach((inp) => {\n\t\t\tinp.removeAttribute('disabled');\n\t\t\tinp.removeAttribute('readonly');\n\t\t\tinp.classList.add('task_edit-active');\n\t\t});\n\t}\n}\n\n// put task in readonly mode\nfunction stopEdit(e) {\n\tconst container = e.target.closest('.task');\n\tconst textInput = container.querySelector('input[type=\"text\"]');\n\tconst selectInput = container.querySelector('select');\n\tconst dateInput = container.querySelector('input[type=\"date\"]');\n\tconst textArea = container.querySelector('textarea');\n\tconst textInput2 = container.querySelectorAll('input[type=\"text\"]')[1];\n\tconst arrayInput = [textInput, selectInput, dateInput, textArea, textInput2];\n\n\tselectInput.setAttribute('disabled', '');\n\n\tarrayInput.forEach((inp) => {\n\t\tinp.setAttribute('readonly', '');\n\t\tinp.classList.remove('task_edit-active');\n\t});\n\n\t// AIRBNB doesn't suggest it...\n\t// for (const inp of arrayInput) {\n\t// \tinp.setAttribute('readonly', '');\n\t// \tinp.classList.remove('task_edit-active');\n\t// }\n}\n\nfunction setColorPriority() {\n\tthis.parentElement.classList.remove('task_normal', 'task_medium', 'task_urgent');\n\tswitch (this.value) {\n\tcase 'Normal':\n\t\tthis.parentElement.classList.add('task_normal');\n\t\tbreak;\n\tcase 'Timely':\n\t\tthis.parentElement.classList.add('task_medium');\n\t\tbreak;\n\tcase 'Urgent':\n\t\tthis.parentElement.classList.add('task_urgent');\n\t\tbreak;\n\tdefault:\n\t}\n}\n\n\n//# sourceURL=webpack://todo-appnew/./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;