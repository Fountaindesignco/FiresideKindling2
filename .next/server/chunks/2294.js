exports.id = 2294;
exports.ids = [2294];
exports.modules = {

/***/ 30975:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 20053, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 26528))

/***/ }),

/***/ 35745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CallToAction)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./src/data/sections/call-to-action.json
const call_to_action_namespaceObject = JSON.parse('{"TN":"Interested in Our <span class=\\"mil-marker\\">Work?</span>","Oc":"Your Idea","WL":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","LI":{"P":"Let\'s Talk Now","p":"/contact"}}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(42585);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/app/_components/sections/CallToAction.jsx



const CallToActionSection = ({ bg  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container mil-p-0-120",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row justify-content-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "mil-suptitle mil-upper mil-up mil-mb-30",
                                    dangerouslySetInnerHTML: {
                                        __html: call_to_action_namespaceObject.Oc
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "mil-upper mil-up",
                                    dangerouslySetInnerHTML: {
                                        __html: call_to_action_namespaceObject.TN
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 mil-mt-suptitle-offset",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mil-up",
                                dangerouslySetInnerHTML: {
                                    __html: call_to_action_namespaceObject.WL
                                }
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3 mil-mt-suptitle-offset",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mil-adaptive-right mil-up",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: call_to_action_namespaceObject.LI.p,
                                    className: "mil-button",
                                    children: call_to_action_namespaceObject.LI.P
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const CallToAction = (CallToActionSection);


/***/ })

};
;