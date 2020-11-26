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
/******/ 	return __webpack_require__(__webpack_require__.s = "./jssrc/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./jssrc/index.ts":
/*!************************!*\
  !*** ./jssrc/index.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 首页
 * */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../modules/drag */ "./modules/drag/index.js");
var lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "lodash"));
var ganhuo = {
    init: function () {
        var that = this;
        that.getData(1);
        that.scrollFun();
    },
    getData: function (pagenum) {
        $.ajax({
            // url: "https://gank.io/api/v2/data/category/GanHuo/type/frontend/page/1/count/20",
            url: "https://gank.io/api/v2/data/category/All/type/frontend/page/" + pagenum + "/count/20",
            type: 'get',
            data: {},
            success: function (msg) {
                console.log(msg);
                if (msg.status == 100) {
                    var list = msg.data;
                    var itemstr = "";
                    for (var i = 0; i < list.length; i++) {
                        itemstr += '<div class="item">'
                            + '<a href="' + list[i].url + '" target="_blank">'
                            + '<h2 class="txt" >' + list[i].title + '</h2>'
                            + '<div class="desc">' + list[i].desc + '</div>'
                            + '</a>'
                            + '<div class="bottom">'
                            + '<div class="lab"><span>作者:</span>' + list[i].author + '</div>'
                            + '<div class="lab"><span>更新时间:</span><span>' + list[i].createdAt + '</span></div>'
                            + '<div class="lab"><span>views:</span><span>' + list[i].views + '</span></div>'
                            + '</div>'
                            + '</div >';
                    }
                    // $("#ghlist-wrap").html(itemstr)
                    $("#ghlist-wrap").append($(itemstr));
                }
                ;
            },
            error: function (err) {
            }
        });
    },
    /**
     * 滚动加载
     */
    scrollFun: function () {
        var that = this, num = 1;
        $(window).on('scroll', lodash_1.default.debounce(function () {
            var scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
            var windowHeight = document.compatMode == "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
            var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            if (scrollTop + windowHeight >= documentHeight) {
                that.getData(num += 1);
            }
        }, 500));
    }
};
ganhuo.init();
;
var dragbox = $("#chat");
dragbox.dragbox();


/***/ }),

/***/ "./modules/drag/index.js":
/*!*******************************!*\
  !*** ./modules/drag/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


$.fn.dragbox = function(){
    var ele = $(this);
    if(!ele)return false;
    ele.on("mousedown", function (e) {
        // e.pageX
        var positionDiv = $(this).offset();
        var distenceX = e.pageX - positionDiv.left;
        var distenceY = e.pageY - positionDiv.top + $(document).scrollTop();  //加滚动高度

        $(document).on("mousemove", function (e) {
            var x = e.pageX - distenceX;
            var y = e.pageY - distenceY;

            if (x < 0) {
                x = 0; 
            } else if (x > $(document).width() - ele.outerWidth(true)) {
                x = $(document).width() - ele.outerWidth(true);
            }

            if (y < 0) {
                y = 0;
            } else if (y > $(document).height() - ele.outerHeight(true)) {
                y = $(document).height() - ele.outerHeight(true);
            }

            ele.css({
                'left': x + 'px',
                'top': y + 'px'
            });
        });

        $(document).on("mouseup", function () {
            $(document).off('mousemove');
        });
    });
}

// $('#chat').on("mousedown",function (e) {
//     // e.pageX
//     var positionDiv = $(this).offset();
//     var distenceX = e.pageX - positionDiv.left;
//     var distenceY = e.pageY - positionDiv.top + $(document).scrollTop();  //加滚动高度

//     $(document).on("mousemove",function (e) {
//         var x = e.pageX - distenceX;
//         var y = e.pageY - distenceY;

//         if (x < 0) {
//             x = 0;
//         } else if (x > $(document).width() - $('#chat').outerWidth(true)) {
//             x = $(document).width() - $('#chat').outerWidth(true);
//         }

//         if (y < 0) {
//             y = 0;
//         } else if (y > $(document).height() - $('#chat').outerHeight(true)) {
//             y = $(document).height() - $('#chat').outerHeight(true);
//         }

//         $('#chat').css({
//             'left': x + 'px',
//             'top': y + 'px'
//         });
//     });

//     $(document).on("mouseup",function () {
//         $(document).off('mousemove');
//     });
// });


/***/ }),

/***/ "lodash":
/*!********************!*\
  !*** external "_" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = _;

/***/ })

/******/ });
//# sourceMappingURL=index.js.map