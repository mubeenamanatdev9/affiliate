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
exports.id = "app/api/admin/analytics/route";
exports.ids = ["app/api/admin/analytics/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fanalytics%2Froute&page=%2Fapi%2Fadmin%2Fanalytics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fanalytics%2Froute.ts&appDir=%2Fhome%2Fmubeen%2Fprogramming%2Fprojects%2Faffiliate%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmubeen%2Fprogramming%2Fprojects%2Faffiliate&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fanalytics%2Froute&page=%2Fapi%2Fadmin%2Fanalytics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fanalytics%2Froute.ts&appDir=%2Fhome%2Fmubeen%2Fprogramming%2Fprojects%2Faffiliate%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmubeen%2Fprogramming%2Fprojects%2Faffiliate&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_mubeen_programming_projects_affiliate_app_api_admin_analytics_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/analytics/route.ts */ \"(rsc)/./app/api/admin/analytics/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/analytics/route\",\n        pathname: \"/api/admin/analytics\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/analytics/route\"\n    },\n    resolvedPagePath: \"/home/mubeen/programming/projects/affiliate/app/api/admin/analytics/route.ts\",\n    nextConfigOutput,\n    userland: _home_mubeen_programming_projects_affiliate_app_api_admin_analytics_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/admin/analytics/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRmFuYWx5dGljcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYWRtaW4lMkZhbmFseXRpY3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhZG1pbiUyRmFuYWx5dGljcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGbXViZWVuJTJGcHJvZ3JhbW1pbmclMkZwcm9qZWN0cyUyRmFmZmlsaWF0ZSUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRm11YmVlbiUyRnByb2dyYW1taW5nJTJGcHJvamVjdHMlMkZhZmZpbGlhdGUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzRCO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWZmaWxpYXRlLWNvdXBvbnMvPzBkMzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvbXViZWVuL3Byb2dyYW1taW5nL3Byb2plY3RzL2FmZmlsaWF0ZS9hcHAvYXBpL2FkbWluL2FuYWx5dGljcy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYWRtaW4vYW5hbHl0aWNzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWRtaW4vYW5hbHl0aWNzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hZG1pbi9hbmFseXRpY3Mvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9tdWJlZW4vcHJvZ3JhbW1pbmcvcHJvamVjdHMvYWZmaWxpYXRlL2FwcC9hcGkvYWRtaW4vYW5hbHl0aWNzL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hZG1pbi9hbmFseXRpY3Mvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fanalytics%2Froute&page=%2Fapi%2Fadmin%2Fanalytics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fanalytics%2Froute.ts&appDir=%2Fhome%2Fmubeen%2Fprogramming%2Fprojects%2Faffiliate%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmubeen%2Fprogramming%2Fprojects%2Faffiliate&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/admin/analytics/route.ts":
/*!******************************************!*\
  !*** ./app/api/admin/analytics/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n\n\n\n\nconst dynamic = \"force-dynamic\";\nasync function GET() {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session || session.user.role !== \"ADMIN\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const [totalClicks, totalConversions, confirmedConversions, clicksByDevice, recentActivity, topAffiliates] = await Promise.all([\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.click.count(),\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.conversion.count(),\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.conversion.aggregate({\n                where: {\n                    status: \"CONFIRMED\"\n                },\n                _sum: {\n                    orderValue: true\n                }\n            }),\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.click.groupBy({\n                by: [\n                    \"device\"\n                ],\n                _count: {\n                    id: true\n                }\n            }),\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.activityLog.findMany({\n                include: {\n                    user: true\n                },\n                orderBy: {\n                    createdAt: \"desc\"\n                },\n                take: 10\n            }),\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.affiliate.findMany({\n                orderBy: {\n                    totalRevenue: \"desc\"\n                },\n                take: 5\n            })\n        ]);\n        const conversionRate = totalClicks > 0 ? totalConversions / totalClicks * 100 : 0;\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            totalRevenue: confirmedConversions._sum.orderValue || 0,\n            totalClicks,\n            totalConversions,\n            conversionRate: parseFloat(conversionRate.toFixed(2)),\n            clicksByDevice: clicksByDevice.map((d)=>({\n                    device: d.device || \"Unknown\",\n                    count: d._count.id\n                })),\n            topAffiliates,\n            recentActivity\n        });\n    } catch (error) {\n        console.error(\"Failed to fetch analytics:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL2FuYWx5dGljcy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkM7QUFDTztBQUNUO0FBQ0g7QUFFL0IsTUFBTUksVUFBVSxnQkFBZ0I7QUFFaEMsZUFBZUM7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTUwsZ0VBQWdCQSxDQUFDQyxrREFBV0E7UUFDbEQsSUFBSSxDQUFDSSxXQUFXLFFBQVNDLElBQUksQ0FBU0MsSUFBSSxLQUFLLFNBQVM7WUFDdEQsT0FBT1IscURBQVlBLENBQUNTLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFlLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNwRTtRQUVBLE1BQU0sQ0FBQ0MsYUFBYUMsa0JBQWtCQyxzQkFBc0JDLGdCQUFnQkMsZ0JBQWdCQyxjQUFjLEdBQUcsTUFBTUMsUUFBUUMsR0FBRyxDQUFDO1lBQzdIaEIsK0NBQU1BLENBQUNpQixLQUFLLENBQUNDLEtBQUs7WUFDbEJsQiwrQ0FBTUEsQ0FBQ21CLFVBQVUsQ0FBQ0QsS0FBSztZQUN2QmxCLCtDQUFNQSxDQUFDbUIsVUFBVSxDQUFDQyxTQUFTLENBQUM7Z0JBQzFCQyxPQUFPO29CQUFFYixRQUFRO2dCQUFZO2dCQUM3QmMsTUFBTTtvQkFBRUMsWUFBWTtnQkFBSztZQUMzQjtZQUNBdkIsK0NBQU1BLENBQUNpQixLQUFLLENBQUNPLE9BQU8sQ0FBQztnQkFDbkJDLElBQUk7b0JBQUM7aUJBQVM7Z0JBQ2RDLFFBQVE7b0JBQUVDLElBQUk7Z0JBQUs7WUFDckI7WUFDQTNCLCtDQUFNQSxDQUFDNEIsV0FBVyxDQUFDQyxRQUFRLENBQUM7Z0JBQzFCQyxTQUFTO29CQUFFMUIsTUFBTTtnQkFBSztnQkFDdEIyQixTQUFTO29CQUFFQyxXQUFXO2dCQUFPO2dCQUM3QkMsTUFBTTtZQUNSO1lBQ0FqQywrQ0FBTUEsQ0FBQ2tDLFNBQVMsQ0FBQ0wsUUFBUSxDQUFDO2dCQUN4QkUsU0FBUztvQkFBRUksY0FBYztnQkFBTztnQkFDaENGLE1BQU07WUFDUjtTQUNEO1FBRUQsTUFBTUcsaUJBQWlCM0IsY0FBYyxJQUFJLG1CQUFvQkEsY0FBZSxNQUFNO1FBRWxGLE9BQU9aLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFDdkI2QixjQUFjeEIscUJBQXFCVyxJQUFJLENBQUNDLFVBQVUsSUFBSTtZQUN0RGQ7WUFDQUM7WUFDQTBCLGdCQUFnQkMsV0FBV0QsZUFBZUUsT0FBTyxDQUFDO1lBQ2xEMUIsZ0JBQWdCQSxlQUFlMkIsR0FBRyxDQUFDLENBQUNDLElBQU87b0JBQUVDLFFBQVFELEVBQUVDLE1BQU0sSUFBSTtvQkFBV3ZCLE9BQU9zQixFQUFFZCxNQUFNLENBQUNDLEVBQUU7Z0JBQUM7WUFDL0ZiO1lBQ0FEO1FBQ0Y7SUFDRixFQUFFLE9BQU9OLE9BQU87UUFDZG1DLFFBQVFuQyxLQUFLLENBQUMsOEJBQThCQTtRQUM1QyxPQUFPVixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBd0IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDN0U7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FmZmlsaWF0ZS1jb3Vwb25zLy4vYXBwL2FwaS9hZG1pbi9hbmFseXRpY3Mvcm91dGUudHM/ZjMxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL25leHRcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcblxuZXhwb3J0IGNvbnN0IGR5bmFtaWMgPSBcImZvcmNlLWR5bmFtaWNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gICAgaWYgKCFzZXNzaW9uIHx8IChzZXNzaW9uLnVzZXIgYXMgYW55KS5yb2xlICE9PSBcIkFETUlOXCIpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgW3RvdGFsQ2xpY2tzLCB0b3RhbENvbnZlcnNpb25zLCBjb25maXJtZWRDb252ZXJzaW9ucywgY2xpY2tzQnlEZXZpY2UsIHJlY2VudEFjdGl2aXR5LCB0b3BBZmZpbGlhdGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHByaXNtYS5jbGljay5jb3VudCgpLFxuICAgICAgcHJpc21hLmNvbnZlcnNpb24uY291bnQoKSxcbiAgICAgIHByaXNtYS5jb252ZXJzaW9uLmFnZ3JlZ2F0ZSh7XG4gICAgICAgIHdoZXJlOiB7IHN0YXR1czogXCJDT05GSVJNRURcIiB9LFxuICAgICAgICBfc3VtOiB7IG9yZGVyVmFsdWU6IHRydWUgfSxcbiAgICAgIH0pLFxuICAgICAgcHJpc21hLmNsaWNrLmdyb3VwQnkoe1xuICAgICAgICBieTogW1wiZGV2aWNlXCJdLFxuICAgICAgICBfY291bnQ6IHsgaWQ6IHRydWUgfSxcbiAgICAgIH0pLFxuICAgICAgcHJpc21hLmFjdGl2aXR5TG9nLmZpbmRNYW55KHtcbiAgICAgICAgaW5jbHVkZTogeyB1c2VyOiB0cnVlIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICB0YWtlOiAxMCxcbiAgICAgIH0pLFxuICAgICAgcHJpc21hLmFmZmlsaWF0ZS5maW5kTWFueSh7XG4gICAgICAgIG9yZGVyQnk6IHsgdG90YWxSZXZlbnVlOiBcImRlc2NcIiB9LFxuICAgICAgICB0YWtlOiA1LFxuICAgICAgfSksXG4gICAgXSk7XG5cbiAgICBjb25zdCBjb252ZXJzaW9uUmF0ZSA9IHRvdGFsQ2xpY2tzID4gMCA/ICh0b3RhbENvbnZlcnNpb25zIC8gdG90YWxDbGlja3MpICogMTAwIDogMDtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICB0b3RhbFJldmVudWU6IGNvbmZpcm1lZENvbnZlcnNpb25zLl9zdW0ub3JkZXJWYWx1ZSB8fCAwLFxuICAgICAgdG90YWxDbGlja3MsXG4gICAgICB0b3RhbENvbnZlcnNpb25zLFxuICAgICAgY29udmVyc2lvblJhdGU6IHBhcnNlRmxvYXQoY29udmVyc2lvblJhdGUudG9GaXhlZCgyKSksXG4gICAgICBjbGlja3NCeURldmljZTogY2xpY2tzQnlEZXZpY2UubWFwKChkKSA9PiAoeyBkZXZpY2U6IGQuZGV2aWNlIHx8IFwiVW5rbm93blwiLCBjb3VudDogZC5fY291bnQuaWQgfSkpLFxuICAgICAgdG9wQWZmaWxpYXRlcyxcbiAgICAgIHJlY2VudEFjdGl2aXR5LFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggYW5hbHl0aWNzOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCIgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsInByaXNtYSIsImR5bmFtaWMiLCJHRVQiLCJzZXNzaW9uIiwidXNlciIsInJvbGUiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJ0b3RhbENsaWNrcyIsInRvdGFsQ29udmVyc2lvbnMiLCJjb25maXJtZWRDb252ZXJzaW9ucyIsImNsaWNrc0J5RGV2aWNlIiwicmVjZW50QWN0aXZpdHkiLCJ0b3BBZmZpbGlhdGVzIiwiUHJvbWlzZSIsImFsbCIsImNsaWNrIiwiY291bnQiLCJjb252ZXJzaW9uIiwiYWdncmVnYXRlIiwid2hlcmUiLCJfc3VtIiwib3JkZXJWYWx1ZSIsImdyb3VwQnkiLCJieSIsIl9jb3VudCIsImlkIiwiYWN0aXZpdHlMb2ciLCJmaW5kTWFueSIsImluY2x1ZGUiLCJvcmRlckJ5IiwiY3JlYXRlZEF0IiwidGFrZSIsImFmZmlsaWF0ZSIsInRvdGFsUmV2ZW51ZSIsImNvbnZlcnNpb25SYXRlIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJtYXAiLCJkIiwiZGV2aWNlIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/analytics/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID || \"\",\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET || \"\"\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"jsmith@example.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) return null;\n                // Check database first (if available)\n                try {\n                    const user = await _prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.user.findUnique({\n                        where: {\n                            email: credentials.email\n                        }\n                    });\n                    if (user && user.password && bcryptjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"].compareSync(credentials.password, user.password)) {\n                        return {\n                            id: user.id,\n                            name: user.name,\n                            email: user.email,\n                            role: user.role,\n                            image: user.image\n                        };\n                    }\n                } catch (dbError) {\n                    // Database not available, fall through to mock users\n                    console.log(\"DB unavailable, using mock auth\");\n                }\n                // Fallback mock users for demo\n                if (credentials?.email === \"user@example.com\" && credentials?.password === \"password\") {\n                    return {\n                        id: \"1\",\n                        name: \"John Smith\",\n                        email: \"user@example.com\",\n                        role: \"USER\"\n                    };\n                }\n                if (credentials?.email === \"admin@dealfinder.com\" && credentials?.password === \"admin\") {\n                    return {\n                        id: \"2\",\n                        name: \"Admin User\",\n                        email: \"admin@dealfinder.com\",\n                        role: \"ADMIN\"\n                    };\n                }\n                return null;\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/login\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.role = user.role;\n                token.id = user.id;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session?.user) {\n                session.user.role = token.role;\n                session.user.id = token.id;\n            }\n            return session;\n        }\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDWTtBQUNWO0FBQ3RCO0FBQ0o7QUFFdkIsTUFBTUssY0FBK0I7SUFDMUNDLFdBQVc7UUFDVEosc0VBQWNBLENBQUM7WUFDYkssVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0IsSUFBSTtZQUMxQ0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0IsSUFBSTtRQUNwRDtRQUNBWCwyRUFBbUJBLENBQUM7WUFDbEJZLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtvQkFBU0MsYUFBYTtnQkFBcUI7Z0JBQzFFQyxVQUFVO29CQUFFSCxPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUcsV0FBVU4sV0FBVztnQkFDekIsSUFBSSxDQUFDQSxhQUFhQyxTQUFTLENBQUNELGFBQWFLLFVBQVUsT0FBTztnQkFFMUQsc0NBQXNDO2dCQUN0QyxJQUFJO29CQUNGLE1BQU1FLE9BQU8sTUFBTWxCLDJDQUFNQSxDQUFDa0IsSUFBSSxDQUFDQyxVQUFVLENBQUM7d0JBQ3hDQyxPQUFPOzRCQUFFUixPQUFPRCxZQUFZQyxLQUFLO3dCQUFDO29CQUNwQztvQkFFQSxJQUFJTSxRQUFRQSxLQUFLRixRQUFRLElBQUlmLDREQUFrQixDQUFDVSxZQUFZSyxRQUFRLEVBQUVFLEtBQUtGLFFBQVEsR0FBRzt3QkFDcEYsT0FBTzs0QkFBRU0sSUFBSUosS0FBS0ksRUFBRTs0QkFBRVosTUFBTVEsS0FBS1IsSUFBSTs0QkFBRUUsT0FBT00sS0FBS04sS0FBSzs0QkFBRVcsTUFBTUwsS0FBS0ssSUFBSTs0QkFBRUMsT0FBT04sS0FBS00sS0FBSzt3QkFBQztvQkFDL0Y7Z0JBQ0YsRUFBRSxPQUFPQyxTQUFTO29CQUNoQixxREFBcUQ7b0JBQ3JEQyxRQUFRQyxHQUFHLENBQUM7Z0JBQ2Q7Z0JBRUEsK0JBQStCO2dCQUMvQixJQUFJaEIsYUFBYUMsVUFBVSxzQkFBc0JELGFBQWFLLGFBQWEsWUFBWTtvQkFDckYsT0FBTzt3QkFBRU0sSUFBSTt3QkFBS1osTUFBTTt3QkFBY0UsT0FBTzt3QkFBb0JXLE1BQU07b0JBQU87Z0JBQ2hGO2dCQUNBLElBQUlaLGFBQWFDLFVBQVUsMEJBQTBCRCxhQUFhSyxhQUFhLFNBQVM7b0JBQ3RGLE9BQU87d0JBQUVNLElBQUk7d0JBQUtaLE1BQU07d0JBQWNFLE9BQU87d0JBQXdCVyxNQUFNO29CQUFRO2dCQUNyRjtnQkFDQSxPQUFPO1lBQ1Q7UUFDRjtLQUNEO0lBQ0RLLE9BQU87UUFDTEMsUUFBUTtJQUNWO0lBQ0FDLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRWQsSUFBSSxFQUFFO1lBQ3ZCLElBQUlBLE1BQU07Z0JBQ1JjLE1BQU1ULElBQUksR0FBRyxLQUFjQSxJQUFJO2dCQUMvQlMsTUFBTVYsRUFBRSxHQUFHSixLQUFLSSxFQUFFO1lBQ3BCO1lBQ0EsT0FBT1U7UUFDVDtRQUNBLE1BQU1DLFNBQVEsRUFBRUEsT0FBTyxFQUFFRCxLQUFLLEVBQUU7WUFDOUIsSUFBSUMsU0FBU2YsTUFBTTtnQkFDaEJlLFFBQVFmLElBQUksQ0FBU0ssSUFBSSxHQUFHUyxNQUFNVCxJQUFJO2dCQUN0Q1UsUUFBUWYsSUFBSSxDQUFTSSxFQUFFLEdBQUdVLE1BQU1WLEVBQUU7WUFDckM7WUFDQSxPQUFPVztRQUNUO0lBQ0Y7SUFDQUEsU0FBUztRQUNQQyxVQUFVO0lBQ1o7SUFDQUMsUUFBUTlCLFFBQVFDLEdBQUcsQ0FBQzhCLGVBQWU7QUFDckMsRUFBRTtBQUVGLE1BQU1DLFVBQVV4QyxnREFBUUEsQ0FBQ0s7QUFFa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZmZpbGlhdGUtY291cG9ucy8uL2xpYi9hdXRoLnRzP2JmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoLCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi9wcmlzbWFcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCB8fCBcIlwiLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCB8fCBcIlwiLFxuICAgIH0pLFxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiLCBwbGFjZWhvbGRlcjogXCJqc21pdGhAZXhhbXBsZS5jb21cIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAvLyBDaGVjayBkYXRhYmFzZSBmaXJzdCAoaWYgYXZhaWxhYmxlKVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9LFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKHVzZXIgJiYgdXNlci5wYXNzd29yZCAmJiBiY3J5cHQuY29tcGFyZVN5bmMoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICByZXR1cm4geyBpZDogdXNlci5pZCwgbmFtZTogdXNlci5uYW1lLCBlbWFpbDogdXNlci5lbWFpbCwgcm9sZTogdXNlci5yb2xlLCBpbWFnZTogdXNlci5pbWFnZSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZGJFcnJvcikge1xuICAgICAgICAgIC8vIERhdGFiYXNlIG5vdCBhdmFpbGFibGUsIGZhbGwgdGhyb3VnaCB0byBtb2NrIHVzZXJzXG4gICAgICAgICAgY29uc29sZS5sb2coXCJEQiB1bmF2YWlsYWJsZSwgdXNpbmcgbW9jayBhdXRoXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmFsbGJhY2sgbW9jayB1c2VycyBmb3IgZGVtb1xuICAgICAgICBpZiAoY3JlZGVudGlhbHM/LmVtYWlsID09PSBcInVzZXJAZXhhbXBsZS5jb21cIiAmJiBjcmVkZW50aWFscz8ucGFzc3dvcmQgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICAgIHJldHVybiB7IGlkOiBcIjFcIiwgbmFtZTogXCJKb2huIFNtaXRoXCIsIGVtYWlsOiBcInVzZXJAZXhhbXBsZS5jb21cIiwgcm9sZTogXCJVU0VSXCIgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3JlZGVudGlhbHM/LmVtYWlsID09PSBcImFkbWluQGRlYWxmaW5kZXIuY29tXCIgJiYgY3JlZGVudGlhbHM/LnBhc3N3b3JkID09PSBcImFkbWluXCIpIHtcbiAgICAgICAgICByZXR1cm4geyBpZDogXCIyXCIsIG5hbWU6IFwiQWRtaW4gVXNlclwiLCBlbWFpbDogXCJhZG1pbkBkZWFsZmluZGVyLmNvbVwiLCByb2xlOiBcIkFETUlOXCIgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9sb2dpbicsXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLnJvbGUgPSAodXNlciBhcyBhbnkpLnJvbGU7XG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAoc2Vzc2lvbj8udXNlcikge1xuICAgICAgICAoc2Vzc2lvbi51c2VyIGFzIGFueSkucm9sZSA9IHRva2VuLnJvbGU7XG4gICAgICAgIChzZXNzaW9uLnVzZXIgYXMgYW55KS5pZCA9IHRva2VuLmlkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfVxuICB9LFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXG4gIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxufTtcblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcblxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIkdvb2dsZVByb3ZpZGVyIiwicHJpc21hIiwiYmNyeXB0IiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiY29tcGFyZVN5bmMiLCJpZCIsInJvbGUiLCJpbWFnZSIsImRiRXJyb3IiLCJjb25zb2xlIiwibG9nIiwicGFnZXMiLCJzaWduSW4iLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInNlc3Npb24iLCJzdHJhdGVneSIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isDbAvailable: () => (/* binding */ isDbAvailable),\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n// Helper to check if DB is reachable\nasync function isDbAvailable() {\n    try {\n        await prisma.$queryRaw`SELECT 1`;\n        return true;\n    } catch  {\n        return false;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsa0JBQWtCQztBQUVqQixNQUFNQyxTQUFTRixnQkFBZ0JFLE1BQU0sSUFBSSxJQUFJSCx3REFBWUEsR0FBRztBQUVuRSxJQUFJSSxJQUFxQyxFQUFFSCxnQkFBZ0JFLE1BQU0sR0FBR0E7QUFFcEUscUNBQXFDO0FBQzlCLGVBQWVFO0lBQ3BCLElBQUk7UUFDRixNQUFNRixPQUFPRyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ2hDLE9BQU87SUFDVCxFQUFFLE9BQU07UUFDTixPQUFPO0lBQ1Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FmZmlsaWF0ZS1jb3Vwb25zLy4vbGliL3ByaXNtYS50cz85ODIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWwgYXMgdW5rbm93biBhcyB7IHByaXNtYTogUHJpc21hQ2xpZW50IH07XG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPSBnbG9iYWxGb3JQcmlzbWEucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTtcblxuLy8gSGVscGVyIHRvIGNoZWNrIGlmIERCIGlzIHJlYWNoYWJsZVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlzRGJBdmFpbGFibGUoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLiRxdWVyeVJhd2BTRUxFQ1QgMWA7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbCIsInByaXNtYSIsInByb2Nlc3MiLCJpc0RiQXZhaWxhYmxlIiwiJHF1ZXJ5UmF3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fanalytics%2Froute&page=%2Fapi%2Fadmin%2Fanalytics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fanalytics%2Froute.ts&appDir=%2Fhome%2Fmubeen%2Fprogramming%2Fprojects%2Faffiliate%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmubeen%2Fprogramming%2Fprojects%2Faffiliate&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();