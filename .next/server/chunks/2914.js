"use strict";
exports.id = 2914;
exports.ids = [2914];
exports.modules = {

/***/ 22914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_sliderProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19279);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14790);
/* harmony import */ var _data_sliders_partners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81958);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const PartnersSlider = ({ bgStyle  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `mil-${bgStyle}-bg mil-partners mil-relative`,
            children: [
                bgStyle == "soft" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/img/other/bg.svg",
                    className: "mil-bg-img",
                    alt: "image"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container mil-p-120-120",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mil-background-grid mil-softened"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, {
                            ..._common_sliderProps__WEBPACK_IMPORTED_MODULE_1__/* .SliderProps.milInfiniteSlider */ .M.milInfiniteSlider,
                            className: "swiper-container mil-infinite-show mil-up",
                            children: _data_sliders_partners__WEBPACK_IMPORTED_MODULE_3__/* .items.map */ .e.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                                    className: "swiper-slide",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: item.link,
                                        target: "_blank",
                                        className: "mil-partner-frame",
                                        style: {
                                            "width": "60px"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: item.image,
                                            alt: item.alt
                                        })
                                    })
                                }, `partners-slider-item-${key}`))
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PartnersSlider);


/***/ }),

/***/ 81958:
/***/ ((module) => {

module.exports = JSON.parse('{"e":[{"image":"/img/partners/1.png","alt":"logo"},{"image":"/img/partners/2.png","alt":"logo"},{"image":"/img/partners/3.png","alt":"logo"},{"image":"/img/partners/4.png","alt":"logo"},{"image":"/img/partners/5.png","alt":"logo"},{"image":"/img/partners/6.png","alt":"logo"}]}');

/***/ })

};
;