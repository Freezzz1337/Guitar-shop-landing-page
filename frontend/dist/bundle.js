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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/modules/header */ \"./src/js/modules/header.js\");\n/* harmony import */ var _js_modules_progressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/modules/progressBar */ \"./src/js/modules/progressBar.js\");\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n    \"use strict\";\r\n\r\n    (0,_js_modules_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    (0,_js_modules_progressBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\n\n//# sourceURL=webpack://frontend/./src/index.js?");

/***/ }),

/***/ "./src/js/modules/header.js":
/*!**********************************!*\
  !*** ./src/js/modules/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction header() {\r\n    const menuBtn = document.querySelector(\".navbar-toggler\");\r\n    const navbarContent = document.querySelector(\"#navbarContent\");\r\n    const btnNavbar = document.querySelectorAll(\"[data-header-btn] a.nav-link\");\r\n    const headerHeight = document.querySelector(\"header\").offsetHeight;\r\n\r\n    menuBtn.addEventListener(\"click\", (e) => {\r\n\r\n        if (navbarContent.classList.contains(\"show\")) {\r\n            navbarContent.classList.remove(\"show\");\r\n        } else {\r\n            navbarContent.classList.add(\"show\");\r\n        }\r\n    });\r\n\r\n\r\n\r\n    btnNavbar.forEach(link => {\r\n        link.addEventListener('click', (event) => {\r\n            event.preventDefault();\r\n\r\n            const targetId = link.getAttribute('href');\r\n            const targetElement = document.querySelector(targetId);\r\n\r\n            if (targetElement) {\r\n                const targetOffset = targetElement.getBoundingClientRect().top;\r\n\r\n                window.scrollTo({\r\n                    top: window.pageYOffset + targetOffset - headerHeight,\r\n                    behavior: 'smooth'\r\n                });\r\n            }\r\n        });\r\n    });\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://frontend/./src/js/modules/header.js?");

/***/ }),

/***/ "./src/js/modules/progressBar.js":
/*!***************************************!*\
  !*** ./src/js/modules/progressBar.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction progressBar() {\r\n    const progressBar = document.querySelector(\".progress-bar\");\r\n    const body = document.body;\r\n    const html = document.documentElement;\r\n    let pageHeight = Math.max(body.scrollHeight, body.offsetHeight,\r\n        html.clientHeight, html.scrollHeight, html.offsetHeight);\r\n    let pageWidth = window.innerWidth;\r\n\r\n    function currentProgress() {\r\n        if (pageWidth === window.innerWidth) {\r\n            const scroll = window.scrollY;\r\n            const scrollPercentage = (scroll / (pageHeight - window.innerHeight)) * 100;\r\n            progressBar.style.width = scrollPercentage + \"%\";\r\n        } else {\r\n            pageWidth = window.innerWidth;\r\n            pageHeight = Math.max(body.scrollHeight, body.offsetHeight,\r\n                html.clientHeight, html.scrollHeight, html.offsetHeight);\r\n        }\r\n    }\r\n\r\n    currentProgress();\r\n    window.addEventListener(\"scroll\", currentProgress);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (progressBar);\n\n//# sourceURL=webpack://frontend/./src/js/modules/progressBar.js?");

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