"use strict";
exports.id = 2284;
exports.ids = [2284];
exports.modules = {

/***/ 62284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Testimonial)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/app/_common/sliderProps.js
var sliderProps = __webpack_require__(19279);
// EXTERNAL MODULE: ./node_modules/swiper/react/swiper-react.js + 13 modules
var swiper_react = __webpack_require__(14790);
;// CONCATENATED MODULE: ./src/data/sliders/testimonial.json
const testimonial_namespaceObject = JSON.parse('{"TN":"What they think of us","Oc":"Testimonials","ev":[{"name":"Trevor Virtue","image":"/img/faces/2.jpg","role":"Designer","text":"In my opinion, it was an unforgettable experience working on my ideas. They understood everything I wanted in my project and idea that was great. I would work with ruizarch again for future projects, even to ask them for advice to start projects or ideas."},{"name":"Emma Miller","image":"/img/faces/1.jpg","role":"SMM Manager","text":"In my opinion, it was an unforgettable experience working on my ideas. They understood everything I wanted in my project and idea that was great. I would work with ruizarch again for future projects, even to ask them for advice to start projects or ideas."},{"name":"Paul Trueman","image":"/img/faces/3.jpg","role":"Designer","text":"In my opinion, it was an unforgettable experience working on my ideas. They understood everything I wanted in my project and idea that was great. I would work with ruizarch again for future projects, even to ask them for advice to start projects or ideas."}]}');
// EXTERNAL MODULE: ./src/data/sliders/partners.json
var partners = __webpack_require__(81958);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/app/_common/scrollAnims.js
var scrollAnims = __webpack_require__(41906);
;// CONCATENATED MODULE: ./src/app/_components/sliders/Testimonial.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const TestimonialSlider = ({ showPartners =1  })=>{
    (0,react_.useEffect)(()=>{
        (0,scrollAnims/* ScrollAnimation */.M)();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: "mil-soft-bg mil-relative",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/img/other/bg.svg",
                    className: "mil-bg-img",
                    alt: "image"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container mil-p-120-120",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                                                __html: testimonial_namespaceObject.Oc
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "mil-upper mil-up",
                                            dangerouslySetInnerHTML: {
                                                __html: testimonial_namespaceObject.TN
                                            }
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-7 mil-mt-suptitle-offset",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* Swiper */.tq, {
                                        ...sliderProps/* SliderProps.milReviewsSlider */.M.milReviewsSlider,
                                        className: "swiper-container mil-reviews-slider",
                                        children: testimonial_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                                                className: "swiper-slide",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "mil-review-frame mil-mb-30",
                                                    "data-swiper-parallax-x": "-200",
                                                    "data-swiper-parallax-opacity": "0",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "mil-reviev-head mil-up",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "mil-left",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "mil-quote",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "/img/icons/12.svg",
                                                                                alt: "icon"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "mil-review-avatar",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: item.image,
                                                                                alt: item.name
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "mil-name",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                            className: "mil-upper",
                                                                            children: item.name
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "mil-text-sm mil-dark-soft",
                                                                            children: item.role
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "mil-up",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "mil-review-text",
                                                                "data-swiper-parallax": "-60",
                                                                children: item.text
                                                            })
                                                        })
                                                    ]
                                                })
                                            }, `testimonial-slider-item-${key}`))
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mil-nav-buttons mil-reviews-nav mil-up",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mil-slider-button mil-process-prev",
                                                children: "Prev"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mil-slider-button mil-process-next",
                                                children: "Next"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            showPartners == 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12 mil-p-120-0",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mil-partners",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mil-background-grid mil-softened"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* Swiper */.tq, {
                                            ...sliderProps/* SliderProps.milInfiniteSlider */.M.milInfiniteSlider,
                                            className: "swiper-container mil-infinite-show mil-up",
                                            children: partners/* items.map */.e.map((item, key)=>/*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                                                    className: "swiper-slide",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: item.link,
                                                        target: "_blank",
                                                        className: "mil-partner-frame",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: item.image,
                                                            alt: item.alt
                                                        })
                                                    })
                                                }, `partners-slider-item-${key}`))
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Testimonial = (TestimonialSlider);


/***/ })

};
;