/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/page1.js":
/*!**********************!*\
  !*** ./src/page1.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTab1Contents": () => (/* binding */ getTab1Contents)
/* harmony export */ });
const getTab1Contents = () => {
  let div = document.createElement('div');
  div.textContent = "tab 1";
  return div;
}



/***/ }),

/***/ "./src/page2.js":
/*!**********************!*\
  !*** ./src/page2.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTab2Contents": () => (/* binding */ getTab2Contents)
/* harmony export */ });
function getTab2Contents() {
  let div = document.createElement('div');
  div.textContent = "tab 2";
  return div;
}




/***/ }),

/***/ "./src/page3.js":
/*!**********************!*\
  !*** ./src/page3.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTab3Contents": () => (/* binding */ getTab3Contents)
/* harmony export */ });
function getTab3Contents() {
  let div = document.createElement('div');
  div.textContent = "tab 3";
  return div;
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page1.js */ "./src/page1.js");
/* harmony import */ var _page2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page2.js */ "./src/page2.js");
/* harmony import */ var _page3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page3.js */ "./src/page3.js");




const tabContents = document.querySelector('#tab-contents');
const tabButtons = document.querySelectorAll('.button-tab');
tabButtons.forEach((button) => button.addEventListener('click', tabButtonClick));

function tabButtonClick(event) {
  while (tabContents.firstChild) {
    tabContents.removeChild(tabContents.firstChild);
  }

  const tabNumber = event.target.id.slice(-1);
  const contents = tabNumber === '1' ? (0,_page1_js__WEBPACK_IMPORTED_MODULE_0__.getTab1Contents)() :
                   tabNumber === '2' ? (0,_page2_js__WEBPACK_IMPORTED_MODULE_1__.getTab2Contents)() :
                   tabNumber === '3' ? (0,_page3_js__WEBPACK_IMPORTED_MODULE_2__.getTab3Contents)() : 
                   ''; 

  tabContents.appendChild(contents);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyQjs7Ozs7Ozs7Ozs7Ozs7O0FDTjNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTJCOzs7Ozs7O1VDTjNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ042QztBQUNBO0FBQ0E7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QywwREFBZTtBQUN0RCx1Q0FBdUMsMERBQWU7QUFDdEQsdUNBQXVDLDBEQUFlO0FBQ3REOztBQUVBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9wYWdlMS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvcGFnZTIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3BhZ2UzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRUYWIxQ29udGVudHMgPSAoKSA9PiB7XG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LnRleHRDb250ZW50ID0gXCJ0YWIgMVwiO1xuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgeyBnZXRUYWIxQ29udGVudHMgfTsiLCJmdW5jdGlvbiBnZXRUYWIyQ29udGVudHMoKSB7XG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LnRleHRDb250ZW50ID0gXCJ0YWIgMlwiO1xuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgeyBnZXRUYWIyQ29udGVudHMgfTtcbiIsImZ1bmN0aW9uIGdldFRhYjNDb250ZW50cygpIHtcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYudGV4dENvbnRlbnQgPSBcInRhYiAzXCI7XG4gIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCB7IGdldFRhYjNDb250ZW50cyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRUYWIxQ29udGVudHMgfSBmcm9tICcuL3BhZ2UxLmpzJztcbmltcG9ydCB7IGdldFRhYjJDb250ZW50cyB9IGZyb20gJy4vcGFnZTIuanMnO1xuaW1wb3J0IHsgZ2V0VGFiM0NvbnRlbnRzIH0gZnJvbSAnLi9wYWdlMy5qcyc7XG5cbmNvbnN0IHRhYkNvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYi1jb250ZW50cycpO1xuY29uc3QgdGFiQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tdGFiJyk7XG50YWJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFiQnV0dG9uQ2xpY2spKTtcblxuZnVuY3Rpb24gdGFiQnV0dG9uQ2xpY2soZXZlbnQpIHtcbiAgd2hpbGUgKHRhYkNvbnRlbnRzLmZpcnN0Q2hpbGQpIHtcbiAgICB0YWJDb250ZW50cy5yZW1vdmVDaGlsZCh0YWJDb250ZW50cy5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IHRhYk51bWJlciA9IGV2ZW50LnRhcmdldC5pZC5zbGljZSgtMSk7XG4gIGNvbnN0IGNvbnRlbnRzID0gdGFiTnVtYmVyID09PSAnMScgPyBnZXRUYWIxQ29udGVudHMoKSA6XG4gICAgICAgICAgICAgICAgICAgdGFiTnVtYmVyID09PSAnMicgPyBnZXRUYWIyQ29udGVudHMoKSA6XG4gICAgICAgICAgICAgICAgICAgdGFiTnVtYmVyID09PSAnMycgPyBnZXRUYWIzQ29udGVudHMoKSA6IFxuICAgICAgICAgICAgICAgICAgICcnOyBcblxuICB0YWJDb250ZW50cy5hcHBlbmRDaGlsZChjb250ZW50cyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9