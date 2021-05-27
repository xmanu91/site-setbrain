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
})({"lax.min.js":[function(require,module,exports) {
"use strict";

function _slicedToArray(t, a) {
  return _arrayWithHoles(t) || _iterableToArrayLimit(t, a) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(t, a) {
  var n = [],
      e = !0,
      r = !1,
      o = void 0;

  try {
    for (var l, i = t[Symbol.iterator](); !(e = (l = i.next()).done) && (n.push(l.value), !a || n.length !== a); e = !0) {
      ;
    }
  } catch (t) {
    r = !0, o = t;
  } finally {
    try {
      e || null == i.return || i.return();
    } finally {
      if (r) throw o;
    }
  }

  return n;
}

function _arrayWithHoles(t) {
  if (Array.isArray(t)) return t;
}

!function () {
  var lax = function () {
    for (var lax = {
      elements: []
    }, lastY = 0, currentBreakpoint = "default", breakpointsSeparator = "_", transformFns = {
      "data-lax-opacity": function dataLaxOpacity(t, a) {
        t.opacity = a;
      },
      "data-lax-translate": function dataLaxTranslate(t, a) {
        t.transform += " translate(".concat(a, "px, ").concat(a, "px)");
      },
      "data-lax-translate-x": function dataLaxTranslateX(t, a) {
        t.transform += " translateX(".concat(a, "px)");
      },
      "data-lax-translate-y": function dataLaxTranslateY(t, a) {
        t.transform += " translateY(".concat(a, "px)");
      },
      "data-lax-scale": function dataLaxScale(t, a) {
        t.transform += " scale(".concat(a, ")");
      },
      "data-lax-scale-x": function dataLaxScaleX(t, a) {
        t.transform += " scaleX(".concat(a, ")");
      },
      "data-lax-scale-y": function dataLaxScaleY(t, a) {
        t.transform += " scaleY(".concat(a, ")");
      },
      "data-lax-skew": function dataLaxSkew(t, a) {
        t.transform += " skew(".concat(a, "deg, ").concat(a, "deg)");
      },
      "data-lax-skew-x": function dataLaxSkewX(t, a) {
        t.transform += " skewX(".concat(a, "deg)");
      },
      "data-lax-skew-y": function dataLaxSkewY(t, a) {
        t.transform += " skewY(".concat(a, "deg)");
      },
      "data-lax-rotate": function dataLaxRotate(t, a) {
        t.transform += " rotate(".concat(a, "deg)");
      },
      "data-lax-rotate-x": function dataLaxRotateX(t, a) {
        t.transform += " rotateX(".concat(a, "deg)");
      },
      "data-lax-rotate-y": function dataLaxRotateY(t, a) {
        t.transform += " rotateY(".concat(a, "deg)");
      },
      "data-lax-brightness": function dataLaxBrightness(t, a) {
        t.filter += " brightness(".concat(a, "%)");
      },
      "data-lax-contrast": function dataLaxContrast(t, a) {
        t.filter += " contrast(".concat(a, "%)");
      },
      "data-lax-hue-rotate": function dataLaxHueRotate(t, a) {
        t.filter += " hue-rotate(".concat(a, "deg)");
      },
      "data-lax-blur": function dataLaxBlur(t, a) {
        t.filter += " blur(".concat(a, "px)");
      },
      "data-lax-invert": function dataLaxInvert(t, a) {
        t.filter += "  invert(".concat(a, "%)");
      },
      "data-lax-saturate": function dataLaxSaturate(t, a) {
        t.filter += "  saturate(".concat(a, "%)");
      },
      "data-lax-grayscale": function dataLaxGrayscale(t, a) {
        t.filter += "  grayscale(".concat(a, "%)");
      },
      "data-lax-bg-pos": function dataLaxBgPos(t, a) {
        t.backgroundPosition = "".concat(a, "px ").concat(a, "px");
      },
      "data-lax-bg-pos-x": function dataLaxBgPosX(t, a) {
        t.backgroundPositionX = "".concat(a, "px");
      },
      "data-lax-bg-pos-y": function dataLaxBgPosY(t, a) {
        t.backgroundPositionY = "".concat(a, "px");
      }
    }, _crazy = "", i = 0; i < 20; i++) {
      _crazy += " " + 5 * i + " " + 47 * i % 360 + ", ";
    }

    function intrp(t, a) {
      for (var n = 0; t[n][0] <= a && void 0 !== t[n + 1];) {
        n += 1;
      }

      var e = t[n][0],
          r = void 0 === t[n - 1] ? e : t[n - 1][0],
          o = t[n][1],
          l = void 0 === t[n - 1] ? o : t[n - 1][1];
      return Math.min(Math.max((a - r) / (e - r), 0), 1) * (o - l) + l;
    }

    function fnOrVal(s) {
      return "(" === s[0] ? eval(s) : parseFloat(s);
    }

    return lax.presets = {
      linger: function linger(t) {
        return {
          "data-lax-translate-y": "(vh*0.7) 0, 0 200, -500 0"
        };
      },
      lazy: function lazy(t) {
        return {
          "data-lax-translate-y": "(vh) 0, (-elh) ".concat(0 < arguments.length && void 0 !== t ? t : 100)
        };
      },
      eager: function eager(t) {
        return {
          "data-lax-translate-y": "(vh) 0, (-elh) -".concat(0 < arguments.length && void 0 !== t ? t : 100)
        };
      },
      slalom: function slalom(t) {
        var a = 0 < arguments.length && void 0 !== t ? t : 50;
        return {
          "data-lax-translate-x": "vh ".concat(a, ", (vh*0.8) ").concat(-a, ", (vh*0.6) ").concat(a, ", (vh*0.4) ").concat(-a, ", (vh*0.2) ").concat(a, ", (vh*0) ").concat(-a, ", (-elh) ").concat(a)
        };
      },
      crazy: function crazy(t) {
        return {
          "data-lax-hue-rotate": "".concat(_crazy, " | loop=20")
        };
      },
      spin: function spin(t) {
        return {
          "data-lax-rotate": "(vh) 0, (-elh) ".concat(0 < arguments.length && void 0 !== t ? t : 360)
        };
      },
      spinRev: function spinRev(t) {
        return {
          "data-lax-rotate": "(vh) 0, (-elh) ".concat(-(0 < arguments.length && void 0 !== t ? t : 360))
        };
      },
      spinIn: function spinIn(t) {
        return {
          "data-lax-rotate": "vh ".concat(0 < arguments.length && void 0 !== t ? t : 360, ", (vh*0.5) 0")
        };
      },
      spinOut: function spinOut(t) {
        return {
          "data-lax-rotate": "(vh*0.5) 0, -elh ".concat(0 < arguments.length && void 0 !== t ? t : 360)
        };
      },
      blurInOut: function blurInOut(t) {
        var a = 0 < arguments.length && void 0 !== t ? t : 40;
        return {
          "data-lax-blur": "(vh) ".concat(a, ", (vh*0.8) 0, (vh*0.2) 0, 0 ").concat(a)
        };
      },
      blurIn: function blurIn(t) {
        return {
          "data-lax-blur": "(vh) ".concat(0 < arguments.length && void 0 !== t ? t : 40, ", (vh*0.7) 0")
        };
      },
      blurOut: function blurOut(t) {
        return {
          "data-lax-blur": "(vh*0.3) 0, 0 ".concat(0 < arguments.length && void 0 !== t ? t : 40)
        };
      },
      fadeInOut: function fadeInOut() {
        return {
          "data-lax-opacity": "(vh) 0, (vh*0.8) 1, (vh*0.2) 1, 0 0"
        };
      },
      fadeIn: function fadeIn() {
        return {
          "data-lax-opacity": "(vh) 0, (vh*0.7) 1"
        };
      },
      fadeOut: function fadeOut() {
        return {
          "data-lax-opacity": "(vh*0.3) 1, 0 0"
        };
      },
      driftLeft: function driftLeft(t) {
        var a = 0 < arguments.length && void 0 !== t ? t : 100;
        return {
          "data-lax-translate-x": "vh ".concat(a, ", -elh ").concat(-a)
        };
      },
      driftRight: function driftRight(t) {
        var a = 0 < arguments.length && void 0 !== t ? t : 100;
        return {
          "data-lax-translate-x": "vh ".concat(-a, ", -elh ").concat(a)
        };
      },
      leftToRight: function leftToRight(t) {
        return {
          "data-lax-translate-x": "vh 0, -elh (vw*".concat(0 < arguments.length && void 0 !== t ? t : 1, ")")
        };
      },
      rightToLeft: function rightToLeft(t) {
        return {
          "data-lax-translate-x": "vh 0, -elh (vw*".concat(-(0 < arguments.length && void 0 !== t ? t : 1), ")")
        };
      },
      zoomInOut: function zoomInOut(t) {
        var a = 0 < arguments.length && void 0 !== t ? t : .2;
        return {
          "data-lax-scale": "(vh) ".concat(a, ", (vh*0.8) 1, (vh*0.2) 1, -elh ").concat(a)
        };
      },
      zoomIn: function zoomIn(t) {
        return {
          "data-lax-scale": "(vh) ".concat(0 < arguments.length && void 0 !== t ? t : .2, ", (vh*0.7) 1")
        };
      },
      zoomOut: function zoomOut(t) {
        return {
          "data-lax-scale": "(vh*0.3) 1, -elh ".concat(0 < arguments.length && void 0 !== t ? t : .2)
        };
      },
      speedy: function speedy(t) {
        var a = 0 < arguments.length && void 0 !== t ? t : 30;
        return {
          "data-lax-skew-x": "(vh) ".concat(a, ", -elh ").concat(-a)
        };
      },
      swing: function swing(t) {
        var a = 0 < arguments.length && void 0 !== t ? t : 30;
        return {
          "data-lax-skew-y": "(vh) ".concat(a, ", -elh ").concat(-a)
        };
      }
    }, lax.addPreset = function (t, a) {
      lax.presets[t] = a;
    }, lax.setup = function () {
      var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      lax.breakpoints = t.breakpoints || {}, lax.selector = t.selector || ".lax", lax.populateElements();
    }, lax.removeElement = function (a) {
      var t = lax.elements.findIndex(function (t) {
        return t.el = a;
      });
      -1 < t && lax.elements.splice(t, 1);
    }, lax.createLaxObject = function (t) {
      return {
        el: t,
        originalStyle: {
          transform: t.style.transform,
          filter: t.style.filter
        },
        transforms: {}
      };
    }, lax.calcTransforms = function (l) {
      for (var i = l.el, r = [], t = 0; t < i.attributes.length; t++) {
        var a = i.attributes[t];
        -1 < a.name.indexOf("data-lax-preset") && r.push(a);
      }

      for (var n = function n(t) {
        var a = r[t],
            n = a.name.split(breakpointsSeparator),
            o = n[1] ? "".concat(breakpointsSeparator).concat(n[1]) : "";
        a.value.split(" ").forEach(function (t) {
          var a = t.split("-"),
              n = lax.presets[a[0]];

          if (n) {
            var e = n(a[1]);

            for (var r in e) {
              i.setAttribute("".concat(r).concat(o), e[r]);
            }
          } else console.log("lax error: preset ".concat(a[0], " is not defined"));
        });
        var e = i.getAttribute("data-lax-anchor");
        e && "" !== e || i.setAttribute("data-lax-anchor", "self"), i.attributes.removeNamedItem(a.name);
      }, e = 0; e < r.length; e++) {
        n(e);
      }

      if (!(i.attributes["data-lax-use-gpu"] && "false" === i.attributes["data-lax-use-gpu"].value) && (i.style["backface-visibility"] = "hidden", i.style["-webkit-backface-visibility"] = "hidden"), i.attributes["data-lax-use-gpu"] && i.attributes.removeNamedItem("data-lax-use-gpu"), l.optimise = !1, i.attributes["data-lax-optimize"] && "true" === i.attributes["data-lax-optimize"].value) {
        l.optimise = !0;
        var o = i.getBoundingClientRect();
        i.setAttribute("data-lax-opacity", "".concat(-o.height - 1, " 0, ").concat(-o.height, " 1, ").concat(window.innerHeight, " 1, ").concat(window.innerHeight + 1, " 0")), i.attributes.removeNamedItem("data-lax-optimize");
      }

      for (var c = 0; c < i.attributes.length; c++) {
        var s = i.attributes[c];

        if (!(s.name.indexOf("data-lax") < 0)) {
          var u = s.name.split(breakpointsSeparator),
              f = u[0].split("-"),
              d = u[1] || "default";
          if ("lax" === f[1]) if ("data-lax-anchor" === s.name) {
            l["data-lax-anchor"] = "self" === s.value ? i : document.querySelector(s.value);
            var x = l["data-lax-anchor"].getBoundingClientRect();
            l.anchorTop = Math.floor(x.top) + window.scrollY;
          } else !function () {
            var t = _slicedToArray(s.value.replace(/vw/g, window.innerWidth).replace(/vh/g, window.innerHeight).replace(/elh/g, i.clientHeight).replace(/elw/g, i.clientWidth).replace(/\s+/g, " ").split("|"), 2),
                a = t[0],
                n = t[1],
                r = {};

            n && n.split(" ").forEach(function (t) {
              var a = _slicedToArray(t.split("="), 2),
                  n = a[0],
                  e = a[1];

              r[n] = n && fnOrVal(e);
            });
            var e = u[0],
                o = a.split(",").map(function (t) {
              return t.trim().split(" ").map(fnOrVal);
            }).sort(function (t, a) {
              return t[0] - a[0];
            });
            l.transforms[e] || (l.transforms[e] = {}), l.transforms[e][d] = {
              valueMap: o,
              options: r
            };
          }();
        }
      }

      var v = i.attributes["data-lax-sprite-data"] && i.attributes["data-lax-sprite-data"].value;

      if (v) {
        l.spriteData = v.split(",").map(function (t) {
          return parseInt(t);
        }), i.style.height = l.spriteData[1] + "px", i.style.width = l.spriteData[0] + "px";
        var p = i.attributes["data-lax-sprite-image"] && i.attributes["data-lax-sprite-image"].value;
        p && (i.style.backgroundImage = "url(".concat(p, ")"));
      }

      return l;
    }, lax.addElement = function (t) {
      var a = lax.calcTransforms(lax.createLaxObject(t));
      lax.elements.push(a), lax.updateElement(a);
    }, lax.populateElements = function () {
      lax.elements = [], document.querySelectorAll(lax.selector).forEach(lax.addElement), currentBreakpoint = lax.getCurrentBreakPoint();
    }, lax.updateElements = function () {
      lax.elements.forEach(function (t) {
        lax.calcTransforms(t), lax.updateElement(t);
      }), currentBreakpoint = lax.getCurrentBreakPoint();
    }, lax.getCurrentBreakPoint = function () {
      var t = "default",
          a = window.innerWidth;

      for (var n in lax.breakpoints) {
        if (!(parseFloat(lax.breakpoints[n]) <= a)) break;
        t = n;
      }

      return t;
    }, lax.updateElement = function (t) {
      var a = t.originalStyle,
          n = t.anchorTop,
          e = t.transforms,
          r = t.spriteData,
          o = t.el,
          l = n ? n - lastY : lastY,
          i = {
        transform: a.transform,
        filter: a.filter
      };

      for (var c in e) {
        var s = e[c][currentBreakpoint] || e[c].default;

        if (s) {
          var u = l;
          s.options.offset && (u += s.options.offset), s.options.speed && (u *= s.options.speed), s.options.loop && (u %= s.options.loop);
          var f = transformFns[c],
              d = intrp(s.valueMap, u);
          f && f(i, d);
        }
      }

      if (r) {
        var x = _slicedToArray(r, 5),
            v = x[0],
            p = x[1],
            h = x[2],
            m = x[3],
            g = x[4],
            b = Math.floor(lastY / g) % h,
            y = b % m,
            k = Math.floor(b / m);

        i.backgroundPosition = "-".concat(y * v, "px -").concat(k * p, "px");
      }

      if (0 === i.opacity) o.style.opacity = 0;else for (var w in i) {
        o.style[w] = i[w];
      }
    }, lax.update = function (t) {
      lastY !== t && (lastY = t, lax.elements.forEach(lax.updateElement));
    }, lax;
  }();

  "undefined" != typeof module && void 0 !== module.exports ? module.exports = lax : window.lax = lax;
}();
},{}]