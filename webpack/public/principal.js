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

/***/ "./src/assets/css/estilo.css":
/*!***********************************!*\
  !*** ./src/assets/css/estilo.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://capitulo-webpack/./src/assets/css/estilo.css?");

/***/ }),

/***/ "./src/modulos/moduloA.js":
/*!********************************!*\
  !*** ./src/modulos/moduloA.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const moduloB = __webpack_require__(/*! ./moduloB */ \"./src/modulos/moduloB.js\")\r\n\r\nconsole.log(moduloB.saudacao())\n\n//# sourceURL=webpack://capitulo-webpack/./src/modulos/moduloA.js?");

/***/ }),

/***/ "./src/modulos/moduloB.js":
/*!********************************!*\
  !*** ./src/modulos/moduloB.js ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = {\r\n    saudacao() { return 'Olá sou o modulo B'}\r\n}\n\n//# sourceURL=webpack://capitulo-webpack/./src/modulos/moduloB.js?");

/***/ }),

/***/ "./src/pessoa.js":
/*!***********************!*\
  !*** ./src/pessoa.js ***!
  \***********************/
/***/ ((module) => {

eval("// export default \r\nmodule.exports = class Pessoa {\r\n    cumprimentar() {\r\n        return 'Bom dia!'\r\n    }\r\n}\n\n//# sourceURL=webpack://capitulo-webpack/./src/pessoa.js?");

/***/ }),

/***/ "./src/principal.js":
/*!**************************!*\
  !*** ./src/principal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Pessoa = __webpack_require__(/*! ./pessoa */ \"./src/pessoa.js\")\r\nconst moduloB = __webpack_require__(/*! ./modulos/moduloA */ \"./src/modulos/moduloA.js\")\r\nconst css = __webpack_require__(/*! ./assets/css/estilo.css */ \"./src/assets/css/estilo.css\")\r\n// import css from './assets/css/estilo.css'\r\n\r\nconst atendente = new Pessoa\r\nconsole.log(atendente.cumprimentar())\r\n\n\n//# sourceURL=webpack://capitulo-webpack/./src/principal.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/principal.js");
/******/ 	
/******/ })()
;