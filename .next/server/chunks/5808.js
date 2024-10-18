"use strict";
exports.id = 5808;
exports.ids = [5808];
exports.modules = {

/***/ 34398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32276);
/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24646);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const ContactForm = ({ subtitleOffset  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__/* .Formik */ .J9, {
            initialValues: {
                email: "",
                name: "",
                tel: "",
                budget: "",
                message: ""
            },
            validate: (values)=>{
                const errors = {};
                if (!values.email) {
                    errors.email = "Required";
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = "Invalid email address";
                }
                return errors;
            },
            onSubmit: (values, { setSubmitting  })=>{
                const form = document.getElementById("contactForm");
                const status = document.getElementById("contactFormStatus");
                const data = new FormData();
                data.append("name", values.name);
                data.append("email", values.email);
                data.append("tel", values.tel);
                data.append("budget", values.budget);
                data.append("message", values.message);
                fetch(form.action, {
                    method: "POST",
                    body: data,
                    headers: {
                        "Accept": "application/json"
                    }
                }).then((response)=>{
                    if (response.ok) {
                        status.innerHTML = "<h5>Thanks, your message is sent successfully.</h5>";
                        form.reset();
                    } else {
                        response.json().then((data)=>{
                            if (Object.hasOwn(data, "errors")) {
                                status.innerHTML = data["errors"].map((error)=>error["message"]).join(", ");
                            } else {
                                status.innerHTML = "<h5>Oops! There was a problem submitting your form</h5>";
                            }
                        });
                    }
                }).catch((error)=>{
                    status.innerHTML = "<h5>Oops! There was a problem submitting your form</h5>";
                });
                setSubmitting(false);
            },
            children: ({ values , errors , touched , handleChange , handleBlur , handleSubmit , isSubmitting  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: handleSubmit,
                    id: "contactForm",
                    action: _data_app_json__WEBPACK_IMPORTED_MODULE_1__/* .settings.formspreeURL */ .Xd.Tb,
                    className: subtitleOffset ? "mil-mt-suptitle-offset mil-mb-90 cform" : "mil-mb-90 cform",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mil-input-frame mil-dark-input mil-up mil-mb-30",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                className: "mil-upper",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Full Name"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "mil-required",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                placeholder: "Enter Your Name Here",
                                                name: "name",
                                                required: "required",
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                value: values.name
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mil-input-frame mil-dark-input mil-up mil-mb-30",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                className: "mil-upper",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Email address"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "mil-required",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "email",
                                                placeholder: "Enter Your Email Here",
                                                name: "email",
                                                required: "required",
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                value: values.email
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mil-input-frame mil-dark-input mil-up mil-mb-30",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                className: "mil-upper",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Phone"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "mil-required",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "tel",
                                                placeholder: "Enter Your Phone Here",
                                                name: "tel",
                                                required: "required",
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                value: values.tel
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mil-input-frame mil-dark-input mil-up mil-mb-30",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                className: "mil-upper",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Budget"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "mil-required",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                placeholder: "Enter Your Budget Here",
                                                name: "budget",
                                                required: "required",
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                value: values.budget
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-12",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mil-input-frame mil-dark-input mil-up mil-mb-30",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                className: "mil-upper",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Message"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "mil-required",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                placeholder: "Enter Your Name Here",
                                                name: "message",
                                                required: "required",
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                value: values.message
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-12",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mil-checbox-frame mil-dark-input mil-up mil-mb-30",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                defaultChecked: true,
                                                className: "mil-checkbox",
                                                id: "checkbox-1",
                                                type: "checkbox",
                                                value: "value",
                                                namge: "agree",
                                                required: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "checkbox-1",
                                                className: "mil-text-sm",
                                                children: "Accept the terms and conditions of personal data."
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        className: "mil-button mil-up",
                                        children: "Send Now"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "form-status alert-success mil-mb-90",
                            id: "contactFormStatus",
                            style: {
                                "display": "none"
                            }
                        })
                    ]
                })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);


/***/ }),

/***/ 85494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35985);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\Nova3\src\app\_components\ContactForm.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;