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
/******/ 	return __webpack_require__(__webpack_require__.s = "./jssrc/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./jssrc/main.ts":
/*!***********************!*\
  !*** ./jssrc/main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//滚动播报插件
;
(function ($, window, undefined) {
    var scrollBox = function (ele, options) {
        this.$element = ele;
        this.defaults = {
            speed: 20,
        };
        this.settings = $.extend({}, this.defaults, options);
        this.init();
    };
    scrollBox.prototype.init = function () {
        var that = this;
        var MyMar = null; //初始化一个变量为空 用来存放获取到的文本内容
        var scrollDiv = $(that.$element)[0]; //获取整体的开头id
        var scrollBegin = $(that.$element.find("#scrollBegin"))[0];
        ; //获取滚动的开头id	
        var scrollEnd = $(that.$element.find("#scrollEnd"))[0]; //获取滚动的结束id	
        scrollEnd.innerHTML = scrollBegin.innerHTML; //滚动的是html内部的内容,原生知识!
        //定义一个方法
        function Marquee() {
            if (scrollEnd.offsetWidth - scrollDiv.scrollLeft <= 0) {
                scrollDiv.scrollLeft -= scrollBegin.offsetWidth;
            }
            else {
                scrollDiv.scrollLeft++;
            }
            // scrollDiv.scrollLeft++;
        }
        MyMar = setInterval(Marquee, that.settings.speed); //给上面的方法设置时间  setInterval
        //鼠标点击这条公告栏的时候,清除上面的方法,让公告栏暂停
        scrollDiv.onmouseover = function () {
            clearInterval(MyMar);
        };
        //鼠标点击其他地方的时候,公告栏继续运动
        scrollDiv.onmouseout = function () {
            MyMar = setInterval(Marquee, that.settings.speed);
        };
    };
    $.fn.scrollBox = function (opts) {
        //@ts-ignore
        var a = new scrollBox(this, opts);
        return a;
    };
})(jQuery, window);
//时间插件
;
(function ($, window, undefined) {
    //@ts-ignore
    var addTime = function (ele, options) {
        //@ts-ignore
        this.$element = ele;
        //@ts-ignore
        this.defaults = {
            'color': '#c6c6c6',
            'fontSize': '12px',
            'timeStr': '2019'
        };
        //@ts-ignore
        this.settings = $.extend({}, this.defaults, options);
    };
    addTime.prototype.getTime = function () {
        var now = new Date(), y = now.getFullYear(), m = now.getMonth() + 1, d = now.getDate(), h = now.getHours(), min = now.getMinutes(), s = now.getSeconds(), time = y + '/' + m + '/' + d + ' ' + h + ':' + min + ':' + s;
        this.settings.timeStr = time;
        return '<p class="t" style="color:' + this.settings.color + '">' + this.settings.timeStr + '</p>';
    };
    addTime.prototype.addDom = function (a) {
        var that = this;
        setInterval(function () {
            that.$element.empty().append(that.getTime());
        }, 1000);
    };
    var $fn = $.fn;
    $fn.addtime = function (options) {
        var a = new addTime(this, options);
        return a.addDom();
    };
})(jQuery, window);


/***/ })

/******/ });
//# sourceMappingURL=main.js.map