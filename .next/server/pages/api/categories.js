"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/categories";
exports.ids = ["pages/api/categories"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "@auth/mongodb-adapter":
/*!****************************************!*\
  !*** external "@auth/mongodb-adapter" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@auth/mongodb-adapter");;

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fcategories&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Ccategories.js&middlewareConfigBase64=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fcategories&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Ccategories.js&middlewareConfigBase64=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_categories_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\categories.js */ \"(api)/./pages/api/categories.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_categories_js__WEBPACK_IMPORTED_MODULE_3__]);\n_pages_api_categories_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_categories_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_categories_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/categories\",\n        pathname: \"/api/categories\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_categories_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmNhdGVnb3JpZXMmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyU1Q2FwaSU1Q2NhdGVnb3JpZXMuanMmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ0w7QUFDMUQ7QUFDd0Q7QUFDeEQ7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLHFEQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLGVBQWUsd0VBQUssQ0FBQyxxREFBUTtBQUNwQztBQUNPLHdCQUF3QixnSEFBbUI7QUFDbEQ7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQscUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcC8/NzQzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXGNhdGVnb3JpZXMuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jYXRlZ29yaWVzXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY2F0ZWdvcmllc1wiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fcategories&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Ccategories.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./models/Category.js":
/*!****************************!*\
  !*** ./models/Category.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Category: () => (/* binding */ Category)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CategorySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    parent: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types).ObjectId,\n        ref: \"Category\"\n    },\n    properties: [\n        {\n            type: Object\n        }\n    ]\n});\nconst Category = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.Category || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Category\", CategorySchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvQ2F0ZWdvcnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlEO0FBRXpELE1BQU1JLGlCQUFpQixJQUFJRCw0Q0FBTUEsQ0FBQztJQUM5QkUsTUFBTTtRQUFDQyxNQUFLQztRQUFPQyxVQUFTO0lBQUk7SUFDaENDLFFBQVE7UUFBQ0gsTUFBS04sdURBQWMsQ0FBQ1csUUFBUTtRQUFFQyxLQUFJO0lBQVU7SUFDckRDLFlBQVk7UUFBQztZQUFDUCxNQUFLUTtRQUFNO0tBQUU7QUFDL0I7QUFFTyxNQUFNQyxXQUFXYiw0Q0FBTUEsRUFBRWEsWUFBWWQsK0NBQUtBLENBQUMsWUFBWUcsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHAvLi9tb2RlbHMvQ2F0ZWdvcnkuanM/NGM4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHttb2RlbCwgbW9kZWxzLCBTY2hlbWF9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgQ2F0ZWdvcnlTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICAgIG5hbWU6IHt0eXBlOlN0cmluZyxyZXF1aXJlZDp0cnVlfSxcclxuICAgIHBhcmVudDoge3R5cGU6bW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQsIHJlZjonQ2F0ZWdvcnknfSxcclxuICAgIHByb3BlcnRpZXM6IFt7dHlwZTpPYmplY3R9XVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeSA9IG1vZGVscz8uQ2F0ZWdvcnkgfHwgbW9kZWwoJ0NhdGVnb3J5JywgQ2F0ZWdvcnlTY2hlbWEpOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm1vZGVsIiwibW9kZWxzIiwiU2NoZW1hIiwiQ2F0ZWdvcnlTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicGFyZW50IiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInByb3BlcnRpZXMiLCJPYmplY3QiLCJDYXRlZ29yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Category.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   isAdminRequest: () => (/* binding */ isAdminRequest)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"@auth/mongodb-adapter\");\n/* harmony import */ var _pages_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pages/lib/mongodb */ \"(api)/./pages/lib/mongodb.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__]);\n_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst adminEmails = [\n    \"g22.noaman.imran@gnkhalsa.edu.in\",\n    \"noaman2540@gmail.com\"\n];\nconst authOptions = {\n    secret: process.env.SECRET,\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        })\n    ],\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_pages_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    callbacks: {\n        session: ({ session, token, user })=>{\n            if (adminEmails.includes(session?.user?.email)) {\n                return session;\n            } else {\n                return false;\n            }\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\nasync function isAdminRequest(req, res) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(req, res, authOptions);\n    if (!adminEmails.includes(session?.user?.email)) {\n        res.status(401);\n        res.end();\n        throw \"not an admin\";\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNHO0FBQ0Q7QUFDQTtBQUV2RCxNQUFNSyxjQUFjO0lBQUM7SUFBbUM7Q0FBdUI7QUFHeEUsTUFBTUMsY0FBYztJQUN6QkMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxNQUFNO0lBQzFCQyxXQUFXO1FBQ1RULGlFQUFjQSxDQUFDO1lBQ2JVLFVBQVVKLFFBQVFDLEdBQUcsQ0FBQ0ksU0FBUztZQUMvQkMsY0FBY04sUUFBUUMsR0FBRyxDQUFDTSxhQUFhO1FBQ3pDO0tBQ0Q7SUFDREMsU0FBU2IscUVBQWNBLENBQUNDLDBEQUFhQTtJQUNyQ2EsV0FBVztRQUNUQyxTQUFTLENBQUMsRUFBQ0EsT0FBTyxFQUFDQyxLQUFLLEVBQUNDLElBQUksRUFBQztZQUM1QixJQUFJZixZQUFZZ0IsUUFBUSxDQUFDSCxTQUFTRSxNQUFNRSxRQUFRO2dCQUM5QyxPQUFPSjtZQUNULE9BQU87Z0JBQ0wsT0FBTztZQUNUO1FBQ0Y7SUFDRjtBQUNGLEVBQUU7QUFFRixpRUFBZWxCLGdEQUFRQSxDQUFDTSxZQUFZQSxFQUFDO0FBRTlCLGVBQWVpQixlQUFlQyxHQUFHLEVBQUNDLEdBQUc7SUFDMUMsTUFBTVAsVUFBVSxNQUFNakIsMkRBQWdCQSxDQUFDdUIsS0FBSUMsS0FBSW5CO0lBQy9DLElBQUksQ0FBQ0QsWUFBWWdCLFFBQVEsQ0FBQ0gsU0FBU0UsTUFBTUUsUUFBUTtRQUMvQ0csSUFBSUMsTUFBTSxDQUFDO1FBQ1hELElBQUlFLEdBQUc7UUFDUCxNQUFNO0lBQ1I7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3BwLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwge2dldFNlcnZlclNlc3Npb259IGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnO1xuaW1wb3J0IHsgTW9uZ29EQkFkYXB0ZXIgfSBmcm9tICdAYXV0aC9tb25nb2RiLWFkYXB0ZXInO1xuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSAnLi4vLi4vLi4vcGFnZXMvbGliL21vbmdvZGInO1xuXG5jb25zdCBhZG1pbkVtYWlscyA9IFsnZzIyLm5vYW1hbi5pbXJhbkBnbmtoYWxzYS5lZHUuaW4nLCdub2FtYW4yNTQwQGdtYWlsLmNvbSddO1xuXG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5TRUNSRVQsXG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVRcbiAgICB9KSxcbiAgXSxcbiAgYWRhcHRlcjogTW9uZ29EQkFkYXB0ZXIoY2xpZW50UHJvbWlzZSksXG4gIGNhbGxiYWNrczoge1xuICAgIHNlc3Npb246ICh7c2Vzc2lvbix0b2tlbix1c2VyfSkgPT4ge1xuICAgICAgaWYgKGFkbWluRW1haWxzLmluY2x1ZGVzKHNlc3Npb24/LnVzZXI/LmVtYWlsKSkge1xuICAgICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNBZG1pblJlcXVlc3QocmVxLHJlcykge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihyZXEscmVzLGF1dGhPcHRpb25zKTtcbiAgaWYgKCFhZG1pbkVtYWlscy5pbmNsdWRlcyhzZXNzaW9uPy51c2VyPy5lbWFpbCkpIHtcbiAgICByZXMuc3RhdHVzKDQwMSk7XG4gICAgcmVzLmVuZCgpO1xuICAgIHRocm93ICdub3QgYW4gYWRtaW4nO1xuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsImdldFNlcnZlclNlc3Npb24iLCJHb29nbGVQcm92aWRlciIsIk1vbmdvREJBZGFwdGVyIiwiY2xpZW50UHJvbWlzZSIsImFkbWluRW1haWxzIiwiYXV0aE9wdGlvbnMiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiU0VDUkVUIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJHT09HTEVfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfU0VDUkVUIiwiYWRhcHRlciIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ0b2tlbiIsInVzZXIiLCJpbmNsdWRlcyIsImVtYWlsIiwiaXNBZG1pblJlcXVlc3QiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./pages/api/categories.js":
/*!*********************************!*\
  !*** ./pages/api/categories.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _models_Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Category */ \"(api)/./models/Category.js\");\n/* harmony import */ var _pages_lib_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pages/lib/mongoose */ \"(api)/./pages/lib/mongoose.js\");\n/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/api/auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__]);\n_pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function handle(req, res) {\n    const { method } = req;\n    await (0,_pages_lib_mongoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    await (0,_pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__.isAdminRequest)(req, res);\n    if (method === \"GET\") {\n        res.json(await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.find().populate(\"parent\"));\n    }\n    if (method === \"POST\") {\n        const { name, parentCategory, properties } = req.body;\n        // If parentCategory is an empty string, set it to null\n        const categoryDoc = await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.create({\n            name,\n            parent: parentCategory && parentCategory !== \"\" ? parentCategory : null,\n            properties\n        });\n        res.json(categoryDoc);\n    }\n    if (method === \"PUT\") {\n        const { name, parentCategory, properties, _id } = req.body;\n        // If parentCategory is an empty string, set it to null\n        const categoryDoc = await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.updateOne({\n            _id\n        }, {\n            name,\n            parent: parentCategory && parentCategory !== \"\" ? parentCategory : null,\n            properties\n        });\n        res.json(categoryDoc);\n    }\n    if (method === \"DELETE\") {\n        const { _id } = req.query;\n        await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.deleteOne({\n            _id\n        });\n        res.json(\"ok\");\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBQ1E7QUFDVztBQUUvQyxlQUFlRyxPQUFPQyxHQUFHLEVBQUVDLEdBQUc7SUFDekMsTUFBTSxFQUFDQyxNQUFNLEVBQUMsR0FBR0Y7SUFDakIsTUFBTUgsK0RBQWVBO0lBQ3JCLE1BQU1DLHlFQUFjQSxDQUFDRSxLQUFJQztJQUV6QixJQUFJQyxXQUFXLE9BQU87UUFDbEJELElBQUlFLElBQUksQ0FBQyxNQUFNUCxzREFBUUEsQ0FBQ1EsSUFBSSxHQUFHQyxRQUFRLENBQUM7SUFDNUM7SUFFQSxJQUFJSCxXQUFXLFFBQVE7UUFDbkIsTUFBTSxFQUFDSSxJQUFJLEVBQUVDLGNBQWMsRUFBRUMsVUFBVSxFQUFDLEdBQUdSLElBQUlTLElBQUk7UUFFbkQsdURBQXVEO1FBQ3ZELE1BQU1DLGNBQWMsTUFBTWQsc0RBQVFBLENBQUNlLE1BQU0sQ0FBQztZQUN0Q0w7WUFDQU0sUUFBUUwsa0JBQWtCQSxtQkFBbUIsS0FBS0EsaUJBQWlCO1lBQ25FQztRQUNKO1FBRUFQLElBQUlFLElBQUksQ0FBQ087SUFDYjtJQUVBLElBQUlSLFdBQVcsT0FBTztRQUNsQixNQUFNLEVBQUNJLElBQUksRUFBRUMsY0FBYyxFQUFFQyxVQUFVLEVBQUVLLEdBQUcsRUFBQyxHQUFHYixJQUFJUyxJQUFJO1FBRXhELHVEQUF1RDtRQUN2RCxNQUFNQyxjQUFjLE1BQU1kLHNEQUFRQSxDQUFDa0IsU0FBUyxDQUN4QztZQUFDRDtRQUFHLEdBQ0o7WUFDSVA7WUFDQU0sUUFBUUwsa0JBQWtCQSxtQkFBbUIsS0FBS0EsaUJBQWlCO1lBQ25FQztRQUNKO1FBR0pQLElBQUlFLElBQUksQ0FBQ087SUFDYjtJQUVBLElBQUlSLFdBQVcsVUFBVTtRQUNyQixNQUFNLEVBQUNXLEdBQUcsRUFBQyxHQUFHYixJQUFJZSxLQUFLO1FBQ3ZCLE1BQU1uQixzREFBUUEsQ0FBQ29CLFNBQVMsQ0FBQztZQUFDSDtRQUFHO1FBQzdCWixJQUFJRSxJQUFJLENBQUM7SUFDYjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHAvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy5qcz82OGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2F0ZWdvcnl9IGZyb20gXCJAL21vZGVscy9DYXRlZ29yeVwiO1xyXG5pbXBvcnQgbW9uZ29vc2VDb25uZWN0IGZyb20gXCJAL3BhZ2VzL2xpYi9tb25nb29zZVwiO1xyXG5pbXBvcnQge2lzQWRtaW5SZXF1ZXN0fSBmcm9tIFwiQC9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHttZXRob2R9ID0gcmVxO1xyXG4gICAgYXdhaXQgbW9uZ29vc2VDb25uZWN0KCk7XHJcbiAgICBhd2FpdCBpc0FkbWluUmVxdWVzdChyZXEscmVzKTtcclxuXHJcbiAgICBpZiAobWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgIHJlcy5qc29uKGF3YWl0IENhdGVnb3J5LmZpbmQoKS5wb3B1bGF0ZSgncGFyZW50JykpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLCBwYXJlbnRDYXRlZ29yeSwgcHJvcGVydGllc30gPSByZXEuYm9keTtcclxuXHJcbiAgICAgICAgLy8gSWYgcGFyZW50Q2F0ZWdvcnkgaXMgYW4gZW1wdHkgc3RyaW5nLCBzZXQgaXQgdG8gbnVsbFxyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5RG9jID0gYXdhaXQgQ2F0ZWdvcnkuY3JlYXRlKHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgcGFyZW50OiBwYXJlbnRDYXRlZ29yeSAmJiBwYXJlbnRDYXRlZ29yeSAhPT0gXCJcIiA/IHBhcmVudENhdGVnb3J5IDogbnVsbCxcclxuICAgICAgICAgICAgcHJvcGVydGllcyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmVzLmpzb24oY2F0ZWdvcnlEb2MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtZXRob2QgPT09ICdQVVQnKSB7XHJcbiAgICAgICAgY29uc3Qge25hbWUsIHBhcmVudENhdGVnb3J5LCBwcm9wZXJ0aWVzLCBfaWR9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgICAgIC8vIElmIHBhcmVudENhdGVnb3J5IGlzIGFuIGVtcHR5IHN0cmluZywgc2V0IGl0IHRvIG51bGxcclxuICAgICAgICBjb25zdCBjYXRlZ29yeURvYyA9IGF3YWl0IENhdGVnb3J5LnVwZGF0ZU9uZShcclxuICAgICAgICAgICAge19pZH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudENhdGVnb3J5ICYmIHBhcmVudENhdGVnb3J5ICE9PSBcIlwiID8gcGFyZW50Q2F0ZWdvcnkgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllcyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJlcy5qc29uKGNhdGVnb3J5RG9jKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWV0aG9kID09PSAnREVMRVRFJykge1xyXG4gICAgICAgIGNvbnN0IHtfaWR9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgICAgIGF3YWl0IENhdGVnb3J5LmRlbGV0ZU9uZSh7X2lkfSk7XHJcbiAgICAgICAgcmVzLmpzb24oJ29rJyk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJtb25nb29zZUNvbm5lY3QiLCJpc0FkbWluUmVxdWVzdCIsImhhbmRsZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImpzb24iLCJmaW5kIiwicG9wdWxhdGUiLCJuYW1lIiwicGFyZW50Q2F0ZWdvcnkiLCJwcm9wZXJ0aWVzIiwiYm9keSIsImNhdGVnb3J5RG9jIiwiY3JlYXRlIiwicGFyZW50IiwiX2lkIiwidXBkYXRlT25lIiwicXVlcnkiLCJkZWxldGVPbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/categories.js\n");

/***/ }),

/***/ "(api)/./pages/lib/mongodb.js":
/*!******************************!*\
  !*** ./pages/lib/mongodb.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable to preserve the MongoClient\n    // across hot reloads caused by saving files.\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUMxQixNQUFNLElBQUlDLE1BQU07QUFDcEI7QUFFQSxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUcsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJUCxJQUF5QixFQUFlO0lBQ3hDLHlFQUF5RTtJQUN6RSw2Q0FBNkM7SUFDN0MsSUFBSSxDQUFDUSxPQUFPQyxtQkFBbUIsRUFBRTtRQUM3QkgsU0FBUyxJQUFJUCxnREFBV0EsQ0FBQ0ssS0FBSUM7UUFDN0JHLE9BQU9DLG1CQUFtQixHQUFHSCxPQUFPSSxPQUFPO0lBQy9DO0lBQ0FILGdCQUFnQkMsT0FBT0MsbUJBQW1CO0FBQzlDLE9BQU8sRUFJTjtBQUVELGlFQUFlRixhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHAvLi9wYWdlcy9saWIvbW9uZ29kYi5qcz9kZGNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYidcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGFkZCB5b3VyIE1vbmdvIFVSSSB0byAuZW52LmxvY2FsJylcclxufVxyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcclxuY29uc3Qgb3B0aW9ucyA9IHt9XHJcblxyXG5sZXQgY2xpZW50O1xyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHRvIHByZXNlcnZlIHRoZSBNb25nb0NsaWVudFxyXG4gICAgLy8gYWNyb3NzIGhvdCByZWxvYWRzIGNhdXNlZCBieSBzYXZpbmcgZmlsZXMuXHJcbiAgICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICAgICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSxvcHRpb25zKVxyXG4gICAgICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxyXG4gICAgfVxyXG4gICAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlXHJcbn0gZWxzZSB7XHJcbiAgICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxyXG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSxvcHRpb25zKVxyXG4gICAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZVxyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsInVyaSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/lib/mongoose.js":
/*!*******************************!*\
  !*** ./pages/lib/mongoose.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mongooseConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction mongooseConnect() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    } else {\n        const uri = process.env.MONGODB_URI;\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9saWIvbW9uZ29vc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWpCLFNBQVNDO0lBQ3BCLElBQUdELDREQUFtQixDQUFDRyxVQUFVLEtBQUssR0FBRTtRQUNwQyxPQUFPSCwwREFBbUIsQ0FBQ0ksU0FBUztJQUN4QyxPQUFLO1FBQ0QsTUFBTUMsTUFBSUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO1FBQ2pDLE9BQU9SLHVEQUFnQixDQUFDSztJQUM1QjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHAvLi9wYWdlcy9saWIvbW9uZ29vc2UuanM/MGY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb25nb29zZUNvbm5lY3QoKXtcclxuICAgIGlmKG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSA9PT0gMSl7XHJcbiAgICAgICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3Rpb24uYXNQcm9taXNlKCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zdCB1cmk9cHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcbiAgICAgICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3QodXJpKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm1vbmdvb3NlQ29ubmVjdCIsImNvbm5lY3Rpb24iLCJyZWFkeVN0YXRlIiwiYXNQcm9taXNlIiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/lib/mongoose.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fcategories&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Ccategories.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();