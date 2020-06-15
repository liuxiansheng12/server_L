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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"html, body {\\r\\n    background: #abcdef;\\r\\n}\\r\\n\\r\\n* {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n}\\r\\n\\r\\n#app {\\r\\n    width: 600px;\\r\\n    margin: 0 auto;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n\\r\\n.btn {\\r\\n    position: absolute;\\r\\n    left: 30px;\\r\\n    top: 50px;\\r\\n    padding: 12px 30px;\\r\\n    background: #000;\\r\\n    cursor: pointer;\\r\\n    color: #fff;\\r\\n    border-radius: 15px;\\r\\n}\\r\\n\\r\\n \\r\\n.dao {\\r\\n    position: absolute;\\r\\n    left: 50%;\\r\\n    top: 8px;\\r\\n    width: 860px;\\r\\n    height: 30px;\\r\\n\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n\\r\\n    margin-left: -430px;\\r\\n}\\r\\n\\r\\n\\r\\n.dao .tishi {\\r\\n    color: #fff;\\r\\n    font-size: 18px;\\r\\n    font-weight: 700;\\r\\n    margin-right: 8px;\\r\\n}\\r\\n\\r\\n.dao .jishi {\\r\\n    width: 800px;\\r\\n    height: 16px;\\r\\n    border: 2px solid;\\r\\n    border-radius: 8px;\\r\\n}\\r\\n\\r\\n\\r\\n.dao .jishi .time{\\r\\n    width: 800px;\\r\\n    height: 16px;\\r\\n    background: #f0f;\\r\\n    border-radius: 8px;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/chong_pai.js":
/*!**************************!*\
  !*** ./src/chong_pai.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ti_shi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ti_shi.js */ \"./src/ti_shi.js\");\n\r\n\r\n\r\nlet arrData = null;\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (a);\r\n\r\n\r\nfunction a(arr) {\r\n    arrData = arr;\r\n\r\n    // 重新排列二维数组\r\n    chong_pai();\r\n\r\n    // 判断重排完的数组是否存在可以消除的\r\n    const xiao = _ti_shi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a(arrData);\r\n    if( xiao ) {\r\n        // 重新渲染\r\n        b();\r\n        return xiao;\r\n    }\r\n\r\n    return a(arrData);\r\n}\r\n\r\n\r\nfunction b() {\r\n    for(let y = 0; y < arrData.length; y ++) {\r\n        for(let x = 0; x < arrData[y].length; x ++) {\r\n            if(arrData[y][x].biao) {\r\n                arrData[y][x].wei_zhi(x, y);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction chong_pai() {\r\n    let index = 0;\r\n    const arr = [];\r\n\r\n    for(let y = 0; y < arrData.length; y ++) {\r\n        for(let x = 0; x < arrData[y].length; x ++) {\r\n            if(arrData[y][x].biao) {\r\n                arr.push( arrData[y][x] );\r\n            }\r\n        }\r\n    }\r\n\r\n    arr.sort( () => {\r\n        return Math.random() - 0.5;\r\n    } )\r\n\r\n    for(let y = 0; y < arrData.length; y ++) {\r\n        for(let x = 0; x < arrData[y].length; x ++) {\r\n            if(arrData[y][x].biao) {\r\n                arrData[y][x] = arr[index];\r\n                // 更新对应的位置信息，之前的位置进行了重排，不能用了\r\n                arrData[y][x].geng(x, y);\r\n                index ++;\r\n            }\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/chong_pai.js?");

/***/ }),

/***/ "./src/createDom.js":
/*!**************************!*\
  !*** ./src/createDom.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createDom; });\n/* harmony import */ var _domClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domClass.js */ \"./src/domClass.js\");\n/* harmony import */ var _gong_jv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gong_jv.js */ \"./src/gong_jv.js\");\n\r\n\r\n\r\n\r\nlet random = null;\r\n\r\n\r\n// 创建dom数组\r\nfunction createDom() {\r\n    // 初始化数据\r\n    random = null;\r\n\r\n    const arr = new Array(_gong_jv_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].yG);\r\n    arr.fill(1);\r\n    arr.forEach( (e, i) => {\r\n        arr[i] = new Array(_gong_jv_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].xG)\r\n    } )\r\n\r\n    for(let y = 0; y < arr.length; y ++) {\r\n        for(let x = 0; x < arr[y].length; x ++) {\r\n            if( _gong_jv_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].si(x, y) ) {\r\n                arr[y][x] = new _domClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](null);\r\n            }else {\r\n                if( x % 2 === 1) {\r\n                    random = parseInt(Math.random() * 30) + 1;\r\n                }\r\n                arr[y][x] = new _domClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](random);\r\n            }\r\n        }\r\n    }\r\n    return arr;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/createDom.js?");

/***/ }),

/***/ "./src/dao_ji_shi.js":
/*!***************************!*\
  !*** ./src/dao_ji_shi.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jie_shu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jie_shu.js */ \"./src/jie_shu.js\");\n/* harmony import */ var _nan_du_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nan_du.js */ \"./src/nan_du.js\");\n\r\n\r\n\r\n\r\nlet zhong_shi_jian = 600;\r\nlet time = 600;\r\nlet jia = 5;\r\nlet terval = null;\r\n\r\nconst jishi = document.querySelector(\".time\");\r\nconst dao = document.querySelector(\".jishi\");\r\nconst width = 800;\r\ndao.style.width = width + \"px\";\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    qidong(arr) {\r\n        // 根据难易程度设置数据\r\n        chengdu();\r\n\r\n        terval = setInterval( () => {\r\n            time --;\r\n            // 设置计时器的条\r\n            shezhi(time);\r\n            // 查看游戏是否结束\r\n            if(time === 0) jie(arr);\r\n        }, 1000)\r\n    },\r\n    jiashi() {\r\n        time += jia;\r\n        if(time > zhong_shi_jian) time = zhong_shi_jian;\r\n    },\r\n    guanbi() {\r\n        clearInterval(terval);\r\n    }\r\n});\r\n\r\n\r\n\r\nfunction shezhi(time) {\r\n    jishi.style.width = width / zhong_shi_jian * time + \"px\";\r\n}\r\n\r\n\r\n// 判断游戏是否结束\r\nfunction jie(arr) {\r\n    if( !_jie_shu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].panduan(arr) ) {\r\n        _jie_shu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].shibai();\r\n    }\r\n}\r\n\r\n\r\n\r\n// 根据难易程度设置数据\r\nfunction chengdu() {\r\n    // 获取难易程度\r\n    const nan_yi = _nan_du_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get();\r\n    if(nan_yi === 1) {\r\n        zhong_shi_jian = 600;\r\n        time = zhong_shi_jian;\r\n        jia = 5;\r\n        terval = null;\r\n    }else if(nan_yi === 2) {\r\n        zhong_shi_jian = 300;\r\n        time = 300;\r\n        jia = 5;\r\n        terval = null;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/dao_ji_shi.js?");

/***/ }),

/***/ "./src/domClass.js":
/*!*************************!*\
  !*** ./src/domClass.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gong_jv.js */ \"./src/gong_jv.js\");\nconst app = document.getElementById(\"app\");\r\n\r\napp.style.width = _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].xG * _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width + \"px\";\r\n\r\nclass CreateDom {\r\n    constructor(biao) {\r\n        this.width = _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width;\r\n        this.height = _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].height;\r\n        this.dom = document.createElement(\"div\");\r\n        this.biao = biao;\r\n    }\r\n\r\n    // 渲染\r\n    xuan(x, y) {\r\n        this.dom.style.width = this.width + \"px\";\r\n        this.dom.style.height = this.height + \"px\";\r\n        this.dom.style.background = `url(./img/${ this.biao - 1 }.png) no-repeat`;\r\n        this.dom.style.backgroundSize = `100% 100%`;\r\n        this.dom.style.textAlign = \"center\";\r\n        this.dom.style.position = \"absolute\";\r\n        app.appendChild(this.dom);\r\n        // this.dom.innerHTML = `${x}-${y}` + \"</br>\" + this.biao;\r\n\r\n        this.wei_zhi(x, y);\r\n        this.geng(x, y);\r\n    }\r\n\r\n    // 位置\r\n    wei_zhi(x, y) {\r\n        this.dom.style.top = y * this.height + \"px\";\r\n        this.dom.style.left = x * this.width + \"px\";\r\n    }\r\n\r\n    // 更新属性\r\n    geng(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n\r\n        this.dom.x = x;\r\n        this.dom.y = y;\r\n        this.dom.biao = this.biao;\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateDom);\n\n//# sourceURL=webpack:///./src/domClass.js?");

/***/ }),

/***/ "./src/gong_jv.js":
/*!************************!*\
  !*** ./src/gong_jv.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst xG = 18;\r\nconst yG = 14;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    // 判断是不是四周\r\n    si(x, y) {\r\n        if(x === 0 || y === 0 || x === xG - 1 || y === yG - 1) {\r\n            return true;    \r\n        }\r\n        return false;\r\n    },\r\n    xG,\r\n    yG,\r\n    width: 45,\r\n    height: 45\r\n});\n\n//# sourceURL=webpack:///./src/gong_jv.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nan_du_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nan_du.js */ \"./src/nan_du.js\");\n/* harmony import */ var _qidong_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qidong.js */ \"./src/qidong.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction main() {\r\n    // 设置初始难度为1\r\n    _nan_du_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(1);\r\n    Object(_qidong_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n}\r\n\r\nmain();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/jie_shu.js":
/*!************************!*\
  !*** ./src/jie_shu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dao_ji_shi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dao_ji_shi.js */ \"./src/dao_ji_shi.js\");\n/* harmony import */ var _qidong_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qidong.js */ \"./src/qidong.js\");\n/* harmony import */ var _nan_du_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nan_du.js */ \"./src/nan_du.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    panduan,\r\n    shengli,\r\n    shibai\r\n});\r\n\r\nfunction panduan(arr) {\r\n    for(let i = 0; i < arr.length; i ++) { \r\n        for(let j = 0; j < arr[i].length; j ++) {\r\n            if(arr[i][j].biao) return false;\r\n        }\r\n    }\r\n    return true;\r\n}\r\n\r\n\r\nfunction shengli() {\r\n    _dao_ji_shi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].guanbi();\r\n    alert(\"游戏胜利\");\r\n    // 获取之前的难度，在此基础上加1\r\n    _nan_du_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set( _nan_du_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get() + 1);\r\n    \r\n    Object(_qidong_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}\r\n\r\n\r\nfunction shibai() {\r\n    _dao_ji_shi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].guanbi();\r\n    alert(\"游戏失败\");\r\n    // 难度恢复初始值\r\n    _nan_du_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(1);\r\n    Object(_qidong_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n}\n\n//# sourceURL=webpack:///./src/jie_shu.js?");

/***/ }),

/***/ "./src/luan_xun.js":
/*!*************************!*\
  !*** ./src/luan_xun.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return luan_sort; });\n/* harmony import */ var _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gong_jv.js */ \"./src/gong_jv.js\");\n\r\n\r\n// 进行乱序\r\nfunction luan_sort(arr) {\r\n    const _arr = [];\r\n    let index = 0;\r\n    // 把二维变成一维\r\n    for(let y = 0; y < arr.length; y ++) {\r\n        for(let x = 0; x < arr[y].length; x ++) {\r\n            if( !_gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].si(x, y) ){\r\n                _arr.push(arr[y][x]);\r\n            }\r\n        }\r\n    }\r\n    // 进行乱序\r\n    _arr.sort( () => {\r\n        return Math.random() - 0.5;\r\n    } )\r\n    \r\n    // 把乱序后的一维变成二维\r\n    for(let y = 0; y < arr.length; y ++) {\r\n        for(let x = 0; x < arr[y].length; x ++) {\r\n            if( !_gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].si(x, y) ){\r\n                arr[y][x] = _arr[index]\r\n                index ++;\r\n            }\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/luan_xun.js?");

/***/ }),

/***/ "./src/meng_ceng.js":
/*!**************************!*\
  !*** ./src/meng_ceng.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gong_jv.js */ \"./src/gong_jv.js\");\n\r\n\r\n// const app = document.querySelector(\"#app\");\r\n\r\n\r\n\r\n// 创建蒙层标签\r\nfunction createElement(dom) {\r\n    const div = document.createElement(\"div\");\r\n    const x = dom.x;\r\n    const y = dom.y;\r\n    const width = _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width;\r\n    const height = _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].height;\r\n    \r\n    div.style.position = \"absolute\";\r\n    div.style.left = \"0px\";\r\n    div.style.top = \"0px\";\r\n    div.style.width = width + \"px\";\r\n    div.style.height = height + \"px\";\r\n    div.style.background = \"#000\";\r\n    div.style.opacity = \"0.5\";\r\n    div.style.display = \"none\";\r\n    return div;\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    add_meng(dom) {\r\n        if(!dom.meng) {\r\n            // 创建蒙层标签\r\n            const div = createElement(dom);\r\n            dom.appendChild(div);\r\n            dom.meng = div;\r\n        }\r\n        dom.meng.style.display = \"block\";\r\n    },\r\n    clear_meng(dom) {\r\n        dom.meng.style.display = \"none\";\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/meng_ceng.js?");

/***/ }),

/***/ "./src/nan_du.js":
/*!***********************!*\
  !*** ./src/nan_du.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nlet nan_du = 0;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    get() {\r\n        return nan_du;\r\n    },\r\n    set(i) {\r\n        nan_du = i;\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/nan_du.js?");

/***/ }),

/***/ "./src/onClick.js":
/*!************************!*\
  !*** ./src/onClick.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return onClick; });\n/* harmony import */ var _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gong_jv.js */ \"./src/gong_jv.js\");\n/* harmony import */ var _xian_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xian.js */ \"./src/xian.js\");\n/* harmony import */ var _meng_ceng_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meng_ceng.js */ \"./src/meng_ceng.js\");\n/* harmony import */ var _ti_shi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ti_shi.js */ \"./src/ti_shi.js\");\n/* harmony import */ var _dao_ji_shi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dao_ji_shi.js */ \"./src/dao_ji_shi.js\");\n/* harmony import */ var _jie_shu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jie_shu.js */ \"./src/jie_shu.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet dang = null;\r\nlet qian = null;\r\nlet data = null;\r\nlet biao = true;\r\n\r\nconst audio = new Audio();\r\naudio.src = \"http://downsc.chinaz.net/Files/DownLoad/sound1/201301/2555.mp3\";\r\n\r\nfunction onClick(arr) {\r\n    // 初始化数据\r\n    dang = null;\r\n    qian = null;\r\n    data = null;\r\n    biao = true;\r\n\r\n    data = arr;\r\n    arr.forEach( (e, y) => {\r\n        e.forEach( (k, x) => {\r\n            if( !_gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].si(x, y) ) {\r\n                k.dom.onclick = click;\r\n            }\r\n        } ) \r\n    } )\r\n}\r\n\r\n\r\n\r\n\r\n// 事件处理函数\r\nfunction click(e) {\r\n    // 判断是第一次点击还是第二次点击\r\n    if( qian && biao ) {\r\n        dang = this;\r\n        // 加透明度\r\n        jia_tou(dang);\r\n        keyi();\r\n    }else if(biao) {\r\n        qian = this;\r\n        // 加透明度\r\n        jia_tou(qian);\r\n    }\r\n}\r\n\r\n\r\n// 消除\r\nfunction xiaoPan() {\r\n\r\n    function _(x, y, fang, wan, lujing) {\r\n        if(x < 0 || y < 0 || x >= _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].xG || y >= _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].yG) {\r\n            return false;\r\n        }\r\n        const arr = [...lujing];\r\n        const dom = data[y][x].dom;\r\n        \r\n        if(dom === dang && wan <= 2) {\r\n            arr.push(`${x}-${y}`);\r\n            // 画消除的线\r\n            _xian_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hua_xian(arr, data);\r\n            return true;\r\n        }\r\n\r\n        if(dom !== qian && data[y][x].biao || wan > 2) {\r\n            return false;\r\n        }\r\n\r\n        if( arr.indexOf(`${x}-${y}`) !== -1) {\r\n            return false;\r\n        }\r\n\r\n        if(dom === qian || !data[y][x].biao) {\r\n            arr.push(`${x}-${y}`);\r\n            return _( x + 1, y, \"RIGHT\", fang === \"RIGHT\" ? wan : wan + 1, arr)\r\n            || _( x, y - 1, \"TOP\", fang === \"TOP\" ? wan : wan + 1, arr)\r\n            || _( x - 1, y, \"LEFT\", fang === \"LEFT\" ? wan : wan + 1, arr)\r\n            || _( x, y + 1, \"BOTTOM\", fang === \"BOTTOM\" ? wan : wan + 1, arr)\r\n        }\r\n    }\r\n\r\n    if(qian.biao === dang.biao && qian !== dang) {\r\n        const x = qian.x;\r\n        const y = qian.y;\r\n        return _(x, y, \"\", -1, [])\r\n    }\r\n    return false;\r\n}\r\n\r\n// 加透明度\r\nfunction jia_tou(dom) {\r\n    // 添加蒙层，存在冒泡(消除提示的蒙层)，在冒泡消除完样式后，在添加样式\r\n    setTimeout( () => {\r\n        _meng_ceng_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].add_meng(dom);\r\n    }, 10)\r\n}\r\n// 清除透明度\r\nfunction xiao_tou(dom) {\r\n    // dom.style.opacity = 1;\r\n    // 消除蒙层\r\n    _meng_ceng_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clear_meng(dom);\r\n}\r\n\r\n// 消除并清除数据\r\nfunction xiao_remove(dom) {\r\n    const x = dom.x;\r\n    const y = dom.y;\r\n    dom.remove();\r\n    data[y][x].biao = null;\r\n    data[y][x].dom.biao = null;\r\n    xiao_tou(dom);\r\n}\r\n\r\n// 查看是否可以进行消除\r\nfunction keyi() {\r\n    // 判断是否可以消除\r\n    if( xiaoPan() ) {\r\n            \r\n        // 进行消除\r\n        xiao_chu();\r\n\r\n    }else {\r\n        if(qian === dang) {\r\n            return;\r\n        }\r\n        xiao_tou(qian);\r\n        qian = dang;\r\n    }\r\n}\r\n\r\n// 可以消除的消除操作\r\nfunction xiao_chu() {\r\n    biao = false;\r\n    audio.play();\r\n    setTimeout(() => {\r\n        xiao_remove(qian);\r\n        xiao_remove(dang);\r\n        // 消除线\r\n        _xian_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].xiao_chu_xian();\r\n        qian = null;\r\n        dang = null;\r\n        biao = true;\r\n\r\n        // 倒计时的时间增加\r\n        _dao_ji_shi_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].jiashi();\r\n\r\n        // 判断是否全部消除完成\r\n        if( _jie_shu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].panduan(data) ) {\r\n            _jie_shu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].shengli();\r\n        }\r\n        else _ti_shi_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fun();\r\n        \r\n    }, 300);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/onClick.js?");

/***/ }),

/***/ "./src/qidong.js":
/*!***********************!*\
  !*** ./src/qidong.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDom.js */ \"./src/createDom.js\");\n/* harmony import */ var _luan_xun_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./luan_xun.js */ \"./src/luan_xun.js\");\n/* harmony import */ var _xuan_ran_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xuan_ran.js */ \"./src/xuan_ran.js\");\n/* harmony import */ var _onClick_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onClick.js */ \"./src/onClick.js\");\n/* harmony import */ var _ti_shi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ti_shi.js */ \"./src/ti_shi.js\");\n/* harmony import */ var _dao_ji_shi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dao_ji_shi.js */ \"./src/dao_ji_shi.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n    // 创建数据\r\n    let arr = Object(_createDom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    // 进行乱序\r\n    Object(_luan_xun_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr);\r\n    // 渲染\r\n    Object(_xuan_ran_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr);\r\n    // 绑定事件\r\n    Object(_onClick_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(arr);\r\n    // 绑定提示事件\r\n    _ti_shi_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].init(arr);\r\n    // 查看是否还有可以消除的图片\r\n    _ti_shi_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fun();\r\n    // 启动时间定时器\r\n    _dao_ji_shi_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].qidong(arr);\r\n});\n\n//# sourceURL=webpack:///./src/qidong.js?");

/***/ }),

/***/ "./src/ti_shi.js":
/*!***********************!*\
  !*** ./src/ti_shi.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gong_jv.js */ \"./src/gong_jv.js\");\n/* harmony import */ var _meng_ceng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meng_ceng.js */ \"./src/meng_ceng.js\");\n/* harmony import */ var _chong_pai_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chong_pai.js */ \"./src/chong_pai.js\");\n\r\n\r\n\r\n\r\n\r\nlet arrData = null;\r\nlet ti_shi_data = null;\r\nlet boo = false;\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    init: function (arr) {\r\n        // 初始化数据\r\n        arrData = null;\r\n        ti_shi_data = null;\r\n        boo = false\r\n\r\n        arrData = arr;\r\n        const dom = document.querySelector(\".btn\");\r\n\r\n        dom.onclick = function (e) {\r\n            // 把可以消除的显示出来\r\n            if(ti_shi_data && ti_shi_data.length === 2) {\r\n                _meng_ceng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].add_meng(ti_shi_data[0]);\r\n                _meng_ceng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].add_meng(ti_shi_data[1]);\r\n                boo = true;\r\n            }\r\n            e.stopPropagation()\r\n        };\r\n    \r\n        document.onclick = function () {\r\n            if(ti_shi_data && ti_shi_data.length === 2 && boo) {\r\n                _meng_ceng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clear_meng(ti_shi_data[0]);\r\n                _meng_ceng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clear_meng(ti_shi_data[1]);\r\n                ti_shi_data = null;\r\n                boo = false;\r\n            }\r\n        }\r\n    },\r\n    fun,\r\n    a\r\n});\r\n\r\n\r\n// 判断是否还有可以消除的图片\r\nfunction fun(arr) {\r\n    ti_shi_data = a();\r\n    // 没有可以相连的，进行重排\r\n    if( !ti_shi_data ) {\r\n        ti_shi_data = Object(_chong_pai_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arrData);\r\n    }\r\n    console.log(ti_shi_data);\r\n}\r\n\r\n// 确定第一个图片\r\nfunction a(arr) {\r\n    if(arr) {\r\n        arrData = arr;\r\n    }\r\n\r\n    for(let y = 0; y < arrData.length; y ++) {\r\n        for(let x = 0; x < arrData[y].length; x ++) {\r\n            const a = ti_shi(arrData[y][x].dom);\r\n            if(a) {\r\n                return [arrData[y][x].dom, a];\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\n// 得到符合的第二个图片\r\nfunction ti_shi(qian) {\r\n    for(let y = 0; y < arrData.length; y ++) {\r\n        for(let x = 0; x < arrData[y].length; x ++) {\r\n            if( xiang(qian, arrData[y][x].dom) ) {\r\n                return arrData[y][x].dom\r\n            }\r\n        }\r\n    }\r\n    return false;\r\n}\r\n\r\n// 判断两个标签是否可以相连\r\nfunction xiang(qian, dang) {\r\n    if(!qian.biao || !dang.biao || qian.biao !== dang.biao || qian === dang) {\r\n        return false;\r\n    }\r\n    \r\n    return _(qian.x, qian.y, \"\", -1, []);\r\n\r\n\r\n    function _(x, y, fang, guai, arr) {\r\n        // 当前位置超出边界，查询不通过\r\n        if(x < 0 || y < 0 || x >= _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].xG || y >= _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].yG) {\r\n            return false;\r\n        }\r\n        // 当前位置已经在路线中，防止回头查询\r\n        if( arr.indexOf(`${x}-${y}`) !== -1) {\r\n            return false;\r\n        }\r\n        const dom = arrData[y][x].dom;\r\n\r\n        // 查询成功\r\n        if(guai <= 2 && dom === dang) {\r\n            return true;\r\n        }\r\n\r\n        // 拐的弯数打印2，也失败\r\n        if(guai > 2) {\r\n            return false;\r\n        }\r\n\r\n        // 当前的是一个空，可以继续遍历\r\n        if( dom === qian || !dom.biao ) {\r\n            // 把当前的路径，存放到路径数组中\r\n            arr.push(`${x}-${y}`);\r\n            return _(x + 1, y, \"RIGHT\", fang === \"RIGHT\" ? guai : guai + 1, [...arr]) ||\r\n                _(x, y - 1, \"TOP\", fang === \"TOP\" ? guai : guai + 1, [...arr]) ||\r\n                _(x - 1, y, \"LEFT\", fang === \"LEFT\" ? guai : guai + 1, [...arr]) ||\r\n                _(x, y + 1, \"BOTTOM\", fang === \"BOTTOM\" ? guai : guai + 1, [...arr])\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/ti_shi.js?");

/***/ }),

/***/ "./src/xian.js":
/*!*********************!*\
  !*** ./src/xian.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gong_jv.js */ \"./src/gong_jv.js\");\n\r\nlet xianDom = [];\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    hua_xian (arr, data) {\r\n        xian_wei_zhi(arr);\r\n    },\r\n    xiao_chu_xian() {\r\n        xianDom.forEach( (e) => {\r\n            e.remove();\r\n        } )\r\n        xianDom = [];\r\n    }\r\n});\r\n\r\nconst app = document.querySelector(\"#app\");\r\nfunction xian_wei_zhi(arr) {\r\n    // 把字符串位置转换为数组位置，便于处理\r\n    const data = fen_wei(arr);\r\n    // 分析路径，创建路径方向与拐点\r\n    const {guai, fang} = fang_guai(data);\r\n    // 根据拐点和方向，创建每一条线的长度\r\n    const chang = xian_chang(guai, fang);\r\n    // 根据拐点和方向，创建每一个条线的坐标，以及宽高\r\n    const zuo_biao = zuo(guai, fang, chang );\r\n    // 创建线dom\r\n    addXian(zuo_biao);\r\n\r\n    console.log(guai, fang, chang);\r\n}\r\n\r\n\r\n// 分析位置\r\nfunction fen_wei(arr) {\r\n    const data = [];\r\n    // 把路径字符串变成数组格式\r\n    for(let i = 0; i < arr.length; i ++) {\r\n        // 把字符串转换成数组\r\n        const a = arr[i].split(\"-\");\r\n        a[0] = +a[0];\r\n        a[1] = +a[1];\r\n        data.push(a);\r\n    }\r\n    return data;\r\n}\r\n\r\n\r\n// 创建拐点与方向路径\r\nfunction fang_guai(data) {\r\n    const fan = [];\r\n    let fang = \"\";\r\n    const guai = [];\r\n\r\n    // 把路径字符串变成数组格式\r\n    for(let i = 0; i < data.length; i ++) {\r\n        if(i === 1) {\r\n            // 确定初始方向\r\n            fang = chu_shi(data[i], data[0]);\r\n            fan.push(fang);\r\n        }\r\n        if(i > 1) {\r\n            // 根据当前的方向判断方向是否发生了变化\r\n            const xin_fang = pan(fang, data[i], data[i - 1]);\r\n            if( xin_fang ) {\r\n                fang = xin_fang;\r\n                fan.push(fang);\r\n                // 此时已经发生了变化，拐点在前面一个，要想找到拐点，需要向前查询一个\r\n                guai.push( data[i - 1] );\r\n            }\r\n        }\r\n    }\r\n\r\n    // 添加起点和终点\r\n    guai.unshift(data[0]);\r\n    guai.push( data[ data.length - 1 ] );\r\n\r\n    return {\r\n        fang: fan,\r\n        guai\r\n    }\r\n}\r\n\r\n// 判断方向是否发生了变化，如果变化，返回新的方向\r\nfunction pan(fang, a, data) {\r\n    if( (fang === \"x\" || fang === \"-x\") ) {\r\n        if(a[1] > data[1]) {\r\n            return \"y\"\r\n        }else if(a[1] < data[1]) {\r\n            return \"-y\";\r\n        }\r\n    }else if( (fang === \"y\" || fang === \"-y\") ) {\r\n        if(a[0] > data[0]) {\r\n            return \"x\";\r\n        }else if( a[0] < data[0] ) {\r\n            return \"-x\";\r\n        }\r\n    }\r\n    return false;\r\n}\r\n\r\n\r\n// 确定初始方向\r\nfunction chu_shi(a, arr) {\r\n    let fang = \"\";\r\n    if( a[0] > arr[0] ) {\r\n        fang = \"x\";\r\n    }else if(a[1] > arr[1]) {\r\n        fang = \"y\";\r\n    }else if( a[0] < arr[0] ) {\r\n        fang = \"-x\";\r\n    }else if(a[1] < arr[1]) {\r\n        fang = \"-y\";\r\n    }\r\n    return fang;\r\n}\r\n\r\n\r\n\r\n// 根据拐点和方向创建线长数组\r\nfunction xian_chang (guai, fan) {\r\n    const chang = [];\r\n\r\n    for(let i = 1; i < guai.length; i ++) {\r\n        if(fan[i - 1] === \"x\") {\r\n            chang.push(guai[i][0] - guai[i - 1][0]);\r\n        }else if(fan[i - 1] === \"-x\") {\r\n            chang.push(guai[i - 1][0] - guai[i][0]);\r\n        }else if(fan[i - 1] === \"y\") {\r\n            chang.push(guai[i][1] - guai[i - 1][1]);\r\n        }else if(fan[i - 1] === \"-y\") {\r\n            chang.push(guai[i - 1][1] - guai[i][1]);\r\n        }\r\n    }\r\n\r\n    return chang;\r\n}\r\n\r\n// 创建每一条线的坐标，以及宽高\r\nfunction zuo(guai, fang, chang) {\r\n    const arr = [];\r\n    for(let i = 0; i < chang.length; i ++) {\r\n        // 创建基本信息\r\n        const obj = {\r\n            width: 4,\r\n            height: 4,\r\n            left: 0,\r\n            top: 0\r\n        }\r\n        if(fang[i] === \"-y\" || fang[i] == \"y\") {\r\n            obj.height = chang[i] * _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].height;\r\n            obj.left = guai[i][0] * _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width + _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width / 2;\r\n            const height = guai[i][1] * _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].height + _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].height / 2;\r\n            if(fang[i] === \"-y\") {\r\n                obj.top = height - obj.height + 4;\r\n            }else {\r\n                obj.top = height;\r\n            }\r\n        }else if(fang[i] === \"-x\" || fang[i] == \"x\") {\r\n            obj.width = chang[i] * _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width;\r\n            const left = guai[i][0] * _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width + _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width / 2;\r\n            obj.top = guai[i][1] * _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].height + _gong_jv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].height / 2;\r\n            if(fang[i] === \"-x\") {\r\n                obj.left = left - obj.width + 4;\r\n            }else {\r\n                obj.left = left;\r\n            }\r\n        }\r\n        // 进行居中\r\n        obj.top -= 2;\r\n        obj.left -= 2;\r\n        arr.push(obj);\r\n    }\r\n    return arr;\r\n}\r\n\r\n// 根据线的信息创建线\r\nfunction addXian(xian) {\r\n    for(let i = 0; i < xian.length; i ++) {\r\n        const dom = document.createElement(\"div\");\r\n        dom.style.width = xian[i].width + \"px\"; \r\n        dom.style.height = xian[i].height + \"px\"; \r\n        dom.style.top = xian[i].top + \"px\"; \r\n        dom.style.left = xian[i].left + \"px\"; \r\n        dom.style.position = \"absolute\"; \r\n        dom.style.background = \"#000\"; \r\n        dom.style.zIndex = \"999\"; \r\n        app.appendChild(dom);\r\n        xianDom.push(dom);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/xian.js?");

/***/ }),

/***/ "./src/xuan_ran.js":
/*!*************************!*\
  !*** ./src/xuan_ran.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return xuans; });\n// 渲染\r\nfunction xuans(arr) {\r\n    for(let y = 1; y < arr.length - 1; y ++) {\r\n        for(let x = 1; x < arr[y].length - 1; x ++)  {\r\n            arr[y][x].xuan(x, y);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/xuan_ran.js?");

/***/ })

/******/ });