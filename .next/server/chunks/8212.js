"use strict";
exports.id = 8212;
exports.ids = [8212];
exports.modules = {

/***/ 78212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M9": () => (/* binding */ getSortedServicesData),
/* harmony export */   "QC": () => (/* binding */ getAllServicesIds),
/* harmony export */   "Y_": () => (/* binding */ getServiceData)
/* harmony export */ });
/* unused harmony export getRelatedServices */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65872);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80099);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36059);





const servicesDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "src/data/services");
function getSortedServicesData() {
    // Get file names under /posts
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(servicesDirectory);
    const allData = fileNames.map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(servicesDirectory, fileName);
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
    return allData.sort((a, b)=>{
        if (a.id > b.id) {
            return 1;
        } else {
            return -1;
        }
    });
}
function getRelatedServices(current_id) {
    // Get file names under /posts
    const fileNames = fs.readdirSync(servicesDirectory);
    const allData = [];
    fileNames.filter((fileName)=>fileName.includes(".md")).map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path.join(servicesDirectory, fileName);
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
        if (a.id > b.id) {
            return 1;
        } else {
            return -1;
        }
    });
}
function getAllServicesIds() {
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(servicesDirectory);
    return fileNames.map((fileName)=>{
        return {
            params: {
                id: fileName.replace(/\.md$/, "")
            }
        };
    });
}
async function getServiceData(id) {
    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(servicesDirectory, `${id}.md`);
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