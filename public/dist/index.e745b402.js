// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7x9W3":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "46b69ca54abb361c60b9e6cbe745b402"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"53j3v":[function(require,module,exports) {
"use strict";
function _slicedToArray(t, a) {
    return _arrayWithHoles(t) || _iterableToArrayLimit(t, a) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(t, a) {
    var n = [], e = true, r = false, o = void 0;
    try {
        for(var l, i = t[Symbol.iterator](); !(e = (l = i.next()).done) && (n.push(l.value), !a || n.length !== a); e = true);
    } catch (t1) {
        r = true, o = t1;
    } finally{
        try {
            e || null == i.return || i.return();
        } finally{
            if (r) throw o;
        }
    }
    return n;
}
function _arrayWithHoles(t) {
    if (Array.isArray(t)) return t;
}
(function() {
    var lax = function() {
        for(var lax1 = {
            elements: []
        }, lastY = 0, currentBreakpoint = "default", breakpointsSeparator = "_", transformFns = {
            "data-lax-opacity": function(t, a) {
                t.opacity = a;
            },
            "data-lax-translate": function(t, a) {
                t.transform += " translate(".concat(a, "px, ").concat(a, "px)");
            },
            "data-lax-translate-x": function(t, a) {
                t.transform += " translateX(".concat(a, "px)");
            },
            "data-lax-translate-y": function(t, a) {
                t.transform += " translateY(".concat(a, "px)");
            },
            "data-lax-scale": function(t, a) {
                t.transform += " scale(".concat(a, ")");
            },
            "data-lax-scale-x": function(t, a) {
                t.transform += " scaleX(".concat(a, ")");
            },
            "data-lax-scale-y": function(t, a) {
                t.transform += " scaleY(".concat(a, ")");
            },
            "data-lax-skew": function(t, a) {
                t.transform += " skew(".concat(a, "deg, ").concat(a, "deg)");
            },
            "data-lax-skew-x": function(t, a) {
                t.transform += " skewX(".concat(a, "deg)");
            },
            "data-lax-skew-y": function(t, a) {
                t.transform += " skewY(".concat(a, "deg)");
            },
            "data-lax-rotate": function(t, a) {
                t.transform += " rotate(".concat(a, "deg)");
            },
            "data-lax-rotate-x": function(t, a) {
                t.transform += " rotateX(".concat(a, "deg)");
            },
            "data-lax-rotate-y": function(t, a) {
                t.transform += " rotateY(".concat(a, "deg)");
            },
            "data-lax-brightness": function(t, a) {
                t.filter += " brightness(".concat(a, "%)");
            },
            "data-lax-contrast": function(t, a) {
                t.filter += " contrast(".concat(a, "%)");
            },
            "data-lax-hue-rotate": function(t, a) {
                t.filter += " hue-rotate(".concat(a, "deg)");
            },
            "data-lax-blur": function(t, a) {
                t.filter += " blur(".concat(a, "px)");
            },
            "data-lax-invert": function(t, a) {
                t.filter += "  invert(".concat(a, "%)");
            },
            "data-lax-saturate": function(t, a) {
                t.filter += "  saturate(".concat(a, "%)");
            },
            "data-lax-grayscale": function(t, a) {
                t.filter += "  grayscale(".concat(a, "%)");
            },
            "data-lax-bg-pos": function(t, a) {
                t.backgroundPosition = "".concat(a, "px ").concat(a, "px");
            },
            "data-lax-bg-pos-x": function(t, a) {
                t.backgroundPositionX = "".concat(a, "px");
            },
            "data-lax-bg-pos-y": function(t, a) {
                t.backgroundPositionY = "".concat(a, "px");
            }
        }, _crazy = "", i = 0; i < 20; i++)_crazy += " " + 5 * i + " " + 47 * i % 360 + ", ";
        function intrp(t, a) {
            for(var n = 0; t[n][0] <= a && (void 0) !== t[n + 1];)n += 1;
            var e = t[n][0], r = (void 0) === t[n - 1] ? e : t[n - 1][0], o = t[n][1], l = (void 0) === t[n - 1] ? o : t[n - 1][1];
            return Math.min(Math.max((a - r) / (e - r), 0), 1) * (o - l) + l;
        }
        function fnOrVal(s) {
            return "(" === s[0] ? eval(s) : parseFloat(s);
        }
        return lax1.presets = {
            linger: function(t) {
                return {
                    "data-lax-translate-y": "(vh*0.7) 0, 0 200, -500 0"
                };
            },
            lazy: function(t) {
                return {
                    "data-lax-translate-y": "(vh) 0, (-elh) ".concat(0 < arguments.length && (void 0) !== t ? t : 100)
                };
            },
            eager: function(t) {
                return {
                    "data-lax-translate-y": "(vh) 0, (-elh) -".concat(0 < arguments.length && (void 0) !== t ? t : 100)
                };
            },
            slalom: function(t) {
                var a = 0 < arguments.length && (void 0) !== t ? t : 50;
                return {
                    "data-lax-translate-x": "vh ".concat(a, ", (vh*0.8) ").concat(-a, ", (vh*0.6) ").concat(a, ", (vh*0.4) ").concat(-a, ", (vh*0.2) ").concat(a, ", (vh*0) ").concat(-a, ", (-elh) ").concat(a)
                };
            },
            crazy: function(t) {
                return {
                    "data-lax-hue-rotate": "".concat(_crazy, " | loop=20")
                };
            },
            spin: function(t) {
                return {
                    "data-lax-rotate": "(vh) 0, (-elh) ".concat(0 < arguments.length && (void 0) !== t ? t : 360)
                };
            },
            spinRev: function(t) {
                return {
                    "data-lax-rotate": "(vh) 0, (-elh) ".concat(-(0 < arguments.length && (void 0) !== t ? t : 360))
                };
            },
            spinIn: function(t) {
                return {
                    "data-lax-rotate": "vh ".concat(0 < arguments.length && (void 0) !== t ? t : 360, ", (vh*0.5) 0")
                };
            },
            spinOut: function(t) {
                return {
                    "data-lax-rotate": "(vh*0.5) 0, -elh ".concat(0 < arguments.length && (void 0) !== t ? t : 360)
                };
            },
            blurInOut: function(t) {
                var a = 0 < arguments.length && (void 0) !== t ? t : 40;
                return {
                    "data-lax-blur": "(vh) ".concat(a, ", (vh*0.8) 0, (vh*0.2) 0, 0 ").concat(a)
                };
            },
            blurIn: function(t) {
                return {
                    "data-lax-blur": "(vh) ".concat(0 < arguments.length && (void 0) !== t ? t : 40, ", (vh*0.7) 0")
                };
            },
            blurOut: function(t) {
                return {
                    "data-lax-blur": "(vh*0.3) 0, 0 ".concat(0 < arguments.length && (void 0) !== t ? t : 40)
                };
            },
            fadeInOut: function() {
                return {
                    "data-lax-opacity": "(vh) 0, (vh*0.8) 1, (vh*0.2) 1, 0 0"
                };
            },
            fadeIn: function() {
                return {
                    "data-lax-opacity": "(vh) 0, (vh*0.7) 1"
                };
            },
            fadeOut: function() {
                return {
                    "data-lax-opacity": "(vh*0.3) 1, 0 0"
                };
            },
            driftLeft: function(t) {
                var a = 0 < arguments.length && (void 0) !== t ? t : 100;
                return {
                    "data-lax-translate-x": "vh ".concat(a, ", -elh ").concat(-a)
                };
            },
            driftRight: function(t) {
                var a = 0 < arguments.length && (void 0) !== t ? t : 100;
                return {
                    "data-lax-translate-x": "vh ".concat(-a, ", -elh ").concat(a)
                };
            },
            leftToRight: function(t) {
                return {
                    "data-lax-translate-x": "vh 0, -elh (vw*".concat(0 < arguments.length && (void 0) !== t ? t : 1, ")")
                };
            },
            rightToLeft: function(t) {
                return {
                    "data-lax-translate-x": "vh 0, -elh (vw*".concat(-(0 < arguments.length && (void 0) !== t ? t : 1), ")")
                };
            },
            zoomInOut: function(t) {
                var a = 0 < arguments.length && (void 0) !== t ? t : 0.2;
                return {
                    "data-lax-scale": "(vh) ".concat(a, ", (vh*0.8) 1, (vh*0.2) 1, -elh ").concat(a)
                };
            },
            zoomIn: function(t) {
                return {
                    "data-lax-scale": "(vh) ".concat(0 < arguments.length && (void 0) !== t ? t : 0.2, ", (vh*0.7) 1")
                };
            },
            zoomOut: function(t) {
                return {
                    "data-lax-scale": "(vh*0.3) 1, -elh ".concat(0 < arguments.length && (void 0) !== t ? t : 0.2)
                };
            },
            speedy: function(t) {
                var a = 0 < arguments.length && (void 0) !== t ? t : 30;
                return {
                    "data-lax-skew-x": "(vh) ".concat(a, ", -elh ").concat(-a)
                };
            },
            swing: function(t) {
                var a = 0 < arguments.length && (void 0) !== t ? t : 30;
                return {
                    "data-lax-skew-y": "(vh) ".concat(a, ", -elh ").concat(-a)
                };
            }
        }, lax1.addPreset = function(t, a) {
            lax1.presets[t] = a;
        }, lax1.setup = function() {
            var t = 0 < arguments.length && (void 0) !== arguments[0] ? arguments[0] : {
            };
            lax1.breakpoints = t.breakpoints || {
            }, lax1.selector = t.selector || ".lax", lax1.populateElements();
        }, lax1.removeElement = function(a) {
            var t = lax1.elements.findIndex(function(t1) {
                return t1.el = a;
            });
            -1 < t && lax1.elements.splice(t, 1);
        }, lax1.createLaxObject = function(t) {
            return {
                el: t,
                originalStyle: {
                    transform: t.style.transform,
                    filter: t.style.filter
                },
                transforms: {
                }
            };
        }, lax1.calcTransforms = function(l) {
            for(var i1 = l.el, r = [], t = 0; t < i1.attributes.length; t++){
                var a = i1.attributes[t];
                -1 < a.name.indexOf("data-lax-preset") && r.push(a);
            }
            for(var n = function(t1) {
                var a = r[t1], n1 = a.name.split(breakpointsSeparator), o = n1[1] ? "".concat(breakpointsSeparator).concat(n1[1]) : "";
                a.value.split(" ").forEach(function(t2) {
                    var a1 = t2.split("-"), n2 = lax1.presets[a1[0]];
                    if (n2) {
                        var e = n2(a1[1]);
                        for(var r1 in e)i1.setAttribute("".concat(r1).concat(o), e[r1]);
                    } else console.log("lax error: preset ".concat(a1[0], " is not defined"));
                });
                var e = i1.getAttribute("data-lax-anchor");
                e && "" !== e || i1.setAttribute("data-lax-anchor", "self"), i1.attributes.removeNamedItem(a.name);
            }, e = 0; e < r.length; e++)n(e);
            if (!(i1.attributes["data-lax-use-gpu"] && "false" === i1.attributes["data-lax-use-gpu"].value) && (i1.style["backface-visibility"] = "hidden", i1.style["-webkit-backface-visibility"] = "hidden"), i1.attributes["data-lax-use-gpu"] && i1.attributes.removeNamedItem("data-lax-use-gpu"), l.optimise = false, i1.attributes["data-lax-optimize"] && "true" === i1.attributes["data-lax-optimize"].value) {
                l.optimise = true;
                var o = i1.getBoundingClientRect();
                i1.setAttribute("data-lax-opacity", "".concat(-o.height - 1, " 0, ").concat(-o.height, " 1, ").concat(window.innerHeight, " 1, ").concat(window.innerHeight + 1, " 0")), i1.attributes.removeNamedItem("data-lax-optimize");
            }
            for(var c = 0; c < i1.attributes.length; c++){
                var s = i1.attributes[c];
                if (!(s.name.indexOf("data-lax") < 0)) {
                    var u = s.name.split(breakpointsSeparator), f = u[0].split("-"), d = u[1] || "default";
                    if ("lax" === f[1]) {
                        if ("data-lax-anchor" === s.name) {
                            l["data-lax-anchor"] = "self" === s.value ? i1 : document.querySelector(s.value);
                            var x = l["data-lax-anchor"].getBoundingClientRect();
                            l.anchorTop = Math.floor(x.top) + window.scrollY;
                        } else (function() {
                            var t1 = _slicedToArray(s.value.replace(/vw/g, window.innerWidth).replace(/vh/g, window.innerHeight).replace(/elh/g, i1.clientHeight).replace(/elw/g, i1.clientWidth).replace(/\s+/g, " ").split("|"), 2), a = t1[0], n1 = t1[1], r2 = {
                            };
                            n1 && n1.split(" ").forEach(function(t2) {
                                var a1 = _slicedToArray(t2.split("="), 2), n2 = a1[0], e1 = a1[1];
                                r2[n2] = n2 && fnOrVal(e1);
                            });
                            var e1 = u[0], o = a.split(",").map(function(t2) {
                                return t2.trim().split(" ").map(fnOrVal);
                            }).sort(function(t2, a1) {
                                return t2[0] - a1[0];
                            });
                            l.transforms[e1] || (l.transforms[e1] = {
                            }), l.transforms[e1][d] = {
                                valueMap: o,
                                options: r2
                            };
                        })();
                    }
                }
            }
            var v = i1.attributes["data-lax-sprite-data"] && i1.attributes["data-lax-sprite-data"].value;
            if (v) {
                l.spriteData = v.split(",").map(function(t1) {
                    return parseInt(t1);
                }), i1.style.height = l.spriteData[1] + "px", i1.style.width = l.spriteData[0] + "px";
                var p = i1.attributes["data-lax-sprite-image"] && i1.attributes["data-lax-sprite-image"].value;
                p && (i1.style.backgroundImage = "url(".concat(p, ")"));
            }
            return l;
        }, lax1.addElement = function(t) {
            var a = lax1.calcTransforms(lax1.createLaxObject(t));
            lax1.elements.push(a), lax1.updateElement(a);
        }, lax1.populateElements = function() {
            lax1.elements = [], document.querySelectorAll(lax1.selector).forEach(lax1.addElement), currentBreakpoint = lax1.getCurrentBreakPoint();
        }, lax1.updateElements = function() {
            lax1.elements.forEach(function(t) {
                lax1.calcTransforms(t), lax1.updateElement(t);
            }), currentBreakpoint = lax1.getCurrentBreakPoint();
        }, lax1.getCurrentBreakPoint = function() {
            var t = "default", a = window.innerWidth;
            for(var n in lax1.breakpoints){
                if (!(parseFloat(lax1.breakpoints[n]) <= a)) break;
                t = n;
            }
            return t;
        }, lax1.updateElement = function(t) {
            var a = t.originalStyle, n = t.anchorTop, e = t.transforms, r2 = t.spriteData, o = t.el, l = n ? n - lastY : lastY, i1 = {
                transform: a.transform,
                filter: a.filter
            };
            for(var c in e){
                var s = e[c][currentBreakpoint] || e[c].default;
                if (s) {
                    var u = l;
                    s.options.offset && (u += s.options.offset), s.options.speed && (u *= s.options.speed), s.options.loop && (u %= s.options.loop);
                    var f = transformFns[c], d = intrp(s.valueMap, u);
                    f && f(i1, d);
                }
            }
            if (r2) {
                var x = _slicedToArray(r2, 5), v = x[0], p = x[1], h = x[2], m = x[3], g = x[4], b = Math.floor(lastY / g) % h, y = b % m, k = Math.floor(b / m);
                i1.backgroundPosition = "-".concat(y * v, "px -").concat(k * p, "px");
            }
            if (0 === i1.opacity) o.style.opacity = 0;
            else for(var w in i1)o.style[w] = i1[w];
        }, lax1.update = function(t) {
            lastY !== t && (lastY = t, lax1.elements.forEach(lax1.updateElement));
        }, lax1;
    }();
    "undefined" != typeof module && (void 0) !== module.exports ? module.exports = lax : window.lax = lax;
})();

},{}]},["7x9W3","53j3v"], "53j3v", "parcelRequire6961")

//# sourceMappingURL=index.e745b402.js.map
