"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkJavaScript_capstone_group_project"] = self["webpackChunkJavaScript_capstone_group_project"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  background-color: #f5f5f5;\\n}\\n\\n.pokemon {\\n  color: orangered;\\n  font-size: 3rem;\\n  text-align: center;\\n  margin: 0 auto;\\n}\\n\\n.img-cont {\\n  display: flex;\\n  justify-content: center;\\n  margin: 3%;\\n}\\n\\n.pokemon-img {\\n  height: 30vh;\\n  text-align: center;\\n}\\n\\n#pokdex {\\n  list-style-type: none;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-wrap: wrap;\\n  gap: 1rem;\\n  padding: 3%;\\n}\\n\\n.card {\\n  width: 20vw;\\n  background-color: #f5f5f5;\\n  border-radius: 1rem;\\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);\\n  cursor: pointer;\\n}\\n\\n.card-imag-cont {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.card-image {\\n  width: 100%;\\n  height: 26vh;\\n  object-fit: cover;\\n}\\n\\n.card-image:hover {\\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);\\n  border: 2px solid white;\\n}\\n\\n.card-body {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 11%;\\n  padding: 5px;\\n}\\n\\n.card-title {\\n  font-size: 1.3rem;\\n  color: #333;\\n  text-transform: capitalize;\\n}\\n\\n.heart {\\n  cursor: pointer;\\n}\\n\\n.heart-img {\\n  height: 1.5rem;\\n}\\n\\n.like-cont {\\n  display: flex;\\n  justify-content: flex-end;\\n  font-size: 1rem;\\n  margin: 0 5%;\\n}\\n\\n.likes {\\n  margin-right: 0.5rem;\\n  border-radius: 10px;\\n  color: red;\\n  font-weight: bolder;\\n}\\n\\n.comment-btn {\\n  background-color: olivedrab;\\n  border: 2px solid olivedrab;\\n  box-shadow: 2px 2px olivedrab;\\n  border-radius: 0.5rem;\\n  padding: 0.5rem 1rem;\\n  font-size: 1rem;\\n  font-weight: bold;\\n  color: white;\\n  cursor: pointer;\\n  margin: 3% 10%;\\n}\\n\\n.footer {\\n  height: 20vh;\\n  width: 80vw;\\n  border-top: 2px solid black;\\n  display: flex;\\n  align-items: center;\\n  background-color: aliceblue;\\n  margin: 0 auto;\\n  padding-left: 8%;\\n}\\n\\n.popup-cont {\\n  display: none;\\n}\\n\\n.popup-cont.active {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100vw;\\n  height: 100vh;\\n  position: relative;\\n}\\n\\n.popup {\\n  width: 73vw;\\n  height: 100vh;\\n  background-color: rgba(228, 226, 226, 0.9019607843);\\n  position: fixed;\\n  top: 0;\\n  left: 11vw;\\n  border-radius: 1rem;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 2rem;\\n  gap: 1rem;\\n  overflow: scroll;\\n}\\n\\n.popup-header {\\n  width: 80%;\\n  height: 60vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: relative;\\n  padding: 1%;\\n}\\n\\n.popup-header > img {\\n  width: 65%;\\n  height: 100%;\\n  object-fit: cover;\\n  background-color: black;\\n}\\n\\n.close-btn {\\n  position: absolute;\\n  top: -7%;\\n  right: -11%;\\n  cursor: pointer;\\n  border: none;\\n  background-color: rgba(228, 226, 226, 0.9019607843);\\n  font-size: 8rem;\\n  font-weight: bolder;\\n}\\n\\n.pokemon-title {\\n  font-size: 3rem;\\n  text-transform: capitalize;\\n}\\n\\n.pokemon-body {\\n  width: 60%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  /* margin-right: 4%; */\\n  background-image: -webkit-linear-gradient(65deg, #3bd6c9 40%, #46dd39 60%);\\n}\\n\\n.text {\\n  color: #333;\\n  font-size: 1.5rem;\\n  font-weight: bold;\\n}\\n\\n.pokemon-type,\\n.pokemon-height {\\n  margin-bottom: 1rem;\\n}\\n\\n.comm-cont {\\n  width: 63%;\\n  height: auto;\\n}\\n\\n.comm-header {\\n  font-size: 2rem;\\n  color: #333;\\n  font-weight: bold;\\n  margin: 5%;\\n  text-align: center;\\n}\\n\\n.comm-body {\\n  list-style-type: none;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n  width: 100%;\\n  height: auto;\\n}\\n\\n.comm-list {\\n  font-size: 1.5rem;\\n  color: #333;\\n  font-weight: bold;\\n}\\n\\n.comm-form {\\n  width: 70%;\\n}\\n\\nform {\\n  width: 65%;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 2rem;\\n}\\n\\ninput {\\n  width: 80%;\\n  height: 3rem;\\n  border: 2px solid #333;\\n  border-radius: 0.5rem;\\n  padding: 0.5rem 1rem;\\n  font-size: 1rem;\\n  font-weight: bold;\\n  color: #333;\\n}\\n\\ntextarea {\\n  width: 100%;\\n  border: 2px solid #333;\\n  border-radius: 0.5rem;\\n  padding: 0.5rem 1rem;\\n  font-size: 1rem;\\n  font-weight: bold;\\n  color: #333;\\n}\\n\\n.submit-btn {\\n  width: 45%;\\n  height: 3rem;\\n  background-color: #f5f5f5;\\n  border: 2px solid black;\\n  box-shadow: 2px 2px black;\\n  border-radius: 0.5rem;\\n  padding: 0.5rem 1rem;\\n  font-size: 1rem;\\n  font-weight: bold;\\n  color: #333;\\n  cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./src/styles.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/heart-regular.svg":
/*!**************************************!*\
  !*** ./src/images/heart-regular.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMy4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjQ0IDg0TDI1NS4xIDk2TDI2Ny4xIDg0LjAyQzMwMC42IDUxLjM3IDM0NyAzNi41MSAzOTIuNiA0NC4xQzQ2MS41IDU1LjU4IDUxMiAxMTUuMiA1MTIgMTg1LjFWMTkwLjlDNTEyIDIzMi40IDQ5NC44IDI3Mi4xIDQ2NC40IDMwMC40TDI4My43IDQ2OS4xQzI3Ni4yIDQ3Ni4xIDI2Ni4zIDQ4MCAyNTYgNDgwQzI0NS43IDQ4MCAyMzUuOCA0NzYuMSAyMjguMyA0NjkuMUw0Ny41OSAzMDAuNEMxNy4yMyAyNzIuMSAwIDIzMi40IDAgMTkwLjlWMTg1LjFDMCAxMTUuMiA1MC41MiA1NS41OCAxMTkuNCA0NC4xQzE2NC4xIDM2LjUxIDIxMS40IDUxLjM3IDI0NCA4NEMyNDMuMSA4NCAyNDQgODQuMDEgMjQ0IDg0TDI0NCA4NHpNMjU1LjEgMTYzLjlMMjEwLjEgMTE3LjFDMTg4LjQgOTYuMjggMTU3LjYgODYuNCAxMjcuMyA5MS40NEM4MS41NSA5OS4wNyA0OCAxMzguNyA0OCAxODUuMVYxOTAuOUM0OCAyMTkuMSA1OS43MSAyNDYuMSA4MC4zNCAyNjUuM0wyNTYgNDI5LjNMNDMxLjcgMjY1LjNDNDUyLjMgMjQ2LjEgNDY0IDIxOS4xIDQ2NCAxOTAuOVYxODUuMUM0NjQgMTM4LjcgNDMwLjQgOTkuMDcgMzg0LjcgOTEuNDRDMzU0LjQgODYuNCAzMjMuNiA5Ni4yOCAzMDEuOSAxMTcuMUwyNTUuMSAxNjMuOXoiLz48L3N2Zz4=\");\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./src/images/heart-regular.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fetch-data.js */ \"./src/modules/fetch-data.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n(0,_modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentsPopup.js":
/*!**************************************!*\
  !*** ./src/modules/commentsPopup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentsPopup = (pokemon) => {\n  const popupCont = document.querySelector('.popup-cont');\n  const popup = document.createElement('div');\n  popup.classList.add('popup');\n  popup.innerHTML = `\n    <div class=\"popup-header\">\n      <img src=\"${pokemon.sprites.front_default}\" alt=\"pokemon image\">\n      <button class=\"close-btn\">&times;</button>\n    </div>\n    <h2 class=\"pokemon-title\">${pokemon.name} ${pokemon.id}</h2>\n    <div class=\"pokemon-body\">\n      <div class=\"left\">\n        <p class=\"pokemon-type text\">Type: ${pokemon.types.map((type) => type.type.name).join(', ')}</p>\n        <p class=\"pokemon-order text\">Order: ${pokemon.order}</p>\n      </div>\n      <div class=\"right\">\n        <p class=\"pokemon-height text\">Height: ${pokemon.height}</p>\n        <p class=\"pokemon-weight text\">Weight: ${pokemon.weight}</p>\n      </div>\n    </div>\n    <div class=\"comm-cont\">\n      <p class=\"comm-header\">Comments (n)</p>\n      <ul class=\"comm-body\">\n        <li class=\"comm-list\">\n          <p class=\"user-comm\">date name: comments</p>\n        </li>\n        <li class=\"comm-list\">\n          <p class=\"user-comm\">date name: comments</p>\n        </li>\n      </ul>\n    </div>\n    <div class=\"comm-form\">\n      <p class=\"comm-header\">Add a comment</p>\n      <form action=\"\">\n        <input type=\"text\" placeholder=\"Your name\" />\n        <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" placeholder=\"Your insights\"></textarea>\n        <button type=\"submit\" class=\"submit-btn\">Comment</button>\n      </form>\n    </div>`;\n  popupCont.appendChild(popup);\n\n  const closeBtn = document.querySelectorAll('.close-btn');\n  closeBtn.forEach((btn) => {\n    btn.addEventListener('click', () => {\n      popupCont.innerHTML = '';\n      popupCont.classList.remove('active');\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsPopup);\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./src/modules/commentsPopup.js?");

/***/ }),

/***/ "./src/modules/createId.js":
/*!*********************************!*\
  !*** ./src/modules/createId.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLikes\": () => (/* binding */ addLikes),\n/* harmony export */   \"likesCount\": () => (/* binding */ likesCount)\n/* harmony export */ });\nconst createGame = async () => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', { method: 'POST' });\n  const data = await response.text();\n  localStorage.setItem('id', data);\n  return data;\n};\n\nconst checkId = () => {\n  let appId = '';\n  if (localStorage.getItem('id')) {\n    appId = localStorage.getItem('id');\n  } else {\n    createGame('second').then((data) => localStorage.setItem('id', data));\n    appId = localStorage.getItem('id');\n  }\n  return appId;\n};\n\nconst getlikes = async () => {\n  const appId = checkId();\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;\n  const response = await fetch(url);\n  if (!response.ok) {\n    throw new Error(`Network response was not ok (${response.status})`);\n  }\n  const data = await response.json();\n  return data;\n};\n\nconst likesCount = async () => {\n  const likesArr = await getlikes();\n  likesArr.forEach((item) => {\n    const { likes } = item;\n    const likesHolder = document.getElementById(`likes-${item.item_id}`);\n    if (likes) {\n      likesHolder.textContent = likes;\n    }\n  });\n};\n\nconst addLikes = async (id) => {\n  const appId = checkId();\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;\n  const options = {\n    method: 'POST',\n    body: JSON.stringify({ item_id: id }),\n    headers: { 'Content-type': 'application/json; charset=UTF-8' },\n  };\n  const response = await fetch(url, options);\n  const data = response.status;\n  likesCount();\n  return data;\n};\n\n\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./src/modules/createId.js?");

/***/ }),

/***/ "./src/modules/display-pokemon.js":
/*!****************************************!*\
  !*** ./src/modules/display-pokemon.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_heart_regular_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/heart-regular.svg */ \"./src/images/heart-regular.svg\");\n/* harmony import */ var _commentsPopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsPopup.js */ \"./src/modules/commentsPopup.js\");\n/* harmony import */ var _createId_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createId.js */ \"./src/modules/createId.js\");\n\n\n\n\nconst pokdexContainer = document.getElementById('pokdex');\n\nconst displayPokemon = (pokemon) => {\n  const pokemonHTMLString = pokemon.map((pokemon) => `<li class=\"card\">\n      <div class=\"card-imag-cont\"><img class=\"card-image\" src=\"${pokemon.image}\"/></div>\n      <div class=\"card-body\">\n        <h2 class=\"card-title\">${pokemon.name} ${pokemon.id}</h2>\n        <img id=${pokemon.id} class=\"heart-img\" src=\"${_images_heart_regular_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}\">\n      </div>\n      <div class=\"like-cont\"><span id=likes-${pokemon.id} class=\"likes\"></span>likes</div>\n      <button id=\"${pokemon.id}\" class=\"comment-btn\">Comments</button>\n    </li>`).join(', ');\n  pokdexContainer.innerHTML = pokemonHTMLString;\n\n  const commentBtn = document.querySelectorAll('.comment-btn');\n  commentBtn.forEach((btn) => {\n    btn.addEventListener('click', async (e) => {\n      const { id } = e.target;\n      const popupCont = document.querySelector('.popup-cont');\n      popupCont.classList.add('active');\n      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;\n      const response = await fetch(url);\n      const pokemon = await response.json();\n      (0,_commentsPopup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pokemon);\n    });\n  });\n\n  const likeBtn = document.querySelectorAll('.heart-img');\n  likeBtn.forEach((btn) => {\n    btn.addEventListener('click', (e) => {\n      const { id } = e.target;\n      (0,_createId_js__WEBPACK_IMPORTED_MODULE_2__.addLikes)(id);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPokemon);\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./src/modules/display-pokemon.js?");

/***/ }),

/***/ "./src/modules/fetch-data.js":
/*!***********************************!*\
  !*** ./src/modules/fetch-data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_pokemon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-pokemon.js */ \"./src/modules/display-pokemon.js\");\n/* harmony import */ var _createId_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createId.js */ \"./src/modules/createId.js\");\n\n\n\nconst fetchData = async () => {\n  const urls = Array.from({ length: 12 }, (_, i) => `https://pokeapi.co/api/v2/pokemon/${i + 1}`);\n  const responses = await Promise.all(urls.map((url) => fetch(url)));\n  const pokemonData = await Promise.all(responses.map((response) => response.json()));\n\n  const pokmone = pokemonData.map((pokemon) => ({\n    name: pokemon.name,\n    id: pokemon.id,\n    image: pokemon.sprites.front_default,\n  }));\n  (0,_display_pokemon_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pokmone);\n  (0,_createId_js__WEBPACK_IMPORTED_MODULE_1__.likesCount)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);\n\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./src/modules/fetch-data.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);