"use strict";
exports.id = 6732;
exports.ids = [6732];
exports.modules = {

/***/ 46732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LatestPosts)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./src/data/sections/latest-posts.json
const latest_posts_namespaceObject = JSON.parse('{"TN":"Ideas and News","Oc":"Insights","LI":{"p":"/blog"},"jX":2}');
// EXTERNAL MODULE: ./src/app/_lib/date.js
var date = __webpack_require__(27995);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(42585);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/app/_components/sections/LatestPosts.jsx




const LatestPostsSection = ({ posts , paddingTop  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: paddingTop ? "container mil-p-120-60" : "container mil-p-0-60",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mil-background-grid mil-softened"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mil-center mil-mb-90",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "mil-suptitle mil-upper mil-up mil-mb-30",
                                            dangerouslySetInnerHTML: {
                                                __html: latest_posts_namespaceObject.Oc
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "mil-upper mil-up mil-mb-30",
                                            dangerouslySetInnerHTML: {
                                                __html: latest_posts_namespaceObject.TN
                                            }
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: latest_posts_namespaceObject.LI.p,
                                            className: "mil-link mil-upper mil-up",
                                            children: [
                                                latest_posts_namespaceObject.LI.label,
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "mil-arrow",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/icons/1.svg",
                                                        alt: "arrow"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            posts.slice(0, latest_posts_namespaceObject.jX).map((item, key)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: `/blog/${item.id}`,
                                        className: "mil-blog-card mil-mb-60",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mil-cover mil-up mil-long",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: item.image,
                                                        alt: item.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mil-date",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(date/* default */.Z, {
                                                            dateString: item.date
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mil-description",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "mil-suptitle mil-upper mil-up mil-mb-30",
                                                        children: item.category
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: "mil-upper mil-up mil-mb-30",
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "mil-up",
                                                        children: item.short
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, `blog-post-${key}`))
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const LatestPosts = (LatestPostsSection);


/***/ })

};
;