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
})({"6HDcz":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "608c0b79fd91ec0ed80fb72cf54124c8"; // @flow
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

},{}],"465F6":[function(require,module,exports) {
(function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
})(this, function() {
    "use strict";
    function e(e1, t) {
        for(var a = 0; a < t.length; a++){
            var i = t[a];
            i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(e1, i.key, i);
        }
    }
    function t() {
        return (t = Object.assign || function(e1) {
            for(var t1 = 1; t1 < arguments.length; t1++){
                var a = arguments[t1];
                for(var i in a)Object.prototype.hasOwnProperty.call(a, i) && (e1[i] = a[i]);
            }
            return e1;
        }).apply(this, arguments);
    }
    function a1(e1) {
        return null !== e1 && "object" == typeof e1 && "constructor" in e1 && e1.constructor === Object;
    }
    function i1(e1, t1) {
        (void 0) === e1 && (e1 = {
        }), (void 0) === t1 && (t1 = {
        }), Object.keys(t1).forEach(function(s) {
            (void 0) === e1[s] ? e1[s] = t1[s] : a1(t1[s]) && a1(e1[s]) && Object.keys(t1[s]).length > 0 && i1(e1[s], t1[s]);
        });
    }
    var s = {
        body: {
        },
        addEventListener: function() {
        },
        removeEventListener: function() {
        },
        activeElement: {
            blur: function() {
            },
            nodeName: ""
        },
        querySelector: function() {
            return null;
        },
        querySelectorAll: function() {
            return [];
        },
        getElementById: function() {
            return null;
        },
        createEvent: function() {
            return {
                initEvent: function() {
                }
            };
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {
                },
                setAttribute: function() {
                },
                getElementsByTagName: function() {
                    return [];
                }
            };
        },
        createElementNS: function() {
            return {
            };
        },
        importNode: function() {
            return null;
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function r() {
        var e1 = "undefined" != typeof document ? document : {
        };
        return i1(e1, s), e1;
    }
    var n = {
        document: s,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState: function() {
            },
            pushState: function() {
            },
            go: function() {
            },
            back: function() {
            }
        },
        CustomEvent: function() {
            return this;
        },
        addEventListener: function() {
        },
        removeEventListener: function() {
        },
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return "";
                }
            };
        },
        Image: function() {
        },
        Date: function() {
        },
        screen: {
        },
        setTimeout: function() {
        },
        clearTimeout: function() {
        },
        matchMedia: function() {
            return {
            };
        },
        requestAnimationFrame: function(e1) {
            return "undefined" == typeof setTimeout ? (e1(), null) : setTimeout(e1, 0);
        },
        cancelAnimationFrame: function(e1) {
            "undefined" != typeof setTimeout && clearTimeout(e1);
        }
    };
    function l() {
        var e1 = "undefined" != typeof window ? window : {
        };
        return i1(e1, n), e1;
    }
    function o(e1) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e2) {
            return e2.__proto__ || Object.getPrototypeOf(e2);
        })(e1);
    }
    function d(e1, t1) {
        return (d = Object.setPrototypeOf || function(e2, t2) {
            return e2.__proto__ = t2, e2;
        })(e1, t1);
    }
    function p() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if ("function" == typeof Proxy) return true;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            })), true;
        } catch (e1) {
            return false;
        }
    }
    function u(e1, t1, a1) {
        return (u = p() ? Reflect.construct : function(e2, t2, a2) {
            var i1 = [
                null
            ];
            i1.push.apply(i1, t2);
            var s1 = new (Function.bind.apply(e2, i1));
            return a2 && d(s1, a2.prototype), s1;
        }).apply(null, arguments);
    }
    function c(e1) {
        var t1 = "function" == typeof Map ? new Map : void 0;
        return (c = function(e2) {
            if (null === e2 || (a2 = e2, -1 === Function.toString.call(a2).indexOf("[native code]"))) return e2;
            var a2;
            if ("function" != typeof e2) throw new TypeError("Super expression must either be null or a function");
            if ((void 0) !== t1) {
                if (t1.has(e2)) return t1.get(e2);
                t1.set(e2, i2);
            }
            function i2() {
                return u(e2, arguments, o(this).constructor);
            }
            return i2.prototype = Object.create(e2.prototype, {
                constructor: {
                    value: i2,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            }), d(i2, e2);
        })(e1);
    }
    var h = function(e1) {
        var t1, a2;
        function i2(t2) {
            var a3, i3, s1;
            return a3 = e1.call.apply(e1, [
                this
            ].concat(t2)) || this, i3 = (function(e2) {
                if ((void 0) === e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e2;
            })(a3), s1 = i3.__proto__, Object.defineProperty(i3, "__proto__", {
                get: function() {
                    return s1;
                },
                set: function(e2) {
                    s1.__proto__ = e2;
                }
            }), a3;
        }
        return a2 = e1, (t1 = i2).prototype = Object.create(a2.prototype), t1.prototype.constructor = t1, t1.__proto__ = a2, i2;
    }(c(Array));
    function v(e1) {
        (void 0) === e1 && (e1 = []);
        var t1 = [];
        return e1.forEach(function(e2) {
            Array.isArray(e2) ? t1.push.apply(t1, v(e2)) : t1.push(e2);
        }), t1;
    }
    function f(e1, t1) {
        return Array.prototype.filter.call(e1, t1);
    }
    function m(e1, t1) {
        var a2 = l(), i2 = r(), s1 = [];
        if (!t1 && e1 instanceof h) return e1;
        if (!e1) return new h(s1);
        if ("string" == typeof e1) {
            var n1 = e1.trim();
            if (n1.indexOf("<") >= 0 && n1.indexOf(">") >= 0) {
                var o1 = "div";
                0 === n1.indexOf("<li") && (o1 = "ul"), 0 === n1.indexOf("<tr") && (o1 = "tbody"), 0 !== n1.indexOf("<td") && 0 !== n1.indexOf("<th") || (o1 = "tr"), 0 === n1.indexOf("<tbody") && (o1 = "table"), 0 === n1.indexOf("<option") && (o1 = "select");
                var d1 = i2.createElement(o1);
                d1.innerHTML = n1;
                for(var p1 = 0; p1 < d1.childNodes.length; p1 += 1)s1.push(d1.childNodes[p1]);
            } else s1 = (function(e2, t2) {
                if ("string" != typeof e2) return [
                    e2
                ];
                for(var a3 = [], i3 = t2.querySelectorAll(e2), s2 = 0; s2 < i3.length; s2 += 1)a3.push(i3[s2]);
                return a3;
            })(e1.trim(), t1 || i2);
        } else if (e1.nodeType || e1 === a2 || e1 === i2) s1.push(e1);
        else if (Array.isArray(e1)) {
            if (e1 instanceof h) return e1;
            s1 = e1;
        }
        return new h(function(e2) {
            for(var t2 = [], a3 = 0; a3 < e2.length; a3 += 1)-1 === t2.indexOf(e2[a3]) && t2.push(e2[a3]);
            return t2;
        }(s1));
    }
    m.fn = h.prototype;
    var g, y, w, b = {
        addClass: function() {
            for(var e1 = arguments.length, t1 = new Array(e1), a2 = 0; a2 < e1; a2++)t1[a2] = arguments[a2];
            var i2 = v(t1.map(function(e2) {
                return e2.split(" ");
            }));
            return this.forEach(function(e2) {
                var t2;
                (t2 = e2.classList).add.apply(t2, i2);
            }), this;
        },
        removeClass: function() {
            for(var e1 = arguments.length, t1 = new Array(e1), a2 = 0; a2 < e1; a2++)t1[a2] = arguments[a2];
            var i2 = v(t1.map(function(e2) {
                return e2.split(" ");
            }));
            return this.forEach(function(e2) {
                var t2;
                (t2 = e2.classList).remove.apply(t2, i2);
            }), this;
        },
        hasClass: function() {
            for(var e1 = arguments.length, t1 = new Array(e1), a2 = 0; a2 < e1; a2++)t1[a2] = arguments[a2];
            var i2 = v(t1.map(function(e2) {
                return e2.split(" ");
            }));
            return f(this, function(e2) {
                return i2.filter(function(t2) {
                    return e2.classList.contains(t2);
                }).length > 0;
            }).length > 0;
        },
        toggleClass: function() {
            for(var e1 = arguments.length, t1 = new Array(e1), a2 = 0; a2 < e1; a2++)t1[a2] = arguments[a2];
            var i2 = v(t1.map(function(e2) {
                return e2.split(" ");
            }));
            this.forEach(function(e2) {
                i2.forEach(function(t2) {
                    e2.classList.toggle(t2);
                });
            });
        },
        attr: function(e1, t1) {
            if (1 === arguments.length && "string" == typeof e1) return this[0] ? this[0].getAttribute(e1) : void 0;
            for(var a2 = 0; a2 < this.length; a2 += 1)if (2 === arguments.length) this[a2].setAttribute(e1, t1);
            else for(var i2 in e1)this[a2][i2] = e1[i2], this[a2].setAttribute(i2, e1[i2]);
            return this;
        },
        removeAttr: function(e1) {
            for(var t1 = 0; t1 < this.length; t1 += 1)this[t1].removeAttribute(e1);
            return this;
        },
        transform: function(e1) {
            for(var t1 = 0; t1 < this.length; t1 += 1)this[t1].style.transform = e1;
            return this;
        },
        transition: function(e1) {
            for(var t1 = 0; t1 < this.length; t1 += 1)this[t1].style.transitionDuration = "string" != typeof e1 ? e1 + "ms" : e1;
            return this;
        },
        on: function() {
            for(var e1 = arguments.length, t1 = new Array(e1), a2 = 0; a2 < e1; a2++)t1[a2] = arguments[a2];
            var i2 = t1[0], s1 = t1[1], r1 = t1[2], n2 = t1[3];
            function l1(e2) {
                var t2 = e2.target;
                if (t2) {
                    var a3 = e2.target.dom7EventData || [];
                    if (a3.indexOf(e2) < 0 && a3.unshift(e2), m(t2).is(s1)) r1.apply(t2, a3);
                    else for(var i3 = m(t2).parents(), n3 = 0; n3 < i3.length; n3 += 1)m(i3[n3]).is(s1) && r1.apply(i3[n3], a3);
                }
            }
            function o2(e2) {
                var t2 = e2 && e2.target && e2.target.dom7EventData || [];
                t2.indexOf(e2) < 0 && t2.unshift(e2), r1.apply(this, t2);
            }
            "function" == typeof t1[1] && (i2 = t1[0], r1 = t1[1], n2 = t1[2], s1 = void 0), n2 || (n2 = false);
            for(var d2, p2 = i2.split(" "), u1 = 0; u1 < this.length; u1 += 1){
                var c1 = this[u1];
                if (s1) for(d2 = 0; d2 < p2.length; d2 += 1){
                    var h1 = p2[d2];
                    c1.dom7LiveListeners || (c1.dom7LiveListeners = {
                    }), c1.dom7LiveListeners[h1] || (c1.dom7LiveListeners[h1] = []), c1.dom7LiveListeners[h1].push({
                        listener: r1,
                        proxyListener: l1
                    }), c1.addEventListener(h1, l1, n2);
                }
                else for(d2 = 0; d2 < p2.length; d2 += 1){
                    var v1 = p2[d2];
                    c1.dom7Listeners || (c1.dom7Listeners = {
                    }), c1.dom7Listeners[v1] || (c1.dom7Listeners[v1] = []), c1.dom7Listeners[v1].push({
                        listener: r1,
                        proxyListener: o2
                    }), c1.addEventListener(v1, o2, n2);
                }
            }
            return this;
        },
        off: function() {
            for(var e1 = arguments.length, t1 = new Array(e1), a2 = 0; a2 < e1; a2++)t1[a2] = arguments[a2];
            var i2 = t1[0], s1 = t1[1], r1 = t1[2], n2 = t1[3];
            "function" == typeof t1[1] && (i2 = t1[0], r1 = t1[1], n2 = t1[2], s1 = void 0), n2 || (n2 = false);
            for(var l1 = i2.split(" "), o2 = 0; o2 < l1.length; o2 += 1)for(var d2 = l1[o2], p2 = 0; p2 < this.length; p2 += 1){
                var u1 = this[p2], c2 = void 0;
                if (!s1 && u1.dom7Listeners ? c2 = u1.dom7Listeners[d2] : s1 && u1.dom7LiveListeners && (c2 = u1.dom7LiveListeners[d2]), c2 && c2.length) for(var h2 = c2.length - 1; h2 >= 0; h2 -= 1){
                    var v2 = c2[h2];
                    r1 && v2.listener === r1 || r1 && v2.listener && v2.listener.dom7proxy && v2.listener.dom7proxy === r1 ? (u1.removeEventListener(d2, v2.proxyListener, n2), c2.splice(h2, 1)) : r1 || (u1.removeEventListener(d2, v2.proxyListener, n2), c2.splice(h2, 1));
                }
            }
            return this;
        },
        trigger: function() {
            for(var e1 = l(), t1 = arguments.length, a2 = new Array(t1), i2 = 0; i2 < t1; i2++)a2[i2] = arguments[i2];
            for(var s1 = a2[0].split(" "), r1 = a2[1], n2 = 0; n2 < s1.length; n2 += 1)for(var o2 = s1[n2], d2 = 0; d2 < this.length; d2 += 1){
                var p2 = this[d2];
                if (e1.CustomEvent) {
                    var u2 = new e1.CustomEvent(o2, {
                        detail: r1,
                        bubbles: true,
                        cancelable: true
                    });
                    p2.dom7EventData = a2.filter(function(e2, t2) {
                        return t2 > 0;
                    }), p2.dispatchEvent(u2), p2.dom7EventData = [], delete p2.dom7EventData;
                }
            }
            return this;
        },
        transitionEnd: function(e1) {
            var t1 = this;
            return e1 && t1.on("transitionend", function a2(i2) {
                i2.target === this && (e1.call(this, i2), t1.off("transitionend", a2));
            }), this;
        },
        outerWidth: function(e1) {
            if (this.length > 0) {
                if (e1) {
                    var t1 = this.styles();
                    return this[0].offsetWidth + parseFloat(t1.getPropertyValue("margin-right")) + parseFloat(t1.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        },
        outerHeight: function(e1) {
            if (this.length > 0) {
                if (e1) {
                    var t2 = this.styles();
                    return this[0].offsetHeight + parseFloat(t2.getPropertyValue("margin-top")) + parseFloat(t2.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        },
        styles: function() {
            var e1 = l();
            return this[0] ? e1.getComputedStyle(this[0], null) : {
            };
        },
        offset: function() {
            if (this.length > 0) {
                var e1 = l(), t3 = r(), a2 = this[0], i2 = a2.getBoundingClientRect(), s1 = t3.body, n2 = a2.clientTop || s1.clientTop || 0, o2 = a2.clientLeft || s1.clientLeft || 0, d2 = a2 === e1 ? e1.scrollY : a2.scrollTop, p3 = a2 === e1 ? e1.scrollX : a2.scrollLeft;
                return {
                    top: i2.top + d2 - n2,
                    left: i2.left + p3 - o2
                };
            }
            return null;
        },
        css: function(e2, t4) {
            var a4, i4 = l();
            if (1 === arguments.length) {
                if ("string" != typeof e2) {
                    for(a4 = 0; a4 < this.length; a4 += 1)for(var s2 in e2)this[a4].style[s2] = e2[s2];
                    return this;
                }
                if (this[0]) return i4.getComputedStyle(this[0], null).getPropertyValue(e2);
            }
            if (2 === arguments.length && "string" == typeof e2) {
                for(a4 = 0; a4 < this.length; a4 += 1)this[a4].style[e2] = t4;
                return this;
            }
            return this;
        },
        each: function(e2) {
            return e2 ? (this.forEach(function(t4, a4) {
                e2.apply(t4, [
                    t4,
                    a4
                ]);
            }), this) : this;
        },
        html: function(e2) {
            if ((void 0) === e2) return this[0] ? this[0].innerHTML : null;
            for(var t4 = 0; t4 < this.length; t4 += 1)this[t4].innerHTML = e2;
            return this;
        },
        text: function(e2) {
            if ((void 0) === e2) return this[0] ? this[0].textContent.trim() : null;
            for(var t4 = 0; t4 < this.length; t4 += 1)this[t4].textContent = e2;
            return this;
        },
        is: function(e2) {
            var t4, a4, i4 = l(), s3 = r(), n4 = this[0];
            if (!n4 || (void 0) === e2) return false;
            if ("string" == typeof e2) {
                if (n4.matches) return n4.matches(e2);
                if (n4.webkitMatchesSelector) return n4.webkitMatchesSelector(e2);
                if (n4.msMatchesSelector) return n4.msMatchesSelector(e2);
                for(t4 = m(e2), a4 = 0; a4 < t4.length; a4 += 1)if (t4[a4] === n4) return true;
                return false;
            }
            if (e2 === s3) return n4 === s3;
            if (e2 === i4) return n4 === i4;
            if (e2.nodeType || e2 instanceof h) {
                for(t4 = e2.nodeType ? [
                    e2
                ] : e2, a4 = 0; a4 < t4.length; a4 += 1)if (t4[a4] === n4) return true;
                return false;
            }
            return false;
        },
        index: function() {
            var e2, t4 = this[0];
            if (t4) {
                for(e2 = 0; null !== (t4 = t4.previousSibling);)1 === t4.nodeType && (e2 += 1);
                return e2;
            }
        },
        eq: function(e2) {
            if ((void 0) === e2) return this;
            var t4 = this.length;
            if (e2 > t4 - 1) return m([]);
            if (e2 < 0) {
                var a4 = t4 + e2;
                return m(a4 < 0 ? [] : [
                    this[a4]
                ]);
            }
            return m([
                this[e2]
            ]);
        },
        append: function() {
            for(var e2, t4 = r(), a5 = 0; a5 < arguments.length; a5 += 1){
                e2 = a5 < 0 || arguments.length <= a5 ? void 0 : arguments[a5];
                for(var i4 = 0; i4 < this.length; i4 += 1)if ("string" == typeof e2) {
                    var s3 = t4.createElement("div");
                    for(s3.innerHTML = e2; s3.firstChild;)this[i4].appendChild(s3.firstChild);
                } else if (e2 instanceof h) for(var n4 = 0; n4 < e2.length; n4 += 1)this[i4].appendChild(e2[n4]);
                else this[i4].appendChild(e2);
            }
            return this;
        },
        prepend: function(e2) {
            var t4, a5, i5 = r();
            for(t4 = 0; t4 < this.length; t4 += 1)if ("string" == typeof e2) {
                var s4 = i5.createElement("div");
                for(s4.innerHTML = e2, a5 = s4.childNodes.length - 1; a5 >= 0; a5 -= 1)this[t4].insertBefore(s4.childNodes[a5], this[t4].childNodes[0]);
            } else if (e2 instanceof h) for(a5 = 0; a5 < e2.length; a5 += 1)this[t4].insertBefore(e2[a5], this[t4].childNodes[0]);
            else this[t4].insertBefore(e2, this[t4].childNodes[0]);
            return this;
        },
        next: function(e2) {
            return this.length > 0 ? e2 ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e2) ? m([
                this[0].nextElementSibling
            ]) : m([]) : this[0].nextElementSibling ? m([
                this[0].nextElementSibling
            ]) : m([]) : m([]);
        },
        nextAll: function(e2) {
            var t4 = [], a5 = this[0];
            if (!a5) return m([]);
            for(; a5.nextElementSibling;){
                var i5 = a5.nextElementSibling;
                e2 ? m(i5).is(e2) && t4.push(i5) : t4.push(i5), a5 = i5;
            }
            return m(t4);
        },
        prev: function(e2) {
            if (this.length > 0) {
                var t4 = this[0];
                return e2 ? t4.previousElementSibling && m(t4.previousElementSibling).is(e2) ? m([
                    t4.previousElementSibling
                ]) : m([]) : t4.previousElementSibling ? m([
                    t4.previousElementSibling
                ]) : m([]);
            }
            return m([]);
        },
        prevAll: function(e2) {
            var t5 = [], a5 = this[0];
            if (!a5) return m([]);
            for(; a5.previousElementSibling;){
                var i6 = a5.previousElementSibling;
                e2 ? m(i6).is(e2) && t5.push(i6) : t5.push(i6), a5 = i6;
            }
            return m(t5);
        },
        parent: function(e2) {
            for(var t5 = [], a5 = 0; a5 < this.length; a5 += 1)null !== this[a5].parentNode && (e2 ? m(this[a5].parentNode).is(e2) && t5.push(this[a5].parentNode) : t5.push(this[a5].parentNode));
            return m(t5);
        },
        parents: function(e2) {
            for(var t5 = [], a5 = 0; a5 < this.length; a5 += 1)for(var i7 = this[a5].parentNode; i7;)e2 ? m(i7).is(e2) && t5.push(i7) : t5.push(i7), i7 = i7.parentNode;
            return m(t5);
        },
        closest: function(e2) {
            var t5 = this;
            return (void 0) === e2 ? m([]) : (t5.is(e2) || (t5 = t5.parents(e2).eq(0)), t5);
        },
        find: function(e2) {
            for(var t5 = [], a5 = 0; a5 < this.length; a5 += 1)for(var i7 = this[a5].querySelectorAll(e2), s5 = 0; s5 < i7.length; s5 += 1)t5.push(i7[s5]);
            return m(t5);
        },
        children: function(e2) {
            for(var t5 = [], a5 = 0; a5 < this.length; a5 += 1)for(var i7 = this[a5].children, s5 = 0; s5 < i7.length; s5 += 1)e2 && !m(i7[s5]).is(e2) || t5.push(i7[s5]);
            return m(t5);
        },
        filter: function(e2) {
            return m(f(this, e2));
        },
        remove: function() {
            for(var e2 = 0; e2 < this.length; e2 += 1)this[e2].parentNode && this[e2].parentNode.removeChild(this[e2]);
            return this;
        }
    };
    function E(e2, t5) {
        return (void 0) === t5 && (t5 = 0), setTimeout(e2, t5);
    }
    function x() {
        return Date.now();
    }
    function T(e2, t5) {
        (void 0) === t5 && (t5 = "x");
        var a5, i7, s5, r1 = l(), n5 = r1.getComputedStyle(e2, null);
        return r1.WebKitCSSMatrix ? ((i7 = n5.transform || n5.webkitTransform).split(",").length > 6 && (i7 = i7.split(", ").map(function(e3) {
            return e3.replace(",", ".");
        }).join(", ")), s5 = new r1.WebKitCSSMatrix("none" === i7 ? "" : i7)) : a5 = (s5 = n5.MozTransform || n5.OTransform || n5.MsTransform || n5.msTransform || n5.transform || n5.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t5 && (i7 = r1.WebKitCSSMatrix ? s5.m41 : 16 === a5.length ? parseFloat(a5[12]) : parseFloat(a5[4])), "y" === t5 && (i7 = r1.WebKitCSSMatrix ? s5.m42 : 16 === a5.length ? parseFloat(a5[13]) : parseFloat(a5[5])), i7 || 0;
    }
    function C(e2) {
        return "object" == typeof e2 && null !== e2 && e2.constructor && e2.constructor === Object;
    }
    function S() {
        for(var e2 = Object(arguments.length <= 0 ? void 0 : arguments[0]), t5 = 1; t5 < arguments.length; t5 += 1){
            var a5 = t5 < 0 || arguments.length <= t5 ? void 0 : arguments[t5];
            if (null != a5) for(var i7 = Object.keys(Object(a5)), s5 = 0, r1 = i7.length; s5 < r1; s5 += 1){
                var n5 = i7[s5], l1 = Object.getOwnPropertyDescriptor(a5, n5);
                (void 0) !== l1 && l1.enumerable && (C(e2[n5]) && C(a5[n5]) ? S(e2[n5], a5[n5]) : !C(e2[n5]) && C(a5[n5]) ? (e2[n5] = {
                }, S(e2[n5], a5[n5])) : e2[n5] = a5[n5]);
            }
        }
        return e2;
    }
    function M(e2, t5) {
        Object.keys(t5).forEach(function(a6) {
            C(t5[a6]) && Object.keys(t5[a6]).forEach(function(i8) {
                "function" == typeof t5[a6][i8] && (t5[a6][i8] = t5[a6][i8].bind(e2));
            }), e2[a6] = t5[a6];
        });
    }
    function z() {
        return g || (g = (function() {
            var e2 = l(), t5 = r();
            return {
                touch: !!("ontouchstart" in e2 || e2.DocumentTouch && t5 instanceof e2.DocumentTouch),
                pointerEvents: !!e2.PointerEvent && "maxTouchPoints" in e2.navigator && e2.navigator.maxTouchPoints >= 0,
                observer: "MutationObserver" in e2 || "WebkitMutationObserver" in e2,
                passiveListener: (function() {
                    var t6 = false;
                    try {
                        var a6 = Object.defineProperty({
                        }, "passive", {
                            get: function() {
                                t6 = true;
                            }
                        });
                        e2.addEventListener("testPassiveListener", null, a6);
                    } catch (e3) {
                    }
                    return t6;
                })(),
                gestures: "ongesturestart" in e2
            };
        })()), g;
    }
    function P(e2) {
        return (void 0) === e2 && (e2 = {
        }), y || (y = (function(e3) {
            var t5 = ((void 0) === e3 ? {
            } : e3).userAgent, a6 = z(), i8 = l(), s6 = i8.navigator.platform, r2 = t5 || i8.navigator.userAgent, n6 = {
                ios: false,
                android: false
            }, o3 = i8.screen.width, d3 = i8.screen.height, p4 = r2.match(/(Android);?[\s\/]+([\d.]+)?/), u3 = r2.match(/(iPad).*OS\s([\d_]+)/), c3 = r2.match(/(iPod)(.*OS\s([\d_]+))?/), h3 = !u3 && r2.match(/(iPhone\sOS|iOS)\s([\d_]+)/), v3 = "Win32" === s6, f1 = "MacIntel" === s6;
            return !u3 && f1 && a6.touch && [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810"
            ].indexOf(o3 + "x" + d3) >= 0 && ((u3 = r2.match(/(Version)\/([\d.]+)/)) || (u3 = [
                0,
                1,
                "13_0_0"
            ]), f1 = false), p4 && !v3 && (n6.os = "android", n6.android = true), (u3 || h3 || c3) && (n6.os = "ios", n6.ios = true), n6;
        })(e2)), y;
    }
    function k() {
        return w || (w = (function() {
            var e2, t5 = l();
            return {
                isEdge: !!t5.navigator.userAgent.match(/Edge/g),
                isSafari: (e2 = t5.navigator.userAgent.toLowerCase(), e2.indexOf("safari") >= 0 && e2.indexOf("chrome") < 0 && e2.indexOf("android") < 0),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t5.navigator.userAgent)
            };
        })()), w;
    }
    Object.keys(b).forEach(function(e2) {
        m.fn[e2] = b[e2];
    });
    var L = {
        name: "resize",
        create: function() {
            var e2 = this;
            S(e2, {
                resize: {
                    resizeHandler: function() {
                        e2 && !e2.destroyed && e2.initialized && (e2.emit("beforeResize"), e2.emit("resize"));
                    },
                    orientationChangeHandler: function() {
                        e2 && !e2.destroyed && e2.initialized && e2.emit("orientationchange");
                    }
                }
            });
        },
        on: {
            init: function(e2) {
                var t5 = l();
                t5.addEventListener("resize", e2.resize.resizeHandler), t5.addEventListener("orientationchange", e2.resize.orientationChangeHandler);
            },
            destroy: function(e2) {
                var t5 = l();
                t5.removeEventListener("resize", e2.resize.resizeHandler), t5.removeEventListener("orientationchange", e2.resize.orientationChangeHandler);
            }
        }
    }, $ = {
        attach: function(e2, t5) {
            (void 0) === t5 && (t5 = {
            });
            var a6 = l(), i8 = this, s6 = new (a6.MutationObserver || a6.WebkitMutationObserver)(function(e3) {
                if (1 !== e3.length) {
                    var t6 = function() {
                        i8.emit("observerUpdate", e3[0]);
                    };
                    a6.requestAnimationFrame ? a6.requestAnimationFrame(t6) : a6.setTimeout(t6, 0);
                } else i8.emit("observerUpdate", e3[0]);
            });
            s6.observe(e2, {
                attributes: (void 0) === t5.attributes || t5.attributes,
                childList: (void 0) === t5.childList || t5.childList,
                characterData: (void 0) === t5.characterData || t5.characterData
            }), i8.observer.observers.push(s6);
        },
        init: function() {
            var e2 = this;
            if (e2.support.observer && e2.params.observer) {
                if (e2.params.observeParents) for(var t5 = e2.$el.parents(), a6 = 0; a6 < t5.length; a6 += 1)e2.observer.attach(t5[a6]);
                e2.observer.attach(e2.$el[0], {
                    childList: e2.params.observeSlideChildren
                }), e2.observer.attach(e2.$wrapperEl[0], {
                    attributes: false
                });
            }
        },
        destroy: function() {
            this.observer.observers.forEach(function(e2) {
                e2.disconnect();
            }), this.observer.observers = [];
        }
    }, I = {
        name: "observer",
        params: {
            observer: false,
            observeParents: false,
            observeSlideChildren: false
        },
        create: function() {
            M(this, {
                observer: t({
                }, $, {
                    observers: []
                })
            });
        },
        on: {
            init: function(e2) {
                e2.observer.init();
            },
            destroy: function(e2) {
                e2.observer.destroy();
            }
        }
    };
    function O(e2) {
        var t7 = this, a7 = r(), i8 = l(), s6 = t7.touchEventsData, n6 = t7.params, o3 = t7.touches;
        if (!t7.animating || !n6.preventInteractionOnTransition) {
            var d3 = e2;
            d3.originalEvent && (d3 = d3.originalEvent);
            var p4 = m(d3.target);
            if ("wrapper" !== n6.touchEventsTarget || p4.closest(t7.wrapperEl).length) {
                if (s6.isTouchEvent = "touchstart" === d3.type, s6.isTouchEvent || !("which" in d3) || 3 !== d3.which) {
                    if (!(!s6.isTouchEvent && "button" in d3 && d3.button > 0)) {
                        if (!s6.isTouched || !s6.isMoved) {
                            if (!!n6.noSwipingClass && "" !== n6.noSwipingClass && d3.target && d3.target.shadowRoot && e2.path && e2.path[0] && (p4 = m(e2.path[0])), n6.noSwiping && p4.closest(n6.noSwipingSelector ? n6.noSwipingSelector : "." + n6.noSwipingClass)[0]) t7.allowClick = true;
                            else if (!n6.swipeHandler || p4.closest(n6.swipeHandler)[0]) {
                                o3.currentX = "touchstart" === d3.type ? d3.targetTouches[0].pageX : d3.pageX, o3.currentY = "touchstart" === d3.type ? d3.targetTouches[0].pageY : d3.pageY;
                                var u3 = o3.currentX, c3 = o3.currentY, h3 = n6.edgeSwipeDetection || n6.iOSEdgeSwipeDetection, v3 = n6.edgeSwipeThreshold || n6.iOSEdgeSwipeThreshold;
                                if (h3 && (u3 <= v3 || u3 >= i8.innerWidth - v3)) {
                                    if ("prevent" !== h3) return;
                                    e2.preventDefault();
                                }
                                if (S(s6, {
                                    isTouched: true,
                                    isMoved: false,
                                    allowTouchCallbacks: true,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }), o3.startX = u3, o3.startY = c3, s6.touchStartTime = x(), t7.allowClick = true, t7.updateSize(), t7.swipeDirection = void 0, n6.threshold > 0 && (s6.allowThresholdMove = false), "touchstart" !== d3.type) {
                                    var f1 = true;
                                    p4.is(s6.formElements) && (f1 = false), a7.activeElement && m(a7.activeElement).is(s6.formElements) && a7.activeElement !== p4[0] && a7.activeElement.blur();
                                    var g1 = f1 && t7.allowTouchMove && n6.touchStartPreventDefault;
                                    !n6.touchStartForcePreventDefault && !g1 || p4[0].isContentEditable || d3.preventDefault();
                                }
                                t7.emit("touchStart", d3);
                            }
                        }
                    }
                }
            }
        }
    }
    function A(e2) {
        var t7 = r(), a7 = this, i8 = a7.touchEventsData, s6 = a7.params, n6 = a7.touches, l2 = a7.rtlTranslate, o3 = e2;
        if (o3.originalEvent && (o3 = o3.originalEvent), i8.isTouched) {
            if (!i8.isTouchEvent || "touchmove" === o3.type) {
                var d4 = "touchmove" === o3.type && o3.targetTouches && (o3.targetTouches[0] || o3.changedTouches[0]), p5 = "touchmove" === o3.type ? d4.pageX : o3.pageX, u4 = "touchmove" === o3.type ? d4.pageY : o3.pageY;
                if (o3.preventedByNestedSwiper) return n6.startX = p5, void (n6.startY = u4);
                if (!a7.allowTouchMove) return a7.allowClick = false, void (i8.isTouched && (S(n6, {
                    startX: p5,
                    startY: u4,
                    currentX: p5,
                    currentY: u4
                }), i8.touchStartTime = x()));
                if (i8.isTouchEvent && s6.touchReleaseOnEdges && !s6.loop) {
                    if (a7.isVertical()) {
                        if (u4 < n6.startY && a7.translate <= a7.maxTranslate() || u4 > n6.startY && a7.translate >= a7.minTranslate()) return i8.isTouched = false, void (i8.isMoved = false);
                    } else if (p5 < n6.startX && a7.translate <= a7.maxTranslate() || p5 > n6.startX && a7.translate >= a7.minTranslate()) return;
                }
                if (i8.isTouchEvent && t7.activeElement && o3.target === t7.activeElement && m(o3.target).is(i8.formElements)) return i8.isMoved = true, void (a7.allowClick = false);
                if (i8.allowTouchCallbacks && a7.emit("touchMove", o3), !(o3.targetTouches && o3.targetTouches.length > 1)) {
                    n6.currentX = p5, n6.currentY = u4;
                    var c4 = n6.currentX - n6.startX, h4 = n6.currentY - n6.startY;
                    if (!(a7.params.threshold && Math.sqrt(Math.pow(c4, 2) + Math.pow(h4, 2)) < a7.params.threshold)) {
                        var v4;
                        if ((void 0) === i8.isScrolling) a7.isHorizontal() && n6.currentY === n6.startY || a7.isVertical() && n6.currentX === n6.startX ? i8.isScrolling = false : c4 * c4 + h4 * h4 >= 25 && (v4 = 180 * Math.atan2(Math.abs(h4), Math.abs(c4)) / Math.PI, i8.isScrolling = a7.isHorizontal() ? v4 > s6.touchAngle : 90 - v4 > s6.touchAngle);
                        if (i8.isScrolling && a7.emit("touchMoveOpposite", o3), (void 0) === i8.startMoving && (n6.currentX === n6.startX && n6.currentY === n6.startY || (i8.startMoving = true)), i8.isScrolling) i8.isTouched = false;
                        else if (i8.startMoving) {
                            a7.allowClick = false, !s6.cssMode && o3.cancelable && o3.preventDefault(), s6.touchMoveStopPropagation && !s6.nested && o3.stopPropagation(), i8.isMoved || (s6.loop && a7.loopFix(), i8.startTranslate = a7.getTranslate(), a7.setTransition(0), a7.animating && a7.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i8.allowMomentumBounce = false, !s6.grabCursor || true !== a7.allowSlideNext && true !== a7.allowSlidePrev || a7.setGrabCursor(true), a7.emit("sliderFirstMove", o3)), a7.emit("sliderMove", o3), i8.isMoved = true;
                            var f2 = a7.isHorizontal() ? c4 : h4;
                            n6.diff = f2, f2 *= s6.touchRatio, l2 && (f2 = -f2), a7.swipeDirection = f2 > 0 ? "prev" : "next", i8.currentTranslate = f2 + i8.startTranslate;
                            var g2 = true, y1 = s6.resistanceRatio;
                            if (s6.touchReleaseOnEdges && (y1 = 0), f2 > 0 && i8.currentTranslate > a7.minTranslate() ? (g2 = false, s6.resistance && (i8.currentTranslate = a7.minTranslate() - 1 + Math.pow(-a7.minTranslate() + i8.startTranslate + f2, y1))) : f2 < 0 && i8.currentTranslate < a7.maxTranslate() && (g2 = false, s6.resistance && (i8.currentTranslate = a7.maxTranslate() + 1 - Math.pow(a7.maxTranslate() - i8.startTranslate - f2, y1))), g2 && (o3.preventedByNestedSwiper = true), !a7.allowSlideNext && "next" === a7.swipeDirection && i8.currentTranslate < i8.startTranslate && (i8.currentTranslate = i8.startTranslate), !a7.allowSlidePrev && "prev" === a7.swipeDirection && i8.currentTranslate > i8.startTranslate && (i8.currentTranslate = i8.startTranslate), s6.threshold > 0) {
                                if (!(Math.abs(f2) > s6.threshold || i8.allowThresholdMove)) return void (i8.currentTranslate = i8.startTranslate);
                                if (!i8.allowThresholdMove) return i8.allowThresholdMove = true, n6.startX = n6.currentX, n6.startY = n6.currentY, i8.currentTranslate = i8.startTranslate, void (n6.diff = a7.isHorizontal() ? n6.currentX - n6.startX : n6.currentY - n6.startY);
                            }
                            s6.followFinger && !s6.cssMode && ((s6.freeMode || s6.watchSlidesProgress || s6.watchSlidesVisibility) && (a7.updateActiveIndex(), a7.updateSlidesClasses()), s6.freeMode && (0 === i8.velocities.length && i8.velocities.push({
                                position: n6[a7.isHorizontal() ? "startX" : "startY"],
                                time: i8.touchStartTime
                            }), i8.velocities.push({
                                position: n6[a7.isHorizontal() ? "currentX" : "currentY"],
                                time: x()
                            })), a7.updateProgress(i8.currentTranslate), a7.setTranslate(i8.currentTranslate));
                        }
                    }
                }
            }
        } else i8.startMoving && i8.isScrolling && a7.emit("touchMoveOpposite", o3);
    }
    function D(e2) {
        var t7 = this, a7 = t7.touchEventsData, i8 = t7.params, s6 = t7.touches, r2 = t7.rtlTranslate, n6 = t7.$wrapperEl, l2 = t7.slidesGrid, o3 = t7.snapGrid, d5 = e2;
        if (d5.originalEvent && (d5 = d5.originalEvent), a7.allowTouchCallbacks && t7.emit("touchEnd", d5), a7.allowTouchCallbacks = false, !a7.isTouched) return a7.isMoved && i8.grabCursor && t7.setGrabCursor(false), a7.isMoved = false, void (a7.startMoving = false);
        i8.grabCursor && a7.isMoved && a7.isTouched && (true === t7.allowSlideNext || true === t7.allowSlidePrev) && t7.setGrabCursor(false);
        var p6, u5 = x(), c5 = u5 - a7.touchStartTime;
        if (t7.allowClick && (t7.updateClickedSlide(d5), t7.emit("tap click", d5), c5 < 300 && u5 - a7.lastClickTime < 300 && t7.emit("doubleTap doubleClick", d5)), a7.lastClickTime = x(), E(function() {
            t7.destroyed || (t7.allowClick = true);
        }), !a7.isTouched || !a7.isMoved || !t7.swipeDirection || 0 === s6.diff || a7.currentTranslate === a7.startTranslate) return a7.isTouched = false, a7.isMoved = false, void (a7.startMoving = false);
        if (a7.isTouched = false, a7.isMoved = false, a7.startMoving = false, p6 = i8.followFinger ? r2 ? t7.translate : -t7.translate : -a7.currentTranslate, !i8.cssMode) {
            if (i8.freeMode) {
                if (p6 < -t7.minTranslate()) return void t7.slideTo(t7.activeIndex);
                if (p6 > -t7.maxTranslate()) return void (t7.slides.length < o3.length ? t7.slideTo(o3.length - 1) : t7.slideTo(t7.slides.length - 1));
                if (i8.freeModeMomentum) {
                    if (a7.velocities.length > 1) {
                        var h5 = a7.velocities.pop(), v5 = a7.velocities.pop(), f3 = h5.position - v5.position, m1 = h5.time - v5.time;
                        t7.velocity = f3 / m1, t7.velocity /= 2, Math.abs(t7.velocity) < i8.freeModeMinimumVelocity && (t7.velocity = 0), (m1 > 150 || x() - h5.time > 300) && (t7.velocity = 0);
                    } else t7.velocity = 0;
                    t7.velocity *= i8.freeModeMomentumVelocityRatio, a7.velocities.length = 0;
                    var g3 = 1000 * i8.freeModeMomentumRatio, y2 = t7.velocity * g3, w1 = t7.translate + y2;
                    r2 && (w1 = -w1);
                    var b1, T1, C1 = false, S1 = 20 * Math.abs(t7.velocity) * i8.freeModeMomentumBounceRatio;
                    if (w1 < t7.maxTranslate()) i8.freeModeMomentumBounce ? (w1 + t7.maxTranslate() < -S1 && (w1 = t7.maxTranslate() - S1), b1 = t7.maxTranslate(), C1 = true, a7.allowMomentumBounce = true) : w1 = t7.maxTranslate(), i8.loop && i8.centeredSlides && (T1 = true);
                    else if (w1 > t7.minTranslate()) i8.freeModeMomentumBounce ? (w1 - t7.minTranslate() > S1 && (w1 = t7.minTranslate() + S1), b1 = t7.minTranslate(), C1 = true, a7.allowMomentumBounce = true) : w1 = t7.minTranslate(), i8.loop && i8.centeredSlides && (T1 = true);
                    else if (i8.freeModeSticky) {
                        for(var M1, z1 = 0; z1 < o3.length; z1 += 1)if (o3[z1] > -w1) {
                            M1 = z1;
                            break;
                        }
                        w1 = -(w1 = Math.abs(o3[M1] - w1) < Math.abs(o3[M1 - 1] - w1) || "next" === t7.swipeDirection ? o3[M1] : o3[M1 - 1]);
                    }
                    if (T1 && t7.once("transitionEnd", function() {
                        t7.loopFix();
                    }), 0 !== t7.velocity) {
                        if (g3 = r2 ? Math.abs((-w1 - t7.translate) / t7.velocity) : Math.abs((w1 - t7.translate) / t7.velocity), i8.freeModeSticky) {
                            var P1 = Math.abs((r2 ? -w1 : w1) - t7.translate), k1 = t7.slidesSizesGrid[t7.activeIndex];
                            g3 = P1 < k1 ? i8.speed : P1 < 2 * k1 ? 1.5 * i8.speed : 2.5 * i8.speed;
                        }
                    } else if (i8.freeModeSticky) return void t7.slideToClosest();
                    i8.freeModeMomentumBounce && C1 ? (t7.updateProgress(b1), t7.setTransition(g3), t7.setTranslate(w1), t7.transitionStart(true, t7.swipeDirection), t7.animating = true, n6.transitionEnd(function() {
                        t7 && !t7.destroyed && a7.allowMomentumBounce && (t7.emit("momentumBounce"), t7.setTransition(i8.speed), setTimeout(function() {
                            t7.setTranslate(b1), n6.transitionEnd(function() {
                                t7 && !t7.destroyed && t7.transitionEnd();
                            });
                        }, 0));
                    })) : t7.velocity ? (t7.updateProgress(w1), t7.setTransition(g3), t7.setTranslate(w1), t7.transitionStart(true, t7.swipeDirection), t7.animating || (t7.animating = true, n6.transitionEnd(function() {
                        t7 && !t7.destroyed && t7.transitionEnd();
                    }))) : t7.updateProgress(w1), t7.updateActiveIndex(), t7.updateSlidesClasses();
                } else if (i8.freeModeSticky) return void t7.slideToClosest();
                (!i8.freeModeMomentum || c5 >= i8.longSwipesMs) && (t7.updateProgress(), t7.updateActiveIndex(), t7.updateSlidesClasses());
            } else {
                for(var L1 = 0, $1 = t7.slidesSizesGrid[0], I1 = 0; I1 < l2.length; I1 += I1 < i8.slidesPerGroupSkip ? 1 : i8.slidesPerGroup){
                    var O1 = I1 < i8.slidesPerGroupSkip - 1 ? 1 : i8.slidesPerGroup;
                    (void 0) !== l2[I1 + O1] ? p6 >= l2[I1] && p6 < l2[I1 + O1] && (L1 = I1, $1 = l2[I1 + O1] - l2[I1]) : p6 >= l2[I1] && (L1 = I1, $1 = l2[l2.length - 1] - l2[l2.length - 2]);
                }
                var A1 = (p6 - l2[L1]) / $1, D1 = L1 < i8.slidesPerGroupSkip - 1 ? 1 : i8.slidesPerGroup;
                if (c5 > i8.longSwipesMs) {
                    if (!i8.longSwipes) return void t7.slideTo(t7.activeIndex);
                    "next" === t7.swipeDirection && (A1 >= i8.longSwipesRatio ? t7.slideTo(L1 + D1) : t7.slideTo(L1)), "prev" === t7.swipeDirection && (A1 > 1 - i8.longSwipesRatio ? t7.slideTo(L1 + D1) : t7.slideTo(L1));
                } else {
                    if (!i8.shortSwipes) return void t7.slideTo(t7.activeIndex);
                    t7.navigation && (d5.target === t7.navigation.nextEl || d5.target === t7.navigation.prevEl) ? d5.target === t7.navigation.nextEl ? t7.slideTo(L1 + D1) : t7.slideTo(L1) : ("next" === t7.swipeDirection && t7.slideTo(L1 + D1), "prev" === t7.swipeDirection && t7.slideTo(L1));
                }
            }
        }
    }
    function G() {
        var e2 = this, t7 = e2.params, a7 = e2.el;
        if (!a7 || 0 !== a7.offsetWidth) {
            t7.breakpoints && e2.setBreakpoint();
            var i8 = e2.allowSlideNext, s6 = e2.allowSlidePrev, r2 = e2.snapGrid;
            e2.allowSlideNext = true, e2.allowSlidePrev = true, e2.updateSize(), e2.updateSlides(), e2.updateSlidesClasses(), ("auto" === t7.slidesPerView || t7.slidesPerView > 1) && e2.isEnd && !e2.isBeginning && !e2.params.centeredSlides ? e2.slideTo(e2.slides.length - 1, 0, false, true) : e2.slideTo(e2.activeIndex, 0, false, true), e2.autoplay && e2.autoplay.running && e2.autoplay.paused && e2.autoplay.run(), e2.allowSlidePrev = s6, e2.allowSlideNext = i8, e2.params.watchOverflow && r2 !== e2.snapGrid && e2.checkOverflow();
        }
    }
    function N(e2) {
        var t7 = this;
        t7.allowClick || (t7.params.preventClicks && e2.preventDefault(), t7.params.preventClicksPropagation && t7.animating && (e2.stopPropagation(), e2.stopImmediatePropagation()));
    }
    function B() {
        var e2 = this, t7 = e2.wrapperEl, a7 = e2.rtlTranslate;
        e2.previousTranslate = e2.translate, e2.isHorizontal() ? e2.translate = a7 ? t7.scrollWidth - t7.offsetWidth - t7.scrollLeft : -t7.scrollLeft : e2.translate = -t7.scrollTop, -0.0 === e2.translate && (e2.translate = 0), e2.updateActiveIndex(), e2.updateSlidesClasses();
        var i9 = e2.maxTranslate() - e2.minTranslate();
        (0 === i9 ? 0 : (e2.translate - e2.minTranslate()) / i9) !== e2.progress && e2.updateProgress(a7 ? -e2.translate : e2.translate), e2.emit("setTranslate", e2.translate, false);
    }
    var H = false;
    function X() {
    }
    var Y = {
        init: true,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: false,
        updateOnWindowResize: true,
        nested: false,
        width: null,
        height: null,
        preventInteractionOnTransition: false,
        userAgent: null,
        url: null,
        edgeSwipeDetection: false,
        edgeSwipeThreshold: 20,
        freeMode: false,
        freeModeMomentum: true,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: true,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: false,
        freeModeMinimumVelocity: 0.02,
        autoHeight: false,
        setWrapperSize: false,
        virtualTranslate: false,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: false,
        centeredSlidesBounds: false,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: true,
        centerInsufficientSlides: false,
        watchOverflow: false,
        roundLengths: false,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        allowTouchMove: true,
        threshold: 0,
        touchMoveStopPropagation: false,
        touchStartPreventDefault: true,
        touchStartForcePreventDefault: false,
        touchReleaseOnEdges: false,
        uniqueNavElements: true,
        resistance: true,
        resistanceRatio: 0.85,
        watchSlidesProgress: false,
        watchSlidesVisibility: false,
        grabCursor: false,
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        preloadImages: true,
        updateOnImagesReady: true,
        loop: false,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: false,
        loopPreventsSlide: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        swipeHandler: null,
        noSwiping: true,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: true,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: true,
        _emitClasses: false
    }, V = {
        modular: {
            useParams: function(e2) {
                var t7 = this;
                t7.modules && Object.keys(t7.modules).forEach(function(a7) {
                    var i9 = t7.modules[a7];
                    i9.params && S(e2, i9.params);
                });
            },
            useModules: function(e2) {
                (void 0) === e2 && (e2 = {
                });
                var t7 = this;
                t7.modules && Object.keys(t7.modules).forEach(function(a7) {
                    var i9 = t7.modules[a7], s7 = e2[a7] || {
                    };
                    i9.on && t7.on && Object.keys(i9.on).forEach(function(e3) {
                        t7.on(e3, i9.on[e3]);
                    }), i9.create && i9.create.bind(t7)(s7);
                });
            }
        },
        eventsEmitter: {
            on: function(e2, t7, a7) {
                var i9 = this;
                if ("function" != typeof t7) return i9;
                var s7 = a7 ? "unshift" : "push";
                return e2.split(" ").forEach(function(e3) {
                    i9.eventsListeners[e3] || (i9.eventsListeners[e3] = []), i9.eventsListeners[e3][s7](t7);
                }), i9;
            },
            once: function(e2, t7, a7) {
                var i9 = this;
                if ("function" != typeof t7) return i9;
                function s7() {
                    i9.off(e2, s7), s7.__emitterProxy && delete s7.__emitterProxy;
                    for(var a8 = arguments.length, r3 = new Array(a8), n6 = 0; n6 < a8; n6++)r3[n6] = arguments[n6];
                    t7.apply(i9, r3);
                }
                return s7.__emitterProxy = t7, i9.on(e2, s7, a7);
            },
            onAny: function(e2, t7) {
                var a7 = this;
                if ("function" != typeof e2) return a7;
                var i9 = t7 ? "unshift" : "push";
                return a7.eventsAnyListeners.indexOf(e2) < 0 && a7.eventsAnyListeners[i9](e2), a7;
            },
            offAny: function(e2) {
                var t7 = this;
                if (!t7.eventsAnyListeners) return t7;
                var a7 = t7.eventsAnyListeners.indexOf(e2);
                return a7 >= 0 && t7.eventsAnyListeners.splice(a7, 1), t7;
            },
            off: function(e2, t7) {
                var a7 = this;
                return a7.eventsListeners ? (e2.split(" ").forEach(function(e3) {
                    (void 0) === t7 ? a7.eventsListeners[e3] = [] : a7.eventsListeners[e3] && a7.eventsListeners[e3].forEach(function(i9, s7) {
                        (i9 === t7 || i9.__emitterProxy && i9.__emitterProxy === t7) && a7.eventsListeners[e3].splice(s7, 1);
                    });
                }), a7) : a7;
            },
            emit: function() {
                var e2, t7, a7, i9 = this;
                if (!i9.eventsListeners) return i9;
                for(var s7 = arguments.length, r3 = new Array(s7), n6 = 0; n6 < s7; n6++)r3[n6] = arguments[n6];
                "string" == typeof r3[0] || Array.isArray(r3[0]) ? (e2 = r3[0], t7 = r3.slice(1, r3.length), a7 = i9) : (e2 = r3[0].events, t7 = r3[0].data, a7 = r3[0].context || i9), t7.unshift(a7);
                var l2 = Array.isArray(e2) ? e2 : e2.split(" ");
                return l2.forEach(function(e3) {
                    i9.eventsAnyListeners && i9.eventsAnyListeners.length && i9.eventsAnyListeners.forEach(function(i10) {
                        i10.apply(a7, [
                            e3
                        ].concat(t7));
                    }), i9.eventsListeners && i9.eventsListeners[e3] && i9.eventsListeners[e3].forEach(function(e4) {
                        e4.apply(a7, t7);
                    });
                }), i9;
            }
        },
        update: {
            updateSize: function() {
                var e2, t7, a7 = this, i9 = a7.$el;
                e2 = (void 0) !== a7.params.width && null !== a7.params.width ? a7.params.width : i9[0].clientWidth, t7 = (void 0) !== a7.params.height && null !== a7.params.height ? a7.params.height : i9[0].clientHeight, 0 === e2 && a7.isHorizontal() || 0 === t7 && a7.isVertical() || (e2 = e2 - parseInt(i9.css("padding-left") || 0, 10) - parseInt(i9.css("padding-right") || 0, 10), t7 = t7 - parseInt(i9.css("padding-top") || 0, 10) - parseInt(i9.css("padding-bottom") || 0, 10), Number.isNaN(e2) && (e2 = 0), Number.isNaN(t7) && (t7 = 0), S(a7, {
                    width: e2,
                    height: t7,
                    size: a7.isHorizontal() ? e2 : t7
                }));
            },
            updateSlides: function() {
                var e2 = this, t7 = l(), a7 = e2.params, i9 = e2.$wrapperEl, s7 = e2.size, r3 = e2.rtlTranslate, n6 = e2.wrongRTL, o3 = e2.virtual && a7.virtual.enabled, d5 = o3 ? e2.virtual.slides.length : e2.slides.length, p6 = i9.children("." + e2.params.slideClass), u5 = o3 ? e2.virtual.slides.length : p6.length, c5 = [], h6 = [], v6 = [];
                function f4(e3, t8) {
                    return !a7.cssMode || t8 !== p6.length - 1;
                }
                var m2 = a7.slidesOffsetBefore;
                "function" == typeof m2 && (m2 = a7.slidesOffsetBefore.call(e2));
                var g4 = a7.slidesOffsetAfter;
                "function" == typeof g4 && (g4 = a7.slidesOffsetAfter.call(e2));
                var y3 = e2.snapGrid.length, w2 = e2.slidesGrid.length, b2 = a7.spaceBetween, E1 = -m2, x1 = 0, T2 = 0;
                if ((void 0) !== s7) {
                    var C2, M2;
                    "string" == typeof b2 && b2.indexOf("%") >= 0 && (b2 = parseFloat(b2.replace("%", "")) / 100 * s7), e2.virtualSize = -b2, r3 ? p6.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : p6.css({
                        marginRight: "",
                        marginBottom: ""
                    }), a7.slidesPerColumn > 1 && (C2 = Math.floor(u5 / a7.slidesPerColumn) === u5 / e2.params.slidesPerColumn ? u5 : Math.ceil(u5 / a7.slidesPerColumn) * a7.slidesPerColumn, "auto" !== a7.slidesPerView && "row" === a7.slidesPerColumnFill && (C2 = Math.max(C2, a7.slidesPerView * a7.slidesPerColumn)));
                    for(var z2, P2 = a7.slidesPerColumn, k2 = C2 / P2, L2 = Math.floor(u5 / a7.slidesPerColumn), $2 = 0; $2 < u5; $2 += 1){
                        M2 = 0;
                        var I2 = p6.eq($2);
                        if (a7.slidesPerColumn > 1) {
                            var O2 = void 0, A2 = void 0, D2 = void 0;
                            if ("row" === a7.slidesPerColumnFill && a7.slidesPerGroup > 1) {
                                var G1 = Math.floor($2 / (a7.slidesPerGroup * a7.slidesPerColumn)), N1 = $2 - a7.slidesPerColumn * a7.slidesPerGroup * G1, B1 = 0 === G1 ? a7.slidesPerGroup : Math.min(Math.ceil((u5 - G1 * P2 * a7.slidesPerGroup) / P2), a7.slidesPerGroup);
                                O2 = (A2 = N1 - (D2 = Math.floor(N1 / B1)) * B1 + G1 * a7.slidesPerGroup) + D2 * C2 / P2, I2.css({
                                    "-webkit-box-ordinal-group": O2,
                                    "-moz-box-ordinal-group": O2,
                                    "-ms-flex-order": O2,
                                    "-webkit-order": O2,
                                    order: O2
                                });
                            } else "column" === a7.slidesPerColumnFill ? (D2 = $2 - (A2 = Math.floor($2 / P2)) * P2, (A2 > L2 || A2 === L2 && D2 === P2 - 1) && (D2 += 1) >= P2 && (D2 = 0, A2 += 1)) : A2 = $2 - (D2 = Math.floor($2 / k2)) * k2;
                            I2.css("margin-" + (e2.isHorizontal() ? "top" : "left"), 0 !== D2 && a7.spaceBetween && a7.spaceBetween + "px");
                        }
                        if ("none" !== I2.css("display")) {
                            if ("auto" === a7.slidesPerView) {
                                var H1 = t7.getComputedStyle(I2[0], null), X1 = I2[0].style.transform, Y1 = I2[0].style.webkitTransform;
                                if (X1 && (I2[0].style.transform = "none"), Y1 && (I2[0].style.webkitTransform = "none"), a7.roundLengths) M2 = e2.isHorizontal() ? I2.outerWidth(true) : I2.outerHeight(true);
                                else if (e2.isHorizontal()) {
                                    var V1 = parseFloat(H1.getPropertyValue("width") || 0), F = parseFloat(H1.getPropertyValue("padding-left") || 0), R = parseFloat(H1.getPropertyValue("padding-right") || 0), W = parseFloat(H1.getPropertyValue("margin-left") || 0), q = parseFloat(H1.getPropertyValue("margin-right") || 0), j = H1.getPropertyValue("box-sizing");
                                    if (j && "border-box" === j) M2 = V1 + W + q;
                                    else {
                                        var _ = I2[0], U = _.clientWidth;
                                        M2 = V1 + F + R + W + q + (_.offsetWidth - U);
                                    }
                                } else {
                                    var K = parseFloat(H1.getPropertyValue("height") || 0), Z = parseFloat(H1.getPropertyValue("padding-top") || 0), J = parseFloat(H1.getPropertyValue("padding-bottom") || 0), Q = parseFloat(H1.getPropertyValue("margin-top") || 0), ee = parseFloat(H1.getPropertyValue("margin-bottom") || 0), te = H1.getPropertyValue("box-sizing");
                                    if (te && "border-box" === te) M2 = K + Q + ee;
                                    else {
                                        var ae = I2[0], ie = ae.clientHeight;
                                        M2 = K + Z + J + Q + ee + (ae.offsetHeight - ie);
                                    }
                                }
                                X1 && (I2[0].style.transform = X1), Y1 && (I2[0].style.webkitTransform = Y1), a7.roundLengths && (M2 = Math.floor(M2));
                            } else M2 = (s7 - (a7.slidesPerView - 1) * b2) / a7.slidesPerView, a7.roundLengths && (M2 = Math.floor(M2)), p6[$2] && (e2.isHorizontal() ? p6[$2].style.width = M2 + "px" : p6[$2].style.height = M2 + "px");
                            p6[$2] && (p6[$2].swiperSlideSize = M2), v6.push(M2), a7.centeredSlides ? (E1 = E1 + M2 / 2 + x1 / 2 + b2, 0 === x1 && 0 !== $2 && (E1 = E1 - s7 / 2 - b2), 0 === $2 && (E1 = E1 - s7 / 2 - b2), Math.abs(E1) < 0.001 && (E1 = 0), a7.roundLengths && (E1 = Math.floor(E1)), T2 % a7.slidesPerGroup == 0 && c5.push(E1), h6.push(E1)) : (a7.roundLengths && (E1 = Math.floor(E1)), (T2 - Math.min(e2.params.slidesPerGroupSkip, T2)) % e2.params.slidesPerGroup == 0 && c5.push(E1), h6.push(E1), E1 = E1 + M2 + b2), e2.virtualSize += M2 + b2, x1 = M2, T2 += 1;
                        }
                    }
                    if (e2.virtualSize = Math.max(e2.virtualSize, s7) + g4, r3 && n6 && ("slide" === a7.effect || "coverflow" === a7.effect) && i9.css({
                        width: e2.virtualSize + a7.spaceBetween + "px"
                    }), a7.setWrapperSize && (e2.isHorizontal() ? i9.css({
                        width: e2.virtualSize + a7.spaceBetween + "px"
                    }) : i9.css({
                        height: e2.virtualSize + a7.spaceBetween + "px"
                    })), a7.slidesPerColumn > 1 && (e2.virtualSize = (M2 + a7.spaceBetween) * C2, e2.virtualSize = Math.ceil(e2.virtualSize / a7.slidesPerColumn) - a7.spaceBetween, e2.isHorizontal() ? i9.css({
                        width: e2.virtualSize + a7.spaceBetween + "px"
                    }) : i9.css({
                        height: e2.virtualSize + a7.spaceBetween + "px"
                    }), a7.centeredSlides)) {
                        z2 = [];
                        for(var se = 0; se < c5.length; se += 1){
                            var re = c5[se];
                            a7.roundLengths && (re = Math.floor(re)), c5[se] < e2.virtualSize + c5[0] && z2.push(re);
                        }
                        c5 = z2;
                    }
                    if (!a7.centeredSlides) {
                        z2 = [];
                        for(var ne = 0; ne < c5.length; ne += 1){
                            var le = c5[ne];
                            a7.roundLengths && (le = Math.floor(le)), c5[ne] <= e2.virtualSize - s7 && z2.push(le);
                        }
                        c5 = z2, Math.floor(e2.virtualSize - s7) - Math.floor(c5[c5.length - 1]) > 1 && c5.push(e2.virtualSize - s7);
                    }
                    if (0 === c5.length && (c5 = [
                        0
                    ]), 0 !== a7.spaceBetween && (e2.isHorizontal() ? r3 ? p6.filter(f4).css({
                        marginLeft: b2 + "px"
                    }) : p6.filter(f4).css({
                        marginRight: b2 + "px"
                    }) : p6.filter(f4).css({
                        marginBottom: b2 + "px"
                    })), a7.centeredSlides && a7.centeredSlidesBounds) {
                        var oe = 0;
                        v6.forEach(function(e3) {
                            oe += e3 + (a7.spaceBetween ? a7.spaceBetween : 0);
                        });
                        var de = (oe -= a7.spaceBetween) - s7;
                        c5 = c5.map(function(e3) {
                            return e3 < 0 ? -m2 : e3 > de ? de + g4 : e3;
                        });
                    }
                    if (a7.centerInsufficientSlides) {
                        var pe = 0;
                        if (v6.forEach(function(e3) {
                            pe += e3 + (a7.spaceBetween ? a7.spaceBetween : 0);
                        }), (pe -= a7.spaceBetween) < s7) {
                            var ue = (s7 - pe) / 2;
                            c5.forEach(function(e3, t8) {
                                c5[t8] = e3 - ue;
                            }), h6.forEach(function(e3, t8) {
                                h6[t8] = e3 + ue;
                            });
                        }
                    }
                    S(e2, {
                        slides: p6,
                        snapGrid: c5,
                        slidesGrid: h6,
                        slidesSizesGrid: v6
                    }), u5 !== d5 && e2.emit("slidesLengthChange"), c5.length !== y3 && (e2.params.watchOverflow && e2.checkOverflow(), e2.emit("snapGridLengthChange")), h6.length !== w2 && e2.emit("slidesGridLengthChange"), (a7.watchSlidesProgress || a7.watchSlidesVisibility) && e2.updateSlidesOffset();
                }
            },
            updateAutoHeight: function(e2) {
                var t7, a7 = this, i9 = [], s7 = 0;
                if ("number" == typeof e2 ? a7.setTransition(e2) : true === e2 && a7.setTransition(a7.params.speed), "auto" !== a7.params.slidesPerView && a7.params.slidesPerView > 1) {
                    if (a7.params.centeredSlides) a7.visibleSlides.each(function(e3) {
                        i9.push(e3);
                    });
                    else for(t7 = 0; t7 < Math.ceil(a7.params.slidesPerView); t7 += 1){
                        var r3 = a7.activeIndex + t7;
                        if (r3 > a7.slides.length) break;
                        i9.push(a7.slides.eq(r3)[0]);
                    }
                } else i9.push(a7.slides.eq(a7.activeIndex)[0]);
                for(t7 = 0; t7 < i9.length; t7 += 1)if ((void 0) !== i9[t7]) {
                    var n6 = i9[t7].offsetHeight;
                    s7 = n6 > s7 ? n6 : s7;
                }
                s7 && a7.$wrapperEl.css("height", s7 + "px");
            },
            updateSlidesOffset: function() {
                for(var e2 = this.slides, t7 = 0; t7 < e2.length; t7 += 1)e2[t7].swiperSlideOffset = this.isHorizontal() ? e2[t7].offsetLeft : e2[t7].offsetTop;
            },
            updateSlidesProgress: function(e2) {
                (void 0) === e2 && (e2 = this && this.translate || 0);
                var t7 = this, a7 = t7.params, i9 = t7.slides, s7 = t7.rtlTranslate;
                if (0 !== i9.length) {
                    (void 0) === i9[0].swiperSlideOffset && t7.updateSlidesOffset();
                    var r4 = -e2;
                    s7 && (r4 = e2), i9.removeClass(a7.slideVisibleClass), t7.visibleSlidesIndexes = [], t7.visibleSlides = [];
                    for(var n7 = 0; n7 < i9.length; n7 += 1){
                        var l2 = i9[n7], o3 = (r4 + (a7.centeredSlides ? t7.minTranslate() : 0) - l2.swiperSlideOffset) / (l2.swiperSlideSize + a7.spaceBetween);
                        if (a7.watchSlidesVisibility || a7.centeredSlides && a7.autoHeight) {
                            var d5 = -(r4 - l2.swiperSlideOffset), p6 = d5 + t7.slidesSizesGrid[n7];
                            (d5 >= 0 && d5 < t7.size - 1 || p6 > 1 && p6 <= t7.size || d5 <= 0 && p6 >= t7.size) && (t7.visibleSlides.push(l2), t7.visibleSlidesIndexes.push(n7), i9.eq(n7).addClass(a7.slideVisibleClass));
                        }
                        l2.progress = s7 ? -o3 : o3;
                    }
                    t7.visibleSlides = m(t7.visibleSlides);
                }
            },
            updateProgress: function(e2) {
                var t7 = this;
                if ((void 0) === e2) {
                    var a7 = t7.rtlTranslate ? -1 : 1;
                    e2 = t7 && t7.translate && t7.translate * a7 || 0;
                }
                var i9 = t7.params, s7 = t7.maxTranslate() - t7.minTranslate(), r5 = t7.progress, n8 = t7.isBeginning, l3 = t7.isEnd, o4 = n8, d6 = l3;
                0 === s7 ? (r5 = 0, n8 = true, l3 = true) : (n8 = (r5 = (e2 - t7.minTranslate()) / s7) <= 0, l3 = r5 >= 1), S(t7, {
                    progress: r5,
                    isBeginning: n8,
                    isEnd: l3
                }), (i9.watchSlidesProgress || i9.watchSlidesVisibility || i9.centeredSlides && i9.autoHeight) && t7.updateSlidesProgress(e2), n8 && !o4 && t7.emit("reachBeginning toEdge"), l3 && !d6 && t7.emit("reachEnd toEdge"), (o4 && !n8 || d6 && !l3) && t7.emit("fromEdge"), t7.emit("progress", r5);
            },
            updateSlidesClasses: function() {
                var e2, t7 = this, a8 = t7.slides, i9 = t7.params, s7 = t7.$wrapperEl, r5 = t7.activeIndex, n8 = t7.realIndex, l3 = t7.virtual && i9.virtual.enabled;
                a8.removeClass(i9.slideActiveClass + " " + i9.slideNextClass + " " + i9.slidePrevClass + " " + i9.slideDuplicateActiveClass + " " + i9.slideDuplicateNextClass + " " + i9.slideDuplicatePrevClass), (e2 = l3 ? t7.$wrapperEl.find("." + i9.slideClass + '[data-swiper-slide-index="' + r5 + '"]') : a8.eq(r5)).addClass(i9.slideActiveClass), i9.loop && (e2.hasClass(i9.slideDuplicateClass) ? s7.children("." + i9.slideClass + ":not(." + i9.slideDuplicateClass + ')[data-swiper-slide-index="' + n8 + '"]').addClass(i9.slideDuplicateActiveClass) : s7.children("." + i9.slideClass + "." + i9.slideDuplicateClass + '[data-swiper-slide-index="' + n8 + '"]').addClass(i9.slideDuplicateActiveClass));
                var o4 = e2.nextAll("." + i9.slideClass).eq(0).addClass(i9.slideNextClass);
                i9.loop && 0 === o4.length && (o4 = a8.eq(0)).addClass(i9.slideNextClass);
                var d6 = e2.prevAll("." + i9.slideClass).eq(0).addClass(i9.slidePrevClass);
                i9.loop && 0 === d6.length && (d6 = a8.eq(-1)).addClass(i9.slidePrevClass), i9.loop && (o4.hasClass(i9.slideDuplicateClass) ? s7.children("." + i9.slideClass + ":not(." + i9.slideDuplicateClass + ')[data-swiper-slide-index="' + o4.attr("data-swiper-slide-index") + '"]').addClass(i9.slideDuplicateNextClass) : s7.children("." + i9.slideClass + "." + i9.slideDuplicateClass + '[data-swiper-slide-index="' + o4.attr("data-swiper-slide-index") + '"]').addClass(i9.slideDuplicateNextClass), d6.hasClass(i9.slideDuplicateClass) ? s7.children("." + i9.slideClass + ":not(." + i9.slideDuplicateClass + ')[data-swiper-slide-index="' + d6.attr("data-swiper-slide-index") + '"]').addClass(i9.slideDuplicatePrevClass) : s7.children("." + i9.slideClass + "." + i9.slideDuplicateClass + '[data-swiper-slide-index="' + d6.attr("data-swiper-slide-index") + '"]').addClass(i9.slideDuplicatePrevClass)), t7.emitSlidesClasses();
            },
            updateActiveIndex: function(e2) {
                var t7, a8 = this, i9 = a8.rtlTranslate ? a8.translate : -a8.translate, s7 = a8.slidesGrid, r5 = a8.snapGrid, n8 = a8.params, l3 = a8.activeIndex, o4 = a8.realIndex, d6 = a8.snapIndex, p7 = e2;
                if ((void 0) === p7) {
                    for(var u5 = 0; u5 < s7.length; u5 += 1)(void 0) !== s7[u5 + 1] ? i9 >= s7[u5] && i9 < s7[u5 + 1] - (s7[u5 + 1] - s7[u5]) / 2 ? p7 = u5 : i9 >= s7[u5] && i9 < s7[u5 + 1] && (p7 = u5 + 1) : i9 >= s7[u5] && (p7 = u5);
                    n8.normalizeSlideIndex && (p7 < 0 || (void 0) === p7) && (p7 = 0);
                }
                if (r5.indexOf(i9) >= 0) t7 = r5.indexOf(i9);
                else {
                    var c5 = Math.min(n8.slidesPerGroupSkip, p7);
                    t7 = c5 + Math.floor((p7 - c5) / n8.slidesPerGroup);
                }
                if (t7 >= r5.length && (t7 = r5.length - 1), p7 !== l3) {
                    var h6 = parseInt(a8.slides.eq(p7).attr("data-swiper-slide-index") || p7, 10);
                    S(a8, {
                        snapIndex: t7,
                        realIndex: h6,
                        previousIndex: l3,
                        activeIndex: p7
                    }), a8.emit("activeIndexChange"), a8.emit("snapIndexChange"), o4 !== h6 && a8.emit("realIndexChange"), (a8.initialized || a8.params.runCallbacksOnInit) && a8.emit("slideChange");
                } else t7 !== d6 && (a8.snapIndex = t7, a8.emit("snapIndexChange"));
            },
            updateClickedSlide: function(e2) {
                var t7 = this, a8 = t7.params, i9 = m(e2.target).closest("." + a8.slideClass)[0], s7 = false;
                if (i9) for(var r5 = 0; r5 < t7.slides.length; r5 += 1)t7.slides[r5] === i9 && (s7 = true);
                if (!i9 || !s7) return t7.clickedSlide = void 0, void (t7.clickedIndex = void 0);
                t7.clickedSlide = i9, t7.virtual && t7.params.virtual.enabled ? t7.clickedIndex = parseInt(m(i9).attr("data-swiper-slide-index"), 10) : t7.clickedIndex = m(i9).index(), a8.slideToClickedSlide && (void 0) !== t7.clickedIndex && t7.clickedIndex !== t7.activeIndex && t7.slideToClickedSlide();
            }
        },
        translate: {
            getTranslate: function(e2) {
                (void 0) === e2 && (e2 = this.isHorizontal() ? "x" : "y");
                var t7 = this, a8 = t7.params, i9 = t7.rtlTranslate, s7 = t7.translate, r5 = t7.$wrapperEl;
                if (a8.virtualTranslate) return i9 ? -s7 : s7;
                if (a8.cssMode) return s7;
                var n8 = T(r5[0], e2);
                return i9 && (n8 = -n8), n8 || 0;
            },
            setTranslate: function(e2, t7) {
                var a8 = this, i9 = a8.rtlTranslate, s7 = a8.params, r5 = a8.$wrapperEl, n8 = a8.wrapperEl, l3 = a8.progress, o4 = 0, d6 = 0;
                a8.isHorizontal() ? o4 = i9 ? -e2 : e2 : d6 = e2, s7.roundLengths && (o4 = Math.floor(o4), d6 = Math.floor(d6)), s7.cssMode ? n8[a8.isHorizontal() ? "scrollLeft" : "scrollTop"] = a8.isHorizontal() ? -o4 : -d6 : s7.virtualTranslate || r5.transform("translate3d(" + o4 + "px, " + d6 + "px, 0px)"), a8.previousTranslate = a8.translate, a8.translate = a8.isHorizontal() ? o4 : d6;
                var p7 = a8.maxTranslate() - a8.minTranslate();
                (0 === p7 ? 0 : (e2 - a8.minTranslate()) / p7) !== l3 && a8.updateProgress(e2), a8.emit("setTranslate", a8.translate, t7);
            },
            minTranslate: function() {
                return -this.snapGrid[0];
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function(e2, t7, a8, i9, s7) {
                (void 0) === e2 && (e2 = 0), (void 0) === t7 && (t7 = this.params.speed), (void 0) === a8 && (a8 = true), (void 0) === i9 && (i9 = true);
                var r5 = this, n8 = r5.params, l3 = r5.wrapperEl;
                if (r5.animating && n8.preventInteractionOnTransition) return false;
                var o4, d6 = r5.minTranslate(), p7 = r5.maxTranslate();
                if (o4 = i9 && e2 > d6 ? d6 : i9 && e2 < p7 ? p7 : e2, r5.updateProgress(o4), n8.cssMode) {
                    var u6, c6 = r5.isHorizontal();
                    if (0 === t7) l3[c6 ? "scrollLeft" : "scrollTop"] = -o4;
                    else if (l3.scrollTo) l3.scrollTo(((u6 = {
                    })[c6 ? "left" : "top"] = -o4, u6.behavior = "smooth", u6));
                    else l3[c6 ? "scrollLeft" : "scrollTop"] = -o4;
                    return true;
                }
                return 0 === t7 ? (r5.setTransition(0), r5.setTranslate(o4), a8 && (r5.emit("beforeTransitionStart", t7, s7), r5.emit("transitionEnd"))) : (r5.setTransition(t7), r5.setTranslate(o4), a8 && (r5.emit("beforeTransitionStart", t7, s7), r5.emit("transitionStart")), r5.animating || (r5.animating = true, r5.onTranslateToWrapperTransitionEnd || (r5.onTranslateToWrapperTransitionEnd = function(e3) {
                    r5 && !r5.destroyed && e3.target === this && (r5.$wrapperEl[0].removeEventListener("transitionend", r5.onTranslateToWrapperTransitionEnd), r5.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r5.onTranslateToWrapperTransitionEnd), r5.onTranslateToWrapperTransitionEnd = null, delete r5.onTranslateToWrapperTransitionEnd, a8 && r5.emit("transitionEnd"));
                }), r5.$wrapperEl[0].addEventListener("transitionend", r5.onTranslateToWrapperTransitionEnd), r5.$wrapperEl[0].addEventListener("webkitTransitionEnd", r5.onTranslateToWrapperTransitionEnd))), true;
            }
        },
        transition: {
            setTransition: function(e2, t7) {
                var a8 = this;
                a8.params.cssMode || a8.$wrapperEl.transition(e2), a8.emit("setTransition", e2, t7);
            },
            transitionStart: function(e2, t7) {
                (void 0) === e2 && (e2 = true);
                var a8 = this, i9 = a8.activeIndex, s7 = a8.params, r5 = a8.previousIndex;
                if (!s7.cssMode) {
                    s7.autoHeight && a8.updateAutoHeight();
                    var n8 = t7;
                    if (n8 || (n8 = i9 > r5 ? "next" : i9 < r5 ? "prev" : "reset"), a8.emit("transitionStart"), e2 && i9 !== r5) {
                        if ("reset" === n8) return void a8.emit("slideResetTransitionStart");
                        a8.emit("slideChangeTransitionStart"), "next" === n8 ? a8.emit("slideNextTransitionStart") : a8.emit("slidePrevTransitionStart");
                    }
                }
            },
            transitionEnd: function(e2, t7) {
                (void 0) === e2 && (e2 = true);
                var a8 = this, i9 = a8.activeIndex, s7 = a8.previousIndex, r5 = a8.params;
                if (a8.animating = false, !r5.cssMode) {
                    a8.setTransition(0);
                    var n9 = t7;
                    if (n9 || (n9 = i9 > s7 ? "next" : i9 < s7 ? "prev" : "reset"), a8.emit("transitionEnd"), e2 && i9 !== s7) {
                        if ("reset" === n9) return void a8.emit("slideResetTransitionEnd");
                        a8.emit("slideChangeTransitionEnd"), "next" === n9 ? a8.emit("slideNextTransitionEnd") : a8.emit("slidePrevTransitionEnd");
                    }
                }
            }
        },
        slide: {
            slideTo: function(e2, t7, a8, i9) {
                if ((void 0) === e2 && (e2 = 0), (void 0) === t7 && (t7 = this.params.speed), (void 0) === a8 && (a8 = true), "number" != typeof e2 && "string" != typeof e2) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e2 + "] given.");
                if ("string" == typeof e2) {
                    var s7 = parseInt(e2, 10);
                    if (!isFinite(s7)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e2 + "] given.");
                    e2 = s7;
                }
                var r5 = this, n10 = e2;
                n10 < 0 && (n10 = 0);
                var l3 = r5.params, o4 = r5.snapGrid, d6 = r5.slidesGrid, p7 = r5.previousIndex, u7 = r5.activeIndex, c7 = r5.rtlTranslate, h7 = r5.wrapperEl;
                if (r5.animating && l3.preventInteractionOnTransition) return false;
                var v6 = Math.min(r5.params.slidesPerGroupSkip, n10), f4 = v6 + Math.floor((n10 - v6) / r5.params.slidesPerGroup);
                f4 >= o4.length && (f4 = o4.length - 1), (u7 || l3.initialSlide || 0) === (p7 || 0) && a8 && r5.emit("beforeSlideChangeStart");
                var m2, g4 = -o4[f4];
                if (r5.updateProgress(g4), l3.normalizeSlideIndex) for(var y3 = 0; y3 < d6.length; y3 += 1){
                    var w2 = -Math.floor(100 * g4), b2 = Math.floor(100 * d6[y3]), E1 = Math.floor(100 * d6[y3 + 1]);
                    (void 0) !== d6[y3 + 1] ? w2 >= b2 && w2 < E1 - (E1 - b2) / 2 ? n10 = y3 : w2 >= b2 && w2 < E1 && (n10 = y3 + 1) : w2 >= b2 && (n10 = y3);
                }
                if (r5.initialized && n10 !== u7) {
                    if (!r5.allowSlideNext && g4 < r5.translate && g4 < r5.minTranslate()) return false;
                    if (!r5.allowSlidePrev && g4 > r5.translate && g4 > r5.maxTranslate() && (u7 || 0) !== n10) return false;
                }
                if (m2 = n10 > u7 ? "next" : n10 < u7 ? "prev" : "reset", c7 && -g4 === r5.translate || !c7 && g4 === r5.translate) return r5.updateActiveIndex(n10), l3.autoHeight && r5.updateAutoHeight(), r5.updateSlidesClasses(), "slide" !== l3.effect && r5.setTranslate(g4), "reset" !== m2 && (r5.transitionStart(a8, m2), r5.transitionEnd(a8, m2)), false;
                if (l3.cssMode) {
                    var x1, T2 = r5.isHorizontal(), C3 = -g4;
                    if (c7 && (C3 = h7.scrollWidth - h7.offsetWidth - C3), 0 === t7) h7[T2 ? "scrollLeft" : "scrollTop"] = C3;
                    else if (h7.scrollTo) h7.scrollTo(((x1 = {
                    })[T2 ? "left" : "top"] = C3, x1.behavior = "smooth", x1));
                    else h7[T2 ? "scrollLeft" : "scrollTop"] = C3;
                    return true;
                }
                return 0 === t7 ? (r5.setTransition(0), r5.setTranslate(g4), r5.updateActiveIndex(n10), r5.updateSlidesClasses(), r5.emit("beforeTransitionStart", t7, i9), r5.transitionStart(a8, m2), r5.transitionEnd(a8, m2)) : (r5.setTransition(t7), r5.setTranslate(g4), r5.updateActiveIndex(n10), r5.updateSlidesClasses(), r5.emit("beforeTransitionStart", t7, i9), r5.transitionStart(a8, m2), r5.animating || (r5.animating = true, r5.onSlideToWrapperTransitionEnd || (r5.onSlideToWrapperTransitionEnd = function(e3) {
                    r5 && !r5.destroyed && e3.target === this && (r5.$wrapperEl[0].removeEventListener("transitionend", r5.onSlideToWrapperTransitionEnd), r5.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r5.onSlideToWrapperTransitionEnd), r5.onSlideToWrapperTransitionEnd = null, delete r5.onSlideToWrapperTransitionEnd, r5.transitionEnd(a8, m2));
                }), r5.$wrapperEl[0].addEventListener("transitionend", r5.onSlideToWrapperTransitionEnd), r5.$wrapperEl[0].addEventListener("webkitTransitionEnd", r5.onSlideToWrapperTransitionEnd))), true;
            },
            slideToLoop: function(e2, t7, a8, i9) {
                (void 0) === e2 && (e2 = 0), (void 0) === t7 && (t7 = this.params.speed), (void 0) === a8 && (a8 = true);
                var s8 = this, r5 = e2;
                return s8.params.loop && (r5 += s8.loopedSlides), s8.slideTo(r5, t7, a8, i9);
            },
            slideNext: function(e2, t7, a8) {
                (void 0) === e2 && (e2 = this.params.speed), (void 0) === t7 && (t7 = true);
                var i9 = this, s8 = i9.params, r5 = i9.animating, n10 = i9.activeIndex < s8.slidesPerGroupSkip ? 1 : s8.slidesPerGroup;
                if (s8.loop) {
                    if (r5 && s8.loopPreventsSlide) return false;
                    i9.loopFix(), i9._clientLeft = i9.$wrapperEl[0].clientLeft;
                }
                return i9.slideTo(i9.activeIndex + n10, e2, t7, a8);
            },
            slidePrev: function(e2, t7, a8) {
                (void 0) === e2 && (e2 = this.params.speed), (void 0) === t7 && (t7 = true);
                var i9 = this, s8 = i9.params, r5 = i9.animating, n10 = i9.snapGrid, l3 = i9.slidesGrid, o4 = i9.rtlTranslate;
                if (s8.loop) {
                    if (r5 && s8.loopPreventsSlide) return false;
                    i9.loopFix(), i9._clientLeft = i9.$wrapperEl[0].clientLeft;
                }
                function d6(e3) {
                    return e3 < 0 ? -Math.floor(Math.abs(e3)) : Math.floor(e3);
                }
                var p7 = d6(o4 ? i9.translate : -i9.translate), u7 = n10.map(function(e3) {
                    return d6(e3);
                });
                n10[u7.indexOf(p7)];
                var c7, h7 = n10[u7.indexOf(p7) - 1];
                return (void 0) === h7 && s8.cssMode && n10.forEach(function(e3) {
                    !h7 && p7 >= e3 && (h7 = e3);
                }), (void 0) !== h7 && (c7 = l3.indexOf(h7)) < 0 && (c7 = i9.activeIndex - 1), i9.slideTo(c7, e2, t7, a8);
            },
            slideReset: function(e2, t7, a8) {
                return (void 0) === e2 && (e2 = this.params.speed), (void 0) === t7 && (t7 = true), this.slideTo(this.activeIndex, e2, t7, a8);
            },
            slideToClosest: function(e2, t7, a8, i9) {
                (void 0) === e2 && (e2 = this.params.speed), (void 0) === t7 && (t7 = true), (void 0) === i9 && (i9 = 0.5);
                var s8 = this, r5 = s8.activeIndex, n10 = Math.min(s8.params.slidesPerGroupSkip, r5), l3 = n10 + Math.floor((r5 - n10) / s8.params.slidesPerGroup), o4 = s8.rtlTranslate ? s8.translate : -s8.translate;
                if (o4 >= s8.snapGrid[l3]) {
                    var d6 = s8.snapGrid[l3];
                    o4 - d6 > (s8.snapGrid[l3 + 1] - d6) * i9 && (r5 += s8.params.slidesPerGroup);
                } else {
                    var p7 = s8.snapGrid[l3 - 1];
                    o4 - p7 <= (s8.snapGrid[l3] - p7) * i9 && (r5 -= s8.params.slidesPerGroup);
                }
                return r5 = Math.max(r5, 0), r5 = Math.min(r5, s8.slidesGrid.length - 1), s8.slideTo(r5, e2, t7, a8);
            },
            slideToClickedSlide: function() {
                var e2, t7 = this, a8 = t7.params, i9 = t7.$wrapperEl, s8 = "auto" === a8.slidesPerView ? t7.slidesPerViewDynamic() : a8.slidesPerView, r5 = t7.clickedIndex;
                if (a8.loop) {
                    if (t7.animating) return;
                    e2 = parseInt(m(t7.clickedSlide).attr("data-swiper-slide-index"), 10), a8.centeredSlides ? r5 < t7.loopedSlides - s8 / 2 || r5 > t7.slides.length - t7.loopedSlides + s8 / 2 ? (t7.loopFix(), r5 = i9.children("." + a8.slideClass + '[data-swiper-slide-index="' + e2 + '"]:not(.' + a8.slideDuplicateClass + ")").eq(0).index(), E(function() {
                        t7.slideTo(r5);
                    })) : t7.slideTo(r5) : r5 > t7.slides.length - s8 ? (t7.loopFix(), r5 = i9.children("." + a8.slideClass + '[data-swiper-slide-index="' + e2 + '"]:not(.' + a8.slideDuplicateClass + ")").eq(0).index(), E(function() {
                        t7.slideTo(r5);
                    })) : t7.slideTo(r5);
                } else t7.slideTo(r5);
            }
        },
        loop: {
            loopCreate: function() {
                var e2 = this, t7 = r(), a8 = e2.params, i9 = e2.$wrapperEl;
                i9.children("." + a8.slideClass + "." + a8.slideDuplicateClass).remove();
                var s8 = i9.children("." + a8.slideClass);
                if (a8.loopFillGroupWithBlank) {
                    var n10 = a8.slidesPerGroup - s8.length % a8.slidesPerGroup;
                    if (n10 !== a8.slidesPerGroup) {
                        for(var l3 = 0; l3 < n10; l3 += 1){
                            var o4 = m(t7.createElement("div")).addClass(a8.slideClass + " " + a8.slideBlankClass);
                            i9.append(o4);
                        }
                        s8 = i9.children("." + a8.slideClass);
                    }
                }
                "auto" !== a8.slidesPerView || a8.loopedSlides || (a8.loopedSlides = s8.length), e2.loopedSlides = Math.ceil(parseFloat(a8.loopedSlides || a8.slidesPerView, 10)), e2.loopedSlides += a8.loopAdditionalSlides, e2.loopedSlides > s8.length && (e2.loopedSlides = s8.length);
                var d7 = [], p8 = [];
                s8.each(function(t8, a9) {
                    var i10 = m(t8);
                    a9 < e2.loopedSlides && p8.push(t8), a9 < s8.length && a9 >= s8.length - e2.loopedSlides && d7.push(t8), i10.attr("data-swiper-slide-index", a9);
                });
                for(var u7 = 0; u7 < p8.length; u7 += 1)i9.append(m(p8[u7].cloneNode(true)).addClass(a8.slideDuplicateClass));
                for(var c7 = d7.length - 1; c7 >= 0; c7 -= 1)i9.prepend(m(d7[c7].cloneNode(true)).addClass(a8.slideDuplicateClass));
            },
            loopFix: function() {
                var e2 = this;
                e2.emit("beforeLoopFix");
                var t7, a8 = e2.activeIndex, i9 = e2.slides, s8 = e2.loopedSlides, r5 = e2.allowSlidePrev, n11 = e2.allowSlideNext, l4 = e2.snapGrid, o5 = e2.rtlTranslate;
                e2.allowSlidePrev = true, e2.allowSlideNext = true;
                var d7 = -l4[a8] - e2.getTranslate();
                if (a8 < s8) t7 = i9.length - 3 * s8 + a8, t7 += s8, e2.slideTo(t7, 0, false, true) && 0 !== d7 && e2.setTranslate((o5 ? -e2.translate : e2.translate) - d7);
                else if (a8 >= i9.length - s8) t7 = -i9.length + a8 + s8, t7 += s8, e2.slideTo(t7, 0, false, true) && 0 !== d7 && e2.setTranslate((o5 ? -e2.translate : e2.translate) - d7);
                e2.allowSlidePrev = r5, e2.allowSlideNext = n11, e2.emit("loopFix");
            },
            loopDestroy: function() {
                var e2 = this, t7 = e2.$wrapperEl, a8 = e2.params, i9 = e2.slides;
                t7.children("." + a8.slideClass + "." + a8.slideDuplicateClass + ",." + a8.slideClass + "." + a8.slideBlankClass).remove(), i9.removeAttr("data-swiper-slide-index");
            }
        },
        grabCursor: {
            setGrabCursor: function(e2) {
                var t7 = this;
                if (!(t7.support.touch || !t7.params.simulateTouch || t7.params.watchOverflow && t7.isLocked || t7.params.cssMode)) {
                    var a8 = t7.el;
                    a8.style.cursor = "move", a8.style.cursor = e2 ? "-webkit-grabbing" : "-webkit-grab", a8.style.cursor = e2 ? "-moz-grabbin" : "-moz-grab", a8.style.cursor = e2 ? "grabbing" : "grab";
                }
            },
            unsetGrabCursor: function() {
                var e2 = this;
                e2.support.touch || e2.params.watchOverflow && e2.isLocked || e2.params.cssMode || (e2.el.style.cursor = "");
            }
        },
        manipulation: {
            appendSlide: function(e2) {
                var t7 = this, a9 = t7.$wrapperEl, i9 = t7.params;
                if (i9.loop && t7.loopDestroy(), "object" == typeof e2 && "length" in e2) for(var s8 = 0; s8 < e2.length; s8 += 1)e2[s8] && a9.append(e2[s8]);
                else a9.append(e2);
                i9.loop && t7.loopCreate(), i9.observer && t7.support.observer || t7.update();
            },
            prependSlide: function(e2) {
                var t7 = this, a9 = t7.params, i9 = t7.$wrapperEl, s8 = t7.activeIndex;
                a9.loop && t7.loopDestroy();
                var r5 = s8 + 1;
                if ("object" == typeof e2 && "length" in e2) {
                    for(var n11 = 0; n11 < e2.length; n11 += 1)e2[n11] && i9.prepend(e2[n11]);
                    r5 = s8 + e2.length;
                } else i9.prepend(e2);
                a9.loop && t7.loopCreate(), a9.observer && t7.support.observer || t7.update(), t7.slideTo(r5, 0, false);
            },
            addSlide: function(e2, t7) {
                var a9 = this, i9 = a9.$wrapperEl, s8 = a9.params, r5 = a9.activeIndex;
                s8.loop && (r5 -= a9.loopedSlides, a9.loopDestroy(), a9.slides = i9.children("." + s8.slideClass));
                var n12 = a9.slides.length;
                if (e2 <= 0) a9.prependSlide(t7);
                else if (e2 >= n12) a9.appendSlide(t7);
                else {
                    for(var l4 = r5 > e2 ? r5 + 1 : r5, o5 = [], d7 = n12 - 1; d7 >= e2; d7 -= 1){
                        var p8 = a9.slides.eq(d7);
                        p8.remove(), o5.unshift(p8);
                    }
                    if ("object" == typeof t7 && "length" in t7) {
                        for(var u7 = 0; u7 < t7.length; u7 += 1)t7[u7] && i9.append(t7[u7]);
                        l4 = r5 > e2 ? r5 + t7.length : r5;
                    } else i9.append(t7);
                    for(var c7 = 0; c7 < o5.length; c7 += 1)i9.append(o5[c7]);
                    s8.loop && a9.loopCreate(), s8.observer && a9.support.observer || a9.update(), s8.loop ? a9.slideTo(l4 + a9.loopedSlides, 0, false) : a9.slideTo(l4, 0, false);
                }
            },
            removeSlide: function(e2) {
                var t7 = this, a9 = t7.params, i9 = t7.$wrapperEl, s8 = t7.activeIndex;
                a9.loop && (s8 -= t7.loopedSlides, t7.loopDestroy(), t7.slides = i9.children("." + a9.slideClass));
                var r5, n12 = s8;
                if ("object" == typeof e2 && "length" in e2) {
                    for(var l5 = 0; l5 < e2.length; l5 += 1)r5 = e2[l5], t7.slides[r5] && t7.slides.eq(r5).remove(), r5 < n12 && (n12 -= 1);
                    n12 = Math.max(n12, 0);
                } else r5 = e2, t7.slides[r5] && t7.slides.eq(r5).remove(), r5 < n12 && (n12 -= 1), n12 = Math.max(n12, 0);
                a9.loop && t7.loopCreate(), a9.observer && t7.support.observer || t7.update(), a9.loop ? t7.slideTo(n12 + t7.loopedSlides, 0, false) : t7.slideTo(n12, 0, false);
            },
            removeAllSlides: function() {
                for(var e2 = [], t7 = 0; t7 < this.slides.length; t7 += 1)e2.push(t7);
                this.removeSlide(e2);
            }
        },
        events: {
            attachEvents: function() {
                var e2 = this, t7 = r(), a9 = e2.params, i9 = e2.touchEvents, s8 = e2.el, n12 = e2.wrapperEl, l6 = e2.device, o6 = e2.support;
                e2.onTouchStart = O.bind(e2), e2.onTouchMove = A.bind(e2), e2.onTouchEnd = D.bind(e2), a9.cssMode && (e2.onScroll = B.bind(e2)), e2.onClick = N.bind(e2);
                var d8 = !!a9.nested;
                if (!o6.touch && o6.pointerEvents) s8.addEventListener(i9.start, e2.onTouchStart, false), t7.addEventListener(i9.move, e2.onTouchMove, d8), t7.addEventListener(i9.end, e2.onTouchEnd, false);
                else {
                    if (o6.touch) {
                        var p9 = !("touchstart" !== i9.start || !o6.passiveListener || !a9.passiveListeners) && {
                            passive: true,
                            capture: false
                        };
                        s8.addEventListener(i9.start, e2.onTouchStart, p9), s8.addEventListener(i9.move, e2.onTouchMove, o6.passiveListener ? {
                            passive: false,
                            capture: d8
                        } : d8), s8.addEventListener(i9.end, e2.onTouchEnd, p9), i9.cancel && s8.addEventListener(i9.cancel, e2.onTouchEnd, p9), H || (t7.addEventListener("touchstart", X), H = true);
                    }
                    (a9.simulateTouch && !l6.ios && !l6.android || a9.simulateTouch && !o6.touch && l6.ios) && (s8.addEventListener("mousedown", e2.onTouchStart, false), t7.addEventListener("mousemove", e2.onTouchMove, d8), t7.addEventListener("mouseup", e2.onTouchEnd, false));
                }
                (a9.preventClicks || a9.preventClicksPropagation) && s8.addEventListener("click", e2.onClick, true), a9.cssMode && n12.addEventListener("scroll", e2.onScroll), a9.updateOnWindowResize ? e2.on(l6.ios || l6.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, true) : e2.on("observerUpdate", G, true);
            },
            detachEvents: function() {
                var e2 = this, t7 = r(), a9 = e2.params, i9 = e2.touchEvents, s8 = e2.el, n12 = e2.wrapperEl, l6 = e2.device, o6 = e2.support, d8 = !!a9.nested;
                if (!o6.touch && o6.pointerEvents) s8.removeEventListener(i9.start, e2.onTouchStart, false), t7.removeEventListener(i9.move, e2.onTouchMove, d8), t7.removeEventListener(i9.end, e2.onTouchEnd, false);
                else {
                    if (o6.touch) {
                        var p10 = !("onTouchStart" !== i9.start || !o6.passiveListener || !a9.passiveListeners) && {
                            passive: true,
                            capture: false
                        };
                        s8.removeEventListener(i9.start, e2.onTouchStart, p10), s8.removeEventListener(i9.move, e2.onTouchMove, d8), s8.removeEventListener(i9.end, e2.onTouchEnd, p10), i9.cancel && s8.removeEventListener(i9.cancel, e2.onTouchEnd, p10);
                    }
                    (a9.simulateTouch && !l6.ios && !l6.android || a9.simulateTouch && !o6.touch && l6.ios) && (s8.removeEventListener("mousedown", e2.onTouchStart, false), t7.removeEventListener("mousemove", e2.onTouchMove, d8), t7.removeEventListener("mouseup", e2.onTouchEnd, false));
                }
                (a9.preventClicks || a9.preventClicksPropagation) && s8.removeEventListener("click", e2.onClick, true), a9.cssMode && n12.removeEventListener("scroll", e2.onScroll), e2.off(l6.ios || l6.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G);
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                var e2 = this, t7 = e2.activeIndex, a9 = e2.initialized, i9 = e2.loopedSlides, s8 = (void 0) === i9 ? 0 : i9, r5 = e2.params, n12 = e2.$el, l6 = r5.breakpoints;
                if (l6 && (!l6 || 0 !== Object.keys(l6).length)) {
                    var o6 = e2.getBreakpoint(l6);
                    if (o6 && e2.currentBreakpoint !== o6) {
                        var d8 = o6 in l6 ? l6[o6] : void 0;
                        d8 && [
                            "slidesPerView",
                            "spaceBetween",
                            "slidesPerGroup",
                            "slidesPerGroupSkip",
                            "slidesPerColumn"
                        ].forEach(function(e3) {
                            var t8 = d8[e3];
                            (void 0) !== t8 && (d8[e3] = "slidesPerView" !== e3 || "AUTO" !== t8 && "auto" !== t8 ? "slidesPerView" === e3 ? parseFloat(t8) : parseInt(t8, 10) : "auto");
                        });
                        var p11 = d8 || e2.originalParams, u8 = r5.slidesPerColumn > 1, c8 = p11.slidesPerColumn > 1;
                        u8 && !c8 ? (n12.removeClass(r5.containerModifierClass + "multirow " + r5.containerModifierClass + "multirow-column"), e2.emitContainerClasses()) : !u8 && c8 && (n12.addClass(r5.containerModifierClass + "multirow"), "column" === p11.slidesPerColumnFill && n12.addClass(r5.containerModifierClass + "multirow-column"), e2.emitContainerClasses());
                        var h7 = p11.direction && p11.direction !== r5.direction, v6 = r5.loop && (p11.slidesPerView !== r5.slidesPerView || h7);
                        h7 && a9 && e2.changeDirection(), S(e2.params, p11), S(e2, {
                            allowTouchMove: e2.params.allowTouchMove,
                            allowSlideNext: e2.params.allowSlideNext,
                            allowSlidePrev: e2.params.allowSlidePrev
                        }), e2.currentBreakpoint = o6, e2.emit("_beforeBreakpoint", p11), v6 && a9 && (e2.loopDestroy(), e2.loopCreate(), e2.updateSlides(), e2.slideTo(t7 - s8 + e2.loopedSlides, 0, false)), e2.emit("breakpoint", p11);
                    }
                }
            },
            getBreakpoint: function(e2) {
                var t7 = l();
                if (e2) {
                    var a9 = false, i9 = Object.keys(e2).map(function(e3) {
                        if ("string" == typeof e3 && 0 === e3.indexOf("@")) {
                            var a10 = parseFloat(e3.substr(1));
                            return {
                                value: t7.innerHeight * a10,
                                point: e3
                            };
                        }
                        return {
                            value: e3,
                            point: e3
                        };
                    });
                    i9.sort(function(e3, t8) {
                        return parseInt(e3.value, 10) - parseInt(t8.value, 10);
                    });
                    for(var s8 = 0; s8 < i9.length; s8 += 1){
                        var r5 = i9[s8], n12 = r5.point;
                        r5.value <= t7.innerWidth && (a9 = n12);
                    }
                    return a9 || "max";
                }
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                var e2 = this, t7 = e2.params, a11 = e2.isLocked, i10 = e2.slides.length > 0 && t7.slidesOffsetBefore + t7.spaceBetween * (e2.slides.length - 1) + e2.slides[0].offsetWidth * e2.slides.length;
                t7.slidesOffsetBefore && t7.slidesOffsetAfter && i10 ? e2.isLocked = i10 <= e2.size : e2.isLocked = 1 === e2.snapGrid.length, e2.allowSlideNext = !e2.isLocked, e2.allowSlidePrev = !e2.isLocked, a11 !== e2.isLocked && e2.emit(e2.isLocked ? "lock" : "unlock"), a11 && a11 !== e2.isLocked && (e2.isEnd = false, e2.navigation && e2.navigation.update());
            }
        },
        classes: {
            addClasses: function() {
                var e2 = this, t7 = e2.classNames, a11 = e2.params, i10 = e2.rtl, s9 = e2.$el, r6 = e2.device, n13 = e2.support, l6 = [];
                l6.push("initialized"), l6.push(a11.direction), n13.pointerEvents && !n13.touch && l6.push("pointer-events"), a11.freeMode && l6.push("free-mode"), a11.autoHeight && l6.push("autoheight"), i10 && l6.push("rtl"), a11.slidesPerColumn > 1 && (l6.push("multirow"), "column" === a11.slidesPerColumnFill && l6.push("multirow-column")), r6.android && l6.push("android"), r6.ios && l6.push("ios"), a11.cssMode && l6.push("css-mode"), l6.forEach(function(e3) {
                    t7.push(a11.containerModifierClass + e3);
                }), s9.addClass(t7.join(" ")), e2.emitContainerClasses();
            },
            removeClasses: function() {
                var e2 = this, t7 = e2.$el, a11 = e2.classNames;
                t7.removeClass(a11.join(" ")), e2.emitContainerClasses();
            }
        },
        images: {
            loadImage: function(e2, t7, a11, i10, s9, r6) {
                var n13, o7 = l();
                function d9() {
                    r6 && r6();
                }
                m(e2).parent("picture")[0] || e2.complete && s9 ? d9() : t7 ? ((n13 = new o7.Image).onload = d9, n13.onerror = d9, i10 && (n13.sizes = i10), a11 && (n13.srcset = a11), t7 && (n13.src = t7)) : d9();
            },
            preloadImages: function() {
                var e2 = this;
                function t7() {
                    null != e2 && e2 && !e2.destroyed && ((void 0) !== e2.imagesLoaded && (e2.imagesLoaded += 1), e2.imagesLoaded === e2.imagesToLoad.length && (e2.params.updateOnImagesReady && e2.update(), e2.emit("imagesReady")));
                }
                e2.imagesToLoad = e2.$el.find("img");
                for(var a11 = 0; a11 < e2.imagesToLoad.length; a11 += 1){
                    var i10 = e2.imagesToLoad[a11];
                    e2.loadImage(i10, i10.currentSrc || i10.getAttribute("src"), i10.srcset || i10.getAttribute("srcset"), i10.sizes || i10.getAttribute("sizes"), true, t7);
                }
            }
        }
    }, F = {
    }, R = function() {
        function t7() {
            for(var e2, a11, i11 = arguments.length, s9 = new Array(i11), r6 = 0; r6 < i11; r6++)s9[r6] = arguments[r6];
            if (1 === s9.length && s9[0].constructor && s9[0].constructor === Object ? a11 = s9[0] : (e2 = s9[0], a11 = s9[1]), a11 || (a11 = {
            }), a11 = S({
            }, a11), e2 && !a11.el && (a11.el = e2), a11.el && m(a11.el).length > 1) {
                var n13 = [];
                return m(a11.el).each(function(e3) {
                    var i12 = S({
                    }, a11, {
                        el: e3
                    });
                    n13.push(new t7(i12));
                }), n13;
            }
            var l6 = this;
            l6.support = z(), l6.device = P({
                userAgent: a11.userAgent
            }), l6.browser = k(), l6.eventsListeners = {
            }, l6.eventsAnyListeners = [], (void 0) === l6.modules && (l6.modules = {
            }), Object.keys(l6.modules).forEach(function(e3) {
                var t8 = l6.modules[e3];
                if (t8.params) {
                    var i12 = Object.keys(t8.params)[0], s10 = t8.params[i12];
                    if ("object" != typeof s10 || null === s10) return;
                    if (!(i12 in a11) || !("enabled" in s10)) return;
                    true === a11[i12] && (a11[i12] = {
                        enabled: true
                    }), "object" != typeof a11[i12] || "enabled" in a11[i12] || (a11[i12].enabled = true), a11[i12] || (a11[i12] = {
                        enabled: false
                    });
                }
            });
            var o7, d9, p12 = S({
            }, Y);
            return l6.useParams(p12), l6.params = S({
            }, p12, F, a11), l6.originalParams = S({
            }, l6.params), l6.passedParams = S({
            }, a11), l6.params && l6.params.on && Object.keys(l6.params.on).forEach(function(e3) {
                l6.on(e3, l6.params.on[e3]);
            }), l6.params && l6.params.onAny && l6.onAny(l6.params.onAny), l6.$ = m, S(l6, {
                el: e2,
                classNames: [],
                slides: m(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function() {
                    return "horizontal" === l6.params.direction;
                },
                isVertical: function() {
                    return "vertical" === l6.params.direction;
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: true,
                isEnd: false,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: false,
                allowSlideNext: l6.params.allowSlideNext,
                allowSlidePrev: l6.params.allowSlidePrev,
                touchEvents: (o7 = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel"
                ], d9 = [
                    "mousedown",
                    "mousemove",
                    "mouseup"
                ], l6.support.pointerEvents && (d9 = [
                    "pointerdown",
                    "pointermove",
                    "pointerup"
                ]), l6.touchEventsTouch = {
                    start: o7[0],
                    move: o7[1],
                    end: o7[2],
                    cancel: o7[3]
                }, l6.touchEventsDesktop = {
                    start: d9[0],
                    move: d9[1],
                    end: d9[2]
                }, l6.support.touch || !l6.params.simulateTouch ? l6.touchEventsTouch : l6.touchEventsDesktop),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    formElements: "input, select, option, textarea, button, video, label",
                    lastClickTime: x(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: true,
                allowTouchMove: l6.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), l6.useModules(), l6.emit("_swiper"), l6.params.init && l6.init(), l6;
        }
        var a11, i11, s9, r6 = t7.prototype;
        return r6.emitContainerClasses = function() {
            var e2 = this;
            if (e2.params._emitClasses && e2.el) {
                var t8 = e2.el.className.split(" ").filter(function(t9) {
                    return 0 === t9.indexOf("swiper-container") || 0 === t9.indexOf(e2.params.containerModifierClass);
                });
                e2.emit("_containerClasses", t8.join(" "));
            }
        }, r6.getSlideClasses = function(e2) {
            var t9 = this;
            return e2.className.split(" ").filter(function(e3) {
                return 0 === e3.indexOf("swiper-slide") || 0 === e3.indexOf(t9.params.slideClass);
            }).join(" ");
        }, r6.emitSlidesClasses = function() {
            var e2 = this;
            if (e2.params._emitClasses && e2.el) {
                var t9 = [];
                e2.slides.each(function(a12) {
                    var i13 = e2.getSlideClasses(a12);
                    t9.push({
                        slideEl: a12,
                        classNames: i13
                    }), e2.emit("_slideClass", a12, i13);
                }), e2.emit("_slideClasses", t9);
            }
        }, r6.slidesPerViewDynamic = function() {
            var e2 = this, t10 = e2.params, a12 = e2.slides, i13 = e2.slidesGrid, s11 = e2.size, r7 = e2.activeIndex, n14 = 1;
            if (t10.centeredSlides) {
                for(var l6, o7 = a12[r7].swiperSlideSize, d9 = r7 + 1; d9 < a12.length; d9 += 1)a12[d9] && !l6 && (n14 += 1, (o7 += a12[d9].swiperSlideSize) > s11 && (l6 = true));
                for(var p12 = r7 - 1; p12 >= 0; p12 -= 1)a12[p12] && !l6 && (n14 += 1, (o7 += a12[p12].swiperSlideSize) > s11 && (l6 = true));
            } else for(var u9 = r7 + 1; u9 < a12.length; u9 += 1)i13[u9] - i13[r7] < s11 && (n14 += 1);
            return n14;
        }, r6.update = function() {
            var e2 = this;
            if (e2 && !e2.destroyed) {
                var t10 = e2.snapGrid, a12 = e2.params;
                a12.breakpoints && e2.setBreakpoint(), e2.updateSize(), e2.updateSlides(), e2.updateProgress(), e2.updateSlidesClasses(), e2.params.freeMode ? (i13(), e2.params.autoHeight && e2.updateAutoHeight()) : (("auto" === e2.params.slidesPerView || e2.params.slidesPerView > 1) && e2.isEnd && !e2.params.centeredSlides ? e2.slideTo(e2.slides.length - 1, 0, false, true) : e2.slideTo(e2.activeIndex, 0, false, true)) || i13(), a12.watchOverflow && t10 !== e2.snapGrid && e2.checkOverflow(), e2.emit("update");
            }
            function i13() {
                var t11 = e2.rtlTranslate ? -1 * e2.translate : e2.translate, a13 = Math.min(Math.max(t11, e2.maxTranslate()), e2.minTranslate());
                e2.setTranslate(a13), e2.updateActiveIndex(), e2.updateSlidesClasses();
            }
        }, r6.changeDirection = function(e2, t11) {
            (void 0) === t11 && (t11 = true);
            var a13 = this, i13 = a13.params.direction;
            return e2 || (e2 = "horizontal" === i13 ? "vertical" : "horizontal"), e2 === i13 || "horizontal" !== e2 && "vertical" !== e2 || (a13.$el.removeClass("" + a13.params.containerModifierClass + i13).addClass("" + a13.params.containerModifierClass + e2), a13.emitContainerClasses(), a13.params.direction = e2, a13.slides.each(function(t12) {
                "vertical" === e2 ? t12.style.width = "" : t12.style.height = "";
            }), a13.emit("changeDirection"), t11 && a13.update()), a13;
        }, r6.mount = function(e2) {
            var t11 = this;
            if (t11.mounted) return true;
            var a13, i13 = m(e2 || t11.params.el);
            return !!(e2 = i13[0]) && (e2.swiper = t11, e2 && e2.shadowRoot && e2.shadowRoot.querySelector ? (a13 = m(e2.shadowRoot.querySelector("." + t11.params.wrapperClass))).children = function(e3) {
                return i13.children(e3);
            } : a13 = i13.children("." + t11.params.wrapperClass), S(t11, {
                $el: i13,
                el: e2,
                $wrapperEl: a13,
                wrapperEl: a13[0],
                mounted: true,
                rtl: "rtl" === e2.dir.toLowerCase() || "rtl" === i13.css("direction"),
                rtlTranslate: "horizontal" === t11.params.direction && ("rtl" === e2.dir.toLowerCase() || "rtl" === i13.css("direction")),
                wrongRTL: "-webkit-box" === a13.css("display")
            }), true);
        }, r6.init = function(e2) {
            var t11 = this;
            return t11.initialized || false === t11.mount(e2) || (t11.emit("beforeInit"), t11.params.breakpoints && t11.setBreakpoint(), t11.addClasses(), t11.params.loop && t11.loopCreate(), t11.updateSize(), t11.updateSlides(), t11.params.watchOverflow && t11.checkOverflow(), t11.params.grabCursor && t11.setGrabCursor(), t11.params.preloadImages && t11.preloadImages(), t11.params.loop ? t11.slideTo(t11.params.initialSlide + t11.loopedSlides, 0, t11.params.runCallbacksOnInit) : t11.slideTo(t11.params.initialSlide, 0, t11.params.runCallbacksOnInit), t11.attachEvents(), t11.initialized = true, t11.emit("init"), t11.emit("afterInit")), t11;
        }, r6.destroy = function(e2, t11) {
            (void 0) === e2 && (e2 = true), (void 0) === t11 && (t11 = true);
            var a13, i13 = this, s11 = i13.params, r7 = i13.$el, n14 = i13.$wrapperEl, l7 = i13.slides;
            return (void 0) === i13.params || i13.destroyed || (i13.emit("beforeDestroy"), i13.initialized = false, i13.detachEvents(), s11.loop && i13.loopDestroy(), t11 && (i13.removeClasses(), r7.removeAttr("style"), n14.removeAttr("style"), l7 && l7.length && l7.removeClass([
                s11.slideVisibleClass,
                s11.slideActiveClass,
                s11.slideNextClass,
                s11.slidePrevClass
            ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i13.emit("destroy"), Object.keys(i13.eventsListeners).forEach(function(e3) {
                i13.off(e3);
            }), false !== e2 && (i13.$el[0].swiper = null, a13 = i13, Object.keys(a13).forEach(function(e3) {
                try {
                    a13[e3] = null;
                } catch (e4) {
                }
                try {
                    delete a13[e3];
                } catch (e4) {
                }
            })), i13.destroyed = true), null;
        }, t7.extendDefaults = function(e2) {
            S(F, e2);
        }, t7.installModule = function(e2) {
            t7.prototype.modules || (t7.prototype.modules = {
            });
            var a13 = e2.name || Object.keys(t7.prototype.modules).length + "_" + x();
            t7.prototype.modules[a13] = e2;
        }, t7.use = function(e2) {
            return Array.isArray(e2) ? (e2.forEach(function(e3) {
                return t7.installModule(e3);
            }), t7) : (t7.installModule(e2), t7);
        }, a11 = t7, s9 = [
            {
                key: "extendedDefaults",
                get: function() {
                    return F;
                }
            },
            {
                key: "defaults",
                get: function() {
                    return Y;
                }
            }
        ], i11 = null, s9 && e(a11, s9), t7;
    }();
    Object.keys(V).forEach(function(e2) {
        Object.keys(V[e2]).forEach(function(t7) {
            R.prototype[t7] = V[e2][t7];
        });
    }), R.use([
        L,
        I
    ]);
    var W = {
        update: function(e2) {
            var t7 = this, a11 = t7.params, i11 = a11.slidesPerView, s9 = a11.slidesPerGroup, r6 = a11.centeredSlides, n14 = t7.params.virtual, l7 = n14.addSlidesBefore, o8 = n14.addSlidesAfter, d10 = t7.virtual, p13 = d10.from, u9 = d10.to, c9 = d10.slides, h8 = d10.slidesGrid, v7 = d10.renderSlide, f4 = d10.offset;
            t7.updateActiveIndex();
            var m2, g4, y3, w3 = t7.activeIndex || 0;
            m2 = t7.rtlTranslate ? "right" : t7.isHorizontal() ? "left" : "top", r6 ? (g4 = Math.floor(i11 / 2) + s9 + o8, y3 = Math.floor(i11 / 2) + s9 + l7) : (g4 = i11 + (s9 - 1) + o8, y3 = s9 + l7);
            var b3 = Math.max((w3 || 0) - y3, 0), E2 = Math.min((w3 || 0) + g4, c9.length - 1), x2 = (t7.slidesGrid[b3] || 0) - (t7.slidesGrid[0] || 0);
            function T3() {
                t7.updateSlides(), t7.updateProgress(), t7.updateSlidesClasses(), t7.lazy && t7.params.lazy.enabled && t7.lazy.load();
            }
            if (S(t7.virtual, {
                from: b3,
                to: E2,
                offset: x2,
                slidesGrid: t7.slidesGrid
            }), p13 === b3 && u9 === E2 && !e2) return t7.slidesGrid !== h8 && x2 !== f4 && t7.slides.css(m2, x2 + "px"), void t7.updateProgress();
            if (t7.params.virtual.renderExternal) return t7.params.virtual.renderExternal.call(t7, {
                offset: x2,
                from: b3,
                to: E2,
                slides: function() {
                    for(var e3 = [], t11 = b3; t11 <= E2; t11 += 1)e3.push(c9[t11]);
                    return e3;
                }()
            }), void (t7.params.virtual.renderExternalUpdate && T3());
            var C4 = [], M3 = [];
            if (e2) t7.$wrapperEl.find("." + t7.params.slideClass).remove();
            else for(var z3 = p13; z3 <= u9; z3 += 1)(z3 < b3 || z3 > E2) && t7.$wrapperEl.find("." + t7.params.slideClass + '[data-swiper-slide-index="' + z3 + '"]').remove();
            for(var P3 = 0; P3 < c9.length; P3 += 1)P3 >= b3 && P3 <= E2 && ((void 0) === u9 || e2 ? M3.push(P3) : (P3 > u9 && M3.push(P3), P3 < p13 && C4.push(P3)));
            M3.forEach(function(e3) {
                t7.$wrapperEl.append(v7(c9[e3], e3));
            }), C4.sort(function(e3, t11) {
                return t11 - e3;
            }).forEach(function(e3) {
                t7.$wrapperEl.prepend(v7(c9[e3], e3));
            }), t7.$wrapperEl.children(".swiper-slide").css(m2, x2 + "px"), T3();
        },
        renderSlide: function(e2, t7) {
            var a11 = this, i11 = a11.params.virtual;
            if (i11.cache && a11.virtual.cache[t7]) return a11.virtual.cache[t7];
            var s9 = i11.renderSlide ? m(i11.renderSlide.call(a11, e2, t7)) : m('<div class="' + a11.params.slideClass + '" data-swiper-slide-index="' + t7 + '">' + e2 + "</div>");
            return s9.attr("data-swiper-slide-index") || s9.attr("data-swiper-slide-index", t7), i11.cache && (a11.virtual.cache[t7] = s9), s9;
        },
        appendSlide: function(e2) {
            var t7 = this;
            if ("object" == typeof e2 && "length" in e2) for(var a11 = 0; a11 < e2.length; a11 += 1)e2[a11] && t7.virtual.slides.push(e2[a11]);
            else t7.virtual.slides.push(e2);
            t7.virtual.update(true);
        },
        prependSlide: function(e2) {
            var t7 = this, a11 = t7.activeIndex, i11 = a11 + 1, s9 = 1;
            if (Array.isArray(e2)) {
                for(var r6 = 0; r6 < e2.length; r6 += 1)e2[r6] && t7.virtual.slides.unshift(e2[r6]);
                i11 = a11 + e2.length, s9 = e2.length;
            } else t7.virtual.slides.unshift(e2);
            if (t7.params.virtual.cache) {
                var n14 = t7.virtual.cache, l7 = {
                };
                Object.keys(n14).forEach(function(e3) {
                    var t11 = n14[e3], a13 = t11.attr("data-swiper-slide-index");
                    a13 && t11.attr("data-swiper-slide-index", parseInt(a13, 10) + 1), l7[parseInt(e3, 10) + s9] = t11;
                }), t7.virtual.cache = l7;
            }
            t7.virtual.update(true), t7.slideTo(i11, 0);
        },
        removeSlide: function(e2) {
            var t7 = this;
            if (null != e2) {
                var a11 = t7.activeIndex;
                if (Array.isArray(e2)) for(var i11 = e2.length - 1; i11 >= 0; i11 -= 1)t7.virtual.slides.splice(e2[i11], 1), t7.params.virtual.cache && delete t7.virtual.cache[e2[i11]], e2[i11] < a11 && (a11 -= 1), a11 = Math.max(a11, 0);
                else t7.virtual.slides.splice(e2, 1), t7.params.virtual.cache && delete t7.virtual.cache[e2], e2 < a11 && (a11 -= 1), a11 = Math.max(a11, 0);
                t7.virtual.update(true), t7.slideTo(a11, 0);
            }
        },
        removeAllSlides: function() {
            var e2 = this;
            e2.virtual.slides = [], e2.params.virtual.cache && (e2.virtual.cache = {
            }), e2.virtual.update(true), e2.slideTo(0, 0);
        }
    }, q = {
        name: "virtual",
        params: {
            virtual: {
                enabled: false,
                slides: [],
                cache: true,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: true,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create: function() {
            M(this, {
                virtual: t({
                }, W, {
                    slides: this.params.virtual.slides,
                    cache: {
                    }
                })
            });
        },
        on: {
            beforeInit: function(e2) {
                if (e2.params.virtual.enabled) {
                    e2.classNames.push(e2.params.containerModifierClass + "virtual");
                    var t7 = {
                        watchSlidesProgress: true
                    };
                    S(e2.params, t7), S(e2.originalParams, t7), e2.params.initialSlide || e2.virtual.update();
                }
            },
            setTranslate: function(e2) {
                e2.params.virtual.enabled && e2.virtual.update();
            }
        }
    }, j = {
        handle: function(e2) {
            var t11 = this, a13 = l(), i13 = r(), s9 = t11.rtlTranslate, n15 = e2;
            n15.originalEvent && (n15 = n15.originalEvent);
            var o8 = n15.keyCode || n15.charCode, d10 = t11.params.keyboard.pageUpDown, p13 = d10 && 33 === o8, u9 = d10 && 34 === o8, c9 = 37 === o8, h8 = 39 === o8, v7 = 38 === o8, f4 = 40 === o8;
            if (!t11.allowSlideNext && (t11.isHorizontal() && h8 || t11.isVertical() && f4 || u9)) return false;
            if (!t11.allowSlidePrev && (t11.isHorizontal() && c9 || t11.isVertical() && v7 || p13)) return false;
            if (!(n15.shiftKey || n15.altKey || n15.ctrlKey || n15.metaKey || i13.activeElement && i13.activeElement.nodeName && ("input" === i13.activeElement.nodeName.toLowerCase() || "textarea" === i13.activeElement.nodeName.toLowerCase()))) {
                if (t11.params.keyboard.onlyInViewport && (p13 || u9 || c9 || h8 || v7 || f4)) {
                    var m2 = false;
                    if (t11.$el.parents("." + t11.params.slideClass).length > 0 && 0 === t11.$el.parents("." + t11.params.slideActiveClass).length) return;
                    var g4 = a13.innerWidth, y3 = a13.innerHeight, w3 = t11.$el.offset();
                    s9 && (w3.left -= t11.$el[0].scrollLeft);
                    for(var b3 = [
                        [
                            w3.left,
                            w3.top
                        ],
                        [
                            w3.left + t11.width,
                            w3.top
                        ],
                        [
                            w3.left,
                            w3.top + t11.height
                        ],
                        [
                            w3.left + t11.width,
                            w3.top + t11.height
                        ]
                    ], E2 = 0; E2 < b3.length; E2 += 1){
                        var x2 = b3[E2];
                        if (x2[0] >= 0 && x2[0] <= g4 && x2[1] >= 0 && x2[1] <= y3) {
                            if (0 === x2[0] && 0 === x2[1]) continue;
                            m2 = true;
                        }
                    }
                    if (!m2) return;
                }
                t11.isHorizontal() ? ((p13 || u9 || c9 || h8) && (n15.preventDefault ? n15.preventDefault() : n15.returnValue = false), ((u9 || h8) && !s9 || (p13 || c9) && s9) && t11.slideNext(), ((p13 || c9) && !s9 || (u9 || h8) && s9) && t11.slidePrev()) : ((p13 || u9 || v7 || f4) && (n15.preventDefault ? n15.preventDefault() : n15.returnValue = false), (u9 || f4) && t11.slideNext(), (p13 || v7) && t11.slidePrev()), t11.emit("keyPress", o8);
            }
        },
        enable: function() {
            var e2 = this, t11 = r();
            e2.keyboard.enabled || (m(t11).on("keydown", e2.keyboard.handle), e2.keyboard.enabled = true);
        },
        disable: function() {
            var e2 = this, t11 = r();
            e2.keyboard.enabled && (m(t11).off("keydown", e2.keyboard.handle), e2.keyboard.enabled = false);
        }
    }, _ = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: false,
                onlyInViewport: true,
                pageUpDown: true
            }
        },
        create: function() {
            M(this, {
                keyboard: t({
                    enabled: false
                }, j)
            });
        },
        on: {
            init: function(e2) {
                e2.params.keyboard.enabled && e2.keyboard.enable();
            },
            destroy: function(e2) {
                e2.keyboard.enabled && e2.keyboard.disable();
            }
        }
    };
    var U = {
        lastScrollTime: x(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: function() {
            return l().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : (function() {
                var e2 = r(), t11 = "onwheel", a13 = t11 in e2;
                if (!a13) {
                    var i13 = e2.createElement("div");
                    i13.setAttribute(t11, "return;"), a13 = "function" == typeof i13.onwheel;
                }
                return !a13 && e2.implementation && e2.implementation.hasFeature && true !== e2.implementation.hasFeature("", "") && (a13 = e2.implementation.hasFeature("Events.wheel", "3.0")), a13;
            })() ? "wheel" : "mousewheel";
        },
        normalize: function(e2) {
            var t11 = 0, a13 = 0, i14 = 0, s9 = 0;
            return "detail" in e2 && (a13 = e2.detail), "wheelDelta" in e2 && (a13 = -e2.wheelDelta / 120), "wheelDeltaY" in e2 && (a13 = -e2.wheelDeltaY / 120), "wheelDeltaX" in e2 && (t11 = -e2.wheelDeltaX / 120), "axis" in e2 && e2.axis === e2.HORIZONTAL_AXIS && (t11 = a13, a13 = 0), i14 = 10 * t11, s9 = 10 * a13, "deltaY" in e2 && (s9 = e2.deltaY), "deltaX" in e2 && (i14 = e2.deltaX), e2.shiftKey && !i14 && (i14 = s9, s9 = 0), (i14 || s9) && e2.deltaMode && (1 === e2.deltaMode ? (i14 *= 40, s9 *= 40) : (i14 *= 800, s9 *= 800)), i14 && !t11 && (t11 = i14 < 1 ? -1 : 1), s9 && !a13 && (a13 = s9 < 1 ? -1 : 1), {
                spinX: t11,
                spinY: a13,
                pixelX: i14,
                pixelY: s9
            };
        },
        handleMouseEnter: function() {
            this.mouseEntered = true;
        },
        handleMouseLeave: function() {
            this.mouseEntered = false;
        },
        handle: function(e2) {
            var t11 = e2, a13 = this, i14 = a13.params.mousewheel;
            a13.params.cssMode && t11.preventDefault();
            var s9 = a13.$el;
            if ("container" !== a13.params.mousewheel.eventsTarget && (s9 = m(a13.params.mousewheel.eventsTarget)), !a13.mouseEntered && !s9[0].contains(t11.target) && !i14.releaseOnEdges) return true;
            t11.originalEvent && (t11 = t11.originalEvent);
            var r7 = 0, n15 = a13.rtlTranslate ? -1 : 1, l8 = U.normalize(t11);
            if (i14.forceToAxis) {
                if (a13.isHorizontal()) {
                    if (!(Math.abs(l8.pixelX) > Math.abs(l8.pixelY))) return true;
                    r7 = -l8.pixelX * n15;
                } else {
                    if (!(Math.abs(l8.pixelY) > Math.abs(l8.pixelX))) return true;
                    r7 = -l8.pixelY;
                }
            } else r7 = Math.abs(l8.pixelX) > Math.abs(l8.pixelY) ? -l8.pixelX * n15 : -l8.pixelY;
            if (0 === r7) return true;
            i14.invert && (r7 = -r7);
            var o8 = a13.getTranslate() + r7 * i14.sensitivity;
            if (o8 >= a13.minTranslate() && (o8 = a13.minTranslate()), o8 <= a13.maxTranslate() && (o8 = a13.maxTranslate()), (!!a13.params.loop || !(o8 === a13.minTranslate() || o8 === a13.maxTranslate())) && a13.params.nested && t11.stopPropagation(), a13.params.freeMode) {
                var d10 = {
                    time: x(),
                    delta: Math.abs(r7),
                    direction: Math.sign(r7)
                }, p13 = a13.mousewheel.lastEventBeforeSnap, u9 = p13 && d10.time < p13.time + 500 && d10.delta <= p13.delta && d10.direction === p13.direction;
                if (!u9) {
                    a13.mousewheel.lastEventBeforeSnap = void 0, a13.params.loop && a13.loopFix();
                    var c9 = a13.getTranslate() + r7 * i14.sensitivity, h8 = a13.isBeginning, v7 = a13.isEnd;
                    if (c9 >= a13.minTranslate() && (c9 = a13.minTranslate()), c9 <= a13.maxTranslate() && (c9 = a13.maxTranslate()), a13.setTransition(0), a13.setTranslate(c9), a13.updateProgress(), a13.updateActiveIndex(), a13.updateSlidesClasses(), (!h8 && a13.isBeginning || !v7 && a13.isEnd) && a13.updateSlidesClasses(), a13.params.freeModeSticky) {
                        clearTimeout(a13.mousewheel.timeout), a13.mousewheel.timeout = void 0;
                        var f4 = a13.mousewheel.recentWheelEvents;
                        f4.length >= 15 && f4.shift();
                        var g5 = f4.length ? f4[f4.length - 1] : void 0, y4 = f4[0];
                        if (f4.push(d10), g5 && (d10.delta > g5.delta || d10.direction !== g5.direction)) f4.splice(0);
                        else if (f4.length >= 15 && d10.time - y4.time < 500 && y4.delta - d10.delta >= 1 && d10.delta <= 6) {
                            var w4 = r7 > 0 ? 0.8 : 0.2;
                            a13.mousewheel.lastEventBeforeSnap = d10, f4.splice(0), a13.mousewheel.timeout = E(function() {
                                a13.slideToClosest(a13.params.speed, true, void 0, w4);
                            }, 0);
                        }
                        a13.mousewheel.timeout || (a13.mousewheel.timeout = E(function() {
                            a13.mousewheel.lastEventBeforeSnap = d10, f4.splice(0), a13.slideToClosest(a13.params.speed, true, void 0, 0.5);
                        }, 500));
                    }
                    if (u9 || a13.emit("scroll", t11), a13.params.autoplay && a13.params.autoplayDisableOnInteraction && a13.autoplay.stop(), c9 === a13.minTranslate() || c9 === a13.maxTranslate()) return true;
                }
            } else {
                var b4 = {
                    time: x(),
                    delta: Math.abs(r7),
                    direction: Math.sign(r7),
                    raw: e2
                }, T3 = a13.mousewheel.recentWheelEvents;
                T3.length >= 2 && T3.shift();
                var C4 = T3.length ? T3[T3.length - 1] : void 0;
                if (T3.push(b4), C4 ? (b4.direction !== C4.direction || b4.delta > C4.delta || b4.time > C4.time + 150) && a13.mousewheel.animateSlider(b4) : a13.mousewheel.animateSlider(b4), a13.mousewheel.releaseScroll(b4)) return true;
            }
            return t11.preventDefault ? t11.preventDefault() : t11.returnValue = false, false;
        },
        animateSlider: function(e2) {
            var t11 = this, a13 = l();
            return !(this.params.mousewheel.thresholdDelta && e2.delta < this.params.mousewheel.thresholdDelta) && !(this.params.mousewheel.thresholdTime && x() - t11.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e2.delta >= 6 && x() - t11.mousewheel.lastScrollTime < 60 || (e2.direction < 0 ? t11.isEnd && !t11.params.loop || t11.animating || (t11.slideNext(), t11.emit("scroll", e2.raw)) : t11.isBeginning && !t11.params.loop || t11.animating || (t11.slidePrev(), t11.emit("scroll", e2.raw)), t11.mousewheel.lastScrollTime = (new a13.Date).getTime(), false));
        },
        releaseScroll: function(e2) {
            var t11 = this, a13 = t11.params.mousewheel;
            if (e2.direction < 0) {
                if (t11.isEnd && !t11.params.loop && a13.releaseOnEdges) return true;
            } else if (t11.isBeginning && !t11.params.loop && a13.releaseOnEdges) return true;
            return false;
        },
        enable: function() {
            var e2 = this, t11 = U.event();
            if (e2.params.cssMode) return e2.wrapperEl.removeEventListener(t11, e2.mousewheel.handle), true;
            if (!t11) return false;
            if (e2.mousewheel.enabled) return false;
            var a13 = e2.$el;
            return "container" !== e2.params.mousewheel.eventsTarget && (a13 = m(e2.params.mousewheel.eventsTarget)), a13.on("mouseenter", e2.mousewheel.handleMouseEnter), a13.on("mouseleave", e2.mousewheel.handleMouseLeave), a13.on(t11, e2.mousewheel.handle), e2.mousewheel.enabled = true, true;
        },
        disable: function() {
            var e2 = this, t11 = U.event();
            if (e2.params.cssMode) return e2.wrapperEl.addEventListener(t11, e2.mousewheel.handle), true;
            if (!t11) return false;
            if (!e2.mousewheel.enabled) return false;
            var a13 = e2.$el;
            return "container" !== e2.params.mousewheel.eventsTarget && (a13 = m(e2.params.mousewheel.eventsTarget)), a13.off(t11, e2.mousewheel.handle), e2.mousewheel.enabled = false, true;
        }
    }, K = {
        update: function() {
            var e2 = this, t11 = e2.params.navigation;
            if (!e2.params.loop) {
                var a13 = e2.navigation, i14 = a13.$nextEl, s9 = a13.$prevEl;
                s9 && s9.length > 0 && (e2.isBeginning ? s9.addClass(t11.disabledClass) : s9.removeClass(t11.disabledClass), s9[e2.params.watchOverflow && e2.isLocked ? "addClass" : "removeClass"](t11.lockClass)), i14 && i14.length > 0 && (e2.isEnd ? i14.addClass(t11.disabledClass) : i14.removeClass(t11.disabledClass), i14[e2.params.watchOverflow && e2.isLocked ? "addClass" : "removeClass"](t11.lockClass));
            }
        },
        onPrevClick: function(e2) {
            var t11 = this;
            e2.preventDefault(), t11.isBeginning && !t11.params.loop || t11.slidePrev();
        },
        onNextClick: function(e2) {
            var t11 = this;
            e2.preventDefault(), t11.isEnd && !t11.params.loop || t11.slideNext();
        },
        init: function() {
            var e2, t11, a14 = this, i15 = a14.params.navigation;
            (i15.nextEl || i15.prevEl) && (i15.nextEl && (e2 = m(i15.nextEl), a14.params.uniqueNavElements && "string" == typeof i15.nextEl && e2.length > 1 && 1 === a14.$el.find(i15.nextEl).length && (e2 = a14.$el.find(i15.nextEl))), i15.prevEl && (t11 = m(i15.prevEl), a14.params.uniqueNavElements && "string" == typeof i15.prevEl && t11.length > 1 && 1 === a14.$el.find(i15.prevEl).length && (t11 = a14.$el.find(i15.prevEl))), e2 && e2.length > 0 && e2.on("click", a14.navigation.onNextClick), t11 && t11.length > 0 && t11.on("click", a14.navigation.onPrevClick), S(a14.navigation, {
                $nextEl: e2,
                nextEl: e2 && e2[0],
                $prevEl: t11,
                prevEl: t11 && t11[0]
            }));
        },
        destroy: function() {
            var e2 = this, t11 = e2.navigation, a14 = t11.$nextEl, i15 = t11.$prevEl;
            a14 && a14.length && (a14.off("click", e2.navigation.onNextClick), a14.removeClass(e2.params.navigation.disabledClass)), i15 && i15.length && (i15.off("click", e2.navigation.onPrevClick), i15.removeClass(e2.params.navigation.disabledClass));
        }
    }, Z = {
        update: function() {
            var e2 = this, t11 = e2.rtl, a14 = e2.params.pagination;
            if (a14.el && e2.pagination.el && e2.pagination.$el && 0 !== e2.pagination.$el.length) {
                var i15, s11 = e2.virtual && e2.params.virtual.enabled ? e2.virtual.slides.length : e2.slides.length, r7 = e2.pagination.$el, n15 = e2.params.loop ? Math.ceil((s11 - 2 * e2.loopedSlides) / e2.params.slidesPerGroup) : e2.snapGrid.length;
                if (e2.params.loop ? ((i15 = Math.ceil((e2.activeIndex - e2.loopedSlides) / e2.params.slidesPerGroup)) > s11 - 1 - 2 * e2.loopedSlides && (i15 -= s11 - 2 * e2.loopedSlides), i15 > n15 - 1 && (i15 -= n15), i15 < 0 && "bullets" !== e2.params.paginationType && (i15 = n15 + i15)) : i15 = (void 0) !== e2.snapIndex ? e2.snapIndex : e2.activeIndex || 0, "bullets" === a14.type && e2.pagination.bullets && e2.pagination.bullets.length > 0) {
                    var l8, o8, d11, p14 = e2.pagination.bullets;
                    if (a14.dynamicBullets && (e2.pagination.bulletSize = p14.eq(0)[e2.isHorizontal() ? "outerWidth" : "outerHeight"](true), r7.css(e2.isHorizontal() ? "width" : "height", e2.pagination.bulletSize * (a14.dynamicMainBullets + 4) + "px"), a14.dynamicMainBullets > 1 && (void 0) !== e2.previousIndex && (e2.pagination.dynamicBulletIndex += i15 - e2.previousIndex, e2.pagination.dynamicBulletIndex > a14.dynamicMainBullets - 1 ? e2.pagination.dynamicBulletIndex = a14.dynamicMainBullets - 1 : e2.pagination.dynamicBulletIndex < 0 && (e2.pagination.dynamicBulletIndex = 0)), l8 = i15 - e2.pagination.dynamicBulletIndex, d11 = ((o8 = l8 + (Math.min(p14.length, a14.dynamicMainBullets) - 1)) + l8) / 2), p14.removeClass(a14.bulletActiveClass + " " + a14.bulletActiveClass + "-next " + a14.bulletActiveClass + "-next-next " + a14.bulletActiveClass + "-prev " + a14.bulletActiveClass + "-prev-prev " + a14.bulletActiveClass + "-main"), r7.length > 1) p14.each(function(e3) {
                        var t12 = m(e3), s12 = t12.index();
                        s12 === i15 && t12.addClass(a14.bulletActiveClass), a14.dynamicBullets && (s12 >= l8 && s12 <= o8 && t12.addClass(a14.bulletActiveClass + "-main"), s12 === l8 && t12.prev().addClass(a14.bulletActiveClass + "-prev").prev().addClass(a14.bulletActiveClass + "-prev-prev"), s12 === o8 && t12.next().addClass(a14.bulletActiveClass + "-next").next().addClass(a14.bulletActiveClass + "-next-next"));
                    });
                    else {
                        var u10 = p14.eq(i15), c10 = u10.index();
                        if (u10.addClass(a14.bulletActiveClass), a14.dynamicBullets) {
                            for(var h9 = p14.eq(l8), v8 = p14.eq(o8), f5 = l8; f5 <= o8; f5 += 1)p14.eq(f5).addClass(a14.bulletActiveClass + "-main");
                            if (e2.params.loop) {
                                if (c10 >= p14.length - a14.dynamicMainBullets) {
                                    for(var g6 = a14.dynamicMainBullets; g6 >= 0; g6 -= 1)p14.eq(p14.length - g6).addClass(a14.bulletActiveClass + "-main");
                                    p14.eq(p14.length - a14.dynamicMainBullets - 1).addClass(a14.bulletActiveClass + "-prev");
                                } else h9.prev().addClass(a14.bulletActiveClass + "-prev").prev().addClass(a14.bulletActiveClass + "-prev-prev"), v8.next().addClass(a14.bulletActiveClass + "-next").next().addClass(a14.bulletActiveClass + "-next-next");
                            } else h9.prev().addClass(a14.bulletActiveClass + "-prev").prev().addClass(a14.bulletActiveClass + "-prev-prev"), v8.next().addClass(a14.bulletActiveClass + "-next").next().addClass(a14.bulletActiveClass + "-next-next");
                        }
                    }
                    if (a14.dynamicBullets) {
                        var y5 = Math.min(p14.length, a14.dynamicMainBullets + 4), w5 = (e2.pagination.bulletSize * y5 - e2.pagination.bulletSize) / 2 - d11 * e2.pagination.bulletSize, b5 = t11 ? "right" : "left";
                        p14.css(e2.isHorizontal() ? b5 : "top", w5 + "px");
                    }
                }
                if ("fraction" === a14.type && (r7.find("." + a14.currentClass).text(a14.formatFractionCurrent(i15 + 1)), r7.find("." + a14.totalClass).text(a14.formatFractionTotal(n15))), "progressbar" === a14.type) {
                    var E3;
                    E3 = a14.progressbarOpposite ? e2.isHorizontal() ? "vertical" : "horizontal" : e2.isHorizontal() ? "horizontal" : "vertical";
                    var x3 = (i15 + 1) / n15, T4 = 1, C5 = 1;
                    "horizontal" === E3 ? T4 = x3 : C5 = x3, r7.find("." + a14.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + T4 + ") scaleY(" + C5 + ")").transition(e2.params.speed);
                }
                "custom" === a14.type && a14.renderCustom ? (r7.html(a14.renderCustom(e2, i15 + 1, n15)), e2.emit("paginationRender", r7[0])) : e2.emit("paginationUpdate", r7[0]), r7[e2.params.watchOverflow && e2.isLocked ? "addClass" : "removeClass"](a14.lockClass);
            }
        },
        render: function() {
            var e2 = this, t11 = e2.params.pagination;
            if (t11.el && e2.pagination.el && e2.pagination.$el && 0 !== e2.pagination.$el.length) {
                var a14 = e2.virtual && e2.params.virtual.enabled ? e2.virtual.slides.length : e2.slides.length, i16 = e2.pagination.$el, s12 = "";
                if ("bullets" === t11.type) {
                    var r8 = e2.params.loop ? Math.ceil((a14 - 2 * e2.loopedSlides) / e2.params.slidesPerGroup) : e2.snapGrid.length;
                    e2.params.freeMode && !e2.params.loop && r8 > a14 && (r8 = a14);
                    for(var n16 = 0; n16 < r8; n16 += 1)t11.renderBullet ? s12 += t11.renderBullet.call(e2, n16, t11.bulletClass) : s12 += "<" + t11.bulletElement + ' class="' + t11.bulletClass + '"></' + t11.bulletElement + ">";
                    i16.html(s12), e2.pagination.bullets = i16.find("." + t11.bulletClass.replace(/ /g, "."));
                }
                "fraction" === t11.type && (s12 = t11.renderFraction ? t11.renderFraction.call(e2, t11.currentClass, t11.totalClass) : '<span class="' + t11.currentClass + '"></span> / <span class="' + t11.totalClass + '"></span>', i16.html(s12)), "progressbar" === t11.type && (s12 = t11.renderProgressbar ? t11.renderProgressbar.call(e2, t11.progressbarFillClass) : '<span class="' + t11.progressbarFillClass + '"></span>', i16.html(s12)), "custom" !== t11.type && e2.emit("paginationRender", e2.pagination.$el[0]);
            }
        },
        init: function() {
            var e2 = this, t11 = e2.params.pagination;
            if (t11.el) {
                var a15 = m(t11.el);
                0 !== a15.length && (e2.params.uniqueNavElements && "string" == typeof t11.el && a15.length > 1 && (a15 = e2.$el.find(t11.el)), "bullets" === t11.type && t11.clickable && a15.addClass(t11.clickableClass), a15.addClass(t11.modifierClass + t11.type), "bullets" === t11.type && t11.dynamicBullets && (a15.addClass("" + t11.modifierClass + t11.type + "-dynamic"), e2.pagination.dynamicBulletIndex = 0, t11.dynamicMainBullets < 1 && (t11.dynamicMainBullets = 1)), "progressbar" === t11.type && t11.progressbarOpposite && a15.addClass(t11.progressbarOppositeClass), t11.clickable && a15.on("click", "." + t11.bulletClass.replace(/ /g, "."), function(t12) {
                    t12.preventDefault();
                    var a16 = m(this).index() * e2.params.slidesPerGroup;
                    e2.params.loop && (a16 += e2.loopedSlides), e2.slideTo(a16);
                }), S(e2.pagination, {
                    $el: a15,
                    el: a15[0]
                }));
            }
        },
        destroy: function() {
            var e2 = this, t11 = e2.params.pagination;
            if (t11.el && e2.pagination.el && e2.pagination.$el && 0 !== e2.pagination.$el.length) {
                var a16 = e2.pagination.$el;
                a16.removeClass(t11.hiddenClass), a16.removeClass(t11.modifierClass + t11.type), e2.pagination.bullets && e2.pagination.bullets.removeClass(t11.bulletActiveClass), t11.clickable && a16.off("click", "." + t11.bulletClass.replace(/ /g, "."));
            }
        }
    }, J = {
        setTranslate: function() {
            var e2 = this;
            if (e2.params.scrollbar.el && e2.scrollbar.el) {
                var t11 = e2.scrollbar, a17 = e2.rtlTranslate, i17 = e2.progress, s13 = t11.dragSize, r9 = t11.trackSize, n17 = t11.$dragEl, l9 = t11.$el, o9 = e2.params.scrollbar, d12 = s13, p15 = (r9 - s13) * i17;
                a17 ? (p15 = -p15) > 0 ? (d12 = s13 - p15, p15 = 0) : -p15 + s13 > r9 && (d12 = r9 + p15) : p15 < 0 ? (d12 = s13 + p15, p15 = 0) : p15 + s13 > r9 && (d12 = r9 - p15), e2.isHorizontal() ? (n17.transform("translate3d(" + p15 + "px, 0, 0)"), n17[0].style.width = d12 + "px") : (n17.transform("translate3d(0px, " + p15 + "px, 0)"), n17[0].style.height = d12 + "px"), o9.hide && (clearTimeout(e2.scrollbar.timeout), l9[0].style.opacity = 1, e2.scrollbar.timeout = setTimeout(function() {
                    l9[0].style.opacity = 0, l9.transition(400);
                }, 1000));
            }
        },
        setTransition: function(e2) {
            var t12 = this;
            t12.params.scrollbar.el && t12.scrollbar.el && t12.scrollbar.$dragEl.transition(e2);
        },
        updateSize: function() {
            var e2 = this;
            if (e2.params.scrollbar.el && e2.scrollbar.el) {
                var t12 = e2.scrollbar, a18 = t12.$dragEl, i18 = t12.$el;
                a18[0].style.width = "", a18[0].style.height = "";
                var s14, r10 = e2.isHorizontal() ? i18[0].offsetWidth : i18[0].offsetHeight, n18 = e2.size / e2.virtualSize, l10 = n18 * (r10 / e2.size);
                s14 = "auto" === e2.params.scrollbar.dragSize ? r10 * n18 : parseInt(e2.params.scrollbar.dragSize, 10), e2.isHorizontal() ? a18[0].style.width = s14 + "px" : a18[0].style.height = s14 + "px", i18[0].style.display = n18 >= 1 ? "none" : "", e2.params.scrollbar.hide && (i18[0].style.opacity = 0), S(t12, {
                    trackSize: r10,
                    divider: n18,
                    moveDivider: l10,
                    dragSize: s14
                }), t12.$el[e2.params.watchOverflow && e2.isLocked ? "addClass" : "removeClass"](e2.params.scrollbar.lockClass);
            }
        },
        getPointerPosition: function(e2) {
            return this.isHorizontal() ? "touchstart" === e2.type || "touchmove" === e2.type ? e2.targetTouches[0].clientX : e2.clientX : "touchstart" === e2.type || "touchmove" === e2.type ? e2.targetTouches[0].clientY : e2.clientY;
        },
        setDragPosition: function(e2) {
            var t13, a19 = this, i19 = a19.scrollbar, s15 = a19.rtlTranslate, r11 = i19.$el, n19 = i19.dragSize, l11 = i19.trackSize, o10 = i19.dragStartPos;
            t13 = (i19.getPointerPosition(e2) - r11.offset()[a19.isHorizontal() ? "left" : "top"] - (null !== o10 ? o10 : n19 / 2)) / (l11 - n19), t13 = Math.max(Math.min(t13, 1), 0), s15 && (t13 = 1 - t13);
            var d13 = a19.minTranslate() + (a19.maxTranslate() - a19.minTranslate()) * t13;
            a19.updateProgress(d13), a19.setTranslate(d13), a19.updateActiveIndex(), a19.updateSlidesClasses();
        },
        onDragStart: function(e2) {
            var t13 = this, a19 = t13.params.scrollbar, i19 = t13.scrollbar, s15 = t13.$wrapperEl, r11 = i19.$el, n19 = i19.$dragEl;
            t13.scrollbar.isTouched = true, t13.scrollbar.dragStartPos = e2.target === n19[0] || e2.target === n19 ? i19.getPointerPosition(e2) - e2.target.getBoundingClientRect()[t13.isHorizontal() ? "left" : "top"] : null, e2.preventDefault(), e2.stopPropagation(), s15.transition(100), n19.transition(100), i19.setDragPosition(e2), clearTimeout(t13.scrollbar.dragTimeout), r11.transition(0), a19.hide && r11.css("opacity", 1), t13.params.cssMode && t13.$wrapperEl.css("scroll-snap-type", "none"), t13.emit("scrollbarDragStart", e2);
        },
        onDragMove: function(e2) {
            var t13 = this, a19 = t13.scrollbar, i19 = t13.$wrapperEl, s15 = a19.$el, r11 = a19.$dragEl;
            t13.scrollbar.isTouched && (e2.preventDefault ? e2.preventDefault() : e2.returnValue = false, a19.setDragPosition(e2), i19.transition(0), s15.transition(0), r11.transition(0), t13.emit("scrollbarDragMove", e2));
        },
        onDragEnd: function(e2) {
            var t13 = this, a19 = t13.params.scrollbar, i19 = t13.scrollbar, s15 = t13.$wrapperEl, r11 = i19.$el;
            t13.scrollbar.isTouched && (t13.scrollbar.isTouched = false, t13.params.cssMode && (t13.$wrapperEl.css("scroll-snap-type", ""), s15.transition("")), a19.hide && (clearTimeout(t13.scrollbar.dragTimeout), t13.scrollbar.dragTimeout = E(function() {
                r11.css("opacity", 0), r11.transition(400);
            }, 1000)), t13.emit("scrollbarDragEnd", e2), a19.snapOnRelease && t13.slideToClosest());
        },
        enableDraggable: function() {
            var e2 = this;
            if (e2.params.scrollbar.el) {
                var t13 = r(), a19 = e2.scrollbar, i19 = e2.touchEventsTouch, s15 = e2.touchEventsDesktop, n19 = e2.params, l11 = e2.support, o10 = a19.$el[0], d13 = !(!l11.passiveListener || !n19.passiveListeners) && {
                    passive: false,
                    capture: false
                }, p16 = !(!l11.passiveListener || !n19.passiveListeners) && {
                    passive: true,
                    capture: false
                };
                o10 && (l11.touch ? (o10.addEventListener(i19.start, e2.scrollbar.onDragStart, d13), o10.addEventListener(i19.move, e2.scrollbar.onDragMove, d13), o10.addEventListener(i19.end, e2.scrollbar.onDragEnd, p16)) : (o10.addEventListener(s15.start, e2.scrollbar.onDragStart, d13), t13.addEventListener(s15.move, e2.scrollbar.onDragMove, d13), t13.addEventListener(s15.end, e2.scrollbar.onDragEnd, p16)));
            }
        },
        disableDraggable: function() {
            var e2 = this;
            if (e2.params.scrollbar.el) {
                var t14 = r(), a20 = e2.scrollbar, i20 = e2.touchEventsTouch, s16 = e2.touchEventsDesktop, n20 = e2.params, l12 = e2.support, o11 = a20.$el[0], d14 = !(!l12.passiveListener || !n20.passiveListeners) && {
                    passive: false,
                    capture: false
                }, p17 = !(!l12.passiveListener || !n20.passiveListeners) && {
                    passive: true,
                    capture: false
                };
                o11 && (l12.touch ? (o11.removeEventListener(i20.start, e2.scrollbar.onDragStart, d14), o11.removeEventListener(i20.move, e2.scrollbar.onDragMove, d14), o11.removeEventListener(i20.end, e2.scrollbar.onDragEnd, p17)) : (o11.removeEventListener(s16.start, e2.scrollbar.onDragStart, d14), t14.removeEventListener(s16.move, e2.scrollbar.onDragMove, d14), t14.removeEventListener(s16.end, e2.scrollbar.onDragEnd, p17)));
            }
        },
        init: function() {
            var e2 = this;
            if (e2.params.scrollbar.el) {
                var t15 = e2.scrollbar, a21 = e2.$el, i21 = e2.params.scrollbar, s17 = m(i21.el);
                e2.params.uniqueNavElements && "string" == typeof i21.el && s17.length > 1 && 1 === a21.find(i21.el).length && (s17 = a21.find(i21.el));
                var r11 = s17.find("." + e2.params.scrollbar.dragClass);
                0 === r11.length && (r11 = m('<div class="' + e2.params.scrollbar.dragClass + '"></div>'), s17.append(r11)), S(t15, {
                    $el: s17,
                    el: s17[0],
                    $dragEl: r11,
                    dragEl: r11[0]
                }), i21.draggable && t15.enableDraggable();
            }
        },
        destroy: function() {
            this.scrollbar.disableDraggable();
        }
    }, Q = {
        setTransform: function(e2, t16) {
            var a22 = this.rtl, i22 = m(e2), s18 = a22 ? -1 : 1, r12 = i22.attr("data-swiper-parallax") || "0", n21 = i22.attr("data-swiper-parallax-x"), l13 = i22.attr("data-swiper-parallax-y"), o12 = i22.attr("data-swiper-parallax-scale"), d15 = i22.attr("data-swiper-parallax-opacity");
            if (n21 || l13 ? (n21 = n21 || "0", l13 = l13 || "0") : this.isHorizontal() ? (n21 = r12, l13 = "0") : (l13 = r12, n21 = "0"), n21 = n21.indexOf("%") >= 0 ? parseInt(n21, 10) * t16 * s18 + "%" : n21 * t16 * s18 + "px", l13 = l13.indexOf("%") >= 0 ? parseInt(l13, 10) * t16 + "%" : l13 * t16 + "px", null != d15) {
                var p18 = d15 - (d15 - 1) * (1 - Math.abs(t16));
                i22[0].style.opacity = p18;
            }
            if (null == o12) i22.transform("translate3d(" + n21 + ", " + l13 + ", 0px)");
            else {
                var u11 = o12 - (o12 - 1) * (1 - Math.abs(t16));
                i22.transform("translate3d(" + n21 + ", " + l13 + ", 0px) scale(" + u11 + ")");
            }
        },
        setTranslate: function() {
            var e2 = this, t16 = e2.$el, a22 = e2.slides, i22 = e2.progress, s18 = e2.snapGrid;
            t16.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t17) {
                e2.parallax.setTransform(t17, i22);
            }), a22.each(function(t17, a23) {
                var r12 = t17.progress;
                e2.params.slidesPerGroup > 1 && "auto" !== e2.params.slidesPerView && (r12 += Math.ceil(a23 / 2) - i22 * (s18.length - 1)), r12 = Math.min(Math.max(r12, -1), 1), m(t17).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t18) {
                    e2.parallax.setTransform(t18, r12);
                });
            });
        },
        setTransition: function(e2) {
            (void 0) === e2 && (e2 = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t16) {
                var a22 = m(t16), i22 = parseInt(a22.attr("data-swiper-parallax-duration"), 10) || e2;
                0 === e2 && (i22 = 0), a22.transition(i22);
            });
        }
    }, ee = {
        getDistanceBetweenTouches: function(e2) {
            if (e2.targetTouches.length < 2) return 1;
            var t16 = e2.targetTouches[0].pageX, a22 = e2.targetTouches[0].pageY, i22 = e2.targetTouches[1].pageX, s18 = e2.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(i22 - t16, 2) + Math.pow(s18 - a22, 2));
        },
        onGestureStart: function(e2) {
            var t16 = this, a22 = t16.support, i22 = t16.params.zoom, s18 = t16.zoom, r12 = s18.gesture;
            if (s18.fakeGestureTouched = false, s18.fakeGestureMoved = false, !a22.gestures) {
                if ("touchstart" !== e2.type || "touchstart" === e2.type && e2.targetTouches.length < 2) return;
                s18.fakeGestureTouched = true, r12.scaleStart = ee.getDistanceBetweenTouches(e2);
            }
            r12.$slideEl && r12.$slideEl.length || (r12.$slideEl = m(e2.target).closest("." + t16.params.slideClass), 0 === r12.$slideEl.length && (r12.$slideEl = t16.slides.eq(t16.activeIndex)), r12.$imageEl = r12.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), r12.$imageWrapEl = r12.$imageEl.parent("." + i22.containerClass), r12.maxRatio = r12.$imageWrapEl.attr("data-swiper-zoom") || i22.maxRatio, 0 !== r12.$imageWrapEl.length) ? (r12.$imageEl && r12.$imageEl.transition(0), t16.zoom.isScaling = true) : r12.$imageEl = void 0;
        },
        onGestureChange: function(e2) {
            var t16 = this, a22 = t16.support, i22 = t16.params.zoom, s18 = t16.zoom, r12 = s18.gesture;
            if (!a22.gestures) {
                if ("touchmove" !== e2.type || "touchmove" === e2.type && e2.targetTouches.length < 2) return;
                s18.fakeGestureMoved = true, r12.scaleMove = ee.getDistanceBetweenTouches(e2);
            }
            r12.$imageEl && 0 !== r12.$imageEl.length ? (a22.gestures ? s18.scale = e2.scale * s18.currentScale : s18.scale = r12.scaleMove / r12.scaleStart * s18.currentScale, s18.scale > r12.maxRatio && (s18.scale = r12.maxRatio - 1 + Math.pow(s18.scale - r12.maxRatio + 1, 0.5)), s18.scale < i22.minRatio && (s18.scale = i22.minRatio + 1 - Math.pow(i22.minRatio - s18.scale + 1, 0.5)), r12.$imageEl.transform("translate3d(0,0,0) scale(" + s18.scale + ")")) : "gesturechange" === e2.type && s18.onGestureStart(e2);
        },
        onGestureEnd: function(e2) {
            var t16 = this, a22 = t16.device, i22 = t16.support, s18 = t16.params.zoom, r12 = t16.zoom, n21 = r12.gesture;
            if (!i22.gestures) {
                if (!r12.fakeGestureTouched || !r12.fakeGestureMoved) return;
                if ("touchend" !== e2.type || "touchend" === e2.type && e2.changedTouches.length < 2 && !a22.android) return;
                r12.fakeGestureTouched = false, r12.fakeGestureMoved = false;
            }
            n21.$imageEl && 0 !== n21.$imageEl.length && (r12.scale = Math.max(Math.min(r12.scale, n21.maxRatio), s18.minRatio), n21.$imageEl.transition(t16.params.speed).transform("translate3d(0,0,0) scale(" + r12.scale + ")"), r12.currentScale = r12.scale, r12.isScaling = false, 1 === r12.scale && (n21.$slideEl = void 0));
        },
        onTouchStart: function(e2) {
            var t16 = this.device, a22 = this.zoom, i22 = a22.gesture, s18 = a22.image;
            i22.$imageEl && 0 !== i22.$imageEl.length && (s18.isTouched || (t16.android && e2.cancelable && e2.preventDefault(), s18.isTouched = true, s18.touchesStart.x = "touchstart" === e2.type ? e2.targetTouches[0].pageX : e2.pageX, s18.touchesStart.y = "touchstart" === e2.type ? e2.targetTouches[0].pageY : e2.pageY));
        },
        onTouchMove: function(e2) {
            var t16 = this, a22 = t16.zoom, i22 = a22.gesture, s18 = a22.image, r12 = a22.velocity;
            if (i22.$imageEl && 0 !== i22.$imageEl.length && (t16.allowClick = false, s18.isTouched && i22.$slideEl)) {
                s18.isMoved || (s18.width = i22.$imageEl[0].offsetWidth, s18.height = i22.$imageEl[0].offsetHeight, s18.startX = T(i22.$imageWrapEl[0], "x") || 0, s18.startY = T(i22.$imageWrapEl[0], "y") || 0, i22.slideWidth = i22.$slideEl[0].offsetWidth, i22.slideHeight = i22.$slideEl[0].offsetHeight, i22.$imageWrapEl.transition(0), t16.rtl && (s18.startX = -s18.startX, s18.startY = -s18.startY));
                var n21 = s18.width * a22.scale, l13 = s18.height * a22.scale;
                if (!(n21 < i22.slideWidth && l13 < i22.slideHeight)) {
                    if (s18.minX = Math.min(i22.slideWidth / 2 - n21 / 2, 0), s18.maxX = -s18.minX, s18.minY = Math.min(i22.slideHeight / 2 - l13 / 2, 0), s18.maxY = -s18.minY, s18.touchesCurrent.x = "touchmove" === e2.type ? e2.targetTouches[0].pageX : e2.pageX, s18.touchesCurrent.y = "touchmove" === e2.type ? e2.targetTouches[0].pageY : e2.pageY, !s18.isMoved && !a22.isScaling) {
                        if (t16.isHorizontal() && (Math.floor(s18.minX) === Math.floor(s18.startX) && s18.touchesCurrent.x < s18.touchesStart.x || Math.floor(s18.maxX) === Math.floor(s18.startX) && s18.touchesCurrent.x > s18.touchesStart.x)) return void (s18.isTouched = false);
                        if (!t16.isHorizontal() && (Math.floor(s18.minY) === Math.floor(s18.startY) && s18.touchesCurrent.y < s18.touchesStart.y || Math.floor(s18.maxY) === Math.floor(s18.startY) && s18.touchesCurrent.y > s18.touchesStart.y)) return void (s18.isTouched = false);
                    }
                    e2.cancelable && e2.preventDefault(), e2.stopPropagation(), s18.isMoved = true, s18.currentX = s18.touchesCurrent.x - s18.touchesStart.x + s18.startX, s18.currentY = s18.touchesCurrent.y - s18.touchesStart.y + s18.startY, s18.currentX < s18.minX && (s18.currentX = s18.minX + 1 - Math.pow(s18.minX - s18.currentX + 1, 0.8)), s18.currentX > s18.maxX && (s18.currentX = s18.maxX - 1 + Math.pow(s18.currentX - s18.maxX + 1, 0.8)), s18.currentY < s18.minY && (s18.currentY = s18.minY + 1 - Math.pow(s18.minY - s18.currentY + 1, 0.8)), s18.currentY > s18.maxY && (s18.currentY = s18.maxY - 1 + Math.pow(s18.currentY - s18.maxY + 1, 0.8)), r12.prevPositionX || (r12.prevPositionX = s18.touchesCurrent.x), r12.prevPositionY || (r12.prevPositionY = s18.touchesCurrent.y), r12.prevTime || (r12.prevTime = Date.now()), r12.x = (s18.touchesCurrent.x - r12.prevPositionX) / (Date.now() - r12.prevTime) / 2, r12.y = (s18.touchesCurrent.y - r12.prevPositionY) / (Date.now() - r12.prevTime) / 2, Math.abs(s18.touchesCurrent.x - r12.prevPositionX) < 2 && (r12.x = 0), Math.abs(s18.touchesCurrent.y - r12.prevPositionY) < 2 && (r12.y = 0), r12.prevPositionX = s18.touchesCurrent.x, r12.prevPositionY = s18.touchesCurrent.y, r12.prevTime = Date.now(), i22.$imageWrapEl.transform("translate3d(" + s18.currentX + "px, " + s18.currentY + "px,0)");
                }
            }
        },
        onTouchEnd: function() {
            var e2 = this.zoom, t16 = e2.gesture, a22 = e2.image, i22 = e2.velocity;
            if (t16.$imageEl && 0 !== t16.$imageEl.length) {
                if (!a22.isTouched || !a22.isMoved) return a22.isTouched = false, void (a22.isMoved = false);
                a22.isTouched = false, a22.isMoved = false;
                var s18 = 300, r12 = 300, n22 = i22.x * s18, l14 = a22.currentX + n22, o12 = i22.y * r12, d15 = a22.currentY + o12;
                0 !== i22.x && (s18 = Math.abs((l14 - a22.currentX) / i22.x)), 0 !== i22.y && (r12 = Math.abs((d15 - a22.currentY) / i22.y));
                var p19 = Math.max(s18, r12);
                a22.currentX = l14, a22.currentY = d15;
                var u12 = a22.width * e2.scale, c11 = a22.height * e2.scale;
                a22.minX = Math.min(t16.slideWidth / 2 - u12 / 2, 0), a22.maxX = -a22.minX, a22.minY = Math.min(t16.slideHeight / 2 - c11 / 2, 0), a22.maxY = -a22.minY, a22.currentX = Math.max(Math.min(a22.currentX, a22.maxX), a22.minX), a22.currentY = Math.max(Math.min(a22.currentY, a22.maxY), a22.minY), t16.$imageWrapEl.transition(p19).transform("translate3d(" + a22.currentX + "px, " + a22.currentY + "px,0)");
            }
        },
        onTransitionEnd: function() {
            var e2 = this, t16 = e2.zoom, a22 = t16.gesture;
            a22.$slideEl && e2.previousIndex !== e2.activeIndex && (a22.$imageEl && a22.$imageEl.transform("translate3d(0,0,0) scale(1)"), a22.$imageWrapEl && a22.$imageWrapEl.transform("translate3d(0,0,0)"), t16.scale = 1, t16.currentScale = 1, a22.$slideEl = void 0, a22.$imageEl = void 0, a22.$imageWrapEl = void 0);
        },
        toggle: function(e2) {
            var t16 = this.zoom;
            t16.scale && 1 !== t16.scale ? t16.out() : t16.in(e2);
        },
        in: function(e2) {
            var t16, a22, i22, s19, r13, n23, o13, d16, p20, u13, c12, h10, v9, f6, m3, g7, y6 = this, w6 = l(), b6 = y6.zoom, E4 = y6.params.zoom, x4 = b6.gesture, T5 = b6.image;
            (x4.$slideEl || (y6.params.virtual && y6.params.virtual.enabled && y6.virtual ? x4.$slideEl = y6.$wrapperEl.children("." + y6.params.slideActiveClass) : x4.$slideEl = y6.slides.eq(y6.activeIndex), x4.$imageEl = x4.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), x4.$imageWrapEl = x4.$imageEl.parent("." + E4.containerClass)), x4.$imageEl && 0 !== x4.$imageEl.length) && (x4.$slideEl.addClass("" + E4.zoomedSlideClass), (void 0) === T5.touchesStart.x && e2 ? (t16 = "touchend" === e2.type ? e2.changedTouches[0].pageX : e2.pageX, a22 = "touchend" === e2.type ? e2.changedTouches[0].pageY : e2.pageY) : (t16 = T5.touchesStart.x, a22 = T5.touchesStart.y), b6.scale = x4.$imageWrapEl.attr("data-swiper-zoom") || E4.maxRatio, b6.currentScale = x4.$imageWrapEl.attr("data-swiper-zoom") || E4.maxRatio, e2 ? (m3 = x4.$slideEl[0].offsetWidth, g7 = x4.$slideEl[0].offsetHeight, i22 = x4.$slideEl.offset().left + w6.scrollX + m3 / 2 - t16, s19 = x4.$slideEl.offset().top + w6.scrollY + g7 / 2 - a22, o13 = x4.$imageEl[0].offsetWidth, d16 = x4.$imageEl[0].offsetHeight, p20 = o13 * b6.scale, u13 = d16 * b6.scale, v9 = -(c12 = Math.min(m3 / 2 - p20 / 2, 0)), f6 = -(h10 = Math.min(g7 / 2 - u13 / 2, 0)), (r13 = i22 * b6.scale) < c12 && (r13 = c12), r13 > v9 && (r13 = v9), (n23 = s19 * b6.scale) < h10 && (n23 = h10), n23 > f6 && (n23 = f6)) : (r13 = 0, n23 = 0), x4.$imageWrapEl.transition(300).transform("translate3d(" + r13 + "px, " + n23 + "px,0)"), x4.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b6.scale + ")"));
        },
        out: function() {
            var e2 = this, t16 = e2.zoom, a22 = e2.params.zoom, i22 = t16.gesture;
            i22.$slideEl || (e2.params.virtual && e2.params.virtual.enabled && e2.virtual ? i22.$slideEl = e2.$wrapperEl.children("." + e2.params.slideActiveClass) : i22.$slideEl = e2.slides.eq(e2.activeIndex), i22.$imageEl = i22.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i22.$imageWrapEl = i22.$imageEl.parent("." + a22.containerClass)), i22.$imageEl && 0 !== i22.$imageEl.length && (t16.scale = 1, t16.currentScale = 1, i22.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i22.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i22.$slideEl.removeClass("" + a22.zoomedSlideClass), i22.$slideEl = void 0);
        },
        toggleGestures: function(e2) {
            var t16 = this, a22 = t16.zoom, i22 = a22.slideSelector, s19 = a22.passiveListener;
            t16.$wrapperEl[e2]("gesturestart", i22, a22.onGestureStart, s19), t16.$wrapperEl[e2]("gesturechange", i22, a22.onGestureChange, s19), t16.$wrapperEl[e2]("gestureend", i22, a22.onGestureEnd, s19);
        },
        enableGestures: function() {
            this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = true, this.zoom.toggleGestures("on"));
        },
        disableGestures: function() {
            this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = false, this.zoom.toggleGestures("off"));
        },
        enable: function() {
            var e2 = this, t16 = e2.support, a22 = e2.zoom;
            if (!a22.enabled) {
                a22.enabled = true;
                var i22 = !("touchstart" !== e2.touchEvents.start || !t16.passiveListener || !e2.params.passiveListeners) && {
                    passive: true,
                    capture: false
                }, s19 = !t16.passiveListener || {
                    passive: false,
                    capture: true
                }, r13 = "." + e2.params.slideClass;
                e2.zoom.passiveListener = i22, e2.zoom.slideSelector = r13, t16.gestures ? (e2.$wrapperEl.on(e2.touchEvents.start, e2.zoom.enableGestures, i22), e2.$wrapperEl.on(e2.touchEvents.end, e2.zoom.disableGestures, i22)) : "touchstart" === e2.touchEvents.start && (e2.$wrapperEl.on(e2.touchEvents.start, r13, a22.onGestureStart, i22), e2.$wrapperEl.on(e2.touchEvents.move, r13, a22.onGestureChange, s19), e2.$wrapperEl.on(e2.touchEvents.end, r13, a22.onGestureEnd, i22), e2.touchEvents.cancel && e2.$wrapperEl.on(e2.touchEvents.cancel, r13, a22.onGestureEnd, i22)), e2.$wrapperEl.on(e2.touchEvents.move, "." + e2.params.zoom.containerClass, a22.onTouchMove, s19);
            }
        },
        disable: function() {
            var e2 = this, t16 = e2.zoom;
            if (t16.enabled) {
                var a22 = e2.support;
                e2.zoom.enabled = false;
                var i23 = !("touchstart" !== e2.touchEvents.start || !a22.passiveListener || !e2.params.passiveListeners) && {
                    passive: true,
                    capture: false
                }, s20 = !a22.passiveListener || {
                    passive: false,
                    capture: true
                }, r14 = "." + e2.params.slideClass;
                a22.gestures ? (e2.$wrapperEl.off(e2.touchEvents.start, e2.zoom.enableGestures, i23), e2.$wrapperEl.off(e2.touchEvents.end, e2.zoom.disableGestures, i23)) : "touchstart" === e2.touchEvents.start && (e2.$wrapperEl.off(e2.touchEvents.start, r14, t16.onGestureStart, i23), e2.$wrapperEl.off(e2.touchEvents.move, r14, t16.onGestureChange, s20), e2.$wrapperEl.off(e2.touchEvents.end, r14, t16.onGestureEnd, i23), e2.touchEvents.cancel && e2.$wrapperEl.off(e2.touchEvents.cancel, r14, t16.onGestureEnd, i23)), e2.$wrapperEl.off(e2.touchEvents.move, "." + e2.params.zoom.containerClass, t16.onTouchMove, s20);
            }
        }
    }, te = {
        loadInSlide: function(e2, t16) {
            (void 0) === t16 && (t16 = true);
            var a23 = this, i24 = a23.params.lazy;
            if ((void 0) !== e2 && 0 !== a23.slides.length) {
                var s21 = a23.virtual && a23.params.virtual.enabled ? a23.$wrapperEl.children("." + a23.params.slideClass + '[data-swiper-slide-index="' + e2 + '"]') : a23.slides.eq(e2), r15 = s21.find("." + i24.elementClass + ":not(." + i24.loadedClass + "):not(." + i24.loadingClass + ")");
                !s21.hasClass(i24.elementClass) || s21.hasClass(i24.loadedClass) || s21.hasClass(i24.loadingClass) || r15.push(s21[0]), 0 !== r15.length && r15.each(function(e3) {
                    var r16 = m(e3);
                    r16.addClass(i24.loadingClass);
                    var n23 = r16.attr("data-background"), l15 = r16.attr("data-src"), o13 = r16.attr("data-srcset"), d16 = r16.attr("data-sizes"), p20 = r16.parent("picture");
                    a23.loadImage(r16[0], l15 || n23, o13, d16, false, function() {
                        if (null != a23 && a23 && (!a23 || a23.params) && !a23.destroyed) {
                            if (n23 ? (r16.css("background-image", 'url("' + n23 + '")'), r16.removeAttr("data-background")) : (o13 && (r16.attr("srcset", o13), r16.removeAttr("data-srcset")), d16 && (r16.attr("sizes", d16), r16.removeAttr("data-sizes")), p20.length && p20.children("source").each(function(e4) {
                                var t17 = m(e4);
                                t17.attr("data-srcset") && (t17.attr("srcset", t17.attr("data-srcset")), t17.removeAttr("data-srcset"));
                            }), l15 && (r16.attr("src", l15), r16.removeAttr("data-src"))), r16.addClass(i24.loadedClass).removeClass(i24.loadingClass), s21.find("." + i24.preloaderClass).remove(), a23.params.loop && t16) {
                                var e4 = s21.attr("data-swiper-slide-index");
                                if (s21.hasClass(a23.params.slideDuplicateClass)) {
                                    var u13 = a23.$wrapperEl.children('[data-swiper-slide-index="' + e4 + '"]:not(.' + a23.params.slideDuplicateClass + ")");
                                    a23.lazy.loadInSlide(u13.index(), false);
                                } else {
                                    var c12 = a23.$wrapperEl.children("." + a23.params.slideDuplicateClass + '[data-swiper-slide-index="' + e4 + '"]');
                                    a23.lazy.loadInSlide(c12.index(), false);
                                }
                            }
                            a23.emit("lazyImageReady", s21[0], r16[0]), a23.params.autoHeight && a23.updateAutoHeight();
                        }
                    }), a23.emit("lazyImageLoad", s21[0], r16[0]);
                });
            }
        },
        load: function() {
            var e2 = this, t16 = e2.$wrapperEl, a23 = e2.params, i24 = e2.slides, s22 = e2.activeIndex, r16 = e2.virtual && a23.virtual.enabled, n23 = a23.lazy, l15 = a23.slidesPerView;
            function o13(e3) {
                if (r16) {
                    if (t16.children("." + a23.slideClass + '[data-swiper-slide-index="' + e3 + '"]').length) return true;
                } else if (i24[e3]) return true;
                return false;
            }
            function d16(e3) {
                return r16 ? m(e3).attr("data-swiper-slide-index") : m(e3).index();
            }
            if ("auto" === l15 && (l15 = 0), e2.lazy.initialImageLoaded || (e2.lazy.initialImageLoaded = true), e2.params.watchSlidesVisibility) t16.children("." + a23.slideVisibleClass).each(function(t17) {
                var a24 = r16 ? m(t17).attr("data-swiper-slide-index") : m(t17).index();
                e2.lazy.loadInSlide(a24);
            });
            else if (l15 > 1) for(var p20 = s22; p20 < s22 + l15; p20 += 1)o13(p20) && e2.lazy.loadInSlide(p20);
            else e2.lazy.loadInSlide(s22);
            if (n23.loadPrevNext) {
                if (l15 > 1 || n23.loadPrevNextAmount && n23.loadPrevNextAmount > 1) {
                    for(var u14 = n23.loadPrevNextAmount, c13 = l15, h10 = Math.min(s22 + c13 + Math.max(u14, c13), i24.length), v9 = Math.max(s22 - Math.max(c13, u14), 0), f6 = s22 + l15; f6 < h10; f6 += 1)o13(f6) && e2.lazy.loadInSlide(f6);
                    for(var g7 = v9; g7 < s22; g7 += 1)o13(g7) && e2.lazy.loadInSlide(g7);
                } else {
                    var y6 = t16.children("." + a23.slideNextClass);
                    y6.length > 0 && e2.lazy.loadInSlide(d16(y6));
                    var w6 = t16.children("." + a23.slidePrevClass);
                    w6.length > 0 && e2.lazy.loadInSlide(d16(w6));
                }
            }
        },
        checkInViewOnLoad: function() {
            var e2 = l(), t16 = this;
            if (t16 && !t16.destroyed) {
                var a23 = t16.params.lazy.scrollingElement ? m(t16.params.lazy.scrollingElement) : m(e2), i24 = a23[0] === e2, s22 = i24 ? e2.innerWidth : a23[0].offsetWidth, r16 = i24 ? e2.innerHeight : a23[0].offsetHeight, n23 = t16.$el.offset(), o13 = false;
                t16.rtlTranslate && (n23.left -= t16.$el[0].scrollLeft);
                for(var d16 = [
                    [
                        n23.left,
                        n23.top
                    ],
                    [
                        n23.left + t16.width,
                        n23.top
                    ],
                    [
                        n23.left,
                        n23.top + t16.height
                    ],
                    [
                        n23.left + t16.width,
                        n23.top + t16.height
                    ]
                ], p20 = 0; p20 < d16.length; p20 += 1){
                    var u15 = d16[p20];
                    if (u15[0] >= 0 && u15[0] <= s22 && u15[1] >= 0 && u15[1] <= r16) {
                        if (0 === u15[0] && 0 === u15[1]) continue;
                        o13 = true;
                    }
                }
                o13 ? (t16.lazy.load(), a23.off("scroll", t16.lazy.checkInViewOnLoad)) : t16.lazy.scrollHandlerAttached || (t16.lazy.scrollHandlerAttached = true, a23.on("scroll", t16.lazy.checkInViewOnLoad));
            }
        }
    }, ae = {
        LinearSpline: function(e2, t16) {
            var a24, i25, s23, r17, n24, l15 = function(e3, t17) {
                for(i25 = -1, a24 = e3.length; a24 - i25 > 1;)e3[s23 = a24 + i25 >> 1] <= t17 ? i25 = s23 : a24 = s23;
                return a24;
            };
            return this.x = e2, this.y = t16, this.lastIndex = e2.length - 1, this.interpolate = function(e3) {
                return e3 ? (n24 = l15(this.x, e3), r17 = n24 - 1, (e3 - this.x[r17]) * (this.y[n24] - this.y[r17]) / (this.x[n24] - this.x[r17]) + this.y[r17]) : 0;
            }, this;
        },
        getInterpolateFunction: function(e2) {
            var t16 = this;
            t16.controller.spline || (t16.controller.spline = t16.params.loop ? new ae.LinearSpline(t16.slidesGrid, e2.slidesGrid) : new ae.LinearSpline(t16.snapGrid, e2.snapGrid));
        },
        setTranslate: function(e2, t16) {
            var a24, i25, s23 = this, r17 = s23.controller.control, n24 = s23.constructor;
            function l15(e3) {
                var t17 = s23.rtlTranslate ? -s23.translate : s23.translate;
                "slide" === s23.params.controller.by && (s23.controller.getInterpolateFunction(e3), i25 = -s23.controller.spline.interpolate(-t17)), i25 && "container" !== s23.params.controller.by || (a24 = (e3.maxTranslate() - e3.minTranslate()) / (s23.maxTranslate() - s23.minTranslate()), i25 = (t17 - s23.minTranslate()) * a24 + e3.minTranslate()), s23.params.controller.inverse && (i25 = e3.maxTranslate() - i25), e3.updateProgress(i25), e3.setTranslate(i25, s23), e3.updateActiveIndex(), e3.updateSlidesClasses();
            }
            if (Array.isArray(r17)) for(var o14 = 0; o14 < r17.length; o14 += 1)r17[o14] !== t16 && r17[o14] instanceof n24 && l15(r17[o14]);
            else r17 instanceof n24 && t16 !== r17 && l15(r17);
        },
        setTransition: function(e2, t16) {
            var a24, i25 = this, s23 = i25.constructor, r17 = i25.controller.control;
            function n24(t17) {
                t17.setTransition(e2, i25), 0 !== e2 && (t17.transitionStart(), t17.params.autoHeight && E(function() {
                    t17.updateAutoHeight();
                }), t17.$wrapperEl.transitionEnd(function() {
                    r17 && (t17.params.loop && "slide" === i25.params.controller.by && t17.loopFix(), t17.transitionEnd());
                }));
            }
            if (Array.isArray(r17)) for(a24 = 0; a24 < r17.length; a24 += 1)r17[a24] !== t16 && r17[a24] instanceof s23 && n24(r17[a24]);
            else r17 instanceof s23 && t16 !== r17 && n24(r17);
        }
    }, ie = {
        getRandomNumber: function(e2) {
            (void 0) === e2 && (e2 = 16);
            return "x".repeat(e2).replace(/x/g, function() {
                return Math.round(16 * Math.random()).toString(16);
            });
        },
        makeElFocusable: function(e2) {
            return e2.attr("tabIndex", "0"), e2;
        },
        makeElNotFocusable: function(e2) {
            return e2.attr("tabIndex", "-1"), e2;
        },
        addElRole: function(e2, t16) {
            return e2.attr("role", t16), e2;
        },
        addElRoleDescription: function(e2, t16) {
            return e2.attr("aria-role-description", t16), e2;
        },
        addElControls: function(e2, t16) {
            return e2.attr("aria-controls", t16), e2;
        },
        addElLabel: function(e2, t16) {
            return e2.attr("aria-label", t16), e2;
        },
        addElId: function(e2, t16) {
            return e2.attr("id", t16), e2;
        },
        addElLive: function(e2, t16) {
            return e2.attr("aria-live", t16), e2;
        },
        disableEl: function(e2) {
            return e2.attr("aria-disabled", true), e2;
        },
        enableEl: function(e2) {
            return e2.attr("aria-disabled", false), e2;
        },
        onEnterKey: function(e2) {
            var t16 = this, a24 = t16.params.a11y;
            if (13 === e2.keyCode) {
                var i25 = m(e2.target);
                t16.navigation && t16.navigation.$nextEl && i25.is(t16.navigation.$nextEl) && (t16.isEnd && !t16.params.loop || t16.slideNext(), t16.isEnd ? t16.a11y.notify(a24.lastSlideMessage) : t16.a11y.notify(a24.nextSlideMessage)), t16.navigation && t16.navigation.$prevEl && i25.is(t16.navigation.$prevEl) && (t16.isBeginning && !t16.params.loop || t16.slidePrev(), t16.isBeginning ? t16.a11y.notify(a24.firstSlideMessage) : t16.a11y.notify(a24.prevSlideMessage)), t16.pagination && i25.is("." + t16.params.pagination.bulletClass.replace(/ /g, ".")) && i25[0].click();
            }
        },
        notify: function(e2) {
            var t16 = this.a11y.liveRegion;
            0 !== t16.length && (t16.html(""), t16.html(e2));
        },
        updateNavigation: function() {
            var e2 = this;
            if (!e2.params.loop && e2.navigation) {
                var t16 = e2.navigation, a24 = t16.$nextEl, i26 = t16.$prevEl;
                i26 && i26.length > 0 && (e2.isBeginning ? (e2.a11y.disableEl(i26), e2.a11y.makeElNotFocusable(i26)) : (e2.a11y.enableEl(i26), e2.a11y.makeElFocusable(i26))), a24 && a24.length > 0 && (e2.isEnd ? (e2.a11y.disableEl(a24), e2.a11y.makeElNotFocusable(a24)) : (e2.a11y.enableEl(a24), e2.a11y.makeElFocusable(a24)));
            }
        },
        updatePagination: function() {
            var e2 = this, t17 = e2.params.a11y;
            e2.pagination && e2.params.pagination.clickable && e2.pagination.bullets && e2.pagination.bullets.length && e2.pagination.bullets.each(function(a25) {
                var i27 = m(a25);
                e2.a11y.makeElFocusable(i27), e2.params.pagination.renderBullet || (e2.a11y.addElRole(i27, "button"), e2.a11y.addElLabel(i27, t17.paginationBulletMessage.replace(/\{\{index\}\}/, i27.index() + 1)));
            });
        },
        init: function() {
            var e2 = this, t17 = e2.params.a11y;
            e2.$el.append(e2.a11y.liveRegion);
            var a25 = e2.$el;
            t17.containerRoleDescriptionMessage && e2.a11y.addElRoleDescription(a25, t17.containerRoleDescriptionMessage), t17.containerMessage && e2.a11y.addElLabel(a25, t17.containerMessage);
            var i27, s23, r17, n24 = e2.$wrapperEl, l15 = n24.attr("id") || "swiper-wrapper-" + e2.a11y.getRandomNumber(16);
            e2.a11y.addElId(n24, l15), i27 = e2.params.autoplay && e2.params.autoplay.enabled ? "off" : "polite", e2.a11y.addElLive(n24, i27), t17.itemRoleDescriptionMessage && e2.a11y.addElRoleDescription(m(e2.slides), t17.itemRoleDescriptionMessage), e2.a11y.addElRole(m(e2.slides), "group"), e2.slides.each(function(t18) {
                var a26 = m(t18);
                e2.a11y.addElLabel(a26, a26.index() + 1 + " / " + e2.slides.length);
            }), e2.navigation && e2.navigation.$nextEl && (s23 = e2.navigation.$nextEl), e2.navigation && e2.navigation.$prevEl && (r17 = e2.navigation.$prevEl), s23 && s23.length && (e2.a11y.makeElFocusable(s23), "BUTTON" !== s23[0].tagName && (e2.a11y.addElRole(s23, "button"), s23.on("keydown", e2.a11y.onEnterKey)), e2.a11y.addElLabel(s23, t17.nextSlideMessage), e2.a11y.addElControls(s23, l15)), r17 && r17.length && (e2.a11y.makeElFocusable(r17), "BUTTON" !== r17[0].tagName && (e2.a11y.addElRole(r17, "button"), r17.on("keydown", e2.a11y.onEnterKey)), e2.a11y.addElLabel(r17, t17.prevSlideMessage), e2.a11y.addElControls(r17, l15)), e2.pagination && e2.params.pagination.clickable && e2.pagination.bullets && e2.pagination.bullets.length && e2.pagination.$el.on("keydown", "." + e2.params.pagination.bulletClass.replace(/ /g, "."), e2.a11y.onEnterKey);
        },
        destroy: function() {
            var e2, t17, a25 = this;
            a25.a11y.liveRegion && a25.a11y.liveRegion.length > 0 && a25.a11y.liveRegion.remove(), a25.navigation && a25.navigation.$nextEl && (e2 = a25.navigation.$nextEl), a25.navigation && a25.navigation.$prevEl && (t17 = a25.navigation.$prevEl), e2 && e2.off("keydown", a25.a11y.onEnterKey), t17 && t17.off("keydown", a25.a11y.onEnterKey), a25.pagination && a25.params.pagination.clickable && a25.pagination.bullets && a25.pagination.bullets.length && a25.pagination.$el.off("keydown", "." + a25.params.pagination.bulletClass.replace(/ /g, "."), a25.a11y.onEnterKey);
        }
    }, se = {
        init: function() {
            var e2 = this, t17 = l();
            if (e2.params.history) {
                if (!t17.history || !t17.history.pushState) return e2.params.history.enabled = false, void (e2.params.hashNavigation.enabled = true);
                var a25 = e2.history;
                a25.initialized = true, a25.paths = se.getPathValues(e2.params.url), (a25.paths.key || a25.paths.value) && (a25.scrollToSlide(0, a25.paths.value, e2.params.runCallbacksOnInit), e2.params.history.replaceState || t17.addEventListener("popstate", e2.history.setHistoryPopState));
            }
        },
        destroy: function() {
            var e2 = l();
            this.params.history.replaceState || e2.removeEventListener("popstate", this.history.setHistoryPopState);
        },
        setHistoryPopState: function() {
            var e2 = this;
            e2.history.paths = se.getPathValues(e2.params.url), e2.history.scrollToSlide(e2.params.speed, e2.history.paths.value, false);
        },
        getPathValues: function(e2) {
            var t17 = l(), a26 = (e2 ? new URL(e2) : t17.location).pathname.slice(1).split("/").filter(function(e3) {
                return "" !== e3;
            }), i27 = a26.length;
            return {
                key: a26[i27 - 2],
                value: a26[i27 - 1]
            };
        },
        setHistory: function(e2, t17) {
            var a26 = this, i27 = l();
            if (a26.history.initialized && a26.params.history.enabled) {
                var s23;
                s23 = a26.params.url ? new URL(a26.params.url) : i27.location;
                var r17 = a26.slides.eq(t17), n24 = se.slugify(r17.attr("data-history"));
                s23.pathname.includes(e2) || (n24 = e2 + "/" + n24);
                var o14 = i27.history.state;
                o14 && o14.value === n24 || (a26.params.history.replaceState ? i27.history.replaceState({
                    value: n24
                }, null, n24) : i27.history.pushState({
                    value: n24
                }, null, n24));
            }
        },
        slugify: function(e2) {
            return e2.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
        },
        scrollToSlide: function(e2, t17, a26) {
            var i27 = this;
            if (t17) for(var s24 = 0, r18 = i27.slides.length; s24 < r18; s24 += 1){
                var n25 = i27.slides.eq(s24);
                if (se.slugify(n25.attr("data-history")) === t17 && !n25.hasClass(i27.params.slideDuplicateClass)) {
                    var l15 = n25.index();
                    i27.slideTo(l15, e2, a26);
                }
            }
            else i27.slideTo(0, e2, a26);
        }
    }, re = {
        onHashCange: function() {
            var e2 = this, t17 = r();
            e2.emit("hashChange");
            var a26 = t17.location.hash.replace("#", "");
            if (a26 !== e2.slides.eq(e2.activeIndex).attr("data-hash")) {
                var i27 = e2.$wrapperEl.children("." + e2.params.slideClass + '[data-hash="' + a26 + '"]').index();
                if ((void 0) === i27) return;
                e2.slideTo(i27);
            }
        },
        setHash: function() {
            var e2 = this, t17 = l(), a26 = r();
            if (e2.hashNavigation.initialized && e2.params.hashNavigation.enabled) {
                if (e2.params.hashNavigation.replaceState && t17.history && t17.history.replaceState) t17.history.replaceState(null, null, "#" + e2.slides.eq(e2.activeIndex).attr("data-hash") || ""), e2.emit("hashSet");
                else {
                    var i28 = e2.slides.eq(e2.activeIndex), s24 = i28.attr("data-hash") || i28.attr("data-history");
                    a26.location.hash = s24 || "", e2.emit("hashSet");
                }
            }
        },
        init: function() {
            var e2 = this, t17 = r(), a26 = l();
            if (!(!e2.params.hashNavigation.enabled || e2.params.history && e2.params.history.enabled)) {
                e2.hashNavigation.initialized = true;
                var i29 = t17.location.hash.replace("#", "");
                if (i29) for(var s25 = 0, n26 = e2.slides.length; s25 < n26; s25 += 1){
                    var o15 = e2.slides.eq(s25);
                    if ((o15.attr("data-hash") || o15.attr("data-history")) === i29 && !o15.hasClass(e2.params.slideDuplicateClass)) {
                        var d17 = o15.index();
                        e2.slideTo(d17, 0, e2.params.runCallbacksOnInit, true);
                    }
                }
                e2.params.hashNavigation.watchState && m(a26).on("hashchange", e2.hashNavigation.onHashCange);
            }
        },
        destroy: function() {
            var e2 = l();
            this.params.hashNavigation.watchState && m(e2).off("hashchange", this.hashNavigation.onHashCange);
        }
    }, ne = {
        run: function() {
            var e2 = this, t17 = e2.slides.eq(e2.activeIndex), a26 = e2.params.autoplay.delay;
            t17.attr("data-swiper-autoplay") && (a26 = t17.attr("data-swiper-autoplay") || e2.params.autoplay.delay), clearTimeout(e2.autoplay.timeout), e2.autoplay.timeout = E(function() {
                var t18;
                e2.params.autoplay.reverseDirection ? e2.params.loop ? (e2.loopFix(), t18 = e2.slidePrev(e2.params.speed, true, true), e2.emit("autoplay")) : e2.isBeginning ? e2.params.autoplay.stopOnLastSlide ? e2.autoplay.stop() : (t18 = e2.slideTo(e2.slides.length - 1, e2.params.speed, true, true), e2.emit("autoplay")) : (t18 = e2.slidePrev(e2.params.speed, true, true), e2.emit("autoplay")) : e2.params.loop ? (e2.loopFix(), t18 = e2.slideNext(e2.params.speed, true, true), e2.emit("autoplay")) : e2.isEnd ? e2.params.autoplay.stopOnLastSlide ? e2.autoplay.stop() : (t18 = e2.slideTo(0, e2.params.speed, true, true), e2.emit("autoplay")) : (t18 = e2.slideNext(e2.params.speed, true, true), e2.emit("autoplay")), (e2.params.cssMode && e2.autoplay.running || false === t18) && e2.autoplay.run();
            }, a26);
        },
        start: function() {
            var e2 = this;
            return (void 0) === e2.autoplay.timeout && !e2.autoplay.running && (e2.autoplay.running = true, e2.emit("autoplayStart"), e2.autoplay.run(), true);
        },
        stop: function() {
            var e2 = this;
            return !!e2.autoplay.running && (void 0) !== e2.autoplay.timeout && (e2.autoplay.timeout && (clearTimeout(e2.autoplay.timeout), e2.autoplay.timeout = void 0), e2.autoplay.running = false, e2.emit("autoplayStop"), true);
        },
        pause: function(e2) {
            var t17 = this;
            t17.autoplay.running && (t17.autoplay.paused || (t17.autoplay.timeout && clearTimeout(t17.autoplay.timeout), t17.autoplay.paused = true, 0 !== e2 && t17.params.autoplay.waitForTransition ? (t17.$wrapperEl[0].addEventListener("transitionend", t17.autoplay.onTransitionEnd), t17.$wrapperEl[0].addEventListener("webkitTransitionEnd", t17.autoplay.onTransitionEnd)) : (t17.autoplay.paused = false, t17.autoplay.run())));
        },
        onVisibilityChange: function() {
            var e2 = this, t17 = r();
            "hidden" === t17.visibilityState && e2.autoplay.running && e2.autoplay.pause(), "visible" === t17.visibilityState && e2.autoplay.paused && (e2.autoplay.run(), e2.autoplay.paused = false);
        },
        onTransitionEnd: function(e2) {
            var t17 = this;
            t17 && !t17.destroyed && t17.$wrapperEl && e2.target === t17.$wrapperEl[0] && (t17.$wrapperEl[0].removeEventListener("transitionend", t17.autoplay.onTransitionEnd), t17.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t17.autoplay.onTransitionEnd), t17.autoplay.paused = false, t17.autoplay.running ? t17.autoplay.run() : t17.autoplay.stop());
        }
    }, le = {
        setTranslate: function() {
            for(var e2 = this, t17 = e2.slides, a26 = 0; a26 < t17.length; a26 += 1){
                var i30 = e2.slides.eq(a26), s26 = -i30[0].swiperSlideOffset;
                e2.params.virtualTranslate || (s26 -= e2.translate);
                var r18 = 0;
                e2.isHorizontal() || (r18 = s26, s26 = 0);
                var n27 = e2.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i30[0].progress), 0) : 1 + Math.min(Math.max(i30[0].progress, -1), 0);
                i30.css({
                    opacity: n27
                }).transform("translate3d(" + s26 + "px, " + r18 + "px, 0px)");
            }
        },
        setTransition: function(e2) {
            var t17 = this, a26 = t17.slides, i31 = t17.$wrapperEl;
            if (a26.transition(e2), t17.params.virtualTranslate && 0 !== e2) {
                var s27 = false;
                a26.transitionEnd(function() {
                    if (!s27 && t17 && !t17.destroyed) {
                        s27 = true, t17.animating = false;
                        for(var e3 = [
                            "webkitTransitionEnd",
                            "transitionend"
                        ], a27 = 0; a27 < e3.length; a27 += 1)i31.trigger(e3[a27]);
                    }
                });
            }
        }
    }, oe = {
        setTranslate: function() {
            var e2, t17 = this, a26 = t17.$el, i31 = t17.$wrapperEl, s28 = t17.slides, r19 = t17.width, n28 = t17.height, l16 = t17.rtlTranslate, o16 = t17.size, d18 = t17.browser, p21 = t17.params.cubeEffect, u16 = t17.isHorizontal(), c14 = t17.virtual && t17.params.virtual.enabled, h11 = 0;
            p21.shadow && (u16 ? (0 === (e2 = i31.find(".swiper-cube-shadow")).length && (e2 = m('<div class="swiper-cube-shadow"></div>'), i31.append(e2)), e2.css({
                height: r19 + "px"
            })) : 0 === (e2 = a26.find(".swiper-cube-shadow")).length && (e2 = m('<div class="swiper-cube-shadow"></div>'), a26.append(e2)));
            for(var v10 = 0; v10 < s28.length; v10 += 1){
                var f7 = s28.eq(v10), g8 = v10;
                c14 && (g8 = parseInt(f7.attr("data-swiper-slide-index"), 10));
                var y7 = 90 * g8, w7 = Math.floor(y7 / 360);
                l16 && (y7 = -y7, w7 = Math.floor(-y7 / 360));
                var b6 = Math.max(Math.min(f7[0].progress, 1), -1), E4 = 0, x4 = 0, T5 = 0;
                g8 % 4 == 0 ? (E4 = 4 * -w7 * o16, T5 = 0) : (g8 - 1) % 4 == 0 ? (E4 = 0, T5 = 4 * -w7 * o16) : (g8 - 2) % 4 == 0 ? (E4 = o16 + 4 * w7 * o16, T5 = o16) : (g8 - 3) % 4 == 0 && (E4 = -o16, T5 = 3 * o16 + 4 * o16 * w7), l16 && (E4 = -E4), u16 || (x4 = E4, E4 = 0);
                var C6 = "rotateX(" + (u16 ? 0 : -y7) + "deg) rotateY(" + (u16 ? y7 : 0) + "deg) translate3d(" + E4 + "px, " + x4 + "px, " + T5 + "px)";
                if (b6 <= 1 && b6 > -1 && (h11 = 90 * g8 + 90 * b6, l16 && (h11 = 90 * -g8 - 90 * b6)), f7.transform(C6), p21.slideShadows) {
                    var S2 = u16 ? f7.find(".swiper-slide-shadow-left") : f7.find(".swiper-slide-shadow-top"), M3 = u16 ? f7.find(".swiper-slide-shadow-right") : f7.find(".swiper-slide-shadow-bottom");
                    0 === S2.length && (S2 = m('<div class="swiper-slide-shadow-' + (u16 ? "left" : "top") + '"></div>'), f7.append(S2)), 0 === M3.length && (M3 = m('<div class="swiper-slide-shadow-' + (u16 ? "right" : "bottom") + '"></div>'), f7.append(M3)), S2.length && (S2[0].style.opacity = Math.max(-b6, 0)), M3.length && (M3[0].style.opacity = Math.max(b6, 0));
                }
            }
            if (i31.css({
                "-webkit-transform-origin": "50% 50% -" + o16 / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + o16 / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + o16 / 2 + "px",
                "transform-origin": "50% 50% -" + o16 / 2 + "px"
            }), p21.shadow) {
                if (u16) e2.transform("translate3d(0px, " + (r19 / 2 + p21.shadowOffset) + "px, " + -r19 / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p21.shadowScale + ")");
                else {
                    var z3 = Math.abs(h11) - 90 * Math.floor(Math.abs(h11) / 90), P3 = 1.5 - (Math.sin(2 * z3 * Math.PI / 360) / 2 + Math.cos(2 * z3 * Math.PI / 360) / 2), k3 = p21.shadowScale, L3 = p21.shadowScale / P3, $3 = p21.shadowOffset;
                    e2.transform("scale3d(" + k3 + ", 1, " + L3 + ") translate3d(0px, " + (n28 / 2 + $3) + "px, " + -n28 / 2 / L3 + "px) rotateX(-90deg)");
                }
            }
            var I3 = d18.isSafari || d18.isWebView ? -o16 / 2 : 0;
            i31.transform("translate3d(0px,0," + I3 + "px) rotateX(" + (t17.isHorizontal() ? 0 : h11) + "deg) rotateY(" + (t17.isHorizontal() ? -h11 : 0) + "deg)");
        },
        setTransition: function(e2) {
            var t17 = this, a26 = t17.$el;
            t17.slides.transition(e2).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e2), t17.params.cubeEffect.shadow && !t17.isHorizontal() && a26.find(".swiper-cube-shadow").transition(e2);
        }
    }, de = {
        setTranslate: function() {
            for(var e2 = this, t17 = e2.slides, a26 = e2.rtlTranslate, i31 = 0; i31 < t17.length; i31 += 1){
                var s28 = t17.eq(i31), r19 = s28[0].progress;
                e2.params.flipEffect.limitRotation && (r19 = Math.max(Math.min(s28[0].progress, 1), -1));
                var n28 = -180 * r19, l16 = 0, o16 = -s28[0].swiperSlideOffset, d18 = 0;
                if (e2.isHorizontal() ? a26 && (n28 = -n28) : (d18 = o16, o16 = 0, l16 = -n28, n28 = 0), s28[0].style.zIndex = -Math.abs(Math.round(r19)) + t17.length, e2.params.flipEffect.slideShadows) {
                    var p21 = e2.isHorizontal() ? s28.find(".swiper-slide-shadow-left") : s28.find(".swiper-slide-shadow-top"), u16 = e2.isHorizontal() ? s28.find(".swiper-slide-shadow-right") : s28.find(".swiper-slide-shadow-bottom");
                    0 === p21.length && (p21 = m('<div class="swiper-slide-shadow-' + (e2.isHorizontal() ? "left" : "top") + '"></div>'), s28.append(p21)), 0 === u16.length && (u16 = m('<div class="swiper-slide-shadow-' + (e2.isHorizontal() ? "right" : "bottom") + '"></div>'), s28.append(u16)), p21.length && (p21[0].style.opacity = Math.max(-r19, 0)), u16.length && (u16[0].style.opacity = Math.max(r19, 0));
                }
                s28.transform("translate3d(" + o16 + "px, " + d18 + "px, 0px) rotateX(" + l16 + "deg) rotateY(" + n28 + "deg)");
            }
        },
        setTransition: function(e2) {
            var t17 = this, a26 = t17.slides, i31 = t17.activeIndex, s29 = t17.$wrapperEl;
            if (a26.transition(e2).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e2), t17.params.virtualTranslate && 0 !== e2) {
                var r20 = false;
                a26.eq(i31).transitionEnd(function() {
                    if (!r20 && t17 && !t17.destroyed) {
                        r20 = true, t17.animating = false;
                        for(var e5 = [
                            "webkitTransitionEnd",
                            "transitionend"
                        ], a28 = 0; a28 < e5.length; a28 += 1)s29.trigger(e5[a28]);
                    }
                });
            }
        }
    }, pe = {
        setTranslate: function() {
            for(var e2 = this, t17 = e2.width, a26 = e2.height, i31 = e2.slides, s29 = e2.slidesSizesGrid, r21 = e2.params.coverflowEffect, n29 = e2.isHorizontal(), l17 = e2.translate, o17 = n29 ? t17 / 2 - l17 : a26 / 2 - l17, d19 = n29 ? r21.rotate : -r21.rotate, p22 = r21.depth, u17 = 0, c14 = i31.length; u17 < c14; u17 += 1){
                var h11 = i31.eq(u17), v10 = s29[u17], f8 = (o17 - h11[0].swiperSlideOffset - v10 / 2) / v10 * r21.modifier, g9 = n29 ? d19 * f8 : 0, y8 = n29 ? 0 : d19 * f8, w8 = -p22 * Math.abs(f8), b7 = r21.stretch;
                "string" == typeof b7 && -1 !== b7.indexOf("%") && (b7 = parseFloat(r21.stretch) / 100 * v10);
                var E5 = n29 ? 0 : b7 * f8, x5 = n29 ? b7 * f8 : 0, T6 = 1 - (1 - r21.scale) * Math.abs(f8);
                Math.abs(x5) < 0.001 && (x5 = 0), Math.abs(E5) < 0.001 && (E5 = 0), Math.abs(w8) < 0.001 && (w8 = 0), Math.abs(g9) < 0.001 && (g9 = 0), Math.abs(y8) < 0.001 && (y8 = 0), Math.abs(T6) < 0.001 && (T6 = 0);
                var C7 = "translate3d(" + x5 + "px," + E5 + "px," + w8 + "px)  rotateX(" + y8 + "deg) rotateY(" + g9 + "deg) scale(" + T6 + ")";
                if (h11.transform(C7), h11[0].style.zIndex = 1 - Math.abs(Math.round(f8)), r21.slideShadows) {
                    var S3 = n29 ? h11.find(".swiper-slide-shadow-left") : h11.find(".swiper-slide-shadow-top"), M4 = n29 ? h11.find(".swiper-slide-shadow-right") : h11.find(".swiper-slide-shadow-bottom");
                    0 === S3.length && (S3 = m('<div class="swiper-slide-shadow-' + (n29 ? "left" : "top") + '"></div>'), h11.append(S3)), 0 === M4.length && (M4 = m('<div class="swiper-slide-shadow-' + (n29 ? "right" : "bottom") + '"></div>'), h11.append(M4)), S3.length && (S3[0].style.opacity = f8 > 0 ? f8 : 0), M4.length && (M4[0].style.opacity = -f8 > 0 ? -f8 : 0);
                }
            }
        },
        setTransition: function(e2) {
            this.slides.transition(e2).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e2);
        }
    }, ue = {
        init: function() {
            var e2 = this, t17 = e2.params.thumbs;
            if (e2.thumbs.initialized) return false;
            e2.thumbs.initialized = true;
            var a26 = e2.constructor;
            return t17.swiper instanceof a26 ? (e2.thumbs.swiper = t17.swiper, S(e2.thumbs.swiper.originalParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            }), S(e2.thumbs.swiper.params, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            })) : C(t17.swiper) && (e2.thumbs.swiper = new a26(S({
            }, t17.swiper, {
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                slideToClickedSlide: false
            })), e2.thumbs.swiperCreated = true), e2.thumbs.swiper.$el.addClass(e2.params.thumbs.thumbsContainerClass), e2.thumbs.swiper.on("tap", e2.thumbs.onThumbClick), true;
        },
        onThumbClick: function() {
            var e2 = this, t17 = e2.thumbs.swiper;
            if (t17) {
                var a26 = t17.clickedIndex, i31 = t17.clickedSlide;
                if (!(i31 && m(i31).hasClass(e2.params.thumbs.slideThumbActiveClass) || null == a26)) {
                    var s29;
                    if (s29 = t17.params.loop ? parseInt(m(t17.clickedSlide).attr("data-swiper-slide-index"), 10) : a26, e2.params.loop) {
                        var r21 = e2.activeIndex;
                        e2.slides.eq(r21).hasClass(e2.params.slideDuplicateClass) && (e2.loopFix(), e2._clientLeft = e2.$wrapperEl[0].clientLeft, r21 = e2.activeIndex);
                        var n29 = e2.slides.eq(r21).prevAll('[data-swiper-slide-index="' + s29 + '"]').eq(0).index(), l17 = e2.slides.eq(r21).nextAll('[data-swiper-slide-index="' + s29 + '"]').eq(0).index();
                        s29 = (void 0) === n29 ? l17 : (void 0) === l17 ? n29 : l17 - r21 < r21 - n29 ? l17 : n29;
                    }
                    e2.slideTo(s29);
                }
            }
        },
        update: function(e2) {
            var t17 = this, a29 = t17.thumbs.swiper;
            if (a29) {
                var i32 = "auto" === a29.params.slidesPerView ? a29.slidesPerViewDynamic() : a29.params.slidesPerView, s30 = t17.params.thumbs.autoScrollOffset, r22 = s30 && !a29.params.loop;
                if (t17.realIndex !== a29.realIndex || r22) {
                    var n30, l18, o17 = a29.activeIndex;
                    if (a29.params.loop) {
                        a29.slides.eq(o17).hasClass(a29.params.slideDuplicateClass) && (a29.loopFix(), a29._clientLeft = a29.$wrapperEl[0].clientLeft, o17 = a29.activeIndex);
                        var d19 = a29.slides.eq(o17).prevAll('[data-swiper-slide-index="' + t17.realIndex + '"]').eq(0).index(), p22 = a29.slides.eq(o17).nextAll('[data-swiper-slide-index="' + t17.realIndex + '"]').eq(0).index();
                        n30 = (void 0) === d19 ? p22 : (void 0) === p22 ? d19 : p22 - o17 == o17 - d19 ? o17 : p22 - o17 < o17 - d19 ? p22 : d19, l18 = t17.activeIndex > t17.previousIndex ? "next" : "prev";
                    } else l18 = (n30 = t17.realIndex) > t17.previousIndex ? "next" : "prev";
                    r22 && (n30 += "next" === l18 ? s30 : -1 * s30), a29.visibleSlidesIndexes && a29.visibleSlidesIndexes.indexOf(n30) < 0 && (a29.params.centeredSlides ? n30 = n30 > o17 ? n30 - Math.floor(i32 / 2) + 1 : n30 + Math.floor(i32 / 2) - 1 : n30 > o17 && (n30 = n30 - i32 + 1), a29.slideTo(n30, e2 ? 0 : void 0));
                }
                var u17 = 1, c14 = t17.params.thumbs.slideThumbActiveClass;
                if (t17.params.slidesPerView > 1 && !t17.params.centeredSlides && (u17 = t17.params.slidesPerView), t17.params.thumbs.multipleActiveThumbs || (u17 = 1), u17 = Math.floor(u17), a29.slides.removeClass(c14), a29.params.loop || a29.params.virtual && a29.params.virtual.enabled) for(var h12 = 0; h12 < u17; h12 += 1)a29.$wrapperEl.children('[data-swiper-slide-index="' + (t17.realIndex + h12) + '"]').addClass(c14);
                else for(var v11 = 0; v11 < u17; v11 += 1)a29.slides.eq(t17.realIndex + v11).addClass(c14);
            }
        }
    }, ce = [
        q,
        _,
        {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: false,
                    releaseOnEdges: false,
                    invert: false,
                    forceToAxis: false,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null
                }
            },
            create: function() {
                M(this, {
                    mousewheel: {
                        enabled: false,
                        lastScrollTime: x(),
                        lastEventBeforeSnap: void 0,
                        recentWheelEvents: [],
                        enable: U.enable,
                        disable: U.disable,
                        handle: U.handle,
                        handleMouseEnter: U.handleMouseEnter,
                        handleMouseLeave: U.handleMouseLeave,
                        animateSlider: U.animateSlider,
                        releaseScroll: U.releaseScroll
                    }
                });
            },
            on: {
                init: function(e2) {
                    !e2.params.mousewheel.enabled && e2.params.cssMode && e2.mousewheel.disable(), e2.params.mousewheel.enabled && e2.mousewheel.enable();
                },
                destroy: function(e2) {
                    e2.params.cssMode && e2.mousewheel.enable(), e2.mousewheel.enabled && e2.mousewheel.disable();
                }
            }
        },
        {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                M(this, {
                    navigation: t({
                    }, K)
                });
            },
            on: {
                init: function(e2) {
                    e2.navigation.init(), e2.navigation.update();
                },
                toEdge: function(e2) {
                    e2.navigation.update();
                },
                fromEdge: function(e2) {
                    e2.navigation.update();
                },
                destroy: function(e2) {
                    e2.navigation.destroy();
                },
                click: function(e2, t17) {
                    var a29, i33 = e2.navigation, s31 = i33.$nextEl, r23 = i33.$prevEl;
                    !e2.params.navigation.hideOnClick || m(t17.target).is(r23) || m(t17.target).is(s31) || (s31 ? a29 = s31.hasClass(e2.params.navigation.hiddenClass) : r23 && (a29 = r23.hasClass(e2.params.navigation.hiddenClass)), true === a29 ? e2.emit("navigationShow") : e2.emit("navigationHide"), s31 && s31.toggleClass(e2.params.navigation.hiddenClass), r23 && r23.toggleClass(e2.params.navigation.hiddenClass));
                }
            }
        },
        {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(e2) {
                        return e2;
                    },
                    formatFractionTotal: function(e2) {
                        return e2;
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                M(this, {
                    pagination: t({
                        dynamicBulletIndex: 0
                    }, Z)
                });
            },
            on: {
                init: function(e2) {
                    e2.pagination.init(), e2.pagination.render(), e2.pagination.update();
                },
                activeIndexChange: function(e2) {
                    (e2.params.loop || (void 0) === e2.snapIndex) && e2.pagination.update();
                },
                snapIndexChange: function(e2) {
                    e2.params.loop || e2.pagination.update();
                },
                slidesLengthChange: function(e2) {
                    e2.params.loop && (e2.pagination.render(), e2.pagination.update());
                },
                snapGridLengthChange: function(e2) {
                    e2.params.loop || (e2.pagination.render(), e2.pagination.update());
                },
                destroy: function(e2) {
                    e2.pagination.destroy();
                },
                click: function(e2, t17) {
                    e2.params.pagination.el && e2.params.pagination.hideOnClick && e2.pagination.$el.length > 0 && !m(t17.target).hasClass(e2.params.pagination.bulletClass) && (true === e2.pagination.$el.hasClass(e2.params.pagination.hiddenClass) ? e2.emit("paginationShow") : e2.emit("paginationHide"), e2.pagination.$el.toggleClass(e2.params.pagination.hiddenClass));
                }
            }
        },
        {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: false,
                    draggable: false,
                    snapOnRelease: true,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function() {
                M(this, {
                    scrollbar: t({
                        isTouched: false,
                        timeout: null,
                        dragTimeout: null
                    }, J)
                });
            },
            on: {
                init: function(e2) {
                    e2.scrollbar.init(), e2.scrollbar.updateSize(), e2.scrollbar.setTranslate();
                },
                update: function(e2) {
                    e2.scrollbar.updateSize();
                },
                resize: function(e2) {
                    e2.scrollbar.updateSize();
                },
                observerUpdate: function(e2) {
                    e2.scrollbar.updateSize();
                },
                setTranslate: function(e2) {
                    e2.scrollbar.setTranslate();
                },
                setTransition: function(e2, t17) {
                    e2.scrollbar.setTransition(t17);
                },
                destroy: function(e2) {
                    e2.scrollbar.destroy();
                }
            }
        },
        {
            name: "parallax",
            params: {
                parallax: {
                    enabled: false
                }
            },
            create: function() {
                M(this, {
                    parallax: t({
                    }, Q)
                });
            },
            on: {
                beforeInit: function(e2) {
                    e2.params.parallax.enabled && (e2.params.watchSlidesProgress = true, e2.originalParams.watchSlidesProgress = true);
                },
                init: function(e2) {
                    e2.params.parallax.enabled && e2.parallax.setTranslate();
                },
                setTranslate: function(e2) {
                    e2.params.parallax.enabled && e2.parallax.setTranslate();
                },
                setTransition: function(e2, t17) {
                    e2.params.parallax.enabled && e2.parallax.setTransition(t17);
                }
            }
        },
        {
            name: "zoom",
            params: {
                zoom: {
                    enabled: false,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: true,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var e2 = this;
                M(e2, {
                    zoom: t({
                        enabled: false,
                        scale: 1,
                        currentScale: 1,
                        isScaling: false,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {
                            },
                            touchesCurrent: {
                            }
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    }, ee)
                });
                var a29 = 1;
                Object.defineProperty(e2.zoom, "scale", {
                    get: function() {
                        return a29;
                    },
                    set: function(t17) {
                        if (a29 !== t17) {
                            var i33 = e2.zoom.gesture.$imageEl ? e2.zoom.gesture.$imageEl[0] : void 0, s31 = e2.zoom.gesture.$slideEl ? e2.zoom.gesture.$slideEl[0] : void 0;
                            e2.emit("zoomChange", t17, i33, s31);
                        }
                        a29 = t17;
                    }
                });
            },
            on: {
                init: function(e2) {
                    e2.params.zoom.enabled && e2.zoom.enable();
                },
                destroy: function(e2) {
                    e2.zoom.disable();
                },
                touchStart: function(e2, t17) {
                    e2.zoom.enabled && e2.zoom.onTouchStart(t17);
                },
                touchEnd: function(e2, t17) {
                    e2.zoom.enabled && e2.zoom.onTouchEnd(t17);
                },
                doubleTap: function(e2, t17) {
                    e2.params.zoom.enabled && e2.zoom.enabled && e2.params.zoom.toggle && e2.zoom.toggle(t17);
                },
                transitionEnd: function(e2) {
                    e2.zoom.enabled && e2.params.zoom.enabled && e2.zoom.onTransitionEnd();
                },
                slideChange: function(e2) {
                    e2.zoom.enabled && e2.params.zoom.enabled && e2.params.cssMode && e2.zoom.onTransitionEnd();
                }
            }
        },
        {
            name: "lazy",
            params: {
                lazy: {
                    checkInView: false,
                    enabled: false,
                    loadPrevNext: false,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: false,
                    scrollingElement: "",
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                M(this, {
                    lazy: t({
                        initialImageLoaded: false
                    }, te)
                });
            },
            on: {
                beforeInit: function(e2) {
                    e2.params.lazy.enabled && e2.params.preloadImages && (e2.params.preloadImages = false);
                },
                init: function(e2) {
                    e2.params.lazy.enabled && !e2.params.loop && 0 === e2.params.initialSlide && (e2.params.lazy.checkInView ? e2.lazy.checkInViewOnLoad() : e2.lazy.load());
                },
                scroll: function(e2) {
                    e2.params.freeMode && !e2.params.freeModeSticky && e2.lazy.load();
                },
                resize: function(e2) {
                    e2.params.lazy.enabled && e2.lazy.load();
                },
                scrollbarDragMove: function(e2) {
                    e2.params.lazy.enabled && e2.lazy.load();
                },
                transitionStart: function(e2) {
                    e2.params.lazy.enabled && (e2.params.lazy.loadOnTransitionStart || !e2.params.lazy.loadOnTransitionStart && !e2.lazy.initialImageLoaded) && e2.lazy.load();
                },
                transitionEnd: function(e2) {
                    e2.params.lazy.enabled && !e2.params.lazy.loadOnTransitionStart && e2.lazy.load();
                },
                slideChange: function(e2) {
                    e2.params.lazy.enabled && e2.params.cssMode && e2.lazy.load();
                }
            }
        },
        {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: false,
                    by: "slide"
                }
            },
            create: function() {
                M(this, {
                    controller: t({
                        control: this.params.controller.control
                    }, ae)
                });
            },
            on: {
                update: function(e2) {
                    e2.controller.control && e2.controller.spline && (e2.controller.spline = void 0, delete e2.controller.spline);
                },
                resize: function(e2) {
                    e2.controller.control && e2.controller.spline && (e2.controller.spline = void 0, delete e2.controller.spline);
                },
                observerUpdate: function(e2) {
                    e2.controller.control && e2.controller.spline && (e2.controller.spline = void 0, delete e2.controller.spline);
                },
                setTranslate: function(e2, t17, a29) {
                    e2.controller.control && e2.controller.setTranslate(t17, a29);
                },
                setTransition: function(e2, t17, a29) {
                    e2.controller.control && e2.controller.setTransition(t17, a29);
                }
            }
        },
        {
            name: "a11y",
            params: {
                a11y: {
                    enabled: true,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null
                }
            },
            create: function() {
                M(this, {
                    a11y: t({
                    }, ie, {
                        liveRegion: m('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    })
                });
            },
            on: {
                afterInit: function(e2) {
                    e2.params.a11y.enabled && (e2.a11y.init(), e2.a11y.updateNavigation());
                },
                toEdge: function(e2) {
                    e2.params.a11y.enabled && e2.a11y.updateNavigation();
                },
                fromEdge: function(e2) {
                    e2.params.a11y.enabled && e2.a11y.updateNavigation();
                },
                paginationUpdate: function(e2) {
                    e2.params.a11y.enabled && e2.a11y.updatePagination();
                },
                destroy: function(e2) {
                    e2.params.a11y.enabled && e2.a11y.destroy();
                }
            }
        },
        {
            name: "history",
            params: {
                history: {
                    enabled: false,
                    replaceState: false,
                    key: "slides"
                }
            },
            create: function() {
                M(this, {
                    history: t({
                    }, se)
                });
            },
            on: {
                init: function(e2) {
                    e2.params.history.enabled && e2.history.init();
                },
                destroy: function(e2) {
                    e2.params.history.enabled && e2.history.destroy();
                },
                transitionEnd: function(e2) {
                    e2.history.initialized && e2.history.setHistory(e2.params.history.key, e2.activeIndex);
                },
                slideChange: function(e2) {
                    e2.history.initialized && e2.params.cssMode && e2.history.setHistory(e2.params.history.key, e2.activeIndex);
                }
            }
        },
        {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: false,
                    replaceState: false,
                    watchState: false
                }
            },
            create: function() {
                M(this, {
                    hashNavigation: t({
                        initialized: false
                    }, re)
                });
            },
            on: {
                init: function(e2) {
                    e2.params.hashNavigation.enabled && e2.hashNavigation.init();
                },
                destroy: function(e2) {
                    e2.params.hashNavigation.enabled && e2.hashNavigation.destroy();
                },
                transitionEnd: function(e2) {
                    e2.hashNavigation.initialized && e2.hashNavigation.setHash();
                },
                slideChange: function(e2) {
                    e2.hashNavigation.initialized && e2.params.cssMode && e2.hashNavigation.setHash();
                }
            }
        },
        {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: false,
                    delay: 3000,
                    waitForTransition: true,
                    disableOnInteraction: true,
                    stopOnLastSlide: false,
                    reverseDirection: false
                }
            },
            create: function() {
                M(this, {
                    autoplay: t({
                    }, ne, {
                        running: false,
                        paused: false
                    })
                });
            },
            on: {
                init: function(e2) {
                    e2.params.autoplay.enabled && (e2.autoplay.start(), r().addEventListener("visibilitychange", e2.autoplay.onVisibilityChange));
                },
                beforeTransitionStart: function(e2, t17, a29) {
                    e2.autoplay.running && (a29 || !e2.params.autoplay.disableOnInteraction ? e2.autoplay.pause(t17) : e2.autoplay.stop());
                },
                sliderFirstMove: function(e2) {
                    e2.autoplay.running && (e2.params.autoplay.disableOnInteraction ? e2.autoplay.stop() : e2.autoplay.pause());
                },
                touchEnd: function(e2) {
                    e2.params.cssMode && e2.autoplay.paused && !e2.params.autoplay.disableOnInteraction && e2.autoplay.run();
                },
                destroy: function(e2) {
                    e2.autoplay.running && e2.autoplay.stop(), r().removeEventListener("visibilitychange", e2.autoplay.onVisibilityChange);
                }
            }
        },
        {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: false
                }
            },
            create: function() {
                M(this, {
                    fadeEffect: t({
                    }, le)
                });
            },
            on: {
                beforeInit: function(e2) {
                    if ("fade" === e2.params.effect) {
                        e2.classNames.push(e2.params.containerModifierClass + "fade");
                        var t17 = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: true,
                            spaceBetween: 0,
                            virtualTranslate: true
                        };
                        S(e2.params, t17), S(e2.originalParams, t17);
                    }
                },
                setTranslate: function(e2) {
                    "fade" === e2.params.effect && e2.fadeEffect.setTranslate();
                },
                setTransition: function(e2, t18) {
                    "fade" === e2.params.effect && e2.fadeEffect.setTransition(t18);
                }
            }
        },
        {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 20,
                    shadowScale: 0.94
                }
            },
            create: function() {
                M(this, {
                    cubeEffect: t({
                    }, oe)
                });
            },
            on: {
                beforeInit: function(e2) {
                    if ("cube" === e2.params.effect) {
                        e2.classNames.push(e2.params.containerModifierClass + "cube"), e2.classNames.push(e2.params.containerModifierClass + "3d");
                        var t18 = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: true,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: false,
                            virtualTranslate: true
                        };
                        S(e2.params, t18), S(e2.originalParams, t18);
                    }
                },
                setTranslate: function(e2) {
                    "cube" === e2.params.effect && e2.cubeEffect.setTranslate();
                },
                setTransition: function(e2, t19) {
                    "cube" === e2.params.effect && e2.cubeEffect.setTransition(t19);
                }
            }
        },
        {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: true,
                    limitRotation: true
                }
            },
            create: function() {
                M(this, {
                    flipEffect: t({
                    }, de)
                });
            },
            on: {
                beforeInit: function(e2) {
                    if ("flip" === e2.params.effect) {
                        e2.classNames.push(e2.params.containerModifierClass + "flip"), e2.classNames.push(e2.params.containerModifierClass + "3d");
                        var t19 = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: true,
                            spaceBetween: 0,
                            virtualTranslate: true
                        };
                        S(e2.params, t19), S(e2.originalParams, t19);
                    }
                },
                setTranslate: function(e2) {
                    "flip" === e2.params.effect && e2.flipEffect.setTranslate();
                },
                setTransition: function(e2, t20) {
                    "flip" === e2.params.effect && e2.flipEffect.setTransition(t20);
                }
            }
        },
        {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: true
                }
            },
            create: function() {
                M(this, {
                    coverflowEffect: t({
                    }, pe)
                });
            },
            on: {
                beforeInit: function(e2) {
                    "coverflow" === e2.params.effect && (e2.classNames.push(e2.params.containerModifierClass + "coverflow"), e2.classNames.push(e2.params.containerModifierClass + "3d"), e2.params.watchSlidesProgress = true, e2.originalParams.watchSlidesProgress = true);
                },
                setTranslate: function(e2) {
                    "coverflow" === e2.params.effect && e2.coverflowEffect.setTranslate();
                },
                setTransition: function(e2, t20) {
                    "coverflow" === e2.params.effect && e2.coverflowEffect.setTransition(t20);
                }
            }
        },
        {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: true,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function() {
                M(this, {
                    thumbs: t({
                        swiper: null,
                        initialized: false
                    }, ue)
                });
            },
            on: {
                beforeInit: function(e2) {
                    var t20 = e2.params.thumbs;
                    t20 && t20.swiper && (e2.thumbs.init(), e2.thumbs.update(true));
                },
                slideChange: function(e2) {
                    e2.thumbs.swiper && e2.thumbs.update();
                },
                update: function(e2) {
                    e2.thumbs.swiper && e2.thumbs.update();
                },
                resize: function(e2) {
                    e2.thumbs.swiper && e2.thumbs.update();
                },
                observerUpdate: function(e2) {
                    e2.thumbs.swiper && e2.thumbs.update();
                },
                setTransition: function(e2, t20) {
                    var a29 = e2.thumbs.swiper;
                    a29 && a29.setTransition(t20);
                },
                beforeDestroy: function(e2) {
                    var t20 = e2.thumbs.swiper;
                    t20 && e2.thumbs.swiperCreated && t20 && t20.destroy();
                }
            }
        }
    ];
    return R.use(ce), R;
}); //# sourceMappingURL=swiper-bundle.min.js.map

},{}]},["6HDcz","465F6"], "465F6", "parcelRequire6961")

//# sourceMappingURL=index.f54124c8.js.map
