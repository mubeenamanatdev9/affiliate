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
exports.id = "app/api/admin/products/route";
exports.ids = ["app/api/admin/products/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fproducts%2Froute&page=%2Fapi%2Fadmin%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fproducts%2Froute.ts&appDir=%2Fhome%2Fmubeen%2Fprogramming%2Fprojects%2Faffiliate%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmubeen%2Fprogramming%2Fprojects%2Faffiliate&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fproducts%2Froute&page=%2Fapi%2Fadmin%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fproducts%2Froute.ts&appDir=%2Fhome%2Fmubeen%2Fprogramming%2Fprojects%2Faffiliate%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmubeen%2Fprogramming%2Fprojects%2Faffiliate&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_mubeen_programming_projects_affiliate_app_api_admin_products_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/products/route.ts */ \"(rsc)/./app/api/admin/products/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/products/route\",\n        pathname: \"/api/admin/products\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/products/route\"\n    },\n    resolvedPagePath: \"/home/mubeen/programming/projects/affiliate/app/api/admin/products/route.ts\",\n    nextConfigOutput,\n    userland: _home_mubeen_programming_projects_affiliate_app_api_admin_products_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/admin/products/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRnByb2R1Y3RzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhZG1pbiUyRnByb2R1Y3RzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWRtaW4lMkZwcm9kdWN0cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGbXViZWVuJTJGcHJvZ3JhbW1pbmclMkZwcm9qZWN0cyUyRmFmZmlsaWF0ZSUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRm11YmVlbiUyRnByb2dyYW1taW5nJTJGcHJvamVjdHMlMkZhZmZpbGlhdGUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzJCO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWZmaWxpYXRlLWNvdXBvbnMvPzBiOWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvbXViZWVuL3Byb2dyYW1taW5nL3Byb2plY3RzL2FmZmlsaWF0ZS9hcHAvYXBpL2FkbWluL3Byb2R1Y3RzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hZG1pbi9wcm9kdWN0cy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2FkbWluL3Byb2R1Y3RzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hZG1pbi9wcm9kdWN0cy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL211YmVlbi9wcm9ncmFtbWluZy9wcm9qZWN0cy9hZmZpbGlhdGUvYXBwL2FwaS9hZG1pbi9wcm9kdWN0cy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYWRtaW4vcHJvZHVjdHMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fproducts%2Froute&page=%2Fapi%2Fadmin%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fproducts%2Froute.ts&appDir=%2Fhome%2Fmubeen%2Fprogramming%2Fprojects%2Faffiliate%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmubeen%2Fprogramming%2Fprojects%2Faffiliate&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/admin/products/route.ts":
/*!*****************************************!*\
  !*** ./app/api/admin/products/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n\n\n\n\nconst dynamic = \"force-dynamic\";\nasync function GET(req) {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session || session.user.role !== \"ADMIN\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const { searchParams } = new URL(req.url);\n        const search = searchParams.get(\"search\") || \"\";\n        const storeId = searchParams.get(\"storeId\") || \"\";\n        const where = {};\n        if (search) {\n            where.name = {\n                contains: search,\n                mode: \"insensitive\"\n            };\n        }\n        if (storeId) {\n            where.storeId = storeId;\n        }\n        const products = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.product.findMany({\n            where,\n            include: {\n                store: true,\n                category: true,\n                affiliate: true\n            },\n            orderBy: {\n                createdAt: \"desc\"\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            products\n        });\n    } catch (error) {\n        console.error(\"Failed to fetch products:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session || session.user.role !== \"ADMIN\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const body = await req.json();\n        const { name, slug, description, originalPrice, salePrice, currency, storeId, categoryId, affiliateId, image } = body;\n        if (!name || !slug || !storeId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Name, slug, and store are required\"\n            }, {\n                status: 400\n            });\n        }\n        const product = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.product.create({\n            data: {\n                name,\n                slug,\n                description,\n                originalPrice: originalPrice ? parseFloat(originalPrice) : null,\n                salePrice: salePrice ? parseFloat(salePrice) : null,\n                currency: currency || \"USD\",\n                storeId,\n                categoryId: categoryId || null,\n                affiliateId: affiliateId || null,\n                image\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            product\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"Failed to create product:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL3Byb2R1Y3RzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0Q7QUFDTjtBQUNUO0FBQ0g7QUFFL0IsTUFBTUksVUFBVSxnQkFBZ0I7QUFFaEMsZUFBZUMsSUFBSUMsR0FBZ0I7SUFDeEMsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTU4sZ0VBQWdCQSxDQUFDQyxrREFBV0E7UUFDbEQsSUFBSSxDQUFDSyxXQUFXLFFBQVNDLElBQUksQ0FBU0MsSUFBSSxLQUFLLFNBQVM7WUFDdEQsT0FBT1QscURBQVlBLENBQUNVLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFlLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNwRTtRQUVBLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUcsSUFBSUMsSUFBSVIsSUFBSVMsR0FBRztRQUN4QyxNQUFNQyxTQUFTSCxhQUFhSSxHQUFHLENBQUMsYUFBYTtRQUM3QyxNQUFNQyxVQUFVTCxhQUFhSSxHQUFHLENBQUMsY0FBYztRQUUvQyxNQUFNRSxRQUFhLENBQUM7UUFDcEIsSUFBSUgsUUFBUTtZQUNWRyxNQUFNQyxJQUFJLEdBQUc7Z0JBQUVDLFVBQVVMO2dCQUFRTSxNQUFNO1lBQWM7UUFDdkQ7UUFDQSxJQUFJSixTQUFTO1lBQ1hDLE1BQU1ELE9BQU8sR0FBR0E7UUFDbEI7UUFFQSxNQUFNSyxXQUFXLE1BQU1wQiwrQ0FBTUEsQ0FBQ3FCLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDO1lBQzdDTjtZQUNBTyxTQUFTO2dCQUFFQyxPQUFPO2dCQUFNQyxVQUFVO2dCQUFNQyxXQUFXO1lBQUs7WUFDeERDLFNBQVM7Z0JBQUVDLFdBQVc7WUFBTztRQUMvQjtRQUVBLE9BQU8vQixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVhO1FBQVM7SUFDdEMsRUFBRSxPQUFPWixPQUFPO1FBQ2RxQixRQUFRckIsS0FBSyxDQUFDLDZCQUE2QkE7UUFDM0MsT0FBT1gscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzdFO0FBQ0Y7QUFFTyxlQUFlcUIsS0FBSzNCLEdBQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNQyxVQUFVLE1BQU1OLGdFQUFnQkEsQ0FBQ0Msa0RBQVdBO1FBQ2xELElBQUksQ0FBQ0ssV0FBVyxRQUFTQyxJQUFJLENBQVNDLElBQUksS0FBSyxTQUFTO1lBQ3RELE9BQU9ULHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBZSxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDcEU7UUFFQSxNQUFNc0IsT0FBTyxNQUFNNUIsSUFBSUksSUFBSTtRQUMzQixNQUFNLEVBQUVVLElBQUksRUFBRWUsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLGFBQWEsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUVyQixPQUFPLEVBQUVzQixVQUFVLEVBQUVDLFdBQVcsRUFBRUMsS0FBSyxFQUFFLEdBQUdSO1FBRWpILElBQUksQ0FBQ2QsUUFBUSxDQUFDZSxRQUFRLENBQUNqQixTQUFTO1lBQzlCLE9BQU9sQixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXFDLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUMxRjtRQUVBLE1BQU1ZLFVBQVUsTUFBTXJCLCtDQUFNQSxDQUFDcUIsT0FBTyxDQUFDbUIsTUFBTSxDQUFDO1lBQzFDQyxNQUFNO2dCQUNKeEI7Z0JBQ0FlO2dCQUNBQztnQkFDQUMsZUFBZUEsZ0JBQWdCUSxXQUFXUixpQkFBaUI7Z0JBQzNEQyxXQUFXQSxZQUFZTyxXQUFXUCxhQUFhO2dCQUMvQ0MsVUFBVUEsWUFBWTtnQkFDdEJyQjtnQkFDQXNCLFlBQVlBLGNBQWM7Z0JBQzFCQyxhQUFhQSxlQUFlO2dCQUM1QkM7WUFDRjtRQUNGO1FBRUEsT0FBTzFDLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRWM7UUFBUSxHQUFHO1lBQUVaLFFBQVE7UUFBSTtJQUN0RCxFQUFFLE9BQU9ELE9BQU87UUFDZHFCLFFBQVFyQixLQUFLLENBQUMsNkJBQTZCQTtRQUMzQyxPQUFPWCxxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBd0IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDN0U7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FmZmlsaWF0ZS1jb3Vwb25zLy4vYXBwL2FwaS9hZG1pbi9wcm9kdWN0cy9yb3V0ZS50cz82ZDg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL25leHRcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcblxuZXhwb3J0IGNvbnN0IGR5bmFtaWMgPSBcImZvcmNlLWR5bmFtaWNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuICAgIGlmICghc2Vzc2lvbiB8fCAoc2Vzc2lvbi51c2VyIGFzIGFueSkucm9sZSAhPT0gXCJBRE1JTlwiKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9LCB7IHN0YXR1czogNDAxIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcS51cmwpO1xuICAgIGNvbnN0IHNlYXJjaCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJzZWFyY2hcIikgfHwgXCJcIjtcbiAgICBjb25zdCBzdG9yZUlkID0gc2VhcmNoUGFyYW1zLmdldChcInN0b3JlSWRcIikgfHwgXCJcIjtcblxuICAgIGNvbnN0IHdoZXJlOiBhbnkgPSB7fTtcbiAgICBpZiAoc2VhcmNoKSB7XG4gICAgICB3aGVyZS5uYW1lID0geyBjb250YWluczogc2VhcmNoLCBtb2RlOiBcImluc2Vuc2l0aXZlXCIgfTtcbiAgICB9XG4gICAgaWYgKHN0b3JlSWQpIHtcbiAgICAgIHdoZXJlLnN0b3JlSWQgPSBzdG9yZUlkO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgcHJpc21hLnByb2R1Y3QuZmluZE1hbnkoe1xuICAgICAgd2hlcmUsXG4gICAgICBpbmNsdWRlOiB7IHN0b3JlOiB0cnVlLCBjYXRlZ29yeTogdHJ1ZSwgYWZmaWxpYXRlOiB0cnVlIH0sXG4gICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHByb2R1Y3RzIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggcHJvZHVjdHM6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gICAgaWYgKCFzZXNzaW9uIHx8IChzZXNzaW9uLnVzZXIgYXMgYW55KS5yb2xlICE9PSBcIkFETUlOXCIpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgY29uc3QgeyBuYW1lLCBzbHVnLCBkZXNjcmlwdGlvbiwgb3JpZ2luYWxQcmljZSwgc2FsZVByaWNlLCBjdXJyZW5jeSwgc3RvcmVJZCwgY2F0ZWdvcnlJZCwgYWZmaWxpYXRlSWQsIGltYWdlIH0gPSBib2R5O1xuXG4gICAgaWYgKCFuYW1lIHx8ICFzbHVnIHx8ICFzdG9yZUlkKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJOYW1lLCBzbHVnLCBhbmQgc3RvcmUgYXJlIHJlcXVpcmVkXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgcHJpc21hLnByb2R1Y3QuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc2x1ZyxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIG9yaWdpbmFsUHJpY2U6IG9yaWdpbmFsUHJpY2UgPyBwYXJzZUZsb2F0KG9yaWdpbmFsUHJpY2UpIDogbnVsbCxcbiAgICAgICAgc2FsZVByaWNlOiBzYWxlUHJpY2UgPyBwYXJzZUZsb2F0KHNhbGVQcmljZSkgOiBudWxsLFxuICAgICAgICBjdXJyZW5jeTogY3VycmVuY3kgfHwgXCJVU0RcIixcbiAgICAgICAgc3RvcmVJZCxcbiAgICAgICAgY2F0ZWdvcnlJZDogY2F0ZWdvcnlJZCB8fCBudWxsLFxuICAgICAgICBhZmZpbGlhdGVJZDogYWZmaWxpYXRlSWQgfHwgbnVsbCxcbiAgICAgICAgaW1hZ2UsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgcHJvZHVjdCB9LCB7IHN0YXR1czogMjAxIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHByb2R1Y3Q6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwicHJpc21hIiwiZHluYW1pYyIsIkdFVCIsInJlcSIsInNlc3Npb24iLCJ1c2VyIiwicm9sZSIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsInNlYXJjaCIsImdldCIsInN0b3JlSWQiLCJ3aGVyZSIsIm5hbWUiLCJjb250YWlucyIsIm1vZGUiLCJwcm9kdWN0cyIsInByb2R1Y3QiLCJmaW5kTWFueSIsImluY2x1ZGUiLCJzdG9yZSIsImNhdGVnb3J5IiwiYWZmaWxpYXRlIiwib3JkZXJCeSIsImNyZWF0ZWRBdCIsImNvbnNvbGUiLCJQT1NUIiwiYm9keSIsInNsdWciLCJkZXNjcmlwdGlvbiIsIm9yaWdpbmFsUHJpY2UiLCJzYWxlUHJpY2UiLCJjdXJyZW5jeSIsImNhdGVnb3J5SWQiLCJhZmZpbGlhdGVJZCIsImltYWdlIiwiY3JlYXRlIiwiZGF0YSIsInBhcnNlRmxvYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/products/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fproducts%2Froute&page=%2Fapi%2Fadmin%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fproducts%2Froute.ts&appDir=%2Fhome%2Fmubeen%2Fprogramming%2Fprojects%2Faffiliate%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmubeen%2Fprogramming%2Fprojects%2Faffiliate&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();