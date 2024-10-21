exports.id = 6802;
exports.ids = [6802];
exports.modules = {

/***/ 72784:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 89222, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 78301, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 83751, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 54765, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5192, 23))

/***/ }),

/***/ 65880:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 20053, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 88552))

/***/ }),

/***/ 5807:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1954))

/***/ }),

/***/ 41906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ ScrollAnimation)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32913);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42124);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__);


const ScrollAnimation = ()=>{
    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
    // appearance
    const appearance = document.querySelectorAll(".mil-up");
    appearance.forEach((section)=>{
        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.fromTo(section, {
            opacity: 0,
            y: 50,
            scale: .98,
            ease: "sine"
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
                trigger: section,
                toggleActions: "play none none reverse"
            }
        });
    });
    // scale image
    const scaleImage = document.querySelectorAll(".mil-scale");
    scaleImage.forEach((section)=>{
        var value1 = section.getAttribute("data-value-1");
        var value2 = section.getAttribute("data-value-2");
        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.fromTo(section, {
            ease: "sine",
            scale: value1
        }, {
            scale: value2,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: "play none none reverse"
            }
        });
    });
    // parallax
    const parallaxImage = document.querySelectorAll(".mil-parallax");
    parallaxImage.forEach((section)=>{
        var value1 = section.getAttribute("data-value-1");
        var value2 = section.getAttribute("data-value-2");
        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.fromTo(section, {
            ease: "sine",
            y: value1
        }, {
            y: value2,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: "play none none reverse"
            }
        });
    });
    // skill
    const skillProg = document.querySelectorAll(".mil-skill-prog");
    skillProg.forEach((section)=>{
        var value1 = section.getAttribute("data-value-1");
        var value2 = section.getAttribute("data-value-2");
        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.fromTo(section, {
            width: value1,
            ease: "sine"
        }, {
            width: value2,
            duration: 2,
            scrollTrigger: {
                trigger: section,
                toggleActions: "play none none reverse"
            }
        });
    });
    // counters
    const counters = document.querySelectorAll(".mil-counter");
    counters.forEach((element)=>{
        var count = element, zero = {
            val: 0
        }, num = element.dataset.number, split = (num + "").split("."), decimals = split.length > 1 ? split[1].length : 0;
        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(zero, {
            val: num,
            duration: 2,
            scrollTrigger: {
                trigger: element,
                toggleActions: "play none none reverse"
            },
            onUpdate: function() {
                count.innerHTML = zero.val.toFixed(decimals);
            }
        });
    });
    // progressbar
    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(".mil-progress", {
        height: "100%",
        ease: "sine",
        scrollTrigger: {
            scrub: 0.3
        }
    });
    // top panel
    const milTopPanel = document.querySelector(".mil-top-panel");
    if (milTopPanel != undefined) {
        window.addEventListener("scroll", (e)=>{
            if (window.scrollY > 10) {
                milTopPanel.classList.add("mil-active");
            } else {
                milTopPanel.classList.remove("mil-active");
            }
        });
    }
};


/***/ }),

/***/ 88552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24646);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const DefaultHeader = ()=>{
    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [activeSubMenu, setActiveSubMenu] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const asPath = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();
    const isPathActive = (path)=>{
        return asPath.indexOf(path) !== -1 && path !== "/" || asPath === path;
    };
    const handleSubMenuClick = (index, e)=>{
        e.preventDefault();
        setActiveSubMenu(activeSubMenu === index ? null : index);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        // close mobile menu
        setToggle(false);
    }, [
        asPath
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mil-top-panel",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container-fluid",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mil-top-panel-content",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/",
                            className: "mil-logo",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: _data_app_json__WEBPACK_IMPORTED_MODULE_2__/* .header.logo.image */ .Fs.j.B,
                                alt: _data_app_json__WEBPACK_IMPORTED_MODULE_2__/* .header.logo.alt */ .Fs.j.w,
                                style: {
                                    "width": "130px"
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `mil-navigation ${toggle ? "mil-active" : ""}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    children: _data_app_json__WEBPACK_IMPORTED_MODULE_2__/* .header.menu.map */ .Fs.G.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: `mil-has-children ${isPathActive(item.link) ? "mil-active" : ""}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: item.link,
                                                    onClick: item.children.length > 0 ? (e)=>handleSubMenuClick(index, e) : null,
                                                    children: item.label
                                                }),
                                                item.children.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: activeSubMenu === index ? "mil-active" : "",
                                                    children: item.children.map((subitem, subIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: isPathActive(subitem.link) ? "mil-active" : "",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                href: subitem.link,
                                                                children: subitem.label
                                                            })
                                                        }, `header-submenu-item-${subIndex}`))
                                                })
                                            ]
                                        }, `header-menu-item-${index}`))
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mil-top-panel-buttons",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/contact",
                                    className: "mil-button mil-sm",
                                    children: "Start A Project"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `mil-menu-btn ${toggle ? "mil-active" : ""}`,
                                    onClick: ()=>setToggle(!toggle),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultHeader);


/***/ }),

/***/ 1954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_scrollAnims__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41906);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const ScrollbarProgressModule = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_common_scrollAnims__WEBPACK_IMPORTED_MODULE_2__/* .ScrollAnimation */ .M)();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mil-progress-track",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mil-progress"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollbarProgressModule);


/***/ }),

/***/ 18521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Index)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(35985);
;// CONCATENATED MODULE: ./src/app/_layouts/headers/LayoutDefault.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\Nova3\src\app\_layouts\headers\LayoutDefault.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const LayoutDefault = (__default__);
;// CONCATENATED MODULE: ./src/app/_layouts/headers/Index.jsx


const Header = ({ layout  })=>{
    switch(layout){
        case 1:
            return;
        case 2:
            return;
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(LayoutDefault, {});
    }
};
/* harmony default export */ const Index = (Header);


/***/ }),

/***/ 2295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/app/_styles/scss/style.scss
var style = __webpack_require__(69569);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(75553);
// EXTERNAL MODULE: ./src/app/_styles/css/plugins/bootstrap-grid.css
var bootstrap_grid = __webpack_require__(55085);
// EXTERNAL MODULE: ./src/app/_styles/css/plugins/swiper.min.css
var swiper_min = __webpack_require__(34894);
// EXTERNAL MODULE: ./src/app/_styles/css/plugins/magnific-popup.css
var magnific_popup = __webpack_require__(88342);
// EXTERNAL MODULE: ./node_modules/swiper/element/swiper-element-bundle.js + 102 modules
var swiper_element_bundle = __webpack_require__(84882);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(35985);
;// CONCATENATED MODULE: ./src/app/_layouts/scrollbar-progress/Index.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\Nova3\src\app\_layouts\scrollbar-progress\Index.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Index = (__default__);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(1128);
;// CONCATENATED MODULE: ./src/app/layout.jsx







// register Swiper custom elements
(0,swiper_element_bundle/* register */.z2)();


const metadata = {
    title: {
        default: app/* settings.siteName */.Xd.aD,
        template: "%s | " + app/* settings.siteName */.Xd.aD
    },
    description: app/* settings.siteDescription */.Xd.JG
};
const Layouts = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mil-wrapper",
                children: [
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(Index, {})
                ]
            })
        })
    });
};
/* harmony default export */ const layout = (Layouts);


/***/ }),

/***/ 51656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42585);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_headers_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18521);



const NotFound = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_headers_Index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                layout: "default"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "content",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: "mil-banner mil-relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/img/photo/16.jpg",
                            className: "mil-bg-img mil-scale",
                            "data-value-1": ".4",
                            "data-value-2": "1.4",
                            alt: "image"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mil-overlay"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mil-background-grid mil-top-space"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mil-banner-content",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "row align-items-end justify-content-between",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xl-5",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mil-sm-center mil-mb-90",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "mil-suptitle mil-light mil-upper mil-mb-60",
                                                        children: "Page Not Found"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                        className: "mil-upper mil-light mil-mb-60",
                                                        children: [
                                                            "Error ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mil-marker mil-dark",
                                                                children: "404"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mil-light-soft mil-mb-60",
                                                        children: "The page you are looking for does not exist, it may have been moved or removed altogether."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: "/",
                                                        className: "mil-button",
                                                        children: "Back to Home"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);


/***/ }),

/***/ 41764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12548);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 55085:
/***/ (() => {



/***/ }),

/***/ 88342:
/***/ (() => {



/***/ }),

/***/ 34894:
/***/ (() => {



/***/ }),

/***/ 69569:
/***/ (() => {



/***/ }),

/***/ 75553:
/***/ (() => {



/***/ }),

/***/ 24646:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Xd":{"Tb":"https://formspree.io/f/your_api_key"},"Fs":{"j":{"B":"/img/logo/nova3_logo_white.svg","w":"Logo"},"G":[{"label":"Home","link":"/","children":[{"label":"Homepage 1","link":"/"},{"label":"Homepage 2","link":"/home-2"},{"label":"Homepage 3","link":"/home-3"}]},{"label":"Services","link":"/services","children":[{"label":"Services List","link":"/services"},{"label":"Single Service","link":"/services/service-1"}]},{"label":"Projects","link":"/projects","children":[{"label":"Projects Grid","link":"/projects"},{"label":"Single Project","link":"/projects/project-1"}]},{"label":"Blog","link":"/blog","children":[{"label":"Blog list","link":"/blog"},{"label":"Publication","link":"/blog/the-infrastructure-that-powers-the-world"}]},{"label":"Contact Us","link":"/contact","children":0},{"label":"Style Guide","link":"/style-guide","children":0},{"label":"Other","link":"/team","children":[{"label":"About","link":"/about"},{"label":"Team","link":"/team"},{"label":"Team Member","link":"/team/team-01"},{"label":"Coming Soon","link":"/coming-soon"},{"label":"404","link":"/404"}]}]},"Mv":{"jY":{"B":"/img/logo/logo-light.png","w":"Logo"},"JG":"© 2023 Ruizarch. All rights reserved.","GI":[{"label":"About","link":"/about"},{"label":"Services","link":"/services"},{"label":"Projects","link":"/projects"},{"label":"Blog","link":"/blog"},{"label":"Contact","link":"/contact"}]},"xs":[{"link":"https://facebook.com","title":"Facebook"},{"link":"https://twitter.com","title":"Twitter"},{"link":"https://instagram.com","title":"Instagram"},{"link":"https://youtube.com","title":"Youtube"}]}');

/***/ }),

/***/ 1128:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Xd":{"aD":"Nova 3","JG":"Fireside starter","ji":6},"xs":[{"link":"https://facebook.com","title":"Facebook"},{"link":"https://twitter.com","title":"Twitter"},{"link":"https://instagram.com","title":"Instagram"},{"link":"https://youtube.com","title":"Youtube"}],"q":{"b":[{"name":"Architecture","slug":"architecture"},{"name":"Interior","slug":"interior"},{"name":"Decor","slug":"decor"}]},"Bz":{"b":[{"name":"Executive","slug":"executive"},{"name":"Data centers","slug":"data-centers"},{"name":"Education","slug":"education"},{"name":"Workplace","slug":"workplace"}]}}');

/***/ })

};
;