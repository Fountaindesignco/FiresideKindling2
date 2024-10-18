"use strict";
exports.id = 9897;
exports.ids = [9897];
exports.modules = {

/***/ 27995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Date)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6746);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);


function Date({ dateString  }) {
    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(dateString);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
        dateTime: dateString,
        children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, "dd.MM.yyyy")
    });
}


/***/ }),

/***/ 47092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AU": () => (/* binding */ getPostData),
/* harmony export */   "KG": () => (/* binding */ getAllPostsIds),
/* harmony export */   "LE": () => (/* binding */ getArchivePosts),
/* harmony export */   "Lx": () => (/* binding */ generateJsonPostsData),
/* harmony export */   "Qj": () => (/* binding */ getTagPosts),
/* harmony export */   "S2": () => (/* binding */ getCategoryPosts),
/* harmony export */   "UZ": () => (/* binding */ getAuthorPosts),
/* harmony export */   "Xr": () => (/* binding */ getFeaturedPostsData),
/* harmony export */   "hM": () => (/* binding */ getPaginatedPostsData),
/* harmony export */   "ld": () => (/* binding */ getSortedPostsData)
/* harmony export */ });
/* unused harmony export getRelatedPosts */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65872);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80099);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36059);





const postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "src/data/posts");
const jsonDir = "src/data/.json";
function getSortedPostsData() {
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
    return allPostsData.sort((a, b)=>{
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}
function getCategoryPosts(cat_id) {
    // Get file names under /posts
    const allData = [];
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    const allPostsData = fileNames.filter((fileName)=>fileName.includes(".md")).map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        const cats = matterResult.data.categories;
        if (cats != undefined) {
            const catsSlug = cats.map((element)=>{
                return element.toLowerCase().replace(" ", "-");
            });
            if (catsSlug != undefined) {
                // Check current category
                if (catsSlug.includes(cat_id)) {
                    // Combine the data with the id
                    allData.push({
                        id,
                        ...matterResult.data
                    });
                }
            }
        }
    });
    // Sort posts by date
    return allData.sort((a, b)=>{
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}
function getTagPosts(tag_id) {
    // Get file names under /posts
    const allData = [];
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    const allPostsData = fileNames.filter((fileName)=>fileName.includes(".md")).map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        const tags = matterResult.data.tags;
        if (tags != undefined) {
            const tagsSlug = tags.map((element)=>{
                return element.toLowerCase().replace(" ", "-");
            });
            if (tagsSlug != undefined) {
                // Check current category
                if (tagsSlug.includes(tag_id)) {
                    // Combine the data with the id
                    allData.push({
                        id,
                        ...matterResult.data
                    });
                }
            }
        }
    });
    // Sort posts by date
    return allData.sort((a, b)=>{
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}
function getAuthorPosts(author_id) {
    // Get file names under /posts
    const allData = [];
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    const allPostsData = fileNames.filter((fileName)=>fileName.includes(".md")).map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        const author = matterResult.data.author.toLowerCase().replace(" ", "-");
        // Check current category
        if (author == author_id) {
            // Combine the data with the id
            allData.push({
                id,
                ...matterResult.data
            });
        }
    });
    // Sort posts by date
    return allData.sort((a, b)=>{
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}
function getArchivePosts(archive_id) {
    // Get file names under /posts
    const allData = [];
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    const allPostsData = fileNames.filter((fileName)=>fileName.includes(".md")).map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        const dateObj = new Date(matterResult.data.date);
        const dateSlug = dateObj.getMonth() + 1 + "-" + dateObj.getFullYear();
        // Check current category
        if (dateSlug == archive_id) {
            // Combine the data with the id
            allData.push({
                id,
                ...matterResult.data
            });
        }
    });
    // Sort posts by date
    return allData.sort((a, b)=>{
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}
function getPaginatedPostsData(limit, page) {
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
    allPostsData.sort((a, b)=>{
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
    const paginatedPosts = allPostsData.slice((page - 1) * limit, page * limit);
    return {
        posts: paginatedPosts,
        total: allPostsData.length
    };
}
function getFeaturedPostsData(ids) {
    // Get file names under /posts
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    const allData = [];
    fileNames.filter((fileName)=>fileName.includes(".md")).map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        if (ids.includes(id)) {
            // Combine the data with the id
            allData.push({
                id,
                ...matterResult.data
            });
        }
    });
    // Sort posts by date
    return allData.sort((a, b)=>{
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}
function getRelatedPosts(current_id) {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allData = [];
    fileNames.filter((fileName)=>fileName.includes(".md")).map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        // Exclude current id from result
        if (id != current_id) {
            // Combine the data with the id
            allData.push({
                id,
                ...matterResult.data
            });
        }
    });
    // Sort posts by date
    return allData.sort((a, b)=>{
        if (a.category > b.category) {
            return 1;
        } else {
            return -1;
        }
    });
}
function getAllPostsIds() {
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    return fileNames.filter((fileName)=>fileName.includes(".md")).map((fileName)=>{
        return {
            params: {
                id: fileName.replace(/\.md$/, "")
            }
        };
    });
}
async function getPostData(id) {
    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, `${id}.md`);
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
async function generateJsonPostsData() {
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
        const content = matterResult.content;
        // Use remark to convert markdown into HTML string
        //const processedContent = await remark()
        //.use(html)
        //.process(matterResult.content)
        //const contentHtml = processedContent.toString()
        // Combine the data with the id
        return {
            id,
            content,
            ...matterResult.data
        };
    });
    // Sort posts by date
    const posts = allPostsData.sort((a, b)=>{
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
    // Create JSON File
    try {
        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(jsonDir)) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(jsonDir);
        }
        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(`${jsonDir}/posts.json`, JSON.stringify(posts));
    } catch (err) {
        console.error(err);
    }
}


/***/ })

};
;