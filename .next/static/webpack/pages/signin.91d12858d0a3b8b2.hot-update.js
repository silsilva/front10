"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./lib/hooks.ts":
/*!**********************!*\
  !*** ./lib/hooks.ts ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: function() { return /* binding */ api; },\n/* harmony export */   getAccessToken: function() { return /* binding */ getAccessToken; },\n/* harmony export */   getProductDetails: function() { return /* binding */ getProductDetails; },\n/* harmony export */   getProductListgetProductList: function() { return /* binding */ getProductListgetProductList; },\n/* harmony export */   placeOrder: function() { return /* binding */ placeOrder; },\n/* harmony export */   sendVerificationEmail: function() { return /* binding */ sendVerificationEmail; },\n/* harmony export */   updateProfileInformation: function() { return /* binding */ updateProfileInformation; },\n/* harmony export */   useGetStorageData: function() { return /* binding */ useGetStorageData; },\n/* harmony export */   useGetUserProfileInformation: function() { return /* binding */ useGetUserProfileInformation; },\n/* harmony export */   useIsAuthenticated: function() { return /* binding */ useIsAuthenticated; },\n/* harmony export */   useLoadingIndicator: function() { return /* binding */ useLoadingIndicator; },\n/* harmony export */   useLogout: function() { return /* binding */ useLogout; },\n/* harmony export */   useSearch: function() { return /* binding */ useSearch; },\n/* harmony export */   useToggleSearchBar: function() { return /* binding */ useToggleSearchBar; }\n/* harmony export */ });\n/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr/immutable */ \"./node_modules/swr/dist/immutable/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst BASE_URL = \"http://localhost:3001/api\";\n//const BASE_URL = \"https://back09.vercel.app/api\";\nasync function api(input, options) {\n    var _newOptions;\n    const url = BASE_URL + input;\n    const newOptions = options || {};\n    (_newOptions = newOptions).headers || (_newOptions.headers = {});\n    newOptions.headers[\"content-type\"] = \"application/json\";\n    const token = getSavedToken();\n    if (token) {\n        newOptions.headers.authorization = \"Bearer \".concat(token);\n    }\n    if (newOptions.body) {\n        newOptions.body = JSON.stringify(newOptions.body);\n    }\n    const res = await fetch(url, newOptions);\n    const data = await res.json();\n    if (res.status >= 200 && res.status < 300) {\n        return data;\n    } else {\n        throw {\n            ...data,\n            status: res.status\n        };\n    }\n}\nasync function sendVerificationEmail(email) {\n    const res = await api(\"/auth\", {\n        method: \"post\",\n        body: {\n            email\n        }\n    });\n    return res;\n}\nfunction saveUserInformation(token, email) {\n    localStorage.setItem(\"user_information\", JSON.stringify({\n        token,\n        email\n    }));\n}\nasync function getAccessToken(email, code) {\n    try {\n        const res = await api(\"/auth/token\", {\n            method: \"post\",\n            body: {\n                email,\n                code\n            }\n        });\n        saveUserInformation(res.token, email);\n        console.log(res.token, \"TOKEN API\");\n        console.log(res, \"RES API\");\n        return res;\n    } catch (err) {\n        return err;\n    }\n}\nfunction getSavedToken() {\n    if ( true && window.localStorage) {\n        const userInformation = localStorage.getItem(\"user_information\");\n        if (userInformation) {\n            const parsedUserInformation = JSON.parse(userInformation);\n            return parsedUserInformation.token;\n        }\n    } else {\n        return null;\n    }\n}\nasync function getProductListgetProductList() {\n    const data = await api(\"/search?limit=3&offset=10\");\n    return data;\n}\nasync function getProductDetails(productId) {\n    const data = await api(\"/products/\".concat(productId));\n    return data;\n}\nasync function placeOrder(productId) {\n    const data = await api(\"/order?productId=\".concat(productId), {\n        method: \"post\",\n        body: {\n            qty: 1\n        }\n    });\n    return data;\n}\nasync function updateProfileInformation(name, address, phoneNumber) {\n    const data = await api(\"/me\", {\n        method: \"PATCH\",\n        body: {\n            name,\n            address,\n            phoneNumber\n        }\n    });\n    return data;\n}\nfunction useSearch() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const product = router.query.q;\n    var _router_query_limit;\n    const limit = (_router_query_limit = router.query.limit) !== null && _router_query_limit !== void 0 ? _router_query_limit : 3;\n    var _router_query_offset;\n    const offset = (_router_query_offset = router.query.offset) !== null && _router_query_offset !== void 0 ? _router_query_offset : 0;\n    const { data, mutate, isLoading } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/search?q=\".concat(product, \"&limit=\").concat(limit, \"&offset=\").concat(offset), api, {\n        revalidateOnFocus: false,\n        revalidateOnReconnect: true\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        mutate(\"/search?q=\".concat(product, \"&limit=\").concat(limit, \"&offset=\").concat(offset));\n    }, [\n        router.query\n    ]);\n    return {\n        data,\n        isLoading\n    };\n}\nfunction useGetStorageData(key) {\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const data = localStorage.getItem(key);\n        if (data) {\n            setData(JSON.parse(data));\n        }\n    }, []);\n    return data;\n}\nfunction useIsAuthenticated() {\n    const userInformation = useGetStorageData(\"user_information\");\n    return userInformation;\n}\nfunction useLogout() {\n    const [logOut, setLogOut] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (logOut) {\n            setLogOut(false);\n            localStorage.removeItem(\"user_information\");\n            if (router.pathname !== \"/\") {\n                router.push(\"/\");\n            } else {\n                router.reload();\n            }\n        }\n    }, [\n        logOut\n    ]);\n    return setLogOut;\n}\nfunction useToggleSearchBar() {\n    const [searchBarStatus, setSearchBarStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const pathname = router.pathname;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (pathname !== \"/\" && pathname !== \"/signin\" && pathname !== \"/profile\") {\n            setSearchBarStatus(true);\n        }\n    }, [\n        pathname\n    ]);\n    function updateSearchBarStatus(newStatus) {\n        if (pathname !== \"/\" && pathname !== \"/signin\" && pathname !== \"/profile\") {\n            setSearchBarStatus(newStatus);\n        }\n    }\n    return {\n        searchBarStatus,\n        updateSearchBarStatus\n    };\n}\nfunction useLoadingIndicator() {\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function showLoader() {\n        setLoader(true);\n    }\n    function hideLoader() {\n        setLoader(false);\n    }\n    return {\n        loader,\n        showLoader,\n        hideLoader\n    };\n}\nfunction useGetUserProfileInformation() {\n    const { data } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/me\", api, {\n        revalidateOnFocus: false,\n        revalidateOnReconnect: true\n    });\n    return data;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaG9va3MudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNBO0FBQ0o7QUFDeEMsTUFBTUksV0FBVztBQUNqQixtREFBbUQ7QUFFNUMsZUFBZUMsSUFBSUMsS0FBa0IsRUFBRUMsT0FBYTtRQUt6REM7SUFKQSxNQUFNQyxNQUFNTCxXQUFXRTtJQUV2QixNQUFNRSxhQUFhRCxXQUFXLENBQUM7SUFFL0JDLENBQUFBLGNBQUFBLFlBQVdFLFlBQVhGLFlBQVdFLFVBQVksQ0FBQztJQUV4QkYsV0FBV0UsT0FBTyxDQUFDLGVBQWUsR0FBRztJQUNyQyxNQUFNQyxRQUFRQztJQUVkLElBQUlELE9BQU87UUFDVEgsV0FBV0UsUUFBUUcsZ0JBQWdCLFVBQWdCLE9BQU5GO0lBQy9DO0lBRUEsSUFBSUgsV0FBV00sTUFBTTtRQUNuQk4sV0FBV00sT0FBT0MsS0FBS0MsVUFBVVIsV0FBV007SUFDOUM7SUFFQSxNQUFNRyxNQUFNLE1BQU1DLE1BQU1ULEtBQUtEO0lBQzdCLE1BQU1XLE9BQU8sTUFBTUYsSUFBSUc7SUFFdkIsSUFBSUgsSUFBSUksVUFBVSxPQUFPSixJQUFJSSxTQUFTLEtBQUs7UUFDekMsT0FBT0Y7SUFDVCxPQUFPO1FBQ0wsTUFBTTtZQUNKLEdBQUdBLElBQUk7WUFDUEUsUUFBUUosSUFBSUk7UUFDZDtJQUNGO0FBQ0Y7QUFFTyxlQUFlQyxzQkFBc0JDLEtBQWE7SUFDdkQsTUFBTU4sTUFBTSxNQUFNWixJQUFJLFNBQVM7UUFBRW1CLFFBQVE7UUFBUVYsTUFBTTtZQUFFUztRQUFNO0lBQUU7SUFFakUsT0FBT047QUFDVDtBQUVBLFNBQVNRLG9CQUFvQmQsS0FBYSxFQUFFWSxLQUFhO0lBQ3ZERyxhQUFhQyxRQUFRLG9CQUFvQlosS0FBS0MsVUFBVTtRQUFFTDtRQUFPWTtJQUFNO0FBQ3pFO0FBRU8sZUFBZUssZUFBZUwsS0FBYSxFQUFFTSxJQUFZO0lBQzlELElBQUk7UUFDRixNQUFNWixNQUFNLE1BQU1aLElBQUksZUFBZTtZQUNuQ21CLFFBQVE7WUFDUlYsTUFBTTtnQkFBRVM7Z0JBQU9NO1lBQUs7UUFDdEI7UUFDQUosb0JBQW9CUixJQUFJTixPQUFPWTtRQUMvQk8sUUFBUUMsSUFBSWQsSUFBSU4sT0FBTztRQUN2Qm1CLFFBQVFDLElBQUlkLEtBQUs7UUFDakIsT0FBT0E7SUFDVCxFQUFFLE9BQU9lLEtBQUs7UUFDWixPQUFPQTtJQUNUO0FBQ0Y7QUFFQSxTQUFTcEI7SUFDUCxJQUFJLEtBQTZCLElBQUlxQixPQUFPUCxjQUFjO1FBQ3hELE1BQU1RLGtCQUF1QlIsYUFBYVMsUUFBUTtRQUNsRCxJQUFJRCxpQkFBaUI7WUFDbkIsTUFBTUUsd0JBQXdCckIsS0FBS3NCLE1BQU1IO1lBQ3pDLE9BQU9FLHNCQUFzQnpCO1FBQy9CO0lBQ0YsT0FBTztRQUNMLE9BQU87SUFDVDtBQUNGO0FBRU8sZUFBZTJCO0lBQ3BCLE1BQU1uQixPQUFPLE1BQU1kLElBQUk7SUFFdkIsT0FBT2M7QUFDVDtBQUVPLGVBQWVvQixrQkFBa0JDLFNBQWlCO0lBQ3ZELE1BQU1yQixPQUFPLE1BQU1kLElBQUksYUFBdUIsT0FBVm1DO0lBQ3BDLE9BQU9yQjtBQUNUO0FBRU8sZUFBZXNCLFdBQVdELFNBQWlCO0lBQ2hELE1BQU1yQixPQUFPLE1BQU1kLElBQUksb0JBQThCLE9BQVZtQyxZQUFhO1FBQ3REaEIsUUFBUTtRQUNSVixNQUFNO1lBQUU0QixLQUFLO1FBQUU7SUFDakI7SUFFQSxPQUFPdkI7QUFDVDtBQUVPLGVBQWV3Qix5QkFDcEJDLElBQVksRUFDWkMsT0FBZSxFQUNmQyxXQUFtQjtJQUVuQixNQUFNM0IsT0FBTyxNQUFNZCxJQUFJLE9BQU87UUFDNUJtQixRQUFRO1FBQ1JWLE1BQU07WUFBRThCO1lBQU1DO1lBQVNDO1FBQVk7SUFDckM7SUFFQSxPQUFPM0I7QUFDVDtBQUNPLFNBQVM0QjtJQUNkLE1BQU1DLFNBQVM3QyxzREFBU0E7SUFDeEIsTUFBTThDLFVBQVVELE9BQU9FLE1BQU1DO1FBQ2ZIO0lBQWQsTUFBTUksUUFBUUosQ0FBQUEsc0JBQUFBLE9BQU9FLE1BQU1FLG1CQUFiSixpQ0FBQUEsc0JBQXNCO1FBQ3JCQTtJQUFmLE1BQU1LLFNBQVNMLENBQUFBLHVCQUFBQSxPQUFPRSxNQUFNRyxvQkFBYkwsa0NBQUFBLHVCQUF1QjtJQUV0QyxNQUFNLEVBQUU3QixJQUFJLEVBQUVtQyxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHdkQseURBQWVBLENBQ2pELGFBQThCb0QsT0FBakJILFNBQVEsV0FBeUJJLE9BQWhCRCxPQUFNLFlBQWlCLE9BQVBDLFNBQzlDaEQsS0FDQTtRQUNFbUQsbUJBQW1CO1FBQ25CQyx1QkFBdUI7SUFDekI7SUFHRnhELGdEQUFTQSxDQUFDO1FBQ1JxRCxPQUFPLGFBQThCRixPQUFqQkgsU0FBUSxXQUF5QkksT0FBaEJELE9BQU0sWUFBaUIsT0FBUEM7SUFDdkQsR0FBRztRQUFDTCxPQUFPRTtLQUFNO0lBRWpCLE9BQU87UUFBRS9CO1FBQU1vQztJQUFVO0FBQzNCO0FBRU8sU0FBU0csa0JBQWtCQyxHQUFXO0lBQzNDLE1BQU0sQ0FBQ3hDLE1BQU15QyxRQUFRLEdBQUcxRCwrQ0FBUUEsQ0FBQztJQUVqQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNa0IsT0FBT08sYUFBYVMsUUFBUXdCO1FBQ2xDLElBQUl4QyxNQUFNO1lBQ1J5QyxRQUFRN0MsS0FBS3NCLE1BQU1sQjtRQUNyQjtJQUNGLEdBQUcsRUFBRTtJQUVMLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTMEM7SUFDZCxNQUFNM0Isa0JBQWtCd0Isa0JBQWtCO0lBRTFDLE9BQU94QjtBQUNUO0FBRU8sU0FBUzRCO0lBQ2QsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUc5RCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNOEMsU0FBUzdDLHNEQUFTQTtJQUV4QkYsZ0RBQVNBLENBQUM7UUFDUixJQUFJOEQsUUFBUTtZQUNWQyxVQUFVO1lBQ1Z0QyxhQUFhdUMsV0FBVztZQUV4QixJQUFJakIsT0FBT2tCLGFBQWEsS0FBSztnQkFDM0JsQixPQUFPbUIsS0FBSztZQUNkLE9BQU87Z0JBQ0xuQixPQUFPb0I7WUFDVDtRQUNGO0lBQ0YsR0FBRztRQUFDTDtLQUFPO0lBRVgsT0FBT0M7QUFDVDtBQUVPLFNBQVNLO0lBQ2QsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHckUsK0NBQVFBLENBQUM7SUFDdkQsTUFBTThDLFNBQVM3QyxzREFBU0E7SUFDeEIsTUFBTStELFdBQVdsQixPQUFPa0I7SUFFeEJqRSxnREFBU0EsQ0FBQztRQUNSLElBQUlpRSxhQUFhLE9BQU9BLGFBQWEsYUFBYUEsYUFBYSxZQUFZO1lBQ3pFSyxtQkFBbUI7UUFDckI7SUFDRixHQUFHO1FBQUNMO0tBQVM7SUFFYixTQUFTTSxzQkFBc0JDLFNBQWtCO1FBQy9DLElBQUlQLGFBQWEsT0FBT0EsYUFBYSxhQUFhQSxhQUFhLFlBQVk7WUFDekVLLG1CQUFtQkU7UUFDckI7SUFDRjtJQUVBLE9BQU87UUFBRUg7UUFBaUJFO0lBQXNCO0FBQ2xEO0FBRU8sU0FBU0U7SUFDZCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBRzFFLCtDQUFRQSxDQUFDO0lBRXJDLFNBQVMyRTtRQUNQRCxVQUFVO0lBQ1o7SUFFQSxTQUFTRTtRQUNQRixVQUFVO0lBQ1o7SUFFQSxPQUFPO1FBQ0xEO1FBQ0FFO1FBQ0FDO0lBQ0Y7QUFDRjtBQUVPLFNBQVNDO0lBQ2QsTUFBTSxFQUFFNUQsSUFBSSxFQUFFLEdBQUduQix5REFBZUEsQ0FBQyxPQUFPSyxLQUFLO1FBQzNDbUQsbUJBQW1CO1FBQ25CQyx1QkFBdUI7SUFDekI7SUFFQSxPQUFPdEM7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvaG9va3MudHM/ZTczZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSSW1tdXRhYmxlIGZyb20gXCJzd3IvaW1tdXRhYmxlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmNvbnN0IEJBU0VfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpXCI7XHJcbi8vY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vYmFjazA5LnZlcmNlbC5hcHAvYXBpXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBpKGlucHV0OiBSZXF1ZXN0SW5mbywgb3B0aW9ucz86IGFueSkge1xyXG4gIGNvbnN0IHVybCA9IEJBU0VfVVJMICsgaW5wdXQ7XHJcblxyXG4gIGNvbnN0IG5ld09wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICBuZXdPcHRpb25zLmhlYWRlcnMgfHw9IHt9O1xyXG5cclxuICBuZXdPcHRpb25zLmhlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcclxuICBjb25zdCB0b2tlbiA9IGdldFNhdmVkVG9rZW4oKTtcclxuXHJcbiAgaWYgKHRva2VuKSB7XHJcbiAgICBuZXdPcHRpb25zLmhlYWRlcnMuYXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gIH1cclxuXHJcbiAgaWYgKG5ld09wdGlvbnMuYm9keSkge1xyXG4gICAgbmV3T3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkobmV3T3B0aW9ucy5ib2R5KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwgbmV3T3B0aW9ucyk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGlmIChyZXMuc3RhdHVzID49IDIwMCAmJiByZXMuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cge1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBzdGF0dXM6IHJlcy5zdGF0dXMsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRWZXJpZmljYXRpb25FbWFpbChlbWFpbDogc3RyaW5nKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXBpKFwiL2F1dGhcIiwgeyBtZXRob2Q6IFwicG9zdFwiLCBib2R5OiB7IGVtYWlsIH0gfSk7XHJcblxyXG4gIHJldHVybiByZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVVc2VySW5mb3JtYXRpb24odG9rZW46IHN0cmluZywgZW1haWw6IHN0cmluZykge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcl9pbmZvcm1hdGlvblwiLCBKU09OLnN0cmluZ2lmeSh7IHRva2VuLCBlbWFpbCB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBY2Nlc3NUb2tlbihlbWFpbDogc3RyaW5nLCBjb2RlOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXBpKFwiL2F1dGgvdG9rZW5cIiwge1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICBib2R5OiB7IGVtYWlsLCBjb2RlIH0sXHJcbiAgICB9KTtcclxuICAgIHNhdmVVc2VySW5mb3JtYXRpb24ocmVzLnRva2VuLCBlbWFpbCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMudG9rZW4sIFwiVE9LRU4gQVBJXCIpO1xyXG4gICAgY29uc29sZS5sb2cocmVzLCBcIlJFUyBBUElcIik7XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIGVycjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNhdmVkVG9rZW4oKSB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2FsU3RvcmFnZSkge1xyXG4gICAgY29uc3QgdXNlckluZm9ybWF0aW9uOiBhbnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfaW5mb3JtYXRpb25cIik7XHJcbiAgICBpZiAodXNlckluZm9ybWF0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHBhcnNlZFVzZXJJbmZvcm1hdGlvbiA9IEpTT04ucGFyc2UodXNlckluZm9ybWF0aW9uKTtcclxuICAgICAgcmV0dXJuIHBhcnNlZFVzZXJJbmZvcm1hdGlvbi50b2tlbjtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdExpc3RnZXRQcm9kdWN0TGlzdCgpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgYXBpKFwiL3NlYXJjaD9saW1pdD0zJm9mZnNldD0xMFwiKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0RGV0YWlscyhwcm9kdWN0SWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkoYC9wcm9kdWN0cy8ke3Byb2R1Y3RJZH1gKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBsYWNlT3JkZXIocHJvZHVjdElkOiBzdHJpbmcpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgYXBpKGAvb3JkZXI/cHJvZHVjdElkPSR7cHJvZHVjdElkfWAsIHtcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBib2R5OiB7IHF0eTogMSB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2ZpbGVJbmZvcm1hdGlvbihcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgYWRkcmVzczogc3RyaW5nLFxyXG4gIHBob25lTnVtYmVyOiBzdHJpbmdcclxuKSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaShcIi9tZVwiLCB7XHJcbiAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgIGJvZHk6IHsgbmFtZSwgYWRkcmVzcywgcGhvbmVOdW1iZXIgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNlYXJjaCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBwcm9kdWN0ID0gcm91dGVyLnF1ZXJ5LnE7XHJcbiAgY29uc3QgbGltaXQgPSByb3V0ZXIucXVlcnkubGltaXQgPz8gMztcclxuICBjb25zdCBvZmZzZXQgPSByb3V0ZXIucXVlcnkub2Zmc2V0ID8/IDA7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgbXV0YXRlLCBpc0xvYWRpbmcgfSA9IHVzZVNXUkltbXV0YWJsZShcclxuICAgIGAvc2VhcmNoP3E9JHtwcm9kdWN0fSZsaW1pdD0ke2xpbWl0fSZvZmZzZXQ9JHtvZmZzZXR9YCxcclxuICAgIGFwaSxcclxuICAgIHtcclxuICAgICAgcmV2YWxpZGF0ZU9uRm9jdXM6IGZhbHNlLFxyXG4gICAgICByZXZhbGlkYXRlT25SZWNvbm5lY3Q6IHRydWUsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG11dGF0ZShgL3NlYXJjaD9xPSR7cHJvZHVjdH0mbGltaXQ9JHtsaW1pdH0mb2Zmc2V0PSR7b2Zmc2V0fWApO1xyXG4gIH0sIFtyb3V0ZXIucXVlcnldKTtcclxuXHJcbiAgcmV0dXJuIHsgZGF0YSwgaXNMb2FkaW5nIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXRTdG9yYWdlRGF0YShrZXk6IHN0cmluZykge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBzZXREYXRhKEpTT04ucGFyc2UoZGF0YSkpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VJc0F1dGhlbnRpY2F0ZWQoKSB7XHJcbiAgY29uc3QgdXNlckluZm9ybWF0aW9uID0gdXNlR2V0U3RvcmFnZURhdGEoXCJ1c2VyX2luZm9ybWF0aW9uXCIpO1xyXG5cclxuICByZXR1cm4gdXNlckluZm9ybWF0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9nb3V0KCkge1xyXG4gIGNvbnN0IFtsb2dPdXQsIHNldExvZ091dF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9nT3V0KSB7XHJcbiAgICAgIHNldExvZ091dChmYWxzZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcl9pbmZvcm1hdGlvblwiKTtcclxuXHJcbiAgICAgIGlmIChyb3V0ZXIucGF0aG5hbWUgIT09IFwiL1wiKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvdXRlci5yZWxvYWQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtsb2dPdXRdKTtcclxuXHJcbiAgcmV0dXJuIHNldExvZ091dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRvZ2dsZVNlYXJjaEJhcigpIHtcclxuICBjb25zdCBbc2VhcmNoQmFyU3RhdHVzLCBzZXRTZWFyY2hCYXJTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHBhdGhuYW1lICE9PSBcIi9cIiAmJiBwYXRobmFtZSAhPT0gXCIvc2lnbmluXCIgJiYgcGF0aG5hbWUgIT09IFwiL3Byb2ZpbGVcIikge1xyXG4gICAgICBzZXRTZWFyY2hCYXJTdGF0dXModHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW3BhdGhuYW1lXSk7XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVNlYXJjaEJhclN0YXR1cyhuZXdTdGF0dXM6IGJvb2xlYW4pIHtcclxuICAgIGlmIChwYXRobmFtZSAhPT0gXCIvXCIgJiYgcGF0aG5hbWUgIT09IFwiL3NpZ25pblwiICYmIHBhdGhuYW1lICE9PSBcIi9wcm9maWxlXCIpIHtcclxuICAgICAgc2V0U2VhcmNoQmFyU3RhdHVzKG5ld1N0YXR1cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBzZWFyY2hCYXJTdGF0dXMsIHVwZGF0ZVNlYXJjaEJhclN0YXR1cyB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9hZGluZ0luZGljYXRvcigpIHtcclxuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBzaG93TG9hZGVyKCkge1xyXG4gICAgc2V0TG9hZGVyKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGlkZUxvYWRlcigpIHtcclxuICAgIHNldExvYWRlcihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbG9hZGVyLFxyXG4gICAgc2hvd0xvYWRlcixcclxuICAgIGhpZGVMb2FkZXIsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdldFVzZXJQcm9maWxlSW5mb3JtYXRpb24oKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1JJbW11dGFibGUoXCIvbWVcIiwgYXBpLCB7XHJcbiAgICByZXZhbGlkYXRlT25Gb2N1czogZmFsc2UsXHJcbiAgICByZXZhbGlkYXRlT25SZWNvbm5lY3Q6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTV1JJbW11dGFibGUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkJBU0VfVVJMIiwiYXBpIiwiaW5wdXQiLCJvcHRpb25zIiwibmV3T3B0aW9ucyIsInVybCIsImhlYWRlcnMiLCJ0b2tlbiIsImdldFNhdmVkVG9rZW4iLCJhdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwic2VuZFZlcmlmaWNhdGlvbkVtYWlsIiwiZW1haWwiLCJtZXRob2QiLCJzYXZlVXNlckluZm9ybWF0aW9uIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEFjY2Vzc1Rva2VuIiwiY29kZSIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJ3aW5kb3ciLCJ1c2VySW5mb3JtYXRpb24iLCJnZXRJdGVtIiwicGFyc2VkVXNlckluZm9ybWF0aW9uIiwicGFyc2UiLCJnZXRQcm9kdWN0TGlzdGdldFByb2R1Y3RMaXN0IiwiZ2V0UHJvZHVjdERldGFpbHMiLCJwcm9kdWN0SWQiLCJwbGFjZU9yZGVyIiwicXR5IiwidXBkYXRlUHJvZmlsZUluZm9ybWF0aW9uIiwibmFtZSIsImFkZHJlc3MiLCJwaG9uZU51bWJlciIsInVzZVNlYXJjaCIsInJvdXRlciIsInByb2R1Y3QiLCJxdWVyeSIsInEiLCJsaW1pdCIsIm9mZnNldCIsIm11dGF0ZSIsImlzTG9hZGluZyIsInJldmFsaWRhdGVPbkZvY3VzIiwicmV2YWxpZGF0ZU9uUmVjb25uZWN0IiwidXNlR2V0U3RvcmFnZURhdGEiLCJrZXkiLCJzZXREYXRhIiwidXNlSXNBdXRoZW50aWNhdGVkIiwidXNlTG9nb3V0IiwibG9nT3V0Iiwic2V0TG9nT3V0IiwicmVtb3ZlSXRlbSIsInBhdGhuYW1lIiwicHVzaCIsInJlbG9hZCIsInVzZVRvZ2dsZVNlYXJjaEJhciIsInNlYXJjaEJhclN0YXR1cyIsInNldFNlYXJjaEJhclN0YXR1cyIsInVwZGF0ZVNlYXJjaEJhclN0YXR1cyIsIm5ld1N0YXR1cyIsInVzZUxvYWRpbmdJbmRpY2F0b3IiLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJzaG93TG9hZGVyIiwiaGlkZUxvYWRlciIsInVzZUdldFVzZXJQcm9maWxlSW5mb3JtYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/hooks.ts\n"));

/***/ })

});