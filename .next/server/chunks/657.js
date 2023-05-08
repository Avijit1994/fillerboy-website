"use strict";
exports.id = 657;
exports.ids = [657];
exports.modules = {

/***/ 5971:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2540);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4934);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9070);
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);






function NavbarScreen() {
    return /*#__PURE__*/ _jsx("nav", {
        className: "navbar navbar-expand-lg  blur border-radius-xl top-0 z-index-fixed shadow box-shadow: 5px 10px #FF5C5C; position-absolute my-3 py-2 start-0 end-0 mx-4",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container-fluid px-0 box-shadow: 5px 10px #FF5C5C; ",
            children: [
                /*#__PURE__*/ _jsx("a", {
                    className: "navbar-brand font-weight-bolder ms-sm-3",
                    href: "https://demos.creative-tim.com/material-kit/index",
                    rel: "tooltip",
                    title: "Designed and Coded by Creative Tim",
                    "data-placement": "bottom",
                    target: "_blank",
                    children: /*#__PURE__*/ _jsx("h3", {
                        children: "AVIJIT"
                    })
                }),
                /*#__PURE__*/ _jsx("button", {
                    className: "navbar-toggler shadow-none ms-2",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navigation",
                    "aria-controls": "navigation",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ _jsxs("span", {
                        className: "navbar-toggler-icon mt-2",
                        children: [
                            /*#__PURE__*/ _jsx("span", {
                                className: "navbar-toggler-bar bar1"
                            }),
                            /*#__PURE__*/ _jsx("span", {
                                className: "navbar-toggler-bar bar2"
                            }),
                            /*#__PURE__*/ _jsx("span", {
                                className: "navbar-toggler-bar bar3"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100",
                    id: "navigation",
                    children: /*#__PURE__*/ _jsxs("ul", {
                        className: "navbar-nav navbar-nav-hover ms-auto",
                        children: [
                            /*#__PURE__*/ _jsx("a", {
                                href: "https://www.creative-tim.com/product/material-kit-pro",
                                className: "btn btn-sm  bg-gradient-primary  mb-0 me-1 mt-2 mt-md-0",
                                children: "About"
                            }),
                            /*#__PURE__*/ _jsx("a", {
                                href: "https://www.creative-tim.com/product/material-kit-pro",
                                className: "btn btn-sm  bg-gradient-primary  mb-0 me-1 mt-2 mt-md-0",
                                children: "Product"
                            }),
                            /*#__PURE__*/ _jsx("a", {
                                href: "https://www.creative-tim.com/product/material-kit-pro",
                                className: "btn btn-sm  bg-gradient-primary  mb-0 me-1 mt-2 mt-md-0",
                                children: "Service"
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                className: "nav-item my-auto ms-3 ms-lg-0",
                                children: /*#__PURE__*/ _jsx("a", {
                                    href: "https://www.creative-tim.com/product/material-kit-pro",
                                    className: "btn btn-sm  bg-gradient-primary  mb-0 me-1 mt-2 mt-md-0",
                                    children: "Contact us"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (NavbarScreen)));


/***/ }),

/***/ 9573:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__);


function Test() {
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx("style", {
                type: "text/css",
                children: `
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `
            }),
            /*#__PURE__*/ _jsx(Button, {
                variant: "flat",
                size: "xxl",
                children: "flat button"
            })
        ]
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Test)));


/***/ })

};
;