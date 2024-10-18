"use strict";
exports.id = 1273;
exports.ids = [1273];
exports.modules = {

/***/ 92049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _components_Pagination),
  "D": () => (/* binding */ dotts)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(42585);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/app/_lib/usePagination.js

const getPages = (length, inc = 1)=>Array.from({
        length
    }, (_, i)=>i + inc);
function usePagination(totalItems, currentPage, itemsPerPage) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    // -> 1 2 3 4 5
    if (totalPages <= 5) {
        return getPages(totalPages);
    }
    // -> 1 2 3 4 ... 10
    if (currentPage <= 3) {
        return [
            1,
            2,
            3,
            4,
            dotts,
            totalPages
        ];
    }
    // -> 1 ... 4 5 6 ... 10
    if (currentPage < totalPages - 2) {
        return [
            1,
            dotts,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            dotts,
            totalPages
        ];
    }
    // -> 1 ... 7 8 9 10
    return [
        1,
        dotts,
        ...getPages(4, totalPages - 3)
    ];
}

;// CONCATENATED MODULE: ./src/app/_components/Pagination.jsx



const dotts = "...";
const Pagination = ({ currentPage , totalItems , perPage , renderPageLink  })=>{
    const pages = usePagination(totalItems, currentPage, perPage);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mil-pagination mil-up",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mil-nav-buttons",
                    children: [
                        currentPage > 1 && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: currentPage > 1 ? renderPageLink(currentPage - 1) : renderPageLink(currentPage),
                            className: "mil-slider-button mil-banner-prev",
                            children: "Prev"
                        }, "pagination-item-prev"),
                        currentPage <= 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mil-slider-button mil-banner-prev swiper-button-disabled",
                            children: "Prev"
                        }, "pagination-item-prev"),
                        currentPage < pages.length && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: currentPage < pages.length ? renderPageLink(currentPage + 1) : renderPageLink(currentPage),
                            className: "mil-slider-button mil-banner-next",
                            children: "Next"
                        }, "pagination-item-next"),
                        currentPage == pages.length && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mil-slider-button mil-banner-next swiper-button-disabled",
                            children: "Next"
                        }, "pagination-item-next")
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "mil-page-numbers",
                    children: pages.map((pageNumber, i)=>pageNumber === dotts ? /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "mil-pagination-text",
                                children: pageNumber
                            })
                        }, `pagination-item-${i}`) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `${pageNumber === currentPage ? "mil-active" : ""}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: renderPageLink(pageNumber),
                                children: pageNumber
                            })
                        }, `pagination-item-${i}`))
                })
            ]
        })
    });
};
/* harmony default export */ const _components_Pagination = (Pagination);


/***/ }),

/***/ 48042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_sections_popular_posts_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92678);
/* harmony import */ var _library_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27995);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42585);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




const PopularPostsSection = ({ posts  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: posts.slice(0, _data_sections_popular_posts_json__WEBPACK_IMPORTED_MODULE_1__/* .numOfItems */ .j).map((item, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: `/blog/${item.id}`,
                className: "mil-blog-card mil-lg-card mil-mb-60",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mil-cover mil-long mil-up",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: item.image,
                                alt: item.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mil-date",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_library_date__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    dateString: item.date
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mil-description",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mil-left-side",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "mil-suptitle mil-upper mil-up mil-mb-30",
                                        children: item.category
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "mil-upper mil-up mil-mb-30",
                                        children: item.title
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mil-right-side mil-mt-suptitle-offset",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mil-up mil-mb-30",
                                        children: item.short
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "mil-link mil-upper mil-up",
                                        children: [
                                            "Read ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mil-arrow",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/img/icons/1.svg",
                                                    alt: "arrow"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }, `blog-popular-${key}`))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopularPostsSection);


/***/ }),

/***/ 92678:
/***/ ((module) => {

module.exports = JSON.parse('{"G":["the-infrastructure-that-powers-the-world"],"j":1}');

/***/ })

};
;