(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\Projects\portfolio-website\src\main.ts */"zUnb");


/***/ }),

/***/ "0btM":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent, ProjectDlgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDlgComponent", function() { return ProjectDlgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _assets_projects_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/projects.json */ "C+Dh");
var _assets_projects_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/projects.json */ "C+Dh", 1);
/* harmony import */ var _assets_jobExp_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/jobExp.json */ "OQnC");
var _assets_jobExp_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/jobExp.json */ "OQnC", 1);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















function ContentComponent_mat_card_44_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const point_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](point_r4);
} }
function ContentComponent_mat_card_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-title", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "em", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-card-content", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, ContentComponent_mat_card_44_li_16_Template, 2, 1, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const exp_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", exp_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](exp_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", exp_r2.company, ", ", exp_r2.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", exp_r2.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", exp_r2.description);
} }
function ContentComponent_mat_grid_tile_49_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const project_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("href", project_r5.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function ContentComponent_mat_grid_tile_49_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const project_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("href", project_r5.gitHubLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function ContentComponent_mat_grid_tile_49_mat_chip_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-chip", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const elem_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", elem_r11, " ");
} }
function ContentComponent_mat_grid_tile_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, ContentComponent_mat_grid_tile_49_a_11_Template, 2, 1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, ContentComponent_mat_grid_tile_49_a_12_Template, 2, 1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-chip-list", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, ContentComponent_mat_grid_tile_49_mat_chip_19_Template, 2, 1, "mat-chip", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const project_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", project_r5.imgPaths[project_r5.curImgIdx], _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("id", project_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", project_r5.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", project_r5.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", project_r5.gitHubLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", project_r5.desc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", project_r5.stack);
} }
const _c0 = function (a0) { return { "margin-right": a0 }; };
const _c1 = function (a0, a1, a2) { return { "one-col": a0, "two-col": a1, "three-col": a2 }; };
const _c2 = function (a0) { return { "current-selection-img": a0 }; };
function ProjectDlgComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProjectDlgComponent_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.project.curImgIdx = i_r3; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c2, i_r3 == ctx_r0.project.curImgIdx));
} }
function ProjectDlgComponent_mat_chip_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-chip", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const elem_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", elem_r6, " ");
} }
const _c3 = ".content[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n}\r\n\r\n.section[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  padding-top: 60px;\r\n  flex-direction: column;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  place-content: center flex-start;\r\n  align-items: center;\r\n}\r\n\r\n@media screen and (max-width: 850px)  {\r\n  #welcome[_ngcontent-%COMP%] {\r\n    place-content: unset !important;\r\n    margin-top: 40px;\r\n  }\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 30px;\r\n  color: darkcyan;\r\n  margin-bottom: 35px;\r\n}\r\n\r\n.welcome-section[_ngcontent-%COMP%] {\r\n  height: 100vh !important;\r\n  min-height: none;\r\n  padding-top: none;\r\n  text-align: center;\r\n}\r\n\r\n.exp-card[_ngcontent-%COMP%] {\r\n  max-width: 1133px;\r\n}\r\n\r\n.exp-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style-type: circle;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n}\r\n\r\n.card-text[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n}\r\n\r\nmat-card-title[_ngcontent-%COMP%] {\r\n  line-height: 1.2em;\r\n}\r\n\r\nmat-card-content[_ngcontent-%COMP%] {\r\n  line-height: 1.4;\r\n}\r\n\r\n.expand-button[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  font-size: 46px;\r\n  color: grey;\r\n  animation: MoveUpDown 1s linear infinite;\r\n  -webkit-animation-delay: 2s;\r\n}\r\n\r\n@keyframes MoveUpDown {\r\n  0%,\r\n  100% {\r\n    bottom: 20;\r\n  }\r\n  50% {\r\n    bottom: 30px;\r\n  }\r\n}\r\n\r\n#container[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n#text[_ngcontent-%COMP%] {\r\n  color: darkcyan;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n#cursor[_ngcontent-%COMP%] {\r\n  vertical-align: middle;\r\n  width: 1px;\r\n  height: 35px;\r\n  background-color: black;\r\n  animation: blink 0.75s step-end infinite;\r\n}\r\n\r\n@keyframes blink {\r\n  from,\r\n  to {\r\n    background-color: transparent;\r\n  }\r\n  50% {\r\n    background-color: black;\r\n  }\r\n}\r\n\r\n.name[_ngcontent-%COMP%] {\r\n  border-bottom: solid darkcyan;\r\n}\r\n\r\n.images-selector[_ngcontent-%COMP%] {\r\n  background-color: grey;\r\n  border-radius: 50px;\r\n  height: 15px;\r\n  width: 15px;\r\n  display: inline-block;\r\n  margin-right: 4px;\r\n  margin-left: 4px;\r\n}\r\n\r\nbutton.images-selector[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n  background-color: green !important;\r\n}\r\n\r\n.current-selection-img[_ngcontent-%COMP%] {\r\n  background-color: black !important;\r\n}\r\n\r\n.project-images[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.image-style[_ngcontent-%COMP%] {\r\n  height: 260px;\r\n  width: 100%;\r\n  border-top-right-radius: 7px;\r\n  border-top-left-radius: 7px;\r\n}\r\n\r\n.project-stack-style[_ngcontent-%COMP%] {\r\n  width: 95%;\r\n}\r\n\r\n.fade[_ngcontent-%COMP%] {\r\n  animation: fade ease 2s;\r\n}\r\n\r\n@keyframes fade {\r\n  from {\r\n    opacity: 0.4;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.one-col[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n}\r\n\r\n.two-col[_ngcontent-%COMP%] {\r\n  max-width: 800px;\r\n}\r\n\r\n.three-col[_ngcontent-%COMP%] {\r\n  max-width: 1180px;\r\n}\r\n\r\n.about-me-card[_ngcontent-%COMP%] {\r\n  margin-bottom: 35px;\r\n}\r\n\r\n.about-me-container[_ngcontent-%COMP%] {\r\n  max-width: 1165px;\r\n}\r\n\r\n.project-card[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  width: 90%;\r\n  height: 90%;\r\n}\r\n\r\n.project-card-content[_ngcontent-%COMP%] {\r\n  padding: 1rem;\r\n  height: 100%;\r\n}\r\n\r\n.project-card-title[_ngcontent-%COMP%] {\r\n  font-size: 23px;\r\n  font-weight: 400;\r\n  padding-bottom: 6px;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n  border-radius: 7px;\r\n}\r\n\r\n.mat-standard-chip[_ngcontent-%COMP%] {\r\n  min-height: 26px !important;\r\n}\r\n\r\n#JobCards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:not(:first-child) {\r\n  margin-top: 35px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLCtCQUErQjtJQUMvQixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0U7O0lBRUUsVUFBVTtFQUNaO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0U7O0lBRUUsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7QUFDRjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJjb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5OyAqL1xyXG4gIC8qIG1pbi1oZWlnaHQ6IDU1MHB4OyAqL1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSAge1xyXG4gICN3ZWxjb21lIHtcclxuICAgIHBsYWNlLWNvbnRlbnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5jb250ZW50IGRpdiBoMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogZGFya2N5YW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxufVxyXG5cclxuLndlbGNvbWUtc2VjdGlvbiB7XHJcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IG5vbmU7XHJcbiAgcGFkZGluZy10b3A6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZXhwLWNhcmQge1xyXG4gIG1heC13aWR0aDogMTEzM3B4O1xyXG59XHJcblxyXG4uZXhwLWNhcmQgdWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbn1cclxuXHJcbi5jYXJkLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcclxufVxyXG5cclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxufVxyXG5cclxuLmV4cGFuZC1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDIwcHg7XHJcbiAgZm9udC1zaXplOiA0NnB4O1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIGFuaW1hdGlvbjogTW92ZVVwRG93biAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDJzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIE1vdmVVcERvd24ge1xyXG4gIDAlLFxyXG4gIDEwMCUge1xyXG4gICAgYm90dG9tOiAyMDtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3RleHQge1xyXG4gIGNvbG9yOiBkYXJrY3lhbjtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcblxyXG4jY3Vyc29yIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGFuaW1hdGlvbjogYmxpbmsgMC43NXMgc3RlcC1lbmQgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmxpbmsge1xyXG4gIGZyb20sXHJcbiAgdG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB9XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCBkYXJrY3lhbjtcclxufVxyXG5cclxuLmltYWdlcy1zZWxlY3RvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG5cclxuYnV0dG9uLmltYWdlcy1zZWxlY3RvciA6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXJyZW50LXNlbGVjdGlvbi1pbWcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWltYWdlcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5pbWFnZS1zdHlsZSB7XHJcbiAgaGVpZ2h0OiAyNjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuLnByb2plY3Qtc3RhY2stc3R5bGUge1xyXG4gIHdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbi5mYWRlIHtcclxuICBhbmltYXRpb246IGZhZGUgZWFzZSAycztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5vbmUtY29sIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4udHdvLWNvbCB7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxufVxyXG5cclxuLnRocmVlLWNvbCB7XHJcbiAgbWF4LXdpZHRoOiAxMTgwcHg7XHJcbn1cclxuXHJcbi5hYm91dC1tZS1jYXJkIHtcclxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG59XHJcblxyXG4uYWJvdXQtbWUtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDExNjVweDtcclxufVxyXG5cclxuLnByb2plY3QtY2FyZCB7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4ucHJvamVjdC1jYXJkLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucHJvamVjdC1jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4ubWF0LXN0YW5kYXJkLWNoaXAge1xyXG4gIG1pbi1oZWlnaHQ6IDI2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI0pvYkNhcmRzIG1hdC1jYXJkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tdG9wOiAzNXB4O1xyXG59XHJcbiJdfQ== */";
class ContentComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.projects = _assets_projects_json__WEBPACK_IMPORTED_MODULE_2__;
        this.jobExp = _assets_jobExp_json__WEBPACK_IMPORTED_MODULE_3__;
    }
    ngOnInit() {
        this.breakpoint = this.checkBreakpoints(window);
        // List of sentences
        var _CONTENT = [
            "Software Engineer",
            "Mobile Developer",
            "University Student",
            "Full-Stack Developer"
        ];
        // Current sentence being processed
        var _PART = 0;
        // Character number of the current sentence being processed 
        var _PART_INDEX = 0;
        // Holds the handle returned from setInterval
        var _INTERVAL_VAL;
        // Element that holds the text
        var _ELEMENT = document.querySelector("#text");
        // Cursor element 
        var _CURSOR = document.querySelector("#cursor");
        // Implements typing effect
        function Type() {
            // Get substring with 1 characater added
            var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
            _ELEMENT.innerHTML = text;
            _PART_INDEX++;
            // If full sentence has been displayed then start to delete the sentence after some time
            if (text === _CONTENT[_PART]) {
                // Hide the cursor
                _CURSOR.style.display = 'none';
                clearInterval(_INTERVAL_VAL);
                setTimeout(function () {
                    _INTERVAL_VAL = setInterval(Delete, 50);
                }, 2000);
            }
        }
        // Implements deleting effect
        function Delete() {
            // Get substring with 1 characater deleted
            var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
            _ELEMENT.innerHTML = text;
            _PART_INDEX--;
            // If sentence has been deleted then start to display the next sentence
            if (text === '') {
                clearInterval(_INTERVAL_VAL);
                // If current sentence was last then display the first one, else move to the next
                if (_PART == (_CONTENT.length - 1))
                    _PART = 0;
                else
                    _PART++;
                _PART_INDEX = 0;
                // Start to display the next sentence after some time
                setTimeout(function () {
                    _CURSOR.style.display = 'inline-block';
                    _INTERVAL_VAL = setInterval(Type, 100);
                }, 200);
            }
        }
        // Start the typing effect on load
        _INTERVAL_VAL = setInterval(Type, 100);
    }
    openDialog(project) {
        this.dialog.open(ProjectDlgComponent, {
            data: { project }
        });
    }
    closeDlg() {
        this.dialog.closeAll();
    }
    changeImgClicked(id) {
        var element = document.getElementById(id);
        element.classList.remove("fade");
        setTimeout(function () { element.classList.add("fade"); }, 10);
    }
    onResize(event) {
        this.breakpoint = this.checkBreakpoints(event.target);
    }
    //Determine breakpoints for nominations grid list 
    checkBreakpoints(target) {
        if (target.innerWidth <= 1000) {
            return 1;
        }
        if (target.innerWidth <= 1400) {
            return 2;
        }
        return 3;
    }
}
ContentComponent.??fac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
ContentComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ContentComponent, selectors: [["app-content"]], decls: 50, vars: 12, consts: [["fxLayout", "column", "id", "data-scroll-container", 1, "content"], ["id", "welcome", "fxLayout", "column", "fxLayoutAlign", "center center", "data-scroll-section", "", 1, "welcome-section"], ["src", "assets/images/profile-pic.png", 2, "border-radius", "50%", "width", "100%", "background-color", "darkcyan", "height", "100%", "border", "5px solid gray"], [2, "margin-bottom", "100px", "margin-top", "20px"], [2, "font-size", "30px", "line-height", "1.5em"], [1, "name"], ["id", "container"], ["id", "text"], ["id", "cursor"], [1, "expand-button"], ["id", "aboutMe", "data-scroll-section", "", "data-aos", "fade-up", 1, "section"], ["data-aos", "fade-in"], [1, "about-me-container", 3, "fxLayout"], ["fxLayout", "column", 1, "mat-elevation-z5", "about-me-card", 3, "ngStyle"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [2, "width", "100%"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "card-text"], ["fxLayout", "column", 1, "mat-elevation-z5", "about-me-card"], [1, "card-text"], ["id", "Experience", "data-scroll-section", "", "data-aos", "fade-up", "fxLayout", "column", 1, "section"], ["id", "JobCards", "fxLayout", "column"], ["class", "mat-elevation-z5 exp-card", 4, "ngFor", "ngForOf"], ["id", "Projects", "data-scroll-section", "", "data-aos", "fade-up", 1, "section"], ["rowHeight", "650px", 2, "width", "100%", 3, "cols", "ngClass", "resize"], [4, "ngFor", "ngForOf"], [1, "mat-elevation-z5", "exp-card"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "margin-bottom", "0px !important"], ["fxLayoutAlign", " center", 2, "margin-right", "10px"], [2, "margin-right", "10px"], ["height", "40px", 3, "src"], [2, "font-weight", "100"], [2, "color", "#A9A9A9"], ["fxLayout", "column", 1, "mat-elevation-z5", "project-card"], ["fxLayout", "column", 1, "card-text", 2, "height", "100%"], [1, "image-style", 3, "src", "id"], ["fxLayout", "column", 1, "project-card-content"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "project-card-title"], ["target", "_blank", 3, "href", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 2, "height", "100%"], [1, "project-stack-style"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "example-chip"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href"], [1, "fa", "fa-link", 2, "color", "black"], [1, "fa", "fa-github", 2, "margin-left", "5px", "color", "black"], ["cdkDrag", "", 1, "example-box"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Hi there my name is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Daanyaal Tahir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " and I'm a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "About Me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-card-title", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Introduction ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-card-content", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " My name is Daanyaal Tahir and I'm currenly attending Ontario Tech University for Software Engineering. I am a hard-worker and succesfully acheived a 4.30 cGPA. Additionally I'm passionate about programming and am always willing to learn. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-card-title", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-card-content", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Languages:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " Java, Python, C++, Typescript/JavaScript, HTML, CSS/SCSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Software/Frameworks/Technologies:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Nodejs, AngularJS, Docker, Redux, Vim, vscode, RESTful API, GIT Labs, mySQL, Android Studio, Bash, Linux, Windows ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, ContentComponent_mat_card_44_Template, 17, 6, "mat-card", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "mat-grid-list", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("resize", function ContentComponent_Template_mat_grid_list_resize_48_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, ContentComponent_mat_grid_tile_49_Template, 20, 7, "mat-grid-tile", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("fxLayout", ctx.breakpoint == 1 ? "column" : "row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c0, ctx.breakpoint == 1 ? "0px" : "35px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.jobExp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("cols", ctx.breakpoint)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction3"](8, _c1, ctx.breakpoint == 1, ctx.breakpoint == 2, ctx.breakpoint == 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.projects);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultStyleDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultClassDirective"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridTile"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChip"]], styles: [_c3] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();
class ProjectDlgComponent {
    constructor(data) { this.project = Object.assign({}, data.project); }
    ngOnInit() {
        // will log the entire data object
        // console.log(this.project)
    }
}
ProjectDlgComponent.??fac = function ProjectDlgComponent_Factory(t) { return new (t || ProjectDlgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ProjectDlgComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProjectDlgComponent, selectors: [["ViewProjectDlg"]], decls: 10, vars: 5, consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", "fxLayout", "column", "fxLayoutAlign", "space-between center", 2, "height", "100%"], [1, "project-images"], [1, "image-style", 3, "src", "id"], ["fxLayout", "row", "fxLayoutAlign", "center end"], [4, "ngFor", "ngForOf"], [1, "project-stack-style"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "example-chip"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 1, "images-selector", 3, "ngClass", "click"], ["cdkDrag", "", 1, "example-box"]], template: function ProjectDlgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, ProjectDlgComponent_div_6_Template, 2, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-chip-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, ProjectDlgComponent_mat_chip_9_Template, 2, 1, "mat-chip", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.project.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx.project.imgPaths[ctx.project.curImgIdx], _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("id", ctx.project.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.project.imgPaths);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.project.stack);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipList"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultClassDirective"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChip"]], styles: [_c3] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProjectDlgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ViewProjectDlg',
                templateUrl: './view-project-dialog.html',
                styleUrls: ['./content.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C+Dh":
/*!**********************************!*\
  !*** ./src/assets/projects.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Item Inventory\",\"imgPaths\":[\"assets/images/inventory-website.png\"],\"stack\":[\"PHP\",\"ReactJS\",\"Javascript\",\"MySQL\",\"Bootstrap\",\"Apache Server\",\"Custom API\"],\"class\":\"fade-right\",\"curImgIdx\":0,\"id\":\"img1\",\"gitHubLink\":\"\",\"desc\":\"Created a clean and modern Inventory Web Application that allows the user to add items with many parameter to a database, delete, update, and fetch them. The website was made responsive and incorporates many languages and technologies. \"},{\"title\":\"Space Shooter\",\"imgPaths\":[\"assets/images/space 3.png\",\"assets/images/space 1.png\"],\"stack\":[\"Python\",\"Pygame\",\"Sprites\"],\"class\":\"fade-right\",\"curImgIdx\":0,\"id\":\"img1\",\"gitHubLink\":\"https://github.com/DaanyaalTahir/space-shooter\",\"desc\":\"Space shooter game utilizing python, pygame, and sprites. User has option of selectng difficulty level. Once selected the user then shoots incoming asteroids given 5 lives until the wave is completed. \"},{\"title\":\"Movie Nomination\",\"imgPaths\":[\"assets/images/movieSearch.png\",\"assets/images/movFinder 2.png\"],\"stack\":[\"Angular\",\"Typescript\",\"HTML\",\"CSS\",\"Angular Material\",\"OMDB API\"],\"class\":\"fade-right\",\"curImgIdx\":0,\"id\":\"img2\",\"gitHubLink\":\"https://github.com/DaanyaalTahir/movie-finder\",\"link\":\"https://daanyaaltahir.github.io/movie-finder/\",\"desc\":\"Completed Shopify Challenge where users can search for movies and nominate titles found in the OMDb API. Nominations can then be viewed in the Nomination tab where it will be displayed as a grid and the user has the option of removing selections.\"},{\"title\":\"Vehicle Registration\",\"imgPaths\":[\"assets/images/car 2.png\",\"assets/images/car 1.png\",\"assets/images/car 3.png\"],\"stack\":[\"Java\",\"OOP\",\"Polymorphism\"],\"class\":\"fade-right\",\"curImgIdx\":0,\"id\":\"img3\",\"gitHubLink\":\"https://github.com/DaanyaalTahir/vehicle-registration\",\"desc\":\"Created java GUI project that utlizes polymorphism as well as class interation. User can add a type of vehicle (car, truck, or boat) and input various aspects about the vehicle such as color, millage, make, etc. Following that the user can then view all inputted fields in a table where the user can sort their vehicles depending on specific aspects like millage. \"},{\"title\":\"Connect Four\",\"imgPaths\":[\"assets/images/connectFourTitle.png\",\"assets/images/connect4 1.png\",\"assets/images/connect4 3.png\"],\"stack\":[\"Java\",\"OOP\",\"Android Studio\"],\"class\":\"fade-right\",\"curImgIdx\":0,\"id\":\"img4\",\"gitHubLink\":\"https://github.com/DaanyaalTahir/ConnectFour\",\"desc\":\"Created a two player Connect Four game app using android studio. The game includes many animations as well as a clean GUI. I'm currently working on incorporating the minimax algorithm in order to have a single player mode.\"},{\"title\":\"Portfolio Website\",\"imgPaths\":[\"assets/images/portfolioWebsite.png\"],\"stack\":[\"Javascript\",\"Angular\",\"Angular Materials\",\"particle.js\",\"HTML\",\"CSS\",\"AOS Library\"],\"class\":\"fade-right\",\"curImgIdx\":0,\"id\":\"img4\",\"gitHubLink\":\"https://github.com/DaanyaalTahir/DaanyaalTahir.github.io\",\"desc\":\"Created website to display my experiencs, projects, and skills. Utilizes many animations such as fading, sliding, etc.\"}]");

/***/ }),

/***/ "OQnC":
/*!********************************!*\
  !*** ./src/assets/jobExp.json ***!
  \********************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Web Developer\",\"company\":\"Rogers Communications\",\"location\":\"Remote\",\"img\":\"assets/images/rogers.png\",\"description\":[\"Worked directly on sportsnet.ca which attracts millions of users using ReactJS, react-router, redux, SCSS, HTML, JavaScript, and more.\",\"Created internal tools utilized by developers and stakeholders using ReactJS, NodeJS, AWS s3, JavaScript, etc.\",\"Worked with a team that included devs, ui designers, project managers and QA testers in agile scrum environment to construct Olympics, Football, WNBA, and Soccer pages on sportsnet.ca \",\"Created and worked on tickets from Jira Board and deployed code to GitHub\",\"Developed reusable components to be utilized throughout sportsnet and within internal tools\",\"Demoed work to stakeholders and other teams\"],\"date\":\"May 2021 - August 2021\"},{\"title\":\"Full Stack Developer\",\"company\":\"Completely Managed Inc.\",\"location\":\"Newmarket, ON\",\"img\":\"assets/images/CM.png\",\"description\":[\"Worked alongside 5 developers on website to display network analytics to customers. \",\"Led and organized projects.\",\"Drove team meetings and supported other programmers when required.\",\"Interviewed potential candidates to help hire new staff, and later trained new hires.\",\"Utilized JS/TS, CSS/SCSS, Redux and AngularJS framework for frontend to generate modern and clean UI???s such as a wizard for scan process/configuration, scan scheduling, scan progress bar, network results etc.\",\"Utilized NodeJS, Loopback API and HTTP request to redo the backend for networkscans to be more efficient and to communicate with frontend.\",\"Parsed and applied user defined profiles to devices found on network before sending to frontend during scans.\",\"Displayed live feed of data for all running scans using WebSocket???s.\",\"Accessed project sandboxes for frontend, backend, database etc. with Docker and docker-compose.\",\"Stored and manipulated data on MySQL database and mongoDB\",\"Restructured MySQL table used for network scans to be more efficient/organized.\",\"Utilized Linux to access, edit (vim) and search for files (grep)\",\"Created branches using GitLab for specific bugs/features and later merged to master branch.\"],\"date\":\"Jun 2020 - Dec 2020\"}]");

/***/ }),

/***/ "RgEp":
/*!**************************************************************!*\
  !*** ./src/app/side-navigation/side-navigation.component.ts ***!
  \**************************************************************/
/*! exports provided: SideNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationComponent", function() { return SideNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");



class SideNavigationComponent {
    constructor() { }
    ngOnInit() {
        particlesJS.load('particles-js', 'assets/particles.json', function () {
            console.log('callback - particles-js config loaded');
        });
    }
}
SideNavigationComponent.??fac = function SideNavigationComponent_Factory(t) { return new (t || SideNavigationComponent)(); };
SideNavigationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SideNavigationComponent, selectors: [["app-side-navigation"]], decls: 35, vars: 0, consts: [["fxLayout", "column", 1, "nav-bar"], ["id", "particles-js", 2, "background-color", "lightgrey", "height", "100%"], [2, "position", "absolute", "padding", "20px"], [1, "title"], ["fxLayout", "row", "fxLayoutAlign", "center"], [1, "icon-style"], ["href", "https://github.com/DaanyaalTahir", "target", "_blank"], [1, "fa", "fa-github-alt", "fa-2x"], ["href", "https://www.linkedin.com/in/daanyaal-tahir-2485111b7/", "target", "_blank"], [1, "fa", "fa-linkedin", "fa-2x"], ["href", "mailto:tahir.daanyaal@gmail.com", "target", "_blank"], [1, "fa", "fa-envelope", "fa-2x"], [1, "nav-menu"], ["id", "menu", 1, "menu"], ["href", "#welcome", 1, "current"], ["href", "#aboutMe"], ["href", "#Experience"], ["href", "#Projects"]], template: function SideNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Daanyaal Tahir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Welcome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"]], styles: [".nav-bar[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 100%;\n  top: 0;\n  position: fixed;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.nav-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  margin-top: 60px;\n}\n\n.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 3px;\n  left: 20px;\n  top: 0;\n  height: calc(100% - 78px);\n  background: white;\n  z-index: 1;\n  margin-top: 39px;\n}\n\n.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 25px 0;\n  padding-left: 20px;\n}\n\n.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: font-size 0.25s, color 0.25s;\n  text-decoration: none;\n  color: darkcyan;\n  font-size: 20px;\n  font-weight: normal;\n}\n\n.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white !important;\n}\n\n.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  content: \"\";\n  transition: transform 0.5s;\n  position: absolute;\n  background: black;\n  width: 20px;\n  height: 20px;\n  transform: scale(1);\n  left: 8px;\n  z-index: 1;\n  border-radius: 30px;\n  border: 4px solid darkgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpZGUtbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBQ0YiLCJmaWxlIjoic2lkZS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1iYXIge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXYtbWVudSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG4ubmF2LW1lbnUgdWw6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDNweDtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDc4cHgpO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbWFyZ2luLXRvcDogMzlweDtcclxufVxyXG5cclxuLm5hdi1tZW51IHVsIGxpIHtcclxuICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ubmF2LW1lbnUgdWwgbGkgYSB7XHJcbiAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuMjVzLCBjb2xvciAwLjI1cztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGRhcmtjeWFuO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4ubmF2LW1lbnUgdWwgbGkgYTpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtbWVudSB1bCBsaSBhOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgbGVmdDogOHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBib3JkZXI6IDRweCBzb2xpZCBkYXJrZ3JleTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SideNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-navigation',
                templateUrl: './side-navigation.component.html',
                styleUrls: ['./side-navigation.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/content.component */ "0btM");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./side-navigation/side-navigation.component */ "RgEp");







function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Daanyaal Tahir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "GitHub");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Linkedin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-side-navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c0 = function (a0) { return { "content-margin": a0 }; };
class AppComponent {
    constructor() {
        this.title = 'portfolio-website';
        this.displayNav = true;
    }
    ngOnInit() {
    }
    displaySidebar() {
        if (window.innerWidth > 850) {
            return true;
        }
        return false;
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 5, consts: [[1, "app"], [4, "ngIf"], [3, "ngClass"], [1, "title"], ["fxLayout", "row", "fxLayoutAlign", "center"], [1, "icon-style"], ["href", "https://github.com/DaanyaalTahir", "target", "_blank"], [1, "fa", "fa-github-alt", "fa-2x"], ["href", "https://www.linkedin.com/in/daanyaal-tahir-2485111b7/", "target", "_blank"], [1, "fa", "fa-linkedin", "fa-2x"], ["href", "mailto:tahir.daanyaal@gmail.com", "target", "_blank"], [1, "fa", "fa-envelope", "fa-2x"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AppComponent_div_1_Template, 20, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, AppComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.displaySidebar());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.displaySidebar());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](3, _c0, ctx.displaySidebar()));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultClassDirective"], _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_5__["SideNavigationComponent"]], styles: [".app[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\n\r\n.content-margin[_ngcontent-%COMP%] {\r\n    margin-left: 250px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5jb250ZW50LW1hcmdpbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-navigation/side-navigation.component */ "RgEp");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/content.component */ "0btM");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
















class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_4__["SideNavigationComponent"],
        _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
        _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ProjectDlgComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_4__["SideNavigationComponent"],
                    _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
                    _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ProjectDlgComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
//Active navigation on scroll
window.addEventListener('scroll', event => {
    let navigationLinks = document.querySelectorAll('ul.menu li a');
    let fromTop = window.scrollY;
    //  console.log(navigationLinks)
    //   console.log({fromTop})
    for (var i = 0; i <= navigationLinks.length - 1; i++) {
        let section = document.querySelector(navigationLinks[i].hash);
        // console.log("secvtion ", section.offsetTop)
        if (section.offsetTop - 300 <= fromTop && fromTop != 0) {
            navigationLinks[i].classList.add('current');
            if (navigationLinks[i + 1]) {
                navigationLinks[i + 1].classList.remove('current');
            }
            if (navigationLinks[i - 1]) {
                navigationLinks[i - 1].classList.remove('current');
            }
        }
    }
});
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map