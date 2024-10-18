"use strict";
exports.id = 9688;
exports.ids = [9688];
exports.modules = {

/***/ 29688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Contact)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./src/data/sections/contact.json
const contact_namespaceObject = JSON.parse('{"TN":"Let\'s talk about your ideas","Oc":"Get in touch","ev":[{"list":["+7 (200) 600-30-30","+7 (200) 200 - 80 - 02"]},{"list":["info@ruizarch.com","hello@ruizarch.com"]},{"list":["USA","New York - 1800 Wazee Street","Suite 300 NY, NY 80202"]}]}');
// EXTERNAL MODULE: ./src/app/_components/ContactForm.jsx
var ContactForm = __webpack_require__(85494);
;// CONCATENATED MODULE: ./src/app/_components/sections/Contact.jsx



const ContactSection = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: "mil-soft-bg mil-relative",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/img/other/bg.svg",
                    className: "mil-bg-img",
                    alt: "image"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container mil-p-120-30",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mil-background-grid mil-softened"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row justify-content-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mil-mb-60",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "mil-suptitle mil-upper mil-up mil-mb-30",
                                                dangerouslySetInnerHTML: {
                                                    __html: contact_namespaceObject.Oc
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "mil-upper mil-up mil-mb-30",
                                                dangerouslySetInnerHTML: {
                                                    __html: contact_namespaceObject.TN
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mil-divider-lg mil-up mil-mb-30"
                                            }),
                                            contact_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    className: "mil-list mil-dark mil-up mil-mb-30",
                                                    children: item.list.map((list, list_key)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: list
                                                        }, `contact-item-${key}-list-${list_key}`))
                                                }, `contact-item-${key}`))
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-7",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ContactForm/* default */.ZP, {
                                        subtitleOffset: 1
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Contact = (ContactSection);


/***/ })

};
;