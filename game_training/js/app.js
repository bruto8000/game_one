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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/js/modules/functions.js\");\n/* harmony import */ var _modules_choice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/choice.js */ \"./src/js/modules/choice.js\");\n\r\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();\r\n/*\r\nimport Swiper, { Navigation, Pagination } from 'swiper';\r\nconst swiper = new Swiper();\r\n*/\r\n\r\n\r\n_modules_choice_js__WEBPACK_IMPORTED_MODULE_1__.choice();\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/choice.js":
/*!**********************************!*\
  !*** ./src/js/modules/choice.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"choice\": () => (/* binding */ choice)\n/* harmony export */ });\nfunction choice() {\n  const blockChoice = document.querySelector(\".voices\");\n  const clickChoice = document.querySelector(\".voice\");\n  const imgGame = Array.from(document.querySelectorAll(\".voices_img\"));\n  const elementSelection = document.querySelector(\".img_game\");\n\n  clickChoice.addEventListener(\"click\", function () {\n    blockChoice.style.display = \"block\";\n  });\n\n  function clickBlock() {\n    imgGame.forEach((element) => {\n      element.addEventListener(\"click\", (e) => {\n        imgGame.forEach((el) => {\n          el.classList.remove(\"._active\");\n          blockChoice.style.display = \"none\";\n        });\n        element.classList.toggle(\"._active\");\n        const cloneImg = element.cloneNode(true);\n        elementSelection.appendChild(cloneImg);\n        // ?????? ?????? ?? ???????? ???? ???????????????????? ?????????????? ?????????????? ???? ???????????? ???????????????? ?? ??????????????\n        const elementSelectionArr = [cloneImg];\n        if (elementSelectionArr.length == elementSelection) {\n          cloneImg.removeChild(cloneImg);\n        }\n      });\n    });\n  }\n\n  clickBlock();\n}\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/choice.js?");

/***/ }),

/***/ "./src/js/modules/functions.js":
/*!*************************************!*\
  !*** ./src/js/modules/functions.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isWebp\": () => (/* binding */ isWebp)\n/* harmony export */ });\n/* ???????????????? ?????????????????? webp, ???????????????????? ???????????? webp ?????? no-webp ?????? HTML */\r\nfunction isWebp() {\r\n\t// ???????????????? ?????????????????? webp\r\n\tfunction testWebP(callback) {\r\n\t\tlet webP = new Image();\r\n\t\twebP.onload = webP.onerror = function () {\r\n\t\t\tcallback(webP.height == 2);\r\n\t\t};\r\n\t\twebP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n\t}\r\n\t// ???????????????????? ???????????? _webp ?????? _no-webp ?????? HTML\r\n\ttestWebP(function (support) {\r\n\t\tlet className = support === true ? 'webp' : 'no-webp';\r\n\t\tdocument.documentElement.classList.add(className);\r\n\t});\r\n}\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/functions.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;