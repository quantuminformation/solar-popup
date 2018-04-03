(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SolarPopup"] = factory();
	else
		root["SolarPopup"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/SolarPopup.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js!./src/ModalBackground.pcss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib!./src/ModalBackground.pcss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal-background {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  z-index: 1;\n  background: rgb(0, 0, 0);\n  opacity: 0.5;\n  transition: all 300ms ease;\n\n\n}\n\n[data-is-initialising=\"true\"] {\n   opacity: 0;\n }\n\n[data-is-destructing=\"true\"] {\n   opacity: 0;\n }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js!./src/SolarPopup.pcss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib!./src/SolarPopup.pcss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* mobile first styles */\n\n/*\nbased on https://github.com/cssrecipes/custom-media-queries/blob/master/index.css\n */\n\n:root {\n  /*dark theme*/\n  --background: #06071a;\n  --border: #04bbff;\n  --color: #fff;\n  --form-padding: 50px;\n  --popup-width: 250px;\n}\n\n.solar-popup {\n  position: fixed;\n  z-index: 1000;\n  padding: 10px;\n  width: 250px;\n  width: var(--popup-width);\n  top: 10px;\n  box-sizing: border-box;\n  color: #fff;\n  color: var(--color);\n  transition: all 300ms ease;\n  background-color: #06071a;\n  background-color: var(--background);\n  border: 1px solid #04bbff;\n  border: 1px solid var(--border);\n  border-radius: 5px;\n  left: calc(50% - (250px / 2));\n  left: calc(50% - (var(--popup-width) / 2));\n}\n\n.solar-popup h1,.solar-popup h2,.solar-popup h3{\n    color: aqua;\n  }\n\n.solar-popup[data-is-initialising=\"true\"] {\n    /*todo cater for bigger screens*/\n    left: calc(250px * -1) !important;\n    left: calc(var(--popup-width) * -1) !important;\n  }\n\n.solar-popup[data-is-destructing=\"true\"] {\n    /*todo cater for bigger screens*/\n    left: 100%;\n  }\n\n@media (min-width: 576px) {\n\n.solar-popup {\n    top: 20%\n}\n  }\n\n.solar-popup .close {\n    cursor: pointer;\n    position: absolute;\n    right: 10px;\n    top: 5px;\n    font-size: 16px;\n    padding: 2px;\n  }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vanilla-typescript/conversions.ts":
/*!********************************************************!*\
  !*** ./node_modules/vanilla-typescript/conversions.ts ***!
  \********************************************************/
/*! exports provided: conversions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conversions", function() { return conversions; });
var conversions;
(function (conversions) {
    function formdataToObject(formData) {
        const o = {};
        for (let pair of formData.entries()) {
            o[pair[0]] = pair[1];
            console.log(pair);
        }
        return o;
    }
})(conversions || (conversions = {}));


/***/ }),

/***/ "./node_modules/vanilla-typescript/events/ApplicationEvents.ts":
/*!*********************************************************************!*\
  !*** ./node_modules/vanilla-typescript/events/ApplicationEvents.ts ***!
  \*********************************************************************/
/*! exports provided: ApplicationEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationEvents", function() { return ApplicationEvents; });
/**
 * Common Application Events
 */
class ApplicationEvents {
}
ApplicationEvents.USER_HAS_LOGGED_IN = 'USER_HAS_LOGGED_IN';
ApplicationEvents.USER_HAS_LOGGED_OUT = 'USER_HAS_LOGGED_OUT';


/***/ }),

/***/ "./node_modules/vanilla-typescript/events/KeyCodes.ts":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-typescript/events/KeyCodes.ts ***!
  \************************************************************/
/*! exports provided: KeyCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyCodes", function() { return KeyCodes; });
// I'm adding to these as I need them) If you need to add feel free to PR!
let KeyCodes = {
    BACKSPACE: 8,
    RETURN: 13,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    a: 65,
    b: 66,
    F: 70,
    k: 75,
    m: 77,
    WIN_or_CMD: 91 // to detect cmd on key up use this, on keydown you can use event.metaKey
};


/***/ }),

/***/ "./node_modules/vanilla-typescript/index.ts":
/*!**************************************************!*\
  !*** ./node_modules/vanilla-typescript/index.ts ***!
  \**************************************************/
/*! exports provided: KeyCodes, ApplicationEvents, conversions, getFormValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events_KeyCodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events/KeyCodes */ "./node_modules/vanilla-typescript/events/KeyCodes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyCodes", function() { return _events_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"]; });

/* harmony import */ var _events_ApplicationEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/ApplicationEvents */ "./node_modules/vanilla-typescript/events/ApplicationEvents.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationEvents", function() { return _events_ApplicationEvents__WEBPACK_IMPORTED_MODULE_1__["ApplicationEvents"]; });

/* harmony import */ var _conversions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conversions */ "./node_modules/vanilla-typescript/conversions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "conversions", function() { return _conversions__WEBPACK_IMPORTED_MODULE_2__["conversions"]; });

/* harmony import */ var _util_DomDataExtraction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/DomDataExtraction */ "./node_modules/vanilla-typescript/util/DomDataExtraction.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFormValues", function() { return _util_DomDataExtraction__WEBPACK_IMPORTED_MODULE_3__["getFormValues"]; });







/***/ }),

/***/ "./node_modules/vanilla-typescript/util/DomDataExtraction.ts":
/*!*******************************************************************!*\
  !*** ./node_modules/vanilla-typescript/util/DomDataExtraction.ts ***!
  \*******************************************************************/
/*! exports provided: getFormValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormValues", function() { return getFormValues; });
/**
 * Useful in vanilla apps when you want to get data from a form but don't have frameworky stuff to do it
 */
/**
 * @param {HTMLElement} form
 */
function getFormValues(form) {
    let data = {};
    let inputs = Array.from(form.querySelectorAll('input,textarea'));
    inputs.forEach(input => {
        data[input.name] = input.value;
    });
    return JSON.stringify(data);
}


/***/ }),

/***/ "./src/ModalBackground.pcss":
/*!**********************************!*\
  !*** ./src/ModalBackground.pcss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--5-1!../node_modules/postcss-loader/lib!./ModalBackground.pcss */ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js!./src/ModalBackground.pcss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/ModalBackground.ts":
/*!********************************!*\
  !*** ./src/ModalBackground.ts ***!
  \********************************/
/*! exports provided: ModalBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackground", function() { return ModalBackground; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _ModalBackground_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalBackground.pcss */ "./src/ModalBackground.pcss");
/* harmony import */ var _ModalBackground_pcss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ModalBackground_pcss__WEBPACK_IMPORTED_MODULE_1__);


class ModalBackground {
    constructor() {
        // tslint:disable-line
        this.destroyBoundWithThis = this.destroy.bind(this);
    }
    /**
     * Shows
     * @param {Element} child we need to keep the reference to keep custom functionality in the child
     */
    render() {
        this.hostElement = document.createElement('DIV');
        this.hostElement.className = 'modal-background';
        this.hostElement.dataset['isInitialising'] = 'true';
        document.body.appendChild(this.hostElement);
        setTimeout(() => {
            this.hostElement.dataset['isInitialising'] = 'false';
        }, 0); // to force style re show
    }
    destroy() {
        this.hostElement.dataset['isDestructing'] = 'true';
        setTimeout(() => {
            this.hostElement.parentElement.removeChild(this.hostElement);
        }, _constants__WEBPACK_IMPORTED_MODULE_0__["constants"].TRANSITION_TIMES);
    }
}


/***/ }),

/***/ "./src/SolarPopup.pcss":
/*!*****************************!*\
  !*** ./src/SolarPopup.pcss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--5-1!../node_modules/postcss-loader/lib!./SolarPopup.pcss */ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js!./src/SolarPopup.pcss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/SolarPopup.ts":
/*!***************************!*\
  !*** ./src/SolarPopup.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SolarPopup; });
/* harmony import */ var _ModalBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalBackground */ "./src/ModalBackground.ts");
/* harmony import */ var vanilla_typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanilla-typescript */ "./node_modules/vanilla-typescript/index.ts");
/* harmony import */ var _SolarPopup_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SolarPopup.pcss */ "./src/SolarPopup.pcss");
/* harmony import */ var _SolarPopup_pcss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SolarPopup_pcss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");




/**
 * A Popup that can take any content
 *
 * Features
 * Closes in response to [ESC] keypress, submit events.
 * Adds modal background that fades in with CSS3 transitions
 * Popup itself slides in with CSS3 transitions
 *
 * If you specify fixed Dimensions then it will explicitly set the width and height optionally
 *
 * @constructor
 */
class SolarPopup {
    constructor(child, fixedDimensions) {
        this.destroyBoundWithThis = this.destroy.bind(this);
        this.modalBackground = new _ModalBackground__WEBPACK_IMPORTED_MODULE_0__["ModalBackground"]();
        const tempElement = document.createElement('DIV');
        tempElement.innerHTML =
            `<article class='solar-popup' data-is-initialising='true'>
        <a class='close'><!--&#x274c-->&#x2716</a>
          <div class='childContainer'></div>
       </article>`;
        this.hostElement = tempElement.firstChild;
        this.hostElement.querySelector('.childContainer').appendChild(child);
        var htmlStyles = window.getComputedStyle(document.querySelector("html"));
        var myColor = htmlStyles.getPropertyValue("--popup-width"); // returns "#f00"
        if (fixedDimensions) {
            if (window.innerWidth > 2 * 10 + fixedDimensions.width) {
                document.documentElement.style.setProperty('--popup-width', fixedDimensions.width + 'px');
            }
            if (window.innerHeight > 2 * 10 + fixedDimensions.height) {
                // todo adjust for small height
                this.hostElement.style.height = `${fixedDimensions.height}px`;
            }
        }
        var htmlStyles = window.getComputedStyle(document.querySelector("html"));
        var myColor = htmlStyles.getPropertyValue("--popup-width"); // returns "#f00"
    }
    /**
     * Shows
     * @param {Element} child we need to keep the reference to keep custom functionality in the child
     */
    show() {
        document.body.appendChild(this.hostElement);
        // let currentWidth = window.getComputedStyle(document.querySelector('p'))
        this.modalBackground.render();
        return new Promise((resolve, reject) => {
            // we need to set this in a timeout in order to trigger the css transition
            setTimeout(() => {
                this.hostElement.dataset['isInitialising'] = 'false';
            });
            // when the popup is has finished moving via the css transition resolve the promise to tell the callee
            setTimeout(() => {
                // todo use dynamic width for better centering
                // let currentWidth = window.getComputedStyle(document.querySelector('p')) }, 50)
                this.addListeners();
                resolve();
                var htmlStyles = window.getComputedStyle(document.querySelector("html"));
                var myColor = htmlStyles.getPropertyValue("--popup-width"); // returns "#f00"
            }, _constants__WEBPACK_IMPORTED_MODULE_3__["constants"].TRANSITION_TIMES);
        });
    }
    addListeners() {
        const closeElement = this.hostElement.querySelector('a');
        closeElement.addEventListener('click', this.destroyBoundWithThis);
        this.hostElement.classList.remove('offscreen');
        document.addEventListener('keyup', function (event) {
            if (event.keyCode === vanilla_typescript__WEBPACK_IMPORTED_MODULE_1__["KeyCodes"].ESC) {
                this.destroyBoundWithThis();
            }
        }.bind(this));
        this.hostElement.addEventListener('submit', function (event) {
            this.destroyBoundWithThis();
            event.preventDefault();
        }.bind(this));
        // handle the first child submit button click, close popup by default
        // this is a convention that gets popup to behave in sensible way
        const submitBtn = this.hostElement.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.addEventListener('click', this.destroyBoundWithThis);
        }
    }
    destroy() {
        // visual indicator for this element and delegate to the modal
        this.hostElement.dataset['isDestructing'] = 'true';
        this.modalBackground.destroy();
        return new Promise((resolve) => {
            setTimeout(() => {
                this.hostElement.parentElement.removeChild(this.hostElement);
                resolve();
            }, _constants__WEBPACK_IMPORTED_MODULE_3__["constants"].TRANSITION_TIMES);
        });
    }
}


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
const constants = {
    KEYS: {
        BACKSPACE: 8,
        TAB: 9,
        RETURN: 13,
        ESC: 27,
        SPACE: 32,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46,
        HOME: 36,
        END: 35,
        PAGEUP: 33,
        PAGEDOWN: 34,
        INSERT: 45,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        A: 65,
        L: 76,
        P: 80,
        Q: 81,
        TILDA: 192
    },
    TRANSITION_TIMES: 300,
    BREAKPOINTS: {
        XS: 400,
        SM: 680,
        MD: 1024,
        LG: 1200
    }
};


/***/ })

/******/ });
});
//# sourceMappingURL=solar-popup.js.map