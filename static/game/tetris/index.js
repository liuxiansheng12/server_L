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

/***/ "./src/create_ji_mu.js":
/*!*****************************!*\
  !*** ./src/create_ji_mu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fang.js */ \"./src/fang.js\");\n/* harmony import */ var _quan_jv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quan_jv.js */ \"./src/quan_jv.js\");\n/* harmony import */ var _create_ti_shi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create_ti_shi.js */ \"./src/create_ti_shi.js\");\n\r\n\r\n\r\n\r\nconst dom = document.querySelector(\".zhu_ye_mian\");\r\nconst quan_jv_data = _quan_jv_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set_quan_jv();\r\nconst quan_jv_dom = _quan_jv_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set_quan_jv_dom();\r\n\r\nlet dang = null;\r\nlet xia = null;\r\nlet dang_zhuang_tai = null;\r\nlet xia_zhuang_tai = null;\r\nlet dang_v = null;\r\nlet tervals = null;\r\n\r\n\r\n// 创建一个积木\r\nfunction create() {\r\n    if(!xia) {\r\n        // 创建积木数据数组\r\n        dang = _fang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createFang(dom);\r\n        xia = _fang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createFang(dom);\r\n        Object(_create_ti_shi_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    }\r\n    else {\r\n        dang = xia;\r\n        xia = _fang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createFang(dom);\r\n        Object(_create_ti_shi_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    }\r\n    // 取出初始积木的状态\r\n    dang_zhuang_tai = dang.data[ dang.index ];\r\n    // 初次渲染积木\r\n    _fang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createDom(dang_zhuang_tai, dang.wei_zhi, dang.dom, dang.chi_cu ) ;\r\n\r\n    // 启动移动定时器\r\n    terval();\r\n    \r\n    // 返回创建好的积木数据数组\r\n    return {\r\n        dang\r\n    }\r\n}\r\n\r\n// 判断下方是否存在积木\r\nfunction bottom() {\r\n    const d = dang.data[ dang.index ];\r\n    for(let i = 0; i < d.length; i ++) {\r\n        for(let j = 0; j < d[i].length; j ++) {\r\n            const x = dang.wei_zhi[1] + j;\r\n            const y = dang.wei_zhi[0] - i + 1;\r\n            if(d[i][j].type === 1 && x >= 0 && x <= dang.width && y >= 0 && y <= dang.height) {\r\n                if(quan_jv_data[y][x] && quan_jv_data[y][x].type === 1) {\r\n                    return false;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    if(dang.wei_zhi[0] === dang.height) {\r\n        return false;\r\n    }\r\n\r\n    return true;\r\n}\r\n\r\n// 启动积木移动定时器\r\nfunction terval() {\r\n    tervals = setInterval( () => {\r\n        if(bottom()) {\r\n            // 积木位置向下移动\r\n            dang.wei_zhi[0] ++;\r\n            // 渲染移动后的积木\r\n            _fang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createDom(dang_zhuang_tai, dang.wei_zhi, dang.dom, dang.chi_cu ) ;\r\n        }else {\r\n            clearInterval(tervals);\r\n            const data = dang.data[ dang.index ];\r\n            let index = 0;\r\n\r\n            // 把当前积木保存到全局数据的指定位置，作为全局积木的数据\r\n            data.forEach( (k, i) => {\r\n                k.forEach( (e, j) => {\r\n                    const x = dang.wei_zhi[1] + j;\r\n                    const y = dang.wei_zhi[0] - i;\r\n                    if(y < 0 || x > dang.width) {\r\n                        return\r\n                    }\r\n                    // 全局的该位置没有积木，进行替换，存在不进行替换\r\n                    if(!quan_jv_data[y][x] || quan_jv_data[y][x].type === 0) {\r\n                        quan_jv_data[y][x] = e;\r\n                        if(e.type === 1) {\r\n                            quan_jv_dom[y][x] = dang.dom[index];\r\n                            index ++;\r\n                        }\r\n                    }\r\n                } )\r\n            } )\r\n    \r\n            // 开始创建新的积木\r\n            for(let i = 0; i < quan_jv_data[ 0 ].length; i ++) {\r\n                if(quan_jv_data[ 0 ][i] && quan_jv_data[ 0 ][i].type === 1) {\r\n                    alert(\"游戏失败\");\r\n                    return ;\r\n                }\r\n            }\r\n            create();\r\n\r\n            // 消除可以消除的积木\r\n            xiao_chu();\r\n        }\r\n    }, dang.terval )\r\n}\r\n\r\n// 改变积木形态\r\nfunction gai_bian() {\r\n    // 保存之前位置\r\n    const wei_zhi = [...dang.wei_zhi];\r\n    dang_zhuang_tai = dang.xuan_zhuan();\r\n    // 处理旋转超出边界的情况，边界至少有一个位于界面内，所以要减去1\r\n    const index = chang_du() + dang.wei_zhi[1] - 1;\r\n    // 与积木重合，是完全重合，所以不需要减一\r\n    const hui_index = hui_tan();\r\n    \r\n    // 处理选中，边界有积木回弹的效果\r\n    if(hui_index > 0) {\r\n        dang.wei_zhi[1] -= hui_index;\r\n    }\r\n    // 处理正常的边界回弹\r\n    else if(index > dang.width) {\r\n        dang.wei_zhi[1] -= index - dang.width;\r\n    }\r\n    // 判断旋转完，是否有重合的积木，如果有，则恢复原样，禁止旋转\r\n    if( !pan() ) {\r\n        dang_zhuang_tai = dang.ni_xiang();\r\n        dang.wei_zhi = wei_zhi;\r\n    }\r\n    \r\n    _fang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createDom(dang_zhuang_tai, dang.wei_zhi, dang.dom, dang.chi_cu ) ;\r\n}\r\n\r\n//判断积木是否进行了重合\r\nfunction pan() {\r\n    const data = dang_zhuang_tai;\r\n    for(let i = 0; i < data.length; i ++) {\r\n        for(let j = 0; j < data[i].length; j ++) {\r\n            if(data[i][j].type === 1) {\r\n                const x = dang.wei_zhi[1] + j;\r\n                const y = dang.wei_zhi[0] - i;\r\n                if(x >= 0 && x <= dang.width && y >= 0 && y <= dang.height) {\r\n                    if(quan_jv_data[y][x] && quan_jv_data[y][x].type === 1) {\r\n                        return false;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return true;\r\n}\r\n\r\n// 得到边界有积木需要回弹的距离\r\nfunction hui_tan() {\r\n    let index = 0;\r\n    const data = dang_zhuang_tai;\r\n    const chang = chang_du();\r\n    for(let i = 0; i < data.length; i ++) {\r\n        for(let j = 0; j < data[i].length; j ++) {\r\n            if(data[i][j].type === 1) {\r\n                const x = dang.wei_zhi[1] + j;\r\n                const y = dang.wei_zhi[0] - i;\r\n                if(x >= 0 && x <= dang.width && y >= 0 && y <= dang.height) {\r\n                    if(quan_jv_data[y][x] && quan_jv_data[y][x].type === 1) {\r\n                        index = chang - j;\r\n                        return index;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return index;\r\n}\r\n\r\n// 左移\r\nfunction leftMove() {\r\n    dang.wei_zhi[1] --;\r\n    _fang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createDom(dang_zhuang_tai, dang.wei_zhi, dang.dom, dang.chi_cu ) ;\r\n}\r\n\r\n// 右移\r\nfunction rightMove() {\r\n    dang.wei_zhi[1] ++;\r\n    _fang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createDom(dang_zhuang_tai, dang.wei_zhi, dang.dom, dang.chi_cu ) ;\r\n}\r\n\r\n// 改变下降速度\r\nfunction jia_kuai(v) {\r\n    if(!dang_v) {\r\n        clearInterval(tervals);\r\n        // 保存之前的速度\r\n        dang_v = dang.terval;\r\n        dang.terval = v;\r\n        terval();\r\n    }\r\n}\r\n\r\n// 速度回复\r\nfunction v_hui_fu() {\r\n    clearInterval(tervals);\r\n    dang.terval = dang_v;\r\n    dang_v = null;\r\n    terval();\r\n}\r\n\r\n// 获取创建的积木数据\r\nfunction set_ji_mu() {\r\n    return dang;\r\n}\r\n\r\n// 算出积木的长度\r\nfunction chang_du(ji_mu) {\r\n    // 求出整个积木的长度，便于控制边界\r\n    const data = ji_mu || dang_zhuang_tai;\r\n    let chang = 0;\r\n    data.forEach( (k, kI) => {\r\n        k.forEach( (e, eI) => {\r\n            if(e.type === 1 && chang < eI) {\r\n                chang = eI;\r\n            }\r\n        } )\r\n    } )\r\n    return chang + 1;\r\n}\r\n\r\n// 积木的消除\r\nfunction xiao_chu() {\r\n    if( _quan_jv_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].xiao_chu() ) {\r\n        _quan_jv_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createDom();\r\n    }\r\n}\r\n\r\n\r\n// 得到下次将要出现的积木数据\r\nfunction set_xia() {\r\n    return {\r\n        data: xia.data[ xia.index ],\r\n        width: xia.chi_cu\r\n    }\r\n}\r\n\r\n// 获取积木的长度\r\nfunction chang(data) {\r\n    let chang = 0;\r\n    data.forEach( (k, kI) => {\r\n        k.forEach( (e) => {\r\n            if(e.type === 1 && chang < kI) {\r\n                chang = kI;\r\n            }\r\n        } )\r\n    } ) \r\n    return chang + 1;\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    create,\r\n    gai_bian,\r\n    leftMove,\r\n    rightMove,\r\n    set_ji_mu,\r\n    jia_kuai,\r\n    v_hui_fu,\r\n    chang_du,\r\n    set_xia,\r\n    chang\r\n});\n\n//# sourceURL=webpack:///./src/create_ji_mu.js?");

/***/ }),

/***/ "./src/create_ti_shi.js":
/*!******************************!*\
  !*** ./src/create_ti_shi.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_ji_mu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_ji_mu.js */ \"./src/create_ji_mu.js\");\n\r\n\r\n\r\nconst ji_mu = document.querySelector(\".ji_mu\");\r\nconst dom = create_dom();\r\n\r\n\r\n// 创建dom\r\nfunction create_dom() {\r\n    const arr = [];\r\n    for(let i = 0; i <4; i ++) {\r\n        const dom = document.createElement(\"div\");\r\n        dom.style.borderRadius = \"8px\";\r\n        dom.style.transform = \"scale(0.98)\";\r\n        dom.style.position = \"absolute\";\r\n        dom.style.width = \"30px\";\r\n        dom.style.height = \"30px\";\r\n        arr.push(dom);\r\n\r\n        ji_mu.appendChild(dom);\r\n    }\r\n    return arr;\r\n}\r\n\r\n// 设置dom的样式\r\nfunction style(dom, data) {\r\n    dom.style.background = data.color;\r\n    dom.style.left = data.x + \"px\";\r\n    dom.style.top = data.y + \"px\";\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n    let index = 0;\r\n\r\n    const {data, width} = _create_ji_mu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set_xia();\r\n    const kuan = _create_ji_mu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].chang_du(data);\r\n    const chang = _create_ji_mu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].chang(data);\r\n    ji_mu.style.width = kuan * width + \"px\";\r\n    \r\n    data.forEach( (k, kI) => {\r\n        k.forEach( (e, eI) => {\r\n            if(e.type === 1) {\r\n                style(dom[index], {\r\n                    x: width * eI,\r\n                    y: -kI * width + (chang - 1) * width,\r\n                    color: e.color\r\n                });\r\n                index ++;\r\n            }\r\n        } ) \r\n    } )\r\n});\n\n//# sourceURL=webpack:///./src/create_ti_shi.js?");

/***/ }),

/***/ "./src/fang.js":
/*!*********************!*\
  !*** ./src/fang.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ji_mu_data_chang_tiao_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ji_mu_data/chang_tiao.js */ \"./src/ji_mu_data/chang_tiao.js\");\n/* harmony import */ var _ji_mu_data_fang_kuai_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ji_mu_data/fang_kuai.js */ \"./src/ji_mu_data/fang_kuai.js\");\n/* harmony import */ var _ji_mu_data_L_xing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ji_mu_data/L_xing.js */ \"./src/ji_mu_data/L_xing.js\");\n/* harmony import */ var _ji_mu_data_fan_L_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ji_mu_data/fan_L.js */ \"./src/ji_mu_data/fan_L.js\");\n/* harmony import */ var _ji_mu_data_guai_xing_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ji_mu_data/guai_xing.js */ \"./src/ji_mu_data/guai_xing.js\");\n/* harmony import */ var _ji_mu_data_fan_guai_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ji_mu_data/fan_guai.js */ \"./src/ji_mu_data/fan_guai.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst ji_mu = [_ji_mu_data_chang_tiao_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ji_mu_data_fang_kuai_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _ji_mu_data_L_xing_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _ji_mu_data_fan_L_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _ji_mu_data_guai_xing_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _ji_mu_data_fan_guai_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\r\n\r\n\r\nfunction CreateFang() {\r\n    this.data = ji_mu[ parseInt(Math.random() * 6) ]();\r\n    this.index = 0;\r\n    this.wei_zhi = [0, 5];\r\n    this.chi_cu = 30;\r\n    this.height = 19;\r\n    this.width = 11;\r\n    this.terval = 1000;\r\n    this.dom = create_dom();\r\n}\r\nCreateFang.prototype.xuan_zhuan = function () {\r\n    this.index ++;\r\n    if(this.index >= this.data.length) {\r\n        this.index = 0;\r\n    }\r\n    const data = this.data[this.index];\r\n    return data;\r\n}\r\nCreateFang.prototype.ni_xiang = function () {\r\n    this.index --;\r\n    if(this.index < 0) {\r\n        this.index = this.data.length - 1;\r\n    }\r\n    const data = this.data[this.index];\r\n    return data;\r\n}\r\n\r\n\r\n// 创建dom\r\nfunction create_dom() {\r\n    const arr = [];\r\n    for(let i = 0; i <4; i ++) {\r\n        const dom = document.createElement(\"div\");\r\n        dom.style.borderRadius = \"8px\";\r\n        dom.style.transform = \"scale(0.98)\";\r\n        dom.style.position = \"absolute\";\r\n        dom.style.width = \"30px\";\r\n        dom.style.height = \"30px\";\r\n        arr.push(dom);\r\n    }\r\n    return arr;\r\n}\r\n// 设置dom的样式\r\nfunction style(dom, data) {\r\n    dom.style.background = data.color;\r\n    dom.style.left = data.x + \"px\";\r\n    dom.style.top = data.y + \"px\";\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    // 创建对应的积木\r\n    createFang: function (dom) {\r\n        const fang = new CreateFang();\r\n        fang.dom.forEach( (key) => {\r\n            dom.appendChild(key);\r\n        } )\r\n        return fang;\r\n    },\r\n    // 设置积木的样式，比如颜色，位置。\r\n    createDom: function (data, wei_zhi, fang_dom, chi_cu) {\r\n        let i = 0;\r\n        data.forEach( (key, y) => {\r\n            key.forEach( (item, x) => {\r\n                if(item.type === 1) {\r\n                    const d = fang_dom[i];\r\n                    style(d, {\r\n                        color: item.color, \r\n                        x: (wei_zhi[1] + x) * chi_cu, \r\n                        y: (wei_zhi[0] - y) * chi_cu\r\n                    })\r\n                    i ++;\r\n                }\r\n            } )\r\n        } )\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/fang.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_ji_mu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_ji_mu.js */ \"./src/create_ji_mu.js\");\n/* harmony import */ var _quan_jv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quan_jv.js */ \"./src/quan_jv.js\");\n/* harmony import */ var _listener_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listener.js */ \"./src/listener.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nmain();\r\n\r\n// 主函数，程序的起点\r\nfunction main() {\r\n    // 创建第一个积木\r\n    _create_ji_mu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(_quan_jv_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pan_duan);\r\n    // 绑定对应的事件\r\n    Object(_listener_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/ji_mu_data/L_xing.js":
/*!**********************************!*\
  !*** ./src/ji_mu_data/L_xing.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return L_xing; });\nfunction color() {\r\n    return \"rgb(63, 81, 181)\"\r\n}\r\n\r\nfunction L_xing() {\r\n    return [\r\n        [\r\n            [\r\n                {type: 1, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 1, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 1, color: color()}, {type: 1, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ]\r\n        ],\r\n        [\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 1, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 1, color: color()}, {type: 1, color: color()},\r\n                {type: 1, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ]\r\n        ],\r\n        [\r\n            [\r\n                {type: 1, color: color()}, {type: 1, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 1, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 1, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ]\r\n        ],\r\n        [\r\n            [\r\n                {type: 1, color: color()}, {type: 1, color: color()},\r\n                {type: 1, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 1, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ]\r\n        ]\r\n    ]\r\n}\n\n//# sourceURL=webpack:///./src/ji_mu_data/L_xing.js?");

/***/ }),

/***/ "./src/ji_mu_data/chang_tiao.js":
/*!**************************************!*\
  !*** ./src/ji_mu_data/chang_tiao.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return chuang_tiao; });\nfunction color() {\r\n    return \"rgb(67, 58, 183)\"\r\n}\r\n\r\nfunction chuang_tiao() {\r\n    return [\r\n        [   \r\n            [\r\n                {type: 1, color: color()}, {type: 0, color: color()}, \r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ], \r\n            [\r\n                {type: 1, color: color()}, {type: 0, color: color()}, \r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ], \r\n            [\r\n                {type: 1, color: color()}, {type: 0, color: color()}, \r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ], \r\n            [\r\n                {type: 1, color: color()}, {type: 0, color: color()}, \r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ] \r\n        ],\r\n        [\r\n            [\r\n                {type: 1, color: color()}, {type: 1, color: color()}, \r\n                {type: 1, color: color()}, {type: 1, color: color()}\r\n            ], \r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()}, \r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ], \r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()}, \r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ], \r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()}, \r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ] \r\n        ]\r\n    ]\r\n}\n\n//# sourceURL=webpack:///./src/ji_mu_data/chang_tiao.js?");

/***/ }),

/***/ "./src/ji_mu_data/fan_L.js":
/*!*********************************!*\
  !*** ./src/ji_mu_data/fan_L.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fan_L; });\nfunction color() {\r\n    return \"rgb(233, 30, 99)\"\r\n}\r\n\r\nfunction fan_L() {\r\n    return [\r\n        [\r\n            [\r\n                {type: 0, color: color()}, {type: 1, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 1, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 1, color: color()}, {type: 1, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ]\r\n        ],\r\n        [\r\n            [\r\n                {type: 1, color: color()}, {type: 1, color: color()},\r\n                {type: 1, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 1, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ]\r\n        ],\r\n        [\r\n            [\r\n                {type: 1, color: color()}, {type: 1, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 1, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 1, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ]\r\n        ],\r\n        [\r\n            [\r\n                {type: 1, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 1, color: color()}, {type: 1, color: color()},\r\n                {type: 1, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ]\r\n        ]\r\n    ]\r\n}\n\n//# sourceURL=webpack:///./src/ji_mu_data/fan_L.js?");

/***/ }),

/***/ "./src/ji_mu_data/fan_guai.js":
/*!************************************!*\
  !*** ./src/ji_mu_data/fan_guai.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fan_guai; });\nfunction color() {\r\n    return \"#f0f\"\r\n}\r\n\r\nfunction fan_guai() {\r\n    return [\r\n        [\r\n            [\r\n                {type: 0, color: color()}, {type: 1, color: color()},\r\n                {type: 1, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 1, color: color()}, {type: 1, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ]\r\n        ],\r\n        [\r\n            [\r\n                {type: 1, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 1, color: color()}, {type: 1, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 1, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ]\r\n        ]\r\n    ]\r\n}\n\n//# sourceURL=webpack:///./src/ji_mu_data/fan_guai.js?");

/***/ }),

/***/ "./src/ji_mu_data/fang_kuai.js":
/*!*************************************!*\
  !*** ./src/ji_mu_data/fang_kuai.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fang_kuai; });\nfunction color() {\r\n    return \"rgb(156, 39, 176)\"\r\n}\r\n\r\nfunction fang_kuai() {\r\n    return [\r\n        [\r\n            [\r\n                {type: 1, color: color()}, {type: 1, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 1, color: color()}, {type: 1, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n            ]\r\n        ]\r\n    ]\r\n}\n\n//# sourceURL=webpack:///./src/ji_mu_data/fang_kuai.js?");

/***/ }),

/***/ "./src/ji_mu_data/guai_xing.js":
/*!*************************************!*\
  !*** ./src/ji_mu_data/guai_xing.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return guai_xing; });\n\r\nfunction color() {\r\n    return \"rgb(247, 67, 128)\"\r\n}\r\n\r\nfunction guai_xing() {\r\n    return [\r\n        [\r\n            [\r\n                {type: 1, color: color()}, {type: 1, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 1, color: color()},\r\n                {type: 1, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ]\r\n        ],\r\n        [\r\n            [\r\n                {type: 0, color: color()}, {type: 1, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 1, color: color()}, {type: 1, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 1, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ],\r\n            [\r\n                {type: 0, color: color()}, {type: 0, color: color()},\r\n                {type: 0, color: color()}, {type: 0, color: color()}\r\n            ]\r\n        ]\r\n    ]\r\n}\n\n//# sourceURL=webpack:///./src/ji_mu_data/guai_xing.js?");

/***/ }),

/***/ "./src/listener.js":
/*!*************************!*\
  !*** ./src/listener.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_ji_mu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_ji_mu.js */ \"./src/create_ji_mu.js\");\n/* harmony import */ var _quan_jv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quan_jv */ \"./src/quan_jv.js\");\n\r\n\r\n\r\n\r\n// 判断一个积木的左侧或右侧有没有积木(-1表示向左，1表示向右)\r\nfunction leftToRight(dataObj) {\r\n    const data = dataObj.data[ dataObj.index ],\r\n          wei_zhi = dataObj.wei_zhi,\r\n          fang_xiang = dataObj.fang_xiang,\r\n          quan_jv = dataObj.quan,\r\n          width = dataObj.width,\r\n          height = dataObj.height;\r\n\r\n    for(let i = 0 ; i < data.length; i ++) {\r\n        for(let j = 0; j < data[i].length; j ++) {\r\n            const x = wei_zhi[1] + j + fang_xiang;\r\n            const y = wei_zhi[0] - i;\r\n            if(data[i][j].type === 1 && x >= 0 && x <= width && y >= 0 && y <= height) { \r\n                if(quan_jv[y][x] && quan_jv[y][x].type == 1) {\r\n                    return false;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return true;\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n    window.onkeydown = function (e) {\r\n        // console.log(e.keyCode);\r\n        if(e.keyCode === 32) {\r\n            _create_ji_mu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gai_bian();\r\n        }else if(e.keyCode == 37) {\r\n            const dang = _create_ji_mu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set_ji_mu();\r\n            const quan = _quan_jv__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set_quan_jv();\r\n            if(dang.wei_zhi[1] > 0 && leftToRight({...dang, quan: quan, fang_xiang: -1})) {\r\n                _create_ji_mu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].leftMove();\r\n            }\r\n        }else if(e.keyCode == 39) {\r\n            const dang = _create_ji_mu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set_ji_mu();\r\n            const quan = _quan_jv__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set_quan_jv();\r\n            // 得到积木的长度，便于边界的判断，边界从0开始，长度需要减去1\r\n            const index = _create_ji_mu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].chang_du() - 1;\r\n\r\n            if(dang.wei_zhi[1] < dang.width - index && leftToRight({...dang, quan: quan, fang_xiang: 1})) {\r\n                _create_ji_mu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rightMove();\r\n            }\r\n        }else if(e.keyCode == 40) {\r\n            _create_ji_mu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].jia_kuai(100);\r\n        }\r\n    }\r\n\r\n    window.onkeyup = function (e) {\r\n        if(e.keyCode === 40) {\r\n            _create_ji_mu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].v_hui_fu();\r\n        }\r\n    }\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/listener.js?");

/***/ }),

/***/ "./src/quan_jv.js":
/*!************************!*\
  !*** ./src/quan_jv.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_ji_mu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_ji_mu.js */ \"./src/create_ji_mu.js\");\n\r\n\r\nfunction createQuanJv() {\r\n    const quan_jv_data = [];\r\n    for(let i = 0; i < 20; i ++) {\r\n        quan_jv_data.push( new Array(12) );\r\n    }\r\n    return quan_jv_data;\r\n}\r\n\r\n\r\n// 创建全局容器\r\nconst quan_jv_data = createQuanJv();\r\n// 创建全局dom容器\r\nconst quan_dom = createQuanJv();\r\n\r\n\r\n// 获取全局对象\r\nfunction set_quan_jv() {\r\n    return quan_jv_data;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    // 根据全局数组重新渲染，全局的积木\r\n    createDom: function () {\r\n        const dang = _create_ji_mu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set_ji_mu();\r\n        quan_jv_data.forEach( (k, kI) => {\r\n            k.forEach( (e, eI) => {\r\n                if(quan_dom[kI][eI] && e.type === 1) {\r\n                    quan_dom[kI][eI].style.top = kI * dang.chi_cu + \"px\";\r\n                    quan_dom[kI][eI].style.left = eI * dang.chi_cu + \"px\";\r\n                }\r\n            } )\r\n        } )\r\n    },\r\n    // 消除全局积木\r\n    xiao_chu: function() {\r\n        const arr = [];\r\n        quan_jv_data.forEach( (k, kI) => {\r\n            let index = 0;\r\n            k.forEach((e, eI) => {\r\n                if(!e || e.type === 1) {\r\n                    index ++\r\n                }\r\n            } )\r\n            if(index === k.length) {\r\n                arr.push(kI)\r\n            }\r\n        } )\r\n        \r\n        arr.forEach( (k) => {\r\n            quan_dom[k].forEach( (e) => {\r\n                e.remove();\r\n            })\r\n            quan_dom.splice(k, 1);\r\n            quan_jv_data.splice(k, 1);\r\n            quan_dom.unshift( new Array(12) );\r\n            quan_jv_data.unshift( new Array(12) );\r\n        } )\r\n\r\n        if(arr.length > 0) {\r\n            return true;\r\n        }\r\n        return false;\r\n    },\r\n    set_quan_jv,\r\n    set_quan_jv_dom: function () {\r\n        return quan_dom;\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/quan_jv.js?");

/***/ })

/******/ });