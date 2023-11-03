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

/***/ "./src/Contact.js":
/*!************************!*\
  !*** ./src/Contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContactPage: () => (/* binding */ loadContactPage)\n/* harmony export */ });\nfunction loadContactPage() {\r\n    const contactDiv = document.createElement('div');\r\n    contactDiv.id = 'contact';\r\n    contactDiv.innerHTML = `\r\n        <h2>Contact Us</h2>\r\n        <p>If you have any questions or would like to make a reservation, please contact us.</p>\r\n        <a href=\"tel:+1234567890\">Call Us: (123) 456-7890</a>\r\n        <a href=\"mailto:info@restaurant.com\">Email Us: info@restaurant.com</a>\r\n    `;\r\n    return contactDiv;\r\n}\n\n//# sourceURL=webpack://c/./src/Contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.js */ \"./src/Contact.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n// Create and append a header\r\n//const header = document.createElement('header');\r\nheader.innerHTML = `\r\n    <h1>Restaurant Name</h1>\r\n    <nav>\r\n        <ul>\r\n            <li><a href=\"#menu\">Menu</a></li>\r\n            <li><a href=\"#about\">About Us</a></li>\r\n            <li><a href=\"#contact\">Contact</a></li>\r\n        </ul>\r\n    </nav>\r\n`;\r\ndocument.getElementById('content').appendChild(header);\r\n\r\n// Create and append a hero section\r\n//const hero = document.createElement('section');\r\nhero.id = 'hero';\r\nhero.innerHTML = `\r\n    <h2>Welcome to Restaurant Name</h2>\r\n    <p>Discover the finest flavors and culinary creations in town.</p>\r\n    <a href=\"#menu\" class=\"btn\">View Menu</a>\r\n`;\r\ndocument.getElementById('content').appendChild(hero);\r\n\r\n// Create and append a menu section\r\n//const menu = document.createElement('section');\r\nmenu.id = 'menu';\r\nmenu.innerHTML = `\r\n    <h2>Our Menu</h2>\r\n    <div class=\"menu-item\">\r\n        <h3>Dish 1</h3>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, justo at lacinia.</p>\r\n        <span>$10.99</span>\r\n    </div>\r\n    <div class=\"menu-item\">\r\n        <h3>Dish 2</h3>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, justo at lacinia.</p>\r\n        <span>$12.99</span>\r\n    </div>\r\n    <div class=\"menu-item\">\r\n        <h3>Dish 3</h3>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, justo at lacinia.</p>\r\n        <span>$9.99</span>\r\n    </div>\r\n`;\r\ndocument.getElementById('content').appendChild(menu);\r\n\r\n// Create and append an about section\r\n//const about = document.createElement('section');\r\nabout.id = 'about';\r\nabout.innerHTML = `\r\n    <h2>About Us</h2>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit, neque at commodo.</p>\r\n`;\r\ndocument.getElementById('content').appendChild(about);\r\n\r\n// Create and append a contact section\r\n//const contact = document.createElement('section');\r\ncontact.id = 'contact';\r\ncontact.innerHTML = `\r\n    <h2>Contact Us</h2>\r\n    <p>If you have any questions or would like to make a reservation, please contact us.</p>\r\n    <a href=\"tel:+1234567890\">Call Us: (123) 456-7890</a>\r\n    <a href=\"mailto:info@restaurant.com\">Email Us: info@restaurant.com</a>\r\n`;\r\ndocument.getElementById('content').appendChild(contact);\r\n\r\n// Create and append a footer\r\n//const footer = document.createElement('footer');\r\nfooter.innerHTML = `\r\n    <p>&copy; 2023 Restaurant Name</p>\r\n`;\r\ndocument.getElementById('content').appendChild(footer);\r\n\r\n\r\n\r\nconst content = document.getElementById('content');\r\nconst tabs = document.querySelectorAll('.tab');\r\n\r\nfunction clearContent() {\r\n    content.innerHTML = '';\r\n}\r\n\r\nfunction showContactPage() {\r\n    clearContent();\r\n    const contactDiv = (0,_Contact_js__WEBPACK_IMPORTED_MODULE_0__.loadContactPage)();\r\n    content.appendChild(contactDiv);\r\n}\r\n\r\nfunction showMenuPage() {\r\n    clearContent();\r\n    const menuDiv = (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenuPage)();\r\n    content.appendChild(menuDiv);\r\n}\r\n\r\ntabs.forEach((tab) => {\r\n    tab.addEventListener('click', (e) => {\r\n        if (e.target.id === 'contact-tab') {\r\n            showContactPage();\r\n        } else if (e.target.id === 'menu-tab') {\r\n            showMenuPage();\r\n        }\r\n    });\r\n});\r\n\r\n// Show the default content (e.g., menu page) when the page loads\r\nshowMenuPage();\n\n//# sourceURL=webpack://c/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenuPage: () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nfunction loadMenuPage() {\r\n    const menuDiv = document.createElement('div');\r\n    menuDiv.id = 'menu';\r\n    menuDiv.innerHTML = `\r\n        <h2>Our Menu</h2>\r\n        <div class=\"menu-item\">\r\n            <h3>Dish 1</h3>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, justo at lacinia.</p>\r\n            <span>$10.99</span>\r\n        </div>\r\n        <div class=\"menu-item\">\r\n            <h3>Dish 2</h3>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, justo at lacinia.</p>\r\n            <span>$12.99</span>\r\n        </div>\r\n        <div class=\"menu-item\">\r\n            <h3>Dish 3</h3>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, justo at lacinia.</p>\r\n            <span>$9.99</span>\r\n        </div>\r\n   ` ;\r\n    return menuDiv;\r\n}\n\n//# sourceURL=webpack://c/./src/menu.js?");

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