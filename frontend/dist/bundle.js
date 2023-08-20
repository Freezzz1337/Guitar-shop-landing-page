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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/modules/header */ \"./src/js/modules/header.js\");\n/* harmony import */ var _js_modules_progressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/modules/progressBar */ \"./src/js/modules/progressBar.js\");\n/* harmony import */ var _js_modules_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/modules/carousel */ \"./src/js/modules/carousel.js\");\n/* harmony import */ var _js_modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/modules/tabs */ \"./src/js/modules/tabs.js\");\n/* harmony import */ var _js_modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/modules/timer */ \"./src/js/modules/timer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n    \"use strict\";\r\n\r\n    const deadline = \"2023-09-18\";\r\n\r\n    (0,_js_modules_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    (0,_js_modules_progressBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_js_modules_carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    (0,_js_modules_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    (0,_js_modules_timer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(deadline);\r\n});\n\n//# sourceURL=webpack://frontend/./src/index.js?");

/***/ }),

/***/ "./src/js/modules/carousel.js":
/*!************************************!*\
  !*** ./src/js/modules/carousel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction carousel() {\r\n    const carousels = document.querySelectorAll(\".carousel-item\");\r\n    const carouselIndicators = document.querySelectorAll(\"[data-bs-target='#carouselExampleCaptions']\");\r\n    const nextButton = document.querySelector(\".carousel-control-next-icon\");\r\n    const prevButton = document.querySelector(\".carousel-control-prev-icon\");\r\n\r\n    let currentSlide = 0;\r\n    let maxSlides = carousels.length - 1;\r\n    let timerId;\r\n\r\n    timerForCarousel();\r\n\r\n    prevButton.addEventListener(\"click\", () => {\r\n        updateSLide(currentSlide, currentSlide === 0 ? currentSlide = maxSlides : --currentSlide);\r\n    });\r\n\r\n\r\n    nextButton.addEventListener(\"click\", () => {\r\n        updateSLide(currentSlide, currentSlide < maxSlides ? ++currentSlide : 0);\r\n    })\r\n\r\n\r\n    carouselIndicators.forEach(item => {\r\n        item.addEventListener(\"click\", (e) => {\r\n            if (e.target) {\r\n                updateSLide(currentSlide, +item.getAttribute(\"data-bs-slide-to\"));\r\n            }\r\n        });\r\n    });\r\n\r\n\r\n    function updateSLide(currentIndex, newIndex) {\r\n        timerForCarousel(true);\r\n\r\n        carousels[currentIndex].classList.remove(\"active\");\r\n        carouselIndicators[currentIndex].classList.remove(\"active\");\r\n\r\n        currentSlide = newIndex;\r\n\r\n        carousels[currentSlide].classList.add(\"active\");\r\n        carouselIndicators[currentSlide].classList.add(\"active\");\r\n    }\r\n\r\n    function timerForCarousel(check = false) {\r\n\r\n        function start() {\r\n            timerId = setInterval(function () {\r\n                updateSLide(currentSlide, currentSlide < maxSlides ? ++currentSlide : 0);\r\n            }, 3500);\r\n        }\r\n\r\n        if (check) {\r\n            clearInterval(timerId);\r\n            start();\r\n        }else {\r\n            start();\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\n\n//# sourceURL=webpack://frontend/./src/js/modules/carousel.js?");

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

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction tabs() {\r\n    const tabs = document.querySelectorAll(\"[data-tab]\");\r\n    const btnTabs = document.querySelectorAll(\"#guitars .nav-link\");\r\n\r\n    tabs.forEach((e) => {\r\n        e.style.display = \"none\";\r\n    });\r\n\r\n    tabs[0].style.display = \"block\";\r\n\r\n    console.log(btnTabs);\r\n\r\n    btnTabs.forEach(item => {\r\n        item.addEventListener(\"click\", (e) => {\r\n            e.preventDefault();\r\n\r\n            if (e.target) {\r\n                show(item);\r\n            }\r\n        });\r\n    })\r\n\r\n    function show(item) {\r\n        tabs.forEach(i => i.style.display = \"none\");\r\n        btnTabs.forEach(i => {\r\n            if (i.classList.contains(\"active\")) {\r\n                i.classList.remove(\"active\");\r\n            }\r\n        });\r\n\r\n\r\n        const btnAttribute = item.getAttribute(\"href\").slice(1);\r\n\r\n        item.classList.add(\"active\");\r\n\r\n        tabs.forEach(e => {\r\n            if (e.id === btnAttribute) {\r\n                e.style.display = \"block\";\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://frontend/./src/js/modules/tabs.js?");

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction timer(deadline) {\r\n    const timer = document.querySelector(\"#timer\");\r\n\r\n    function getTimeRemaining(endTime) {\r\n        const t = Date.parse(endTime) - new Date(),\r\n            days = Math.floor(t / (1000 * 60 * 60 * 24)),\r\n            hours = Math.floor(t / (1000 * 60 * 60) % 24),\r\n            minutes = Math.floor((t / 1000 / 60) % 60),\r\n            seconds = Math.floor((t / 1000) % 60);\r\n\r\n        return {\r\n            \"total\": t,\r\n            \"days\": days,\r\n            \"hours\": hours,\r\n            \"minutes\": minutes,\r\n            \"seconds\": seconds\r\n        };\r\n    }\r\n\r\n    function addZero(num) {\r\n        return num > 0 && num < 10 ? `0${num}` : num;\r\n    }\r\n\r\n    function setClock(timerSelector, endTime) {\r\n        const days = timerSelector.querySelector(\"#days\");\r\n        const hours = timerSelector.querySelector(\"#hours\");\r\n        const minutes = timerSelector.querySelector(\"#minutes\");\r\n        const seconds = timerSelector.querySelector(\"#seconds\");\r\n        let timeInterval = setInterval(updateClock, 1000);\r\n\r\n        updateClock();\r\n\r\n        function updateClock() {\r\n            const time = getTimeRemaining(endTime);\r\n            days.innerHTML = addZero(time.days);\r\n            hours.innerHTML = addZero(time.hours);\r\n            minutes.innerHTML = addZero(time.minutes);\r\n            seconds.innerHTML = addZero(time.seconds);\r\n\r\n            if (time.total <= 0) {\r\n                clearInterval(timeInterval);\r\n            }\r\n\r\n        }\r\n\r\n    }\r\n\r\n    setClock(timer, deadline);\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://frontend/./src/js/modules/timer.js?");

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