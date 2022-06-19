/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/calculator.ts":
/*!******************************!*\
  !*** ./src/ts/calculator.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var calculator_1 = __webpack_require__(/*! ./calculator */ "./src/ts/calculator.ts");
console.log('Hello World');
var btn = document.getElementById('button-ok');
if (btn) {
    btn.addEventListener('click', function (ev) {
        var inp = document.getElementById('input-name');
        var name = inp.value;
        var span = document.getElementById('span-name');
        span.innerText = name;
    });
}
var btn2 = document.getElementById('button-equals');
if (btn2) {
    btn2.addEventListener('click', function (ev) {
        var a = document.getElementById('a');
        var b = document.getElementById('b');
        var span = document.getElementById('span-result');
        var aValue = a.valueAsNumber;
        var bValue = b.valueAsNumber;
        var calc = new calculator_1.Calculator();
        var res = calc.add(aValue, bValue);
        span.innerText = res.toString();
    });
}

})();

/******/ })()
;
//# sourceMappingURL=main-bundle.js.map