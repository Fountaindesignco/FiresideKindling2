"use strict";
exports.id = 8942;
exports.ids = [8942];
exports.modules = {

/***/ 11281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const SearchBarModule = ()=>{
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();
    const query = searchParams.get("key") || "";
    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(query);
    const createQueryString = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((name, value)=>{
        const params = new URLSearchParams(searchParams);
        params.set(name, value);
        return params.toString();
    }, [
        searchParams
    ]);
    const searchChangeHandler = (event)=>{
        setSearch(event.target.value);
    };
    const searchPressHandler = (event)=>{
        if (event.key === "Enter" || event.keyCode === 13) {
            router.push("/search" + "?" + createQueryString("key", search));
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mil-sidebar-search mil-up mil-mb-30",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                placeholder: "Search in blog ...",
                value: search,
                onChange: searchChangeHandler,
                onKeyDown: searchPressHandler,
                id: "searchField"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>{
                    router.push("/search" + "?" + createQueryString("key", search));
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/img/icons/13.svg",
                    alt: "search"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBarModule);


/***/ }),

/***/ 43564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _components_Sidebar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(34212);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(1128);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(42585);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/app/_lib/date.js
var date = __webpack_require__(27995);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(35985);
;// CONCATENATED MODULE: ./src/app/_components/SearchBar.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\Nova3\src\app\_components\SearchBar.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const SearchBar = (__default__);
// EXTERNAL MODULE: ./src/app/_lib/archives.js
var archives = __webpack_require__(82202);
// EXTERNAL MODULE: ./src/app/_lib/posts.js
var posts = __webpack_require__(47092);
// EXTERNAL MODULE: ./src/app/_lib/tags.js
var tags = __webpack_require__(63931);
// EXTERNAL MODULE: ./src/app/_lib/authors.js
var authors = __webpack_require__(50863);
;// CONCATENATED MODULE: ./src/app/_components/Sidebar.jsx










async function Sidebar() {
    const archives = await getAllArchives();
    const posts = await getAllRecentPosts();
    const tags = await getAllTags();
    const authors = await getAllAuthors();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mil-sidebar-frame",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                    className: "mil-upper mil-up mil-mb-30",
                    children: "Media Info"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "mil-list mil-dark mil-up mil-mb-30",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mil-text-sm",
                            children: "media@ruizarch.com"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mil-text-sm",
                            children: "authors@ruizarch.com"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mil-divider-lg mil-up mil-mb-30"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_shared_subset.Suspense, {
                    fallback: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "Loading..."
                    }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SearchBar, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mil-divider-lg mil-up mil-mb-30"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                    className: "mil-upper mil-up mil-mb-30",
                    children: "Recent Posts"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "mil-list mil-list-type-2 mil-dark mil-up mil-mb-30",
                    children: posts.slice(0, 4).map((item, key)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mil-text-sm mil-mb-10",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/blog/${item.id}`,
                                        children: item.title
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mil-additional-text mil-text-xs mil-upper mil-mb-15",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(date/* default */.Z, {
                                        dateString: item.date
                                    })
                                })
                            ]
                        }, `sidebar-posts-item-${key}`))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mil-divider-lg mil-up mil-mb-30"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                    className: "mil-upper mil-up mil-mb-30",
                    children: "Archives"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "mil-list mil-dark mil-up mil-mb-30",
                    children: archives.map((item, key)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mil-text-sm",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: `/blog/archive/${item.id}`,
                                children: [
                                    item.month,
                                    ", ",
                                    item.year
                                ]
                            })
                        }, `sidebar-archives-item-${key}`))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mil-divider-lg mil-up mil-mb-30"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                    className: "mil-upper mil-up mil-mb-30",
                    children: "Tags"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "mil-list mil-dark mil-up mil-mb-30",
                    children: tags.map((item, key)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mil-text-sm",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/blog/tag/${item.id}`,
                                children: item.title
                            })
                        }, `sidebar-tags-item-${key}`))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mil-divider-lg mil-up mil-mb-30"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                    className: "mil-upper mil-up mil-mb-30",
                    children: "Authors"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "mil-list mil-dark mil-mb-30",
                    children: authors.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: "mil-text-sm mil-up mil-mb-10",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: item.avatar,
                                    alt: item.title,
                                    className: "mil-pub-author"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/blog/author/${item.id}`,
                                    children: item.title
                                })
                            ]
                        }, `sidebar-author-item-${key}`))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mil-divider-lg mil-up mil-mb-30"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                    className: "mil-upper mil-up mil-mb-30",
                    children: "Social Media"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "mil-list mil-dark mil-up",
                    children: app/* social.map */.xs.map((item, key)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mil-text-sm",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: item.link,
                                target: "_blank",
                                children: item.title
                            })
                        }, `sidebar-social-item-${key}`))
                })
            ]
        })
    });
}
;
/* harmony default export */ const _components_Sidebar = (Sidebar);
async function getAllArchives() {
    const archivesData = await (0,archives/* getSortedArchivesData */.vF)();
    if (!archivesData) {
        return [];
    } else {
        return archivesData;
    }
}
async function getAllTags() {
    const tagsData = await (0,tags/* getSortedTagsData */.dQ)();
    if (!tagsData) {
        return [];
    } else {
        return tagsData;
    }
}
async function getAllAuthors() {
    const authorsData = await (0,authors/* getSortedAuthorsData */.lv)();
    if (!authorsData) {
        return [];
    } else {
        return authorsData;
    }
}
async function getAllRecentPosts() {
    const postsData = await (0,posts/* getSortedPostsData */.ld)();
    if (!postsData) {
        return [];
    } else {
        return postsData;
    }
}


/***/ }),

/***/ 82202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LN": () => (/* binding */ getAllArchivesIds),
/* harmony export */   "lt": () => (/* binding */ getArchiveData),
/* harmony export */   "vF": () => (/* binding */ getSortedArchivesData)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65872);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);





const postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "src/data/posts");
function getSortedArchivesData() {
    // Get file names under /posts
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    const allPostsData = fileNames.filter((fileName)=>fileName.includes(".md")).map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        };
    });
    // Sort posts by date
    const allSortedPosts = allPostsData.sort((a, b)=>{
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
    const archives = [];
    const monthOptions = {
        month: "long"
    };
    const yearsOptions = {
        year: "numeric"
    };
    allSortedPosts.map((item, index)=>{
        let dateObj = new Date(item.date);
        let itemObj = {
            "id": dateObj.getMonth() + 1 + "-" + dateObj.getFullYear(),
            "month": new Intl.DateTimeFormat("en-US", monthOptions).format(dateObj),
            "year": new Intl.DateTimeFormat("en-US", yearsOptions).format(dateObj)
        };
        if (!archives.some((e)=>e.id === itemObj.id)) {
            archives.push(itemObj);
        }
    });
    return archives;
}
function getAllArchivesIds() {
    // Get file names under /posts
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    const allPostsData = fileNames.filter((fileName)=>fileName.includes(".md")).map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        };
    });
    // Sort posts by date
    const allSortedPosts = allPostsData.sort((a, b)=>{
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
    const archives = [];
    const monthOptions = {
        month: "long"
    };
    const yearsOptions = {
        year: "numeric"
    };
    allSortedPosts.map((item, index)=>{
        let dateObj = new Date(item.date);
        let itemObj = {
            "id": dateObj.getMonth() + 1 + "-" + dateObj.getFullYear(),
            "month": new Intl.DateTimeFormat("en-US", monthOptions).format(dateObj),
            "year": new Intl.DateTimeFormat("en-US", yearsOptions).format(dateObj)
        };
        if (!archives.some((e)=>e.id === itemObj.id)) {
            archives.push(itemObj);
        }
    });
    archives.map((item)=>{
        return {
            params: {
                id: item.id
            }
        };
    });
}
async function getArchiveData(id) {
    // Get file names under /posts
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    const allPostsData = fileNames.filter((fileName)=>fileName.includes(".md")).map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        };
    });
    // Sort posts by date
    const allSortedPosts = allPostsData.sort((a, b)=>{
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
    const archives = [];
    const monthOptions = {
        month: "long"
    };
    const yearsOptions = {
        year: "numeric"
    };
    allSortedPosts.map((item, index)=>{
        let dateObj = new Date(item.date);
        let itemObj = {
            "id": dateObj.getMonth() + 1 + "-" + dateObj.getFullYear(),
            "month": new Intl.DateTimeFormat("en-US", monthOptions).format(dateObj),
            "year": new Intl.DateTimeFormat("en-US", yearsOptions).format(dateObj)
        };
        if (!archives.some((e)=>e.id === itemObj.id)) {
            archives.push(itemObj);
        }
    });
    let archiveData = [];
    archives.map((item)=>{
        if (item.id == id) {
            archiveData = item;
        }
    });
    return archiveData;
}


/***/ }),

/***/ 50863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g_": () => (/* binding */ getAllAuthorsIds),
/* harmony export */   "j0": () => (/* binding */ getAuthorData),
/* harmony export */   "lv": () => (/* binding */ getSortedAuthorsData)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65872);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80099);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36059);





const authorsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "src/data/posts/authors");
function getSortedAuthorsData() {
    // Get file names under /posts
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(authorsDirectory);
    const allPostsData = fileNames.map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(authorsDirectory, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b)=>{
        if (a.title < b.title) {
            return 1;
        } else {
            return -1;
        }
    });
}
function getAllAuthorsIds() {
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(authorsDirectory);
    return fileNames.map((fileName)=>{
        return {
            params: {
                id: fileName.replace(/\.md$/, "")
            }
        };
    });
}
async function getAuthorData(id) {
    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(authorsDirectory, `${id}.md`);
    if (fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(fullPath)) {
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        // Use remark to convert markdown into HTML string
        const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_3__/* .remark */ .j)().use(remark_html__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).process(matterResult.content);
        const contentHtml = processedContent.toString();
        // Combine the data with the id and contentHtml
        return {
            id,
            contentHtml,
            ...matterResult.data
        };
    } else {
        return;
    }
}


/***/ }),

/***/ 63931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cT": () => (/* binding */ getAllTagsIds),
/* harmony export */   "dQ": () => (/* binding */ getSortedTagsData),
/* harmony export */   "w5": () => (/* binding */ getTagData)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65872);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80099);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36059);





const tagsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "src/data/posts/tags");
function getSortedTagsData() {
    // Get file names under /posts
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(tagsDirectory);
    const allPostsData = fileNames.map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(tagsDirectory, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b)=>{
        if (a.title < b.title) {
            return 1;
        } else {
            return -1;
        }
    });
}
function getAllTagsIds() {
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(tagsDirectory);
    return fileNames.map((fileName)=>{
        return {
            params: {
                id: fileName.replace(/\.md$/, "")
            }
        };
    });
}
async function getTagData(id) {
    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(tagsDirectory, `${id}.md`);
    if (fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(fullPath)) {
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        // Use remark to convert markdown into HTML string
        const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_3__/* .remark */ .j)().use(remark_html__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).process(matterResult.content);
        const contentHtml = processedContent.toString();
        // Combine the data with the id and contentHtml
        return {
            id,
            contentHtml,
            ...matterResult.data
        };
    } else {
        return;
    }
}


/***/ })

};
;