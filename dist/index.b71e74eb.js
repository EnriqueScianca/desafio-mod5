// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2oZg2":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
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
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
// Router
var _router = require("./router");
// Componentes
var _welcome = require("./Components/welcome");
var _button = require("./Components/button");
var _countdown = require("./Components/countdown");
function main() {
    const contenedor = document.querySelector(".contenedor");
    (0, _router.routerDirection)(contenedor);
}
main();

},{"./router":"4QFWt","./Components/welcome":"7T1eJ","./Components/button":"cs8Gz","./Components/countdown":"ard5A"}],"4QFWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "routerDirection", ()=>routerDirection);
var _instructions = require("./Pages/instructions");
var _welcome = require("./Pages/welcome");
var _play = require("./Pages/play");
var _resuts = require("./Pages/resuts");
const routes = [
    {
        path: /\/instructions/,
        handler: (0, _instructions.instructionsPage)
    },
    {
        path: /\/welcome/,
        handler: (0, _welcome.welcomePage)
    },
    {
        path: /\/jugada/,
        handler: (0, _play.playPage)
    },
    {
        path: /\/results/,
        handler: (0, _resuts.resultsPage)
    }
];
function routerDirection(container) {
    if (location.pathname == "/desafio-mod5/") goTo("/desafio-mod5/welcome");
    if (location.pathname == "/") goTo("/welcome");
    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        for (const r of routes)if (r.path.test(route)) {
            const el = r.handler({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    handleRoute(location.pathname);
}

},{"./Pages/instructions":"lxrhw","./Pages/welcome":"E9YiV","./Pages/play":"4Dd7c","./Pages/resuts":"csPb1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lxrhw":[function(require,module,exports) {
// export function instructionsPage(params) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "instructionsPage", ()=>instructionsPage);
function instructionsPage(param) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    const imagePaper = require("13a98a335c95fbe2");
    const imageRock = require("620336a0b479d1cd");
    const imageScissors = require("470cd27a23a61514");
    // <button class= "container-button">Empezar</button>
    div.innerHTML = `
    <div class= "container">
      <h1 class="container-title">Presioná jugar y elegí: piedra papel o tijera antes de que pasen los 3 segundos.</h1>
      <button-comp text="Jugar" class = "btn"></button-comp>
    </div>

    <div class= "welcome-hands">
      <img class="imagePaper" src="${imagePaper}" >
      <img class="imageRock" src="${imageRock}" >
      <img class="imageScissors" src="${imageScissors}" >
    </div>
  `;
    style.textContent = `
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container-title{
    font-family: 'Odibee Sans', cursive;
    color: #000000;
    font-size: 40px;
    text-align: center;
    padding: 40px;
    // margin: 0px;

  }

  @media(min-width: 768px){
    .container-title{
      max-width: 40vh;
      font-size: 45px;
      margin-top: 20vh;
    }
  }

  .container-button{
    font-family: 'Odibee Sans', cursive;
    border: 3px solid #001997;
    background-color: #006CFC;
    color: #D8FCFC;
    font-size: 45px;
    width: 260px;
    height: 60px;
    margin-top: 25px;
  }

  .welcome-hands{
    position: fixed;
    left: 13%;
    right: 0%;
    top: 82%;
  } 

  @media(min-width: 768px){
    .welcome-hands{
      position: fixed;
      left: 43%;
      right: 0%;
      top: 85%;
    }
  }

  //TODO: RESPONSIVE


  `;
    const btn = div.querySelector(".btn");
    btn.addEventListener("click", ()=>{
        const path = location.pathname;
        if (path == "/instructions") param.goTo("/jugada");
    });
    div.appendChild(style);
    return div;
}

},{"13a98a335c95fbe2":"h0hWI","620336a0b479d1cd":"17tDM","470cd27a23a61514":"btayP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h0hWI":[function(require,module,exports) {
module.exports = require("28377847de90eb70").getBundleURL("7UhFu") + "papel.e982e5c2.png" + "?" + Date.now();

},{"28377847de90eb70":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"17tDM":[function(require,module,exports) {
module.exports = require("9245dd2877513ab").getBundleURL("7UhFu") + "piedra.071464c1.png" + "?" + Date.now();

},{"9245dd2877513ab":"lgJ39"}],"btayP":[function(require,module,exports) {
module.exports = require("15b0f8f81f0f80a9").getBundleURL("7UhFu") + "tijera.4c926e57.png" + "?" + Date.now();

},{"15b0f8f81f0f80a9":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"E9YiV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "welcomePage", ()=>welcomePage);
function welcomePage(param) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    const imagePaper = require("96d4ff1007c31cf");
    const imageRock = require("6a7bdd082975118a");
    const imageScissors = require("80aefbd12927cec9");
    div.innerHTML = `
    <div class= "welcome">
      <h1 class="welcome-title">Piedra Papel ó Tijera</h1>
      <button-comp text="Empezar" class= "btn"></button-comp>
    </div>

    <div class= "welcome-hands">
      <img class="imagePaper" src="${imagePaper}" >
      <img class="imageRock" src="${imageRock}" >
      <img class="imageScissors" src="${imageScissors}" >
    </div>
  `;
    style.textContent = `
    .welcome{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .welcome-title{
      font-family: 'Odibee Sans', cursive;
      color: #009048;
      font-size: 80px;
      text-align: center;
      padding: 40px;
      margin: 0px;
    }

    @media(min-width: 768px){
      .welcome-title{
        font-size: 80px;
        margin-top: 15%;
      }
    }

    // .welcome-button{
    //   font-family: 'Odibee Sans', cursive;
    //   border: 3px solid #001997;
    //   background-color: #006CFC;
    //   color: #D8FCFC;
    //   font-size: 45px;
    //   width: 260px;
    //   height: 60px;
    // }

    // .welcome-hands{
    //   position: fixed;
    //   bottom: -26px;
    //   margin-left: 12%
    // }

    

    .welcome-hands{
      position: fixed;
      left: 13%;
      right: 0%;
      top: 82%;
      // top: 77%;
    }   

    @media(min-width: 768px){
      .welcome-hands{
        position: fixed;
        left: 43%;
        right: 0%;
        top: 85%;
      }
    }
  `;
    const btn = div.querySelector(".btn");
    // btn?.addEventListener("click", (e) => {
    //   e.preventDefault();
    //   console.log("Boton Empezar funcionando correctamente");
    // });
    btn.addEventListener("click", ()=>{
        const path = location.pathname;
        if (path == "/welcome") param.goTo("/instructions");
    });
    div.appendChild(style);
    return div;
}

},{"96d4ff1007c31cf":"h0hWI","6a7bdd082975118a":"17tDM","80aefbd12927cec9":"btayP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Dd7c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "playPage", ()=>playPage);
var _state = require("../../state");
function playPage(param) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    const imagePaper = require("89c4d807f4954b1a");
    const imageRock = require("eec07128d185550e");
    const imageScissors = require("c33b0f597570725d");
    const initLocalState = (0, _state.state).getState();
    if (initLocalState == undefined || initLocalState == null || initLocalState == "") {
        const initialState = {
            currentGame: {
                myPlay: "undefined",
                computerPlay: "undefined"
            },
            history: [],
            points: {
                computer: 0,
                player: 0
            }
        };
        (0, _state.state).setState(initialState);
    }
    div.innerHTML = `
        <div class= "player-hands">
            <img class="imagePaper"  id= "paperComputer" src="${imagePaper}" >
            <img class="imageRock" id= "rockComputer" src="${imageRock}" >
            <img class="imageScissors" id= "scissorsComputer" src="${imageScissors}" >
        </div>

        <count-down id= "countdown"></count-down>


        <div class= "hands">
            <img class="imageScissors desactive"  id="scissors" src="${imageScissors}" >
            <img class="imageRock desactive"  id="rock" src="${imageRock}" >
            <img class="imagePaper desactive"  id="paper" src="${imagePaper}" >
        </div>
    

  `;
    style.textContent = `
        .hands{
            position: fixed;
            // top: 79%;
            top: 82%;
            left:13%;
            right:0%;
            cursor: pointer;
        }

        @media(min-width: 768px){
          .hands{
            position: fixed;
            left: 43%;
            right: 0%;
            top: 85%;
          }
        }

        // .hands{
        //     position: absolute;
        //     left: 13%;
        //     right:0%;
        //     top 79%;
        //     background: red;
        //     width: 100%;
        // }

        .player-hands{
            transform: rotate(180deg);
            // text-align: center;
            position: fixed;
            // top: -8px;
            top: -35px;
            left: 13%;

        }

        @media(min-width: 768px){
          .player-hands{
            position: fixed;
            left: 43%;
          }
        }

        .end{
            display: none;
        }

        .desactive{
            opacity: 50%;
        }

        .active{
            transition:  0.5s;
            position: relative;
            bottom: 25px;
            padding: 10px;
        }



        `;
    const rock = div.querySelector("#rock");
    const paper = div.querySelector("#paper");
    const scissors = div.querySelector("#scissors");
    rock.addEventListener("click", ()=>{
        // console.log("Soy la piedra")
        rock.classList.replace("desactive", "active");
        paper.classList.replace("active", "desactive");
        scissors.classList.replace("active", "desactive");
    });
    paper.addEventListener("click", ()=>{
        // console.log("Soy el papel")
        paper.classList.replace("desactive", "active");
        rock.classList.replace("active", "desactive");
        scissors.classList.replace("active", "desactive");
    });
    scissors.addEventListener("click", ()=>{
        // console.log("Soy la tijera")
        scissors.classList.replace("desactive", "active");
        rock.classList.replace("active", "desactive");
        paper.classList.replace("active", "desactive");
    });
    const setMyPlay = setInterval(()=>{
        switch(rock.classList.contains("active")){
            case true:
                (0, _state.state).setMove("piedra");
                break;
            default:
        }
        switch(paper.classList.contains("active")){
            case true:
                (0, _state.state).setMove("papel");
                break;
            default:
        }
        switch(scissors.classList.contains("active")){
            case true:
                (0, _state.state).setMove("tijera");
                break;
            default:
        }
        // Tiempo 4000
        clearInterval(setMyPlay);
    }, 4000);
    const computerPlay = setInterval(()=>{
        const currentState = (0, _state.state).getState();
        const computerRock = div.querySelector("#rockComputer");
        const computerPaper = div.querySelector("#paperComputer");
        const computerScissors = div.querySelector("#scissorsComputer");
        if (currentState.currentGame.computerPlay == "piedra") computerRock.classList.add("active");
        else computerRock.classList.add("desactive");
        if (currentState.currentGame.computerPlay == "papel") computerPaper.classList.add("active");
        else computerPaper.classList.add("desactive");
        if (currentState.currentGame.computerPlay == "tijera") computerScissors.classList.add("active");
        else computerScissors.classList.add("desactive");
        //Tiempo 4050
        clearInterval(computerPlay);
    }, 4050);
    //TODO: Redrieccionar a la pantalla de score y crear 1 boton que vaya resetee la jugada y 1 que vuelva a la pagina jugada.
    const redirectScore = setInterval(()=>{
        console.log("Redireccionando a la pantalla score");
        const path = location.pathname;
        if (path == "/jugada") param.goTo("/results");
        // Tiempo 5550
        clearInterval(redirectScore);
    }, 5550);
    div.appendChild(style);
    return div;
}

},{"../../state":"1Yeju","89c4d807f4954b1a":"h0hWI","eec07128d185550e":"17tDM","c33b0f597570725d":"btayP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {
        currentGame: {
            myPlay: "",
            computerPlay: ""
        },
        history: [
            {}
        ]
    },
    listeners: [],
    getState () {
        const currentState = localStorage.getItem("currentState");
        return JSON.parse(currentState);
    },
    setState (newState) {
        localStorage.setItem("currentState", JSON.stringify(newState));
    },
    subscribe (callback) {
        this.listeners.push(callback);
    },
    setMove (move) {
        const currentState = this.getState();
        // console.log("Soy el current state desde el state", currentState);
        currentState.currentGame.myPlay = move;
        currentState.currentGame.computerPlay = this.computerPlayOption();
        currentState.history.push(currentState.currentGame);
        //Seteo los datos en el localStorage
        localStorage.setItem("currentState", JSON.stringify(currentState));
        for (let cb of this.listeners)cb(currentState);
    },
    computerPlayOption () {
        const options = [
            "piedra",
            "papel",
            "tijera"
        ];
        const random = Math.floor(Math.random() * 3);
        return options[random];
    },
    setPlayComputer () {
        const computerPlay = this.computerPlayOption();
        const dataState = {
            data: {
                currentGame: {
                    myPlay: "undefined",
                    computerPlay: computerPlay
                }
            },
            history: [],
            points: {
                computer: 0,
                player: 0
            }
        };
        this.setState(dataState);
    },
    // pushToHistory(play: Game) {
    //   const currentState = this.getState();
    //   currentState.history(play);
    // },
    whoWins (myPlay, computerPlay) {
        const ganoConPiedra = myPlay == "piedra" && computerPlay == "tijera";
        const ganoConPapel = myPlay == "papel" && computerPlay == "piedra";
        const ganoConTijera = myPlay == "tijera" && computerPlay == "papel";
        const playerWin = [
            ganoConPiedra,
            ganoConPapel,
            ganoConTijera
        ].includes(true);
        const ganaConPidra = computerPlay == "piedra" && myPlay == "tijera";
        const ganaConPapel = computerPlay == "papel" && myPlay == "piedra";
        const ganaConTijera = computerPlay == "tijera" && myPlay == "papel";
        const computerWin = [
            ganaConPidra,
            ganaConPapel,
            ganaConTijera
        ].includes(true);
        if (playerWin) return true;
        if (computerWin) return false;
    },
    restartScore () {
        const currentState = state.getState();
        const historyReset = currentState.history = [];
        state.setState(historyReset);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"csPb1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resultsPage", ()=>resultsPage) //TODO: 1) Ver por que no funciona el transition, 2) Ver como se suma el score. Calculo que usando el Whowins y corchetes de eso, 3) Como hacer que cuando perdes pase a un color con el logo de perdiste
;
var _state = require("../../state");
function resultsPage(param) {
    console.log("Soy la pagina results");
    const div = document.createElement("div");
    const style = document.createElement("style");
    const contenedor = document.querySelector(".contenedor");
    const imageResultWin = require("7fb38f890df12675");
    const imageResultLoose = require("c8f1b843c0ff7d85");
    var myPlayScore = 0;
    var computerPlayScore = 0;
    const currentState = (0, _state.state).getState();
    //TODO: La linea 179 devuelve true o false segun quien gana o pierda. Habria que hacer un if que cuando retorne true sume un punto a mi variable myPlayScore++ o algo asi. Undefined es empate
    const cs = currentState.history;
    for (let play of cs){
        var win = (0, _state.state).whoWins(play.myPlay, play.computerPlay);
        console.log(win, "soy el win");
        if (win) {
            console.log("GANASTE");
            myPlayScore++;
            contenedor.classList.add("colorWin");
            contenedor.classList.replace("colorLoose", "colorWin");
            div.innerHTML = `

    <div class="general">
      <div class="logo-result">
        <img src="${imageResultWin}" class="win" alt="">
        <img src="${imageResultLoose}" class="loose" alt="">
      </div>


      <div class="score">
        <h1 class="scoreTitle">Score</h1>
        <h2 class= "scoreVos">Vos: ${myPlayScore}</h2>
        <h2 class= "scoreMaquina">Máquina: ${computerPlayScore}</h2>
      </div>

      <div class="buttons">
        <button-comp class="boton-volver" text="Volver a jugar"></button-comp>
        <button-comp class="boton-reset" text="Resetear Score"></button-comp>
      </div> 
    </div>

    <div class="off poster-restart-score">
    <div class="poster-quit">
      <h2 class="quit">X</h2>
    </div>
    <h1 class="poster-message">¡Score Reseteado!</h1>
  </div>


        `;
        }
        if (contenedor.className == "colorWin") contenedor.classList.remove("colorLoose");
        //TODO: VER POR QUE NO FUNCIONA CUANDO ENTRA AL FALSE
        if (win == false) {
            console.log("PERDISTE");
            computerPlayScore++;
            contenedor.classList.replace("colorWin", "colorLoose");
            div.innerHTML = `

      <div class="general">
        <div class="logo-result">
          <img src="${imageResultLoose}" class="win" alt="">
        </div>


      <div class="score">
        <h1 class="scoreTitle">Score</h1>
        <h2 class= "scoreVos">Vos: ${myPlayScore}</h2>
        <h2 class= "scoreMaquina">Máquina: ${computerPlayScore}</h2>
      </div>

      <div class="buttons">
        <button-comp class="boton-volver" text="Volver a jugar"></button-comp>
        <button-comp class="boton-reset" text="Resetear Score"></button-comp>
      </div> 
    </div>

    <div class="off poster-restart-score">
    <div class="poster-quit">
      <h2 class="quit">X</h2>
    </div>
    <h1 class="poster-message">¡Score Reseteado!</h1>
  </div>


        `;
        }
        if (win == undefined) {
            console.log("PERDISTE");
            contenedor.classList.add("colorLoose");
            contenedor.classList.replace("colorWin", "colorLoose");
            div.innerHTML = `

      <div class="general">
        <div class="logo-result">
          <h1 class="empateTitle">EMPATE</h1>
        </div>


      <div class="score">
        <h1 class="scoreTitle">Score</h1>
        <h2 class= "scoreVos">Vos: ${myPlayScore}</h2>
        <h2 class= "scoreMaquina">Máquina: ${computerPlayScore}</h2>
      </div>

      <div class="buttons">
        <button-comp class="boton-volver" text="Volver a jugar"></button-comp>
        <button-comp class="boton-reset" text="Resetear Score"></button-comp>
      </div> 
    </div>

    <div class="off poster-restart-score">
    <div class="poster-quit">
      <h2 class="quit">X</h2>
    </div>
    <h1 class="poster-message">¡Score Reseteado!</h1>
  </div>


        `;
        }
    }
    style.textContent = `

        .contenedor{
            height: 100vh;
        }

        .empateTitle{
          font-family: 'Odibee Sans', cursive;
          font-size: 45px;
        }

        .colorWin{
          background-color: rgba(136, 137, 73, 0.9);
        }

        .colorLoose{
          background-color: rgba(137, 73, 73, 0.9);
        }

        .logo-result{
            text-align: center;
            padding: 20px;
        }

        // .win{
        //     display: none;
        //     width: 250px;
        //     heigth: 250px;
        // }

        .loose{
            display: none;
            width: 250px;
            heigth: 250px;
        }


        .score{
            font-family: 'Odibee Sans', cursive;
            display: flex;
            flex-direction: column;
            align-items: end;
            padding-right: 30px;
            border: solid black 5px;
            border-radius: 25px;
            width: 300px;
            height: 170px;
            margin-left: 40px;
            background: white;
        }

        @media(min-width: 768px){
          .score{
            margin: 60px;
          }
        }

        @media(min-width: 768px){
          .general{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        }

        h2{
            font-family: 'Odibee Sans', cursive;
            padding: 5px;
            margin: 0px;
        }

        .buttons{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .poster-restart-score{
          font-family: 'Odibee Sans', cursive;
          border: solid black 4px;
          border-radius: 20px;
          padding: 10px;
          text-align: center;
          position: absolute;
          top: 20vh;
          left: 14vh;
          background: white;
          color: black;
        }


        @media(min-width: 768px){
          .poster-restart-score{
            margin-left: 70vh;

          }
        }

        .on{
          display: inherit;
        }
        
        .off{
          display: none;
        }

        .poster-quit{
          text-align: end;
          margin-right: 15px;
          background: white;
          cursor: pointer
        }

        .opacityDiv{
          opacity: 50%;
        }

    
    `;
    const botonVolver = div.querySelector(".boton-volver");
    const botonReset = div.querySelector(".boton-reset");
    const posterRestart = div.querySelector(".poster-restart-score");
    const quitBottom = div.querySelector(".quit");
    const general = div.querySelector(".general");
    botonVolver.addEventListener("click", ()=>{
        const path = location.pathname;
        if (path == "/results") param.goTo("/jugada");
    });
    botonReset.addEventListener("click", ()=>{
        //TODO: Aca deberia resetear el history. ¿Como?, solo dios y chatGPT lo saben.
        (0, _state.state).restartScore();
        // console.log("Score reseteado");
        posterRestart.classList.replace("off", "on");
        if (posterRestart.classList.contains("on")) general.classList.add("opacityDiv");
    });
    quitBottom.addEventListener("click", ()=>{
        posterRestart.classList.replace("on", "off");
        if (general.classList.contains("opacityDiv")) //Clase "f" no existe es solo para que no tenga efectos
        general.classList.replace("opacityDiv", "f");
    });
    // const myPlayScore = 0;
    // const computerPlayScore = 0;
    // const currentState = state.getState();
    // const myPlayState = currentState.currentGame.myPlay;
    // const computerPlayState = currentState.currentGame.computerPlay;
    // //TODO: La linea 179 devuelve true o false segun quien gana o pierda. Habria que hacer un if que cuando retorne true sume un punto a mi variable myPlayScore++ o algo asi. Undefined es empate
    // const stateWin = state.whoWins(myPlayState, computerPlayState);
    // console.log(stateWin);
    // if (stateWin == undefined) {
    //   div.innerHTML = `
    //     <h1>Es un empate wachin</h1>
    //   `;
    // }
    div.appendChild(style);
    return div;
}

},{"../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","7fb38f890df12675":"ejeHB","c8f1b843c0ff7d85":"6ChpK"}],"ejeHB":[function(require,module,exports) {
module.exports = require("c11d4fa4071195b3").getBundleURL("7UhFu") + "resultado-ganaste.9e87dbde.png" + "?" + Date.now();

},{"c11d4fa4071195b3":"lgJ39"}],"6ChpK":[function(require,module,exports) {
module.exports = require("dbab4b38e4058f3c").getBundleURL("7UhFu") + "resultado-perdiste.c28269c7.png" + "?" + Date.now();

},{"dbab4b38e4058f3c":"lgJ39"}],"7T1eJ":[function(require,module,exports) {
// customElements.define(
//   "welcome-page",
//   class extends HTMLElement {
//     shadow = this.attachShadow({ mode: "open" }) as ShadowRoot;
//     constructor() {
//       super();
//       this.render();
//     }
//     connectedCallback() {
//       //TODO: Funcionamiento del boton en interaccion con el state y el router
//       const button = this.shadow.querySelector(".welcome-button");
//       button?.addEventListener("click", (e) => {
//         e.preventDefault();
//         console.log("Componente Welcome funcionando");
//       });
//     }
//     render() {
//       const div = document.createElement("div");
//       const imagePaper = require("../../images/papel.png");
//       const imageRock = require("../../images/piedra.png");
//       const imageScissors = require("../../images/tijera.png");
//       // const imageBackground = require("../../images/fondo.png");
//       div.innerHTML = `
//       <div class= "welcome">
//         <h1 class="welcome-title">Piedra Papel ó Tijera</h1>
//         <button class="welcome-button">Empezar</button>
//       </div>
//       <div class= "welcome-hands">
//         <img class="imagePaper" src="${imagePaper}" >
//         <img class="imageRock" src="${imageRock}" >
//         <img class="imageScissors" src="${imageScissors}" >
//       </div>
//         `;
//       this.shadow.appendChild(div);
//       const style = document.createElement("style");
//       style.innerHTML = `
//       .welcome{
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//       }
//       .welcome-title{
//         font-family: 'Odibee Sans', cursive;
//         color: #009048;
//         font-size: 80px;
//         text-align: center;
//         padding: 40px;
//         margin: 0px;
//       }
//       .welcome-button{
//         font-family: 'Odibee Sans', cursive;
//         border: 3px solid #001997;
//         background-color: #006CFC;
//         color: #D8FCFC;
//         font-size: 45px;
//         width: 260px;
//         height: 60px;
//       }
//       // .welcome-hands{
//       //   position: fixed;
//       //   bottom: -26px;
//       //   margin-left: 12%
//       // }
//       .welcome-hands{
//         position: absolute;
//         left: 13%;
//         right: 0%;
//         // top: 82%;
//         top: 77%;
//       }
//       `;
//       this.shadow.appendChild(style);
//     }
//   }
// );

},{}],"cs8Gz":[function(require,module,exports) {
//TODO: ELIMINAR TODO Y HACER COMPONENTE SOLO EL BOTON PARA INYECTAR EN LAS PAGE CORRESPONDIENTES (POR AHORA EN INSTRUCTIONS)
customElements.define("button-comp", class extends HTMLElement {
    // shadow: ShadowRoot
    shadow = this.attachShadow({
        mode: "open"
    });
    constructor(){
        super();
        this.render();
    }
    render() {
        const div = document.createElement("div");
        const style = document.createElement("style");
        style.innerHTML = `
        .container-button{
          font-family: 'Odibee Sans', cursive;
        border: 3px solid #001997;
        background-color: #006CFC;
        color: #D8FCFC;
        font-size: 45px;
        width: 260px;
        height: 60px;
        margin-top: 25px;
        cursor: pointer;
        }

        @media(min-width: 768px){
          .container-button{
            width: 336px;
            height: 87px;
            border-radius: 10px;
          }
        }
      `;
        this.shadow.appendChild(style);
        const text = this.getAttribute("text");
        div.innerHTML = `
        <div class= "container">
          <button class= "container-button">${text}</button>
        </div>

      `;
        this.shadow.appendChild(div);
    }
});

},{}],"ard5A":[function(require,module,exports) {
customElements.define("count-down", class extends HTMLElement {
    shadow = this.attachShadow({
        mode: "open"
    });
    constructor(){
        super();
        this.render();
    }
    render() {
        const div = document.createElement("div");
        const style = document.createElement("style");
        let time = 3;
        var timer = setInterval(()=>{
            console.log("Soy el time", time);
            div.innerHTML = `
                    <h1 class= "counter">${time}</h1>
                    `;
            time--;
            if (time < 1) {
                clearInterval(timer);
                setTimeout(()=>{
                    this.classList.add("end");
                }, 1000);
            }
        }, 1000);
        style.textContent = `
                .counter{
                    font-family: 'Odibee Sans', cursive;
                    font-size: 65px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 70%;
                }

                @media(min-width: 768px){
                  .counter{
                    font-family: 'Odibee Sans', cursive;
                    font-size: 65px;
                    display: flex;
                    margin-top: 40vh;


                  }
                }
            `;
        this.shadow.appendChild(div);
        this.shadow.appendChild(style);
    }
});

},{}]},["2oZg2","h7u1C"], "h7u1C", "parcelRequire93c5")

//# sourceMappingURL=index.b71e74eb.js.map
