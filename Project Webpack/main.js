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

/***/ "./css/index.css":
/*!***********************!*\
  !*** ./css/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://to-do-webpack/./css/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ \"./src/selectors.js\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index.css */ \"./css/index.css\");\n\r\n\r\n\r\nfunction addTodo(event) {\r\n  event.preventDefault();\r\n  if (_selectors__WEBPACK_IMPORTED_MODULE_0__.todoInput.value !== \"\") {\r\n    // create div\r\n    const todoDiv = document.createElement(\"div\");\r\n    todoDiv.classList.add(\"todo\");\r\n\r\n    //create li\r\n    const newTodo = document.createElement(\"li\");\r\n    newTodo.innerText = _selectors__WEBPACK_IMPORTED_MODULE_0__.todoInput.value;\r\n    newTodo.classList.add(\"todo-item\");\r\n    todoDiv.appendChild(newTodo);\r\n\r\n    // check mark button\r\n    const completedButton = document.createElement(\"button\");\r\n    completedButton.innerHTML = '<i class=\"fas fa-check\"></li>';\r\n    completedButton.classList.add(\"complete-btn\");\r\n    todoDiv.appendChild(completedButton);\r\n\r\n    // check delete button\r\n    const trashButton = document.createElement(\"button\");\r\n    trashButton.innerHTML = '<i class=\"fas fa-trash\"></li>';\r\n    trashButton.classList.add(\"trash-btn\");\r\n    todoDiv.appendChild(trashButton);\r\n\r\n    // append to list\r\n    _selectors__WEBPACK_IMPORTED_MODULE_0__.todoList.appendChild(todoDiv);\r\n\r\n    // clear todo input value\r\n    _selectors__WEBPACK_IMPORTED_MODULE_0__.todoInput.value = \"\";\r\n  }\r\n}\r\n\r\nfunction deleteCheck(event) {\r\n  const item = event.target;\r\n\r\n  // delete todo\r\n  if (item.classList[0] === \"trash-btn\") {\r\n    const todo = item.parentElement;\r\n    todo.classList.add(\"fall\");\r\n    todo.addEventListener(\"transitionend\", function () {\r\n      todo.remove();\r\n    });\r\n  }\r\n\r\n  // check mark\r\n  if (item.classList[0] === \"complete-btn\") {\r\n    const todo = item.parentElement;\r\n    todo.classList.toggle(\"completed\");\r\n  }\r\n}\r\n\r\n_selectors__WEBPACK_IMPORTED_MODULE_0__.todoButton.addEventListener(\"click\", addTodo);\r\n_selectors__WEBPACK_IMPORTED_MODULE_0__.todoList.addEventListener(\"click\", deleteCheck);\r\n\n\n//# sourceURL=webpack://to-do-webpack/./src/index.js?");

/***/ }),

/***/ "./src/selectors.js":
/*!**************************!*\
  !*** ./src/selectors.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoInput\": () => (/* binding */ todoInput),\n/* harmony export */   \"todoButton\": () => (/* binding */ todoButton),\n/* harmony export */   \"todoList\": () => (/* binding */ todoList)\n/* harmony export */ });\nconst todoInput = document.querySelector(\".todo-input\");\r\nconst todoButton = document.querySelector(\".todo-button\");\r\nconst todoList = document.querySelector(\".todo-list\");\r\n\n\n//# sourceURL=webpack://to-do-webpack/./src/selectors.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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