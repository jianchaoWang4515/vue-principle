/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/Observer.js */ \"./lib/Observer.js\");\n/* harmony import */ var _lib_watcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/watcher.js */ \"./lib/watcher.js\");\n\n\n\nlet data = {\n\tname: 'cjg',\n\tobj: {\n\t\tname: 'zht'\n\t}\n};\nnew _lib_Observer_js__WEBPACK_IMPORTED_MODULE_0__[\"OBSERVER\"](data);\n// 监听data对象的name属性，当data.name发现变化的时候，触发cb函数\nnew _lib_watcher_js__WEBPACK_IMPORTED_MODULE_1__[\"WATCHER\"](data, 'name', (oldValue, newValue) => {\n\tconsole.log(oldValue + '---' + newValue);\n});\ndata.name = 'zht';\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./lib/Observer.js":
/*!*************************!*\
  !*** ./lib/Observer.js ***!
  \*************************/
/*! exports provided: OBSERVER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OBSERVER\", function() { return OBSERVER; });\n/* harmony import */ var _dep_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dep.js */ \"./lib/dep.js\");\n\n// Observer类主要用于给Vue的数据defineProperty增加getter/setter方法，并且在getter/setter中收集依赖或者通知更新\nconst OBSERVER = class Observer {\n\tconstructor(data) {\n\t\tif (!data || typeof data !== 'object') {\n\t\t\treturn;\n\t\t}\n\t\tthis.data = data;\n\t\tthis.walk();\n\t}\n\t// 对传入的数据进行数据劫持\n\twalk() {\n\t\tfor (let key in this.data) {\n\t\t\tthis.defineReactive(this.data, key, this.data[key]);\n\t\t}\n\t}\n\t// 创建当前属性的一个发布实例，使用Object.defineProperty来对当前属性进行数据劫持\n\tdefineReactive(obj, key, val) {\n\t\tconst dep = new _dep_js__WEBPACK_IMPORTED_MODULE_0__[\"DEP\"]();\n\t\t// 递归对子属性的值进行数据劫持，比如说对以下数据\n\t\tnew Observer(val);\n\t\tObject.defineProperty(obj, key, {\n\t\t\tget() {\n\t\t\t\t// 若当前有对该属性的依赖项，则将其加入到发布者的订阅者队列里\n\t\t\t\tif (_dep_js__WEBPACK_IMPORTED_MODULE_0__[\"DEP\"].target) {\n\t\t\t\t\tdep.addSub(_dep_js__WEBPACK_IMPORTED_MODULE_0__[\"DEP\"].target);\n\t\t\t\t}\n\t\t\t\treturn val;\n\t\t\t},\n\t\t\tset(newVal) {\n\t\t\t\tif (val === newVal) return;\n\t\t\t\tval = newVal;\n\t\t\t\tnew Observer(newVal);\n\t\t\t\tdep.notify();\n\t\t\t}\n\t\t});\n\t}\n};\n\n//# sourceURL=webpack:///./lib/Observer.js?");

/***/ }),

/***/ "./lib/dep.js":
/*!********************!*\
  !*** ./lib/dep.js ***!
  \********************/
/*! exports provided: DEP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DEP\", function() { return DEP; });\n// Dep类就是一个可观察对象，可以有不同指令订阅它（它是多播的）\nconst DEP = class Dep {\n    constructor() {\n        this.subs = [];\n    }\n    // 增加订阅者\n    addSub(sub) {\n        if (this.subs.indexOf(sub) < 0) {\n            this.subs.push(sub);\n        }\n    }\n    // 通知订阅者\n    notify() {\n        this.subs.forEach(sub => {\n            sub.update();\n        });\n    }\n};\nDEP.target = null;\n\n//# sourceURL=webpack:///./lib/dep.js?");

/***/ }),

/***/ "./lib/watcher.js":
/*!************************!*\
  !*** ./lib/watcher.js ***!
  \************************/
/*! exports provided: WATCHER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WATCHER\", function() { return WATCHER; });\n/* harmony import */ var _dep_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dep.js */ \"./lib/dep.js\");\n\n// Watcher类来用于观察数据（或者表达式）变化然后执行回调函数（其中也有收集依赖的过程），主要用于$watch API和指令上\nconst WATCHER = class Watcher {\n    constructor(vm, keys, updateCb) {\n        this.vm = vm;\n        this.keys = keys;\n        this.updateCb = updateCb;\n        this.value = null;\n        this.get();\n    }\n    get() {\n        _dep_js__WEBPACK_IMPORTED_MODULE_0__[\"DEP\"].target = this;\n        const keys = this.keys.split('.');\n        let value = this.vm;\n        keys.forEach(_key => {\n            value = value[_key];\n        });\n        this.value = value;\n        _dep_js__WEBPACK_IMPORTED_MODULE_0__[\"DEP\"].target = null;\n        return this.value;\n    }\n\n    update() {\n        const oldValue = this.value;\n        const newValue = this.get();\n        if (oldValue !== newValue) {\n            this.updateCb(oldValue, newValue);\n        }\n    }\n};\n\n//# sourceURL=webpack:///./lib/watcher.js?");

/***/ })

/******/ });