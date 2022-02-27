/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function addTodo(event) {\r\n  event.preventDefault();\r\n  if (todoInput.value !== \"\") {\r\n    // create div\r\n    const todoDiv = document.createElement(\"div\");\r\n    todoDiv.classList.add(\"todo\");\r\n\r\n    //create li\r\n    const newTodo = document.createElement(\"li\");\r\n    newTodo.innerText = todoInput.value;\r\n    newTodo.classList.add(\"todo-item\");\r\n    todoDiv.appendChild(newTodo);\r\n\r\n    // check mark button\r\n    const completedButton = document.createElement(\"button\");\r\n    completedButton.innerHTML = '<i class=\"fas fa-check\"></li>';\r\n    completedButton.classList.add(\"complete-btn\");\r\n    todoDiv.appendChild(completedButton);\r\n\r\n    // check delete button\r\n    const trashButton = document.createElement(\"button\");\r\n    trashButton.innerHTML = '<i class=\"fas fa-trash\"></li>';\r\n    trashButton.classList.add(\"trash-btn\");\r\n    todoDiv.appendChild(trashButton);\r\n\r\n    // append to list\r\n    todoList.appendChild(todoDiv);\r\n\r\n    // clear todo input value\r\n    todoInput.value = \"\";\r\n  }\r\n}\r\n\r\nfunction deleteCheck(event) {\r\n  const item = event.target;\r\n\r\n  // delete todo\r\n  if (item.classList[0] === \"trash-btn\") {\r\n    const todo = item.parentElement;\r\n    todo.classList.add(\"fall\");\r\n    todo.addEventListener(\"transitionend\", function () {\r\n      todo.remove();\r\n    });\r\n  }\r\n\r\n  // check mark\r\n  if (item.classList[0] === \"complete-btn\") {\r\n    const todo = item.parentElement;\r\n    todo.classList.toggle(\"completed\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://to-do-webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;