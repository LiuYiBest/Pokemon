// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n/* \u8BA9\u6211\u4EEC\u52A8\u624B\u6765\u753B\u4E00\u53EA\u76AE\u5361\u4E18\u5427\uFF01\n\u63A5\u4E0B\u6765\u6211\u8981\u5C55\u793A\u795E\u5947\u7684\u6280\u5DE7\uFF01*/\n\n*{box-sizing: border-box;margin: 0;padding: 0}\n/*\u6837\u5F0F\u521D\u59CB\u5316*/\n.main {\n    background: #ffdc2e;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute\n}\n.pik {\n    width: 620px;\n    height: 680px;\n    position: relative;\n}\n/*\u5F00\u59CB\u753B\u957F\u957F\u7684\u8033\u6735*/\n.ear {\n    border-radius: 100%;\n    background: #ffdc2e;\n    border: 4px solid #000;\n    margin-left: -42px;\n    position: relative;\n    overflow: hidden;\n    position: absolute;\n}\n/*\u8FD9\u662F\u5DE6\u8FB9\u7684\u957F\u8033\u6735*/\n.ear-left {\n    width: 326px;\n    height: 68px;\n    margin-top: 116px;\n    transform: rotate(43deg);\n}\n.ear-left::before {\n    content: '';\n    width: 123px;\n    height: 48px;\n    position: absolute;\n    top: 30px;\n    left: -10px;\n    background: #000;\n    transform: rotate(39deg);\n}\n/*\u8FD9\u662F\u53F3\u8FB9\u7684\u957F\u8033\u6735*/\n.ear-right {\n    width: 298px;\n    height: 70px;\n    margin-top: 116px;\n    right: -22px;\n    transform: rotate(-36deg);\n}\n.ear-right::before {\n    content: '';\n    width: 125px;\n    height: 50px;\n    position: absolute;\n    top: 30px;\n    right: -11px;\n    background: #000;\n    transform: rotate(-43deg);\n}\n/*\u753B\u76AE\u5361\u4E18\u7684\u5706\u8138*/\n.head {\n    background: #ffdc2e;\n    border-radius: 50% 50% 50% 50% / 36% 36% 54% 54%;\n    border: 5px solid #000;\n    border-bottom-width: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 48%;\n    height: 48%;\n    position: relative;\n    margin: 170px auto 0;\n    z-index: 4;\n}\n.head::after {\n    border: 0px solid #ffdc2e;\n    background: #e5961d;\n    border-radius: 50% 50% 50% 50% / 100% 100% 0 0%;\n    border-width: 5px;\n    content: '';\n    display: block;\n    width: 27%;\n    height: 20px;\n    position: absolute;\n    bottom: -1px;\n    transform: scale(1, -1);\n    border-left-width: 50px;\n    border-right-width: 50px;\n    border-top-width: 0px;\n    border-bottom-width: 20px;\n}\n/*\u7EA2\u8272\u7684\u8138\u988A*/\n.cheek {\n    border-radius: 0 60%;\n    border: 5px solid #000;\n    background: #ffdc2e;\n    width: 120px;\n    height: 135px;\n    position: absolute;\n    transform: rotate(31deg);\n    left: -22px;\n    bottom: 54px;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    overflow: hidden;\n}\n.cheek:nth-child(2) {\n    left: initial;\n    right: -15px;\n    bottom: 38px;\n    transform: scale(1, -1);\n    transform: rotate(-122deg);\n}\n.cheek::before {\n    content: '';\n    display: block;\n    width: 75px;\n    height: 70px;\n    background: #fe3310;\n    border-radius: 45% 55% 50% 50% / 50% 50% 50% 50% ;\n    border: 3px solid  #000;\n    position: absolute;\n    left: 0;\n    top: 50%;\n}\n.cheek.offset::before {\n    left: -12px;\n    top: 42%;\n}\n.face{\n    width: 100%; \n    z-index: 1;\n    text-align: center;\n}\n/*\u4F1A\u52A8\u7684\u5927\u773C\u775B*/\n.eyes{\n    display: flex; \n    width: 100%; \n    justify-content: space-around; \n    align-self: center; \n    z-index: 1;\n    background: #ffdb2a;\n    padding-top: 5px;\n}\n.eye {\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    background: #000;\n    cursor: pointer;\n\n}\n.eye::before{\n    content: '';\n    display: block;\n    background: #fff;\n    border: 3px solid #000;\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    position: relative;\n    top: 4px;\n    left: 8px;\n    animation:eyeMove 3s infinite;\n}\n@keyframes eyeMove{\n    0%,100%{\n      top:4px;\n      left:8px;\n    }\n    30%,60%,70%{\n      top: 4px;\n      left: 14px;\n    }\n    40%{\n      top: 4px;\n      left: 8px;\n    }\n    50%{\n      top: 6px;\n      left: 18px;\n    } \n     80%,90%{\n      top: 6px;\n      left: 12px;\n    }\n  }\n  /*\u6447\u6446\u7684\u5C0F\u9F3B\u5B50*/\n.nose {\n    width: 15px;\n    height: 7px;\n    border-radius: 51% 49% 49% 51% / 34% 34% 66% 66% ;\n    border-color: #000;\n    background: #000;\n    align-self: flex-end;\n    animation: wave 200ms infinite linear;\n    cursor: pointer;\n    transform-origin: 50% 100%;\n}\n@keyframes wave{\n    0%{\n        transform: rotate(0deg);\n    }\n    33%{\n        transform: rotate(6deg);\n    }\n    66%{\n        transform: rotate(-6deg);\n    }\n    100%{\n        transform: rotate(0deg);\n    }\n}\n.reversed{\n    transform: scale(-1, 1);\n}\n/*\u5C0F\u5634\u5DF4*/\n.mouth {\n    width: 53px;\n    height: 35px;\n    display: inline-block;\n    margin: 7px 0 0;\n}\n#mouth1{\n    transform: rotate(-25deg);\n    border-bottom: 5px solid #000; \n    border-bottom-left-radius: 40px 27px;\n}\n#mouth2{\n  transform: rotate(25deg); \n  border-bottom: 5px solid #000;\n     border-bottom-right-radius: 40px 27px;\n}\n\n/*\u53EF\u7231\u7684\u76AE\u5361\u4E18\u5B8C\u6210\u5566~*/\n";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  n: 1,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.play();
    player.bindEvents();
  },
  events: {
    '#btnSlow': 'slow',
    '#bunNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 100;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 40;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.76806f93.js.map