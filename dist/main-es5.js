(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\free\dezibd\dez\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "27p+":
    /*!**************************************************************************!*\
      !*** ./src/app/shared/components/menu-element/menu-element.component.ts ***!
      \**************************************************************************/

    /*! exports provided: MenuElementComponent */

    /***/
    function p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuElementComponent", function () {
        return MenuElementComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/popup.service */
      "dPqR");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MenuElementComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuElementComponent_div_21_Template_ul_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.isMobileMenu = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuElementComponent_div_21_Template_li_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.goTo("price");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0426\u0435\u043D\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuElementComponent_div_21_Template_li_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.goTo("method");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041C\u0435\u0442\u043E\u0434\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuElementComponent_div_21_Template_li_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.goTo("review");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041E\u0442\u0437\u044B\u0432\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "burger-close": a0
        };
      };

      var MenuElementComponent = /*#__PURE__*/function () {
        function MenuElementComponent(popupService) {
          _classCallCheck(this, MenuElementComponent);

          this.popupService = popupService;
          this.isMobileMenu = false;
        }

        _createClass(MenuElementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goTo",
          value: function goTo(link) {
            document.getElementById(link).scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            });
          }
        }]);

        return MenuElementComponent;
      }();

      MenuElementComponent.ɵfac = function MenuElementComponent_Factory(t) {
        return new (t || MenuElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_popup_service__WEBPACK_IMPORTED_MODULE_1__["PopupService"]));
      };

      MenuElementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MenuElementComponent,
        selectors: [["app-menu-element"]],
        decls: 22,
        vars: 4,
        consts: [[1, "menus"], [1, "menu"], [1, "logo"], [1, "main-menu"], [3, "click"], [1, "button", 3, "click"], [1, "phone"], [1, "mobile-menu"], [1, "burger", 3, "ngClass", "click"], [1, "burger__element"], ["class", "mobile-menu", 4, "ngIf"]],
        template: function MenuElementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0422\u0440\u0438\u043E-\u0431\u0441\u043A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuElementComponent_Template_li_click_6_listener() {
              return ctx.goTo("price");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0426\u0435\u043D\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuElementComponent_Template_li_click_8_listener() {
              return ctx.goTo("method");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041C\u0435\u0442\u043E\u0434\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuElementComponent_Template_li_click_10_listener() {
              return ctx.goTo("review");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041E\u0442\u0437\u044B\u0432\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuElementComponent_Template_button_click_12_listener() {
              return ctx.popupService.isCallPopup = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0432\u043E\u043D\u043E\u043A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "+7 (977) 777 77 77");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuElementComponent_Template_div_click_17_listener() {
              return ctx.isMobileMenu = !ctx.isMobileMenu;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MenuElementComponent_div_21_Template, 8, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.isMobileMenu));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileMenu);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: [".menu[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.menu[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 25px;\n  color: #F28066;\n}\n.menu[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.menu[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n}\n.menu[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  cursor: pointer;\n  margin-left: 20px;\n}\n.menu[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #025E73;\n}\n.menu[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 30px;\n  padding: 5px 15px;\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1200px) {\n  .menu[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    color: black;\n  }\n\n  .menus[_ngcontent-%COMP%] {\n    left: 0;\n    top: 0;\n    width: 100%;\n    position: fixed;\n    z-index: 10000000;\n    background-color: #fff;\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);\n  }\n\n  .menu[_ngcontent-%COMP%] {\n    height: 50px;\n    padding: 0 20px;\n  }\n  .menu[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-menu[_ngcontent-%COMP%] {\n    display: flex;\n    transition: 0.4s;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 25px;\n    height: 20px;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   .burger__element[_ngcontent-%COMP%] {\n    transition: 0.4s;\n    width: 100%;\n    height: 3px;\n    background-color: #F28066;\n    transform: rotate(0deg);\n    transform-origin: left;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 5px 20px;\n    cursor: pointer;\n    background-color: #fff;\n    border-top: 1px solid lightgrey;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    color: #025E73;\n  }\n\n  .burger.burger-close[_ngcontent-%COMP%]   .burger__element[_ngcontent-%COMP%]:first-child {\n    transform: rotate(45deg);\n    margin-top: -1px;\n  }\n  .burger.burger-close[_ngcontent-%COMP%]   .burger__element[_ngcontent-%COMP%]:nth-child(2) {\n    opacity: 0;\n  }\n  .burger.burger-close[_ngcontent-%COMP%]   .burger__element[_ngcontent-%COMP%]:last-child {\n    transform: rotate(-45deg);\n    margin-top: 1px;\n  }\n\n  .burger-open[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS1lbGVtZW50L21lbnUtZWxlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFISjtBQUlJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FaSDtBQVVMO0FBSUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFGUjtBQUdRO0VBU0ksYUFBQTtFQUNBLGdCQUFBO0FBVFo7QUFBWTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFaEI7QUFEZ0I7RUFDSSxjQXRCZjtBQXlCTDtBQUdRO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBRFo7QUFLQTtFQUNJLGFBQUE7QUFGSjtBQUtBO0VBQ0k7SUFDSSxZQUFBO0VBRk47O0VBSUU7SUFDSSxPQUFBO0lBQ0EsTUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtJQUNBLHdDQUFBO0VBRE47O0VBR0U7SUFDSSxZQUFBO0lBQ0EsZUFBQTtFQUFOO0VBQ007SUFDSSxhQUFBO0VBQ1Y7O0VBRUU7SUFDSSxhQUFBO0lBQ0EsZ0JBQUE7RUFDTjtFQUFNO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsOEJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQUVWO0VBRFU7SUFDSSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EseUJBeEVYO0lBeUVXLHVCQUFBO0lBQ0Esc0JBQUE7RUFHZDtFQUFNO0lBQ0ksV0FBQTtFQUVWO0VBRFU7SUFDSSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0Esc0JBQUE7SUFDQSwrQkFBQTtFQUdkO0VBRmM7SUFDSSxjQXJGZjtFQXlGSDs7RUFFTTtJQUNJLHdCQUFBO0lBQ0EsZ0JBQUE7RUFDVjtFQUNNO0lBQ0ksVUFBQTtFQUNWO0VBQ007SUFDSSx5QkFBQTtJQUNBLGVBQUE7RUFDVjs7RUFFRTtJQUNJLGFBQUE7RUFDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS1lbGVtZW50L21lbnUtZWxlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYzogI0YyODA2NjtcclxuJGNjOiAjMDI1RTczO1xyXG4kYmdjOiAjRjJFREU0O1xyXG5cclxuLm1lbnUge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5sb2dvIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgY29sb3I6ICRtYztcclxuICAgIH1cclxuICAgIC5tYWluLW1lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5tb2JpbGUtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAubWVudSAubG9nbyB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgLm1lbnVzIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogMTAwMDAwMDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgfVxyXG4gICAgLm1lbnUge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgLm1haW4tbWVudSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgIC5tb2JpbGUtbWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgLmJ1cmdlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgJl9fZWxlbWVudCB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1jO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY2M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnVyZ2VyLmJ1cmdlci1jbG9zZSB7XHJcbiAgICAgICAgLmJ1cmdlcl9fZWxlbWVudDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1cmdlcl9fZWxlbWVudDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnVyZ2VyX19lbGVtZW50Omxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ1cmdlci1vcGVuIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuElementComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-menu-element',
            templateUrl: './menu-element.component.html',
            styleUrls: ['./menu-element.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_popup_service__WEBPACK_IMPORTED_MODULE_1__["PopupService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "7MmP":
    /*!********************************************************!*\
      !*** ./src/app/send-section/send-section.component.ts ***!
      \********************************************************/

    /*! exports provided: SendSectionComponent */

    /***/
    function MmP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SendSectionComponent", function () {
        return SendSectionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/popup.service */
      "dPqR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var SendSectionComponent = /*#__PURE__*/function () {
        function SendSectionComponent(popupService, http) {
          _classCallCheck(this, SendSectionComponent);

          this.popupService = popupService;
          this.http = http;
        }

        _createClass(SendSectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.orderSubject = this.popupService.orderSubject;
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            });
          }
        }, {
          key: "closePopup",
          value: function closePopup() {
            this.popupService.isOrderPopup = false;
          }
        }, {
          key: "backCall",
          value: function backCall() {
            var message = 'Новая заявка с сайта. %0AПользователь: ' + this.form.value.name + ' %0AНомер телефона: ' + this.form.value.phone + ' %0AЗаказал обратный звонок.';
            this.http.post("https://api.telegram.org/bot1388219777:AAEmHbmYYMA-eMIGDFFKge0UD5bb9cjOq3M/sendMessage?chat_id=-329072915&parse_mode=html&text=".concat(message), 'text').subscribe(function (n) {
              return console.log(n);
            });
          }
        }]);

        return SendSectionComponent;
      }();

      SendSectionComponent.ɵfac = function SendSectionComponent_Factory(t) {
        return new (t || SendSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_popup_service__WEBPACK_IMPORTED_MODULE_2__["PopupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      SendSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SendSectionComponent,
        selectors: [["app-send-section"]],
        decls: 24,
        vars: 1,
        consts: [[1, "footer-section"], [1, "questions", "content"], [1, "send"], [1, "send-header"], [3, "formGroup", "submit"], [1, "form-group"], ["for", ""], ["type", "text", "placeholder", "\u0418\u0432\u0430\u043D", "formControlName", "name"], ["type", "text", "placeholder", "+7 (977) 777 77 77", "formControlName", "phone"], [1, "right-button"], ["type", "submit", 1, "button", "submit-button"], [1, "qtext"]],
        template: function SendSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0417\u0410\u041A\u0410\u0417\u0410\u0422\u042C \u0417\u0412\u041E\u041D\u041E\u041A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SendSectionComponent_Template_form_submit_5_listener() {
              return ctx.backCall();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0418\u043C\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0432\u043E\u043D\u043E\u043A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u041E\u0441\u0442\u0430\u043B\u0438\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443, \u043C\u044B \u0412\u0430\u043C \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0418\u043B\u0438 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043D\u0430\u043C \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443 +7(977)777-77-77");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: [".footer-section[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/bg.png\");\n}\n\n.qtext[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 20px;\n}\n\n.questions[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.send[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 6px black;\n  padding: 40px 20px;\n  border-radius: 5px;\n  background-color: #fff;\n  width: 600px;\n}\n\n.send-header[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.right-button[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 30px;\n  border: none;\n  border-bottom: 2px solid #000;\n  outline: none;\n}\n\nform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n@media (max-width: 600px) {\n  h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .qtext[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-bottom: 60px;\n  }\n\n  .questions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n\n  .send[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC1zZWN0aW9uL3NlbmQtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksYUFBQTtBQUtKOztBQUhBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBTUo7O0FBSkE7RUFDSSxtQkFBQTtBQU9KOztBQUxBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFRSjs7QUFOQTtFQUNJLGlCQUFBO0FBU0o7O0FBTkk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQVNSOztBQVBJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFTUjs7QUFOQTtFQUNJLGVBQUE7QUFTSjs7QUFQQTtFQUNJO0lBQ0ksa0JBQUE7RUFVTjs7RUFSRTtJQUNJLGNBQUE7SUFDQSxtQkFBQTtFQVdOOztFQVRFO0lBQ0ksOEJBQUE7RUFZTjs7RUFWRTtJQUNJLFdBQUE7RUFhTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2VuZC1zZWN0aW9uL3NlbmQtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2JnLnBuZycpO1xyXG59XHJcbi5xdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxufSAgIFxyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbnAge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ucXVlc3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnNlbmQge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG59XHJcbi5zZW5kLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5yaWdodC1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5zdWJtaXQtYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG59XHJcbmZvcm0ge1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxufVxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgaDIsIHAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5xdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgIH1cclxuICAgIC5xdWVzdGlvbnMge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIH1cclxuICAgIC5zZW5kIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SendSectionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-send-section',
            templateUrl: './send-section.component.html',
            styleUrls: ['./send-section.component.scss']
          }]
        }], function () {
          return [{
            type: _services_popup_service__WEBPACK_IMPORTED_MODULE_2__["PopupService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8s11":
    /*!************************************************************************!*\
      !*** ./src/app/shared/components/order-popup/order-popup.component.ts ***!
      \************************************************************************/

    /*! exports provided: OrderPopupComponent */

    /***/
    function s11(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderPopupComponent", function () {
        return OrderPopupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/popup.service */
      "dPqR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var OrderPopupComponent = /*#__PURE__*/function () {
        function OrderPopupComponent(popupService, http) {
          _classCallCheck(this, OrderPopupComponent);

          this.popupService = popupService;
          this.http = http;
        }

        _createClass(OrderPopupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.orderSubject = this.popupService.orderSubject;
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            });
          }
        }, {
          key: "closePopup",
          value: function closePopup() {
            this.popupService.isOrderPopup = false;
          }
        }, {
          key: "order",
          value: function order(orderName, orderPrice) {
            var message = 'Новая заявка с сайта. %0AПользователь: ' + this.form.value.name + ' %0AНомер телефона: ' + this.form.value.phone + ' %0AЗаказал услугу ' + orderName + ' (' + orderPrice + ')';
            this.http.post("https://api.telegram.org/bot1388219777:AAEmHbmYYMA-eMIGDFFKge0UD5bb9cjOq3M/sendMessage?chat_id=-329072915&parse_mode=html&text=".concat(message), 'text').subscribe(function (n) {
              return console.log(n);
            });
          }
        }]);

        return OrderPopupComponent;
      }();

      OrderPopupComponent.ɵfac = function OrderPopupComponent_Factory(t) {
        return new (t || OrderPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_popup_service__WEBPACK_IMPORTED_MODULE_2__["PopupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      OrderPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrderPopupComponent,
        selectors: [["app-order-popup"]],
        decls: 19,
        vars: 2,
        consts: [[1, "popup-bg"], [1, "popup"], [1, "close", 3, "click"], [1, "popup-header"], [1, "description"], [3, "formGroup", "submit"], [1, "form-group"], ["for", ""], ["type", "text", "placeholder", "\u0418\u0432\u0430\u043D", "formControlName", "name"], ["type", "text", "placeholder", "+7 (977) 777 77 77", "formControlName", "phone"], [1, "right-button"], ["type", "submit", 1, "button", "submit-button"]],
        template: function OrderPopupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderPopupComponent_Template_div_click_2_listener() {
              return ctx.closePopup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0417\u0410\u041A\u0410\u0417\u0410\u0422\u042C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function OrderPopupComponent_Template_form_submit_7_listener() {
              return ctx.order(ctx.orderSubject.name, ctx.orderSubject.price);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0418\u043C\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("\u0423\u0441\u043B\u0443\u0433\u0430: " + ctx.orderSubject.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: [".popup-bg[_ngcontent-%COMP%] {\n  z-index: 1000000;\n  position: fixed;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.popup[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 6px black;\n  padding: 40px 20px;\n  border-radius: 5px;\n  background-color: #fff;\n  position: relative;\n  width: 600px;\n}\n\n.popup-header[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.right-button[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 30px;\n  border: none;\n  border-bottom: 2px solid #000;\n  outline: none;\n}\n\nform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.close[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background-image: url(\"/assets/img/close.svg\");\n  background-size: cover;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvb3JkZXItcG9wdXAvb3JkZXItcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUlKOztBQUZBO0VBQ0ksaUJBQUE7QUFLSjs7QUFGSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FBS1I7O0FBSEk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUtSOztBQUZBO0VBQ0ksZUFBQTtBQUtKOztBQUhBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsOENBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFNSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL29yZGVyLXBvcHVwL29yZGVyLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcHVwLWJnIHtcclxuICAgIHotaW5kZXg6IDEwMDAwMDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnBvcHVwIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IGJsYWNrO1xyXG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA2MDBweDtcclxufVxyXG4ucG9wdXAtaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnJpZ2h0LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbn1cclxuZm9ybSB7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG59XHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmNsb3NlIHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2Nsb3NlLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderPopupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-order-popup',
            templateUrl: './order-popup.component.html',
            styleUrls: ['./order-popup.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_popup_service__WEBPACK_IMPORTED_MODULE_2__["PopupService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "BhhM":
    /*!**************************************!*\
      !*** ./src/app/pipes/filter.pipe.ts ***!
      \**************************************/

    /*! exports provided: FilterPipe */

    /***/
    function BhhM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
        return FilterPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FilterPipe = /*#__PURE__*/function () {
        function FilterPipe() {
          _classCallCheck(this, FilterPipe);
        }

        _createClass(FilterPipe, [{
          key: "transform",
          value: function transform(value, type) {
            value = value.filter(function (item) {
              return item.type == type;
            });
            return value;
          }
        }]);

        return FilterPipe;
      }();

      FilterPipe.ɵfac = function FilterPipe_Factory(t) {
        return new (t || FilterPipe)();
      };

      FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "filter",
        type: FilterPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'filter'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "HAmq":
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/call-popup/call-popup.component.ts ***!
      \**********************************************************************/

    /*! exports provided: CallPopupComponent */

    /***/
    function HAmq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallPopupComponent", function () {
        return CallPopupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/popup.service */
      "dPqR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CallPopupComponent = /*#__PURE__*/function () {
        function CallPopupComponent(popupService, http) {
          _classCallCheck(this, CallPopupComponent);

          this.popupService = popupService;
          this.http = http;
        }

        _createClass(CallPopupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            });
          }
        }, {
          key: "closePopup",
          value: function closePopup() {
            this.popupService.isCallPopup = false;
          }
        }, {
          key: "backCall",
          value: function backCall() {
            var message = 'Новая заявка с сайта. %0AПользователь: ' + this.form.value.name + ' %0AНомер телефона: ' + this.form.value.phone + ' %0AЗаказал вызов дезинсектора.';
            this.http.post("https://api.telegram.org/bot1388219777:AAEmHbmYYMA-eMIGDFFKge0UD5bb9cjOq3M/sendMessage?chat_id=-329072915&parse_mode=html&text=".concat(message), 'text').subscribe(function (n) {
              return console.log(n);
            });
          }
        }]);

        return CallPopupComponent;
      }();

      CallPopupComponent.ɵfac = function CallPopupComponent_Factory(t) {
        return new (t || CallPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_popup_service__WEBPACK_IMPORTED_MODULE_2__["PopupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      CallPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CallPopupComponent,
        selectors: [["app-call-popup"]],
        decls: 17,
        vars: 1,
        consts: [[1, "popup-bg"], [1, "popup"], [1, "close", 3, "click"], [1, "popup-header"], [3, "formGroup", "submit"], [1, "form-group"], ["for", ""], ["type", "text", "placeholder", "\u0418\u0432\u0430\u043D", "formControlName", "name"], ["type", "text", "placeholder", "+7 (977) 777 77 77", "formControlName", "phone"], [1, "right-button"], ["type", "submit", 1, "button", "submit-button"]],
        template: function CallPopupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CallPopupComponent_Template_div_click_2_listener() {
              return ctx.closePopup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0417\u0410\u041A\u0410\u0417\u0410\u0422\u042C \u0417\u0412\u041E\u041D\u041E\u041A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CallPopupComponent_Template_form_submit_5_listener() {
              return ctx.backCall();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0418\u043C\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: [".popup-bg[_ngcontent-%COMP%] {\n  z-index: 10000;\n  position: fixed;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.popup[_ngcontent-%COMP%] {\n  z-index: 1000000;\n  box-shadow: 0px 0px 6px black;\n  padding: 40px 20px;\n  border-radius: 5px;\n  background-color: #fff;\n  position: relative;\n  width: 600px;\n}\n\n.popup-header[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.right-button[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 30px;\n  border: none;\n  border-bottom: 2px solid #000;\n  outline: none;\n}\n\nform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.close[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background-image: url(\"/assets/img/close.svg\");\n  background-size: cover;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FsbC1wb3B1cC9jYWxsLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7QUFHSjs7QUFEQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtBQUtKOztBQUZJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUFLUjs7QUFISTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBS1I7O0FBRkE7RUFDSSxlQUFBO0FBS0o7O0FBSEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw4Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQU1KIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FsbC1wb3B1cC9jYWxsLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcHVwLWJnIHtcclxuICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5wb3B1cCB7XHJcbiAgICB6LWluZGV4OiAxMDAwMDAwO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG59XHJcbi5wb3B1cC1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ucmlnaHQtYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4uc3VibWl0LWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG5mb3JtIHtcclxuICAgIGlucHV0IHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbn1cclxuLmRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uY2xvc2Uge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvY2xvc2Uuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallPopupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-call-popup',
            templateUrl: './call-popup.component.html',
            styleUrls: ['./call-popup.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_popup_service__WEBPACK_IMPORTED_MODULE_2__["PopupService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "NehD":
    /*!************************************************************!*\
      !*** ./src/app/whynow-section/whynow-section.component.ts ***!
      \************************************************************/

    /*! exports provided: WhynowSectionComponent */

    /***/
    function NehD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WhynowSectionComponent", function () {
        return WhynowSectionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var WhynowSectionComponent = /*#__PURE__*/function () {
        function WhynowSectionComponent() {
          _classCallCheck(this, WhynowSectionComponent);
        }

        _createClass(WhynowSectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WhynowSectionComponent;
      }();

      WhynowSectionComponent.ɵfac = function WhynowSectionComponent_Factory(t) {
        return new (t || WhynowSectionComponent)();
      };

      WhynowSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WhynowSectionComponent,
        selectors: [["app-whynow-section"]],
        decls: 9,
        vars: 0,
        consts: [[1, "darksection"], [1, "whynow"], [1, "whynow__element"]],
        template: function WhynowSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0427\u0442\u043E \u0431\u0443\u0434\u0435\u0442, \u0435\u0441\u043B\u0438 \u043E\u0442\u043B\u043E\u0436\u0438\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043D\u0430 \u043F\u043E\u0442\u043E\u043C?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3doeW5vdy1zZWN0aW9uL3doeW5vdy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhynowSectionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-whynow-section',
            templateUrl: './whynow-section.component.html',
            styleUrls: ['./whynow-section.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/popup.service */
      "dPqR");
      /* harmony import */


      var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/components/header/header.component */
      "aZ8m");
      /* harmony import */


      var _shared_components_cost_element_cost_element_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/components/cost-element/cost-element.component */
      "zFrt");
      /* harmony import */


      var _about_section_about_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./about-section/about-section.component */
      "XdTY");
      /* harmony import */


      var _methods_section_methods_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./methods-section/methods-section.component */
      "qKCA");
      /* harmony import */


      var _where_section_where_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./where-section/where-section.component */
      "WYID");
      /* harmony import */


      var _review_section_review_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./review-section/review-section.component */
      "wa+x");
      /* harmony import */


      var _send_section_send_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./send-section/send-section.component */
      "7MmP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_order_popup_order_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./shared/components/order-popup/order-popup.component */
      "8s11");
      /* harmony import */


      var _shared_components_call_popup_call_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./shared/components/call-popup/call-popup.component */
      "HAmq");

      function AppComponent_app_order_popup_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-order-popup");
        }
      }

      function AppComponent_app_call_popup_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-call-popup");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@toggleHide", undefined);
        }
      }

      var AppComponent = function AppComponent(popupService) {
        _classCallCheck(this, AppComponent);

        this.popupService = popupService;
        this.title = 'dez';
        this.isCallPopup = false;
        this.isOrderPopup = false;
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_popup_service__WEBPACK_IMPORTED_MODULE_2__["PopupService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 9,
        vars: 2,
        consts: [["id", "price"], ["id", "method"], ["id", "review"], [4, "ngIf"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-cost-element", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-about-section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-methods-section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-where-section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-review-section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-send-section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_app_order_popup_7_Template, 1, 0, "app-order-popup", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_app_call_popup_8_Template, 1, 1, "app-call-popup", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.popupService.isOrderPopup);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.popupService.isCallPopup);
          }
        },
        directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _shared_components_cost_element_cost_element_component__WEBPACK_IMPORTED_MODULE_4__["CostElementComponent"], _about_section_about_section_component__WEBPACK_IMPORTED_MODULE_5__["AboutSectionComponent"], _methods_section_methods_section_component__WEBPACK_IMPORTED_MODULE_6__["MethodsSectionComponent"], _where_section_where_section_component__WEBPACK_IMPORTED_MODULE_7__["WhereSectionComponent"], _review_section_review_section_component__WEBPACK_IMPORTED_MODULE_8__["ReviewSectionComponent"], _send_section_send_section_component__WEBPACK_IMPORTED_MODULE_9__["SendSectionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _shared_components_order_popup_order_popup_component__WEBPACK_IMPORTED_MODULE_11__["OrderPopupComponent"], _shared_components_call_popup_call_popup_component__WEBPACK_IMPORTED_MODULE_12__["CallPopupComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('toggleHide', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0
          }))])])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('toggleHide', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
              opacity: 0
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
              opacity: 1
            }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
              opacity: 0
            }))])])]
          }]
        }], function () {
          return [{
            type: _services_popup_service__WEBPACK_IMPORTED_MODULE_2__["PopupService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "WYID":
    /*!**********************************************************!*\
      !*** ./src/app/where-section/where-section.component.ts ***!
      \**********************************************************/

    /*! exports provided: WhereSectionComponent */

    /***/
    function WYID(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WhereSectionComponent", function () {
        return WhereSectionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var WhereSectionComponent = /*#__PURE__*/function () {
        function WhereSectionComponent() {
          _classCallCheck(this, WhereSectionComponent);
        }

        _createClass(WhereSectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WhereSectionComponent;
      }();

      WhereSectionComponent.ɵfac = function WhereSectionComponent_Factory(t) {
        return new (t || WhereSectionComponent)();
      };

      WhereSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WhereSectionComponent,
        selectors: [["app-where-section"]],
        decls: 19,
        vars: 0,
        consts: [[1, "darksection"], [1, "content"], [1, "where"], [1, "where__element"]],
        template: function WhereSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041C\u044B \u043C\u043E\u0436\u0435\u043C \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0432 \u043B\u044E\u0431\u043E\u043C \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u044B \u0438 \u0434\u043E\u043C\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041E\u0444\u0438\u0441\u043D\u044B\u0435 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u043E\u0431\u0449\u0435\u043F\u0438\u0442\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0420\u043E\u0437\u043D\u0438\u0447\u043D\u0430\u044F \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".where[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-top: 30px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 30px;\n}\n.where__element[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n@media (max-width: 1200px) {\n  .where[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 400px) {\n  .where[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .where__element[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2hlcmUtc2VjdGlvbi93aGVyZS1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFFUjtBQUNBO0VBQ0k7SUFDSSw4QkFBQTtFQUVOO0FBQ0Y7QUFBQTtFQUNJO0lBQ0ksMEJBQUE7RUFFTjtFQURNO0lBQ0ksYUFBQTtJQUNBLHVCQUFBO0VBR1Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3doZXJlLXNlY3Rpb24vd2hlcmUtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aGVyZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICBncmlkLWdhcDogMzBweDtcclxuICAgICZfX2VsZW1lbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLndoZXJlIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAud2hlcmUge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICZfX2VsZW1lbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhereSectionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-where-section',
            templateUrl: './where-section.component.html',
            styleUrls: ['./where-section.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "XdTY":
    /*!**********************************************************!*\
      !*** ./src/app/about-section/about-section.component.ts ***!
      \**********************************************************/

    /*! exports provided: AboutSectionComponent */

    /***/
    function XdTY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutSectionComponent", function () {
        return AboutSectionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AboutSectionComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.image);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.text);
        }
      }

      var AboutSectionComponent = /*#__PURE__*/function () {
        function AboutSectionComponent() {
          _classCallCheck(this, AboutSectionComponent);

          this.aboutList = [];
        }

        _createClass(AboutSectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.aboutList = [{
              image: '',
              name: 'Приедем к вам 24/7',
              text: 'Выезд специалиста к Вам через 1 час после звонка или в удобное для вас время'
            }, {
              image: '',
              name: 'Проверенные препараты',
              text: 'Мы используем проверенные импортные препараты, которые показывают максимальный эффект'
            }, {
              image: '',
              name: 'Оплата по факту',
              text: 'Мы берем деньги только после факта уничтожения всех паразитов в вашей квартире, доме, офисе.'
            }, {
              image: '',
              name: 'Приедем к вам 24/7',
              text: 'Выезд специалиста к Вам через 1 час после звонка или в удобное для вас время'
            }, {
              image: '',
              name: 'Проверенные препараты',
              text: 'Мы используем проверенные импортные препараты, которые показывают максимальный эффект'
            }, {
              image: '',
              name: 'Оплата по факту',
              text: 'Мы берем деньги только после факта уничтожения всех паразитов в вашей квартире, доме, офисе.'
            }];
          }
        }]);

        return AboutSectionComponent;
      }();

      AboutSectionComponent.ɵfac = function AboutSectionComponent_Factory(t) {
        return new (t || AboutSectionComponent)();
      };

      AboutSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutSectionComponent,
        selectors: [["app-about-section"]],
        decls: 4,
        vars: 1,
        consts: [[1, "darksection"], [1, "content"], [1, "about"], ["class", "about__element", 4, "ngFor", "ngForOf"], [1, "about__element"], [1, "about__image"], [1, "about__header"], [1, "about__text"]],
        template: function AboutSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AboutSectionComponent_div_3_Template, 7, 3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aboutList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: [".about[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 20px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 20px;\n}\n.about[_ngcontent-%COMP%]   .about__element[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n}\n.about[_ngcontent-%COMP%]   .about__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  font-weight: bold;\n}\n.about[_ngcontent-%COMP%]   .about__text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n@media (max-width: 600px) {\n  .about[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtc2VjdGlvbi9hYm91dC1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtBQUVSO0FBQUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtBQUVSO0FBQ0E7RUFDSTtJQUNJLDBCQUFBO0VBRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXNlY3Rpb24vYWJvdXQtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG4gICAgLmFib3V0X19lbGVtZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuYWJvdXRfX2hlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5hYm91dF9fdGV4dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmFib3V0IHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutSectionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about-section',
            templateUrl: './about-section.component.html',
            styleUrls: ['./about-section.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-responsive-carousel */
      "0L5U");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared/components/header/header.component */
      "aZ8m");
      /* harmony import */


      var _shared_components_cost_element_cost_element_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./shared/components/cost-element/cost-element.component */
      "zFrt");
      /* harmony import */


      var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pipes/filter.pipe */
      "BhhM");
      /* harmony import */


      var _shared_components_menu_element_menu_element_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./shared/components/menu-element/menu-element.component */
      "27p+");
      /* harmony import */


      var _shared_components_call_popup_call_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./shared/components/call-popup/call-popup.component */
      "HAmq");
      /* harmony import */


      var _shared_components_order_popup_order_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./shared/components/order-popup/order-popup.component */
      "8s11");
      /* harmony import */


      var _review_section_review_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./review-section/review-section.component */
      "wa+x");
      /* harmony import */


      var _about_section_about_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./about-section/about-section.component */
      "XdTY");
      /* harmony import */


      var _methods_section_methods_section_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./methods-section/methods-section.component */
      "qKCA");
      /* harmony import */


      var _whynow_section_whynow_section_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./whynow-section/whynow-section.component */
      "NehD");
      /* harmony import */


      var _where_section_where_section_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./where-section/where-section.component */
      "WYID");
      /* harmony import */


      var _send_section_send_section_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./send-section/send-section.component */
      "7MmP");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__["IvyCarouselModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _shared_components_cost_element_cost_element_component__WEBPACK_IMPORTED_MODULE_9__["CostElementComponent"], _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"], _shared_components_menu_element_menu_element_component__WEBPACK_IMPORTED_MODULE_11__["MenuElementComponent"], _shared_components_call_popup_call_popup_component__WEBPACK_IMPORTED_MODULE_12__["CallPopupComponent"], _shared_components_order_popup_order_popup_component__WEBPACK_IMPORTED_MODULE_13__["OrderPopupComponent"], _review_section_review_section_component__WEBPACK_IMPORTED_MODULE_14__["ReviewSectionComponent"], _about_section_about_section_component__WEBPACK_IMPORTED_MODULE_15__["AboutSectionComponent"], _methods_section_methods_section_component__WEBPACK_IMPORTED_MODULE_16__["MethodsSectionComponent"], _whynow_section_whynow_section_component__WEBPACK_IMPORTED_MODULE_17__["WhynowSectionComponent"], _where_section_where_section_component__WEBPACK_IMPORTED_MODULE_18__["WhereSectionComponent"], _send_section_send_section_component__WEBPACK_IMPORTED_MODULE_19__["SendSectionComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__["IvyCarouselModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _shared_components_cost_element_cost_element_component__WEBPACK_IMPORTED_MODULE_9__["CostElementComponent"], _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"], _shared_components_menu_element_menu_element_component__WEBPACK_IMPORTED_MODULE_11__["MenuElementComponent"], _shared_components_call_popup_call_popup_component__WEBPACK_IMPORTED_MODULE_12__["CallPopupComponent"], _shared_components_order_popup_order_popup_component__WEBPACK_IMPORTED_MODULE_13__["OrderPopupComponent"], _review_section_review_section_component__WEBPACK_IMPORTED_MODULE_14__["ReviewSectionComponent"], _about_section_about_section_component__WEBPACK_IMPORTED_MODULE_15__["AboutSectionComponent"], _methods_section_methods_section_component__WEBPACK_IMPORTED_MODULE_16__["MethodsSectionComponent"], _whynow_section_whynow_section_component__WEBPACK_IMPORTED_MODULE_17__["WhynowSectionComponent"], _where_section_where_section_component__WEBPACK_IMPORTED_MODULE_18__["WhereSectionComponent"], _send_section_send_section_component__WEBPACK_IMPORTED_MODULE_19__["SendSectionComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__["IvyCarouselModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "aZ8m":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/header/header.component.ts ***!
      \**************************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function aZ8m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/popup.service */
      "dPqR");
      /* harmony import */


      var _menu_element_menu_element_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../menu-element/menu-element.component */
      "27p+");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(popupService) {
          _classCallCheck(this, HeaderComponent);

          this.popupService = popupService;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_popup_service__WEBPACK_IMPORTED_MODULE_1__["PopupService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 29,
        vars: 0,
        consts: [[1, "content"], [1, "header-info"], [1, "main-htext"], [1, "mc-text"], [1, "header-list"], [1, "header-call"], [1, "button", "header-main-button", 3, "click"], [1, "header-car-sign"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu-element");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0418\u0437\u0431\u0430\u0432\u0438\u043C \u043E\u0442 \u043D\u0430\u0441\u0435\u043A\u043E\u043C\u044B\u0445");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0441 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0435\u0439 3 \u0433\u043E\u0434\u0430!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "C\u0440\u043E\u0447\u043D\u044B\u0439 \u0432\u044B\u0435\u0437\u0434 - \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0437\u0430 1 \u0447\u0430\u0441");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F - 3 \u0433\u043E\u0434\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u044B\u0435 \u043F\u0440\u0435\u043F\u0430\u0440\u0430\u0442\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u041E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0430\u043D\u044D\u043F\u0438\u0434\u0435\u043C\u0441\u0442\u0430\u043D\u0446\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0421\u043E\u0431\u043B\u044E\u0434\u0430\u0435\u043C \u0441\u0430\u043D\u0438\u0442\u0430\u0440\u043D\u044B\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0417\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u043C \u0434\u043E\u0433\u043E\u0432\u043E\u0440");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_25_listener() {
              return ctx.popupService.isCallPopup = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0412\u044B\u0437\u0432\u0430\u0442\u044C \u0434\u0435\u0437\u0438\u043D\u0441\u0435\u043A\u0442\u043E\u0440\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u041F\u0420\u0418\u0415\u0414\u0415\u041C \u0417\u0410 30 \u041C\u0418\u041D\u0423\u0422");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_menu_element_menu_element_component__WEBPACK_IMPORTED_MODULE_2__["MenuElementComponent"]],
        styles: ["header[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding-bottom: 50px;\n  background-image: url(\"/assets/img/bg.png\");\n  background-size: cover;\n}\n\n.main-htext[_ngcontent-%COMP%] {\n  font-size: 35px;\n  margin-top: 150px;\n}\n\n.header-list[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-top: 20px;\n}\n\n.header-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 20px;\n  list-style: circle;\n  list-style-image: url(\"/assets/img/li.svg\");\n}\n\n.header-call[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  align-items: center;\n}\n\n.header-call[_ngcontent-%COMP%]   .header-car-sign[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-left: 20px;\n}\n\n.cost-htext[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n.header-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n@media (max-width: 600px) {\n  .header-call[_ngcontent-%COMP%] {\n    justify-content: center;\n    flex-direction: column;\n  }\n  .header-call[_ngcontent-%COMP%]   .header-car-sign[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQ0FBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFGSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUFJUjs7QUFEQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBSEk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBS1I7O0FBRkE7RUFDSSxpQkFBQTtBQUtKOztBQUhBO0VBQ0ksT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBTUo7O0FBSkE7RUFDSTtJQUNJLHVCQUFBO0lBQ0Esc0JBQUE7RUFPTjtFQU5NO0lBQ0ksZ0JBQUE7SUFDQSxjQUFBO0VBUVY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvYmcucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOztcclxufVxyXG4ubWFpbi1odGV4dCB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxufVxyXG4uaGVhZGVyLWxpc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbGkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IGNpcmNsZTtcclxuICAgICAgICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2xpLnN2ZycpO1xyXG4gICAgfVxyXG59IFxyXG4uaGVhZGVyLWNhbGwge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLmhlYWRlci1jYXItc2lnbiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuLmNvc3QtaHRleHQge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuLmhlYWRlci1pbmZvIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5oZWFkZXItY2FsbCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAuaGVhZGVyLWNhci1zaWduIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_popup_service__WEBPACK_IMPORTED_MODULE_1__["PopupService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "dPqR":
    /*!*******************************************!*\
      !*** ./src/app/services/popup.service.ts ***!
      \*******************************************/

    /*! exports provided: PopupService */

    /***/
    function dPqR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupService", function () {
        return PopupService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PopupService = function PopupService() {
        _classCallCheck(this, PopupService);

        this.isOrderPopup = false;
        this.isCallPopup = false;
      };

      PopupService.ɵfac = function PopupService_Factory(t) {
        return new (t || PopupService)();
      };

      PopupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PopupService,
        factory: PopupService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "qKCA":
    /*!**************************************************************!*\
      !*** ./src/app/methods-section/methods-section.component.ts ***!
      \**************************************************************/

    /*! exports provided: MethodsSectionComponent */

    /***/
    function qKCA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MethodsSectionComponent", function () {
        return MethodsSectionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MethodsSectionComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
        }
      }

      var MethodsSectionComponent = /*#__PURE__*/function () {
        function MethodsSectionComponent() {
          _classCallCheck(this, MethodsSectionComponent);

          this.methodsList = [];
        }

        _createClass(MethodsSectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.methodsList = [{
              name: 'Холодный туман',
              description: 'Производимый туман состоит из мельчайших капель пара с инсектицидом. Они намного мельче, чем производимые опрыскивателем. По этой причине смесь капелек с воздухом равномерно оседает на потолке, мебели, панелях и попадает в недоступные места.'
            }, {
              name: 'Горячий туман',
              description: 'Производимый туман состоит из мельчайших капель пара с инсектицидом. Они намного мельче, чем производимые опрыскивателем. По этой причине смесь капелек с воздухом равномерно оседает на потолке, мебели, панелях и попадает в недоступные места.'
            }, {
              name: 'Комплексная обработка',
              description: 'Производимый туман состоит из мельчайших капель пара с инсектицидом. Они намного мельче, чем производимые опрыскивателем. По этой причине смесь капелек с воздухом равномерно оседает на потолке, мебели, панелях и попадает в недоступные места.'
            }];
          }
        }]);

        return MethodsSectionComponent;
      }();

      MethodsSectionComponent.ɵfac = function MethodsSectionComponent_Factory(t) {
        return new (t || MethodsSectionComponent)();
      };

      MethodsSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MethodsSectionComponent,
        selectors: [["app-methods-section"]],
        decls: 10,
        vars: 1,
        consts: [[1, "content"], [1, "methods-gen"], [1, "methods-header"], [1, "methods-htext"], [1, "methods-desc"], [1, "methods-list"], ["class", "method", 4, "ngFor", "ngForOf"], [1, "method"], [1, "method__name"], [1, "method-index"]],
        template: function MethodsSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041C\u0435\u0442\u043E\u0434\u044B \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u0432\u044B\u0441\u043E\u043A\u043E\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u043D\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435. \u0423 \u0432\u0440\u0435\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043D\u0438 \u0448\u0430\u043D\u0441\u0430 \u043D\u0430 \u0432\u044B\u0436\u0438\u0432\u0430\u043D\u0438\u0435!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MethodsSectionComponent_div_9_Template, 7, 3, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.methodsList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: [".methods-header[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 0 20px;\n  border-right: 4px solid #F28066;\n}\n\n.methods-htext[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 20px;\n}\n\n.methods-gen[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.methods-list[_ngcontent-%COMP%] {\n  padding: 0 20px;\n}\n\n.method-index[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #F28066;\n  color: white;\n  margin-right: 20px;\n}\n\n.method__name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n}\n\n.method[_ngcontent-%COMP%]:first-child   .method__name[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n@media (max-width: 600px) {\n  .methods-gen[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .methods-header[_ngcontent-%COMP%] {\n    border: none;\n    border-left: 4px solid #F28066;\n    margin-bottom: 30px;\n  }\n\n  .methods-list[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .method[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWV0aG9kcy1zZWN0aW9uL21ldGhvZHMtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUFISjs7QUFLQTtFQUNJLGdCQUFBO0FBRko7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQTdCQztFQThCRCxZQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREE7RUFDSSxhQUFBO0FBSUo7O0FBREE7RUFDSTtJQUNJLHNCQUFBO0VBSU47O0VBRkU7SUFDSSxZQUFBO0lBQ0EsOEJBQUE7SUFDQSxtQkFBQTtFQUtOOztFQUhFO0lBQ0ksVUFBQTtFQU1OOztFQUpFO0lBQ0ksZ0JBQUE7RUFPTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWV0aG9kcy1zZWN0aW9uL21ldGhvZHMtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYzogI0YyODA2NjtcclxuJGNjOiAjMDI1RTczO1xyXG4kYmdjOiAjRjJFREU0O1xyXG5cclxuLm1ldGhvZHMtaGVhZGVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgI0YyODA2NjtcclxufVxyXG4ubWV0aG9kcy1odGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbnAge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ubWV0aG9kcy1nZW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4ubWV0aG9kcy1saXN0IHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG4ubWV0aG9kLWluZGV4IHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLm1ldGhvZF9fbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5tZXRob2Q6Zmlyc3QtY2hpbGQgLm1ldGhvZF9fbmFtZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5tZXRob2RzLWdlbiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5tZXRob2RzLWhlYWRlciB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI0YyODA2NjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLm1ldGhvZHMtbGlzdCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5tZXRob2Qge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MethodsSectionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-methods-section',
            templateUrl: './methods-section.component.html',
            styleUrls: ['./methods-section.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "wa+x":
    /*!************************************************************!*\
      !*** ./src/app/review-section/review-section.component.ts ***!
      \************************************************************/

    /*! exports provided: ReviewSectionComponent */

    /***/
    function waX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewSectionComponent", function () {
        return ReviewSectionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-responsive-carousel */
      "0L5U");

      var ReviewSectionComponent = /*#__PURE__*/function () {
        function ReviewSectionComponent() {
          _classCallCheck(this, ReviewSectionComponent);

          this.slidesAmount = 2;
        }

        _createClass(ReviewSectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.winWidth = document.documentElement.clientWidth;

            if (this.winWidth < 550) {
              this.slidesAmount = 1;
            }
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            if (event.target.innerWidth > 550) {
              this.slidesAmount = 2;
            } else {
              this.slidesAmount = 1;
            }
          }
        }]);

        return ReviewSectionComponent;
      }();

      ReviewSectionComponent.ɵfac = function ReviewSectionComponent_Factory(t) {
        return new (t || ReviewSectionComponent)();
      };

      ReviewSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReviewSectionComponent,
        selectors: [["app-review-section"]],
        hostBindings: function ReviewSectionComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ReviewSectionComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 38,
        vars: 5,
        consts: [[1, "review-carousel"], [1, "carousel-content"], [3, "height", "margin", "cellWidth", "cellsToShow", "borderRadius"], [1, "carousel-cell"], [1, "carous-item"], [1, "review-line"], [1, "carous-img"], [1, "carous-name"], [1, "carous-text"]],
        template: function ReviewSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u0442\u0437\u044B\u0432\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "carousel", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0418\u043C\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, sed magnam. Ullam cum at eveniet debitis similique voluptatibus alias accusantium.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0418\u043C\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, sed magnam. Ullam cum at eveniet debitis similique voluptatibus alias accusantium.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0418\u043C\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, sed magnam. Ullam cum at eveniet debitis similique voluptatibus alias accusantium.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0418\u043C\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, sed magnam. Ullam cum at eveniet debitis similique voluptatibus alias accusantium.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 250)("margin", 30)("cellWidth", "30%")("cellsToShow", ctx.slidesAmount)("borderRadius", 20);
          }
        },
        directives: [angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"]],
        styles: [".carousel-content[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 800px;\n}\n\n.carous-item[_ngcontent-%COMP%] {\n  padding: 30px 20px;\n  border-radius: 10px;\n  height: 100%;\n  width: 100%;\n  border: 2px solid black;\n  font-size: 20px;\n}\n\n.review-carousel[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.review-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.carous-img[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  background-image: url(\"/assets/img/c1.jpg\");\n  background-position: center;\n  background-size: cover;\n  border: 3px solid #F28066;\n}\n\n.carous-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.carous-text[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n@media (max-width: 800px) {\n  .carousel-content[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3LXNlY3Rpb24vcmV2aWV3LXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQURKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQUdKOztBQURBO0VBQ0ksaUJBQUE7QUFJSjs7QUFGQTtFQUNJLGdCQUFBO0FBS0o7O0FBSEE7RUFDSTtJQUNJLFdBQUE7SUFDQSxlQUFBO0VBTU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy1zZWN0aW9uL3Jldmlldy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1jOiAjRjI4MDY2O1xyXG5cclxuLmNhcm91c2VsLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbn1cclxuLmNhcm91cy1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5yZXZpZXctY2Fyb3VzZWwge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ucmV2aWV3LWxpbmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNhcm91cy1pbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9jMS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkbWM7XHJcbn1cclxuLmNhcm91cy1uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jYXJvdXMtdGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmNhcm91c2VsLWNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIH1cclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewSectionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-review-section',
            templateUrl: './review-section.component.html',
            styleUrls: ['./review-section.component.scss']
          }]
        }], function () {
          return [];
        }, {
          onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "zFrt":
    /*!**************************************************************************!*\
      !*** ./src/app/shared/components/cost-element/cost-element.component.ts ***!
      \**************************************************************************/

    /*! exports provided: CostElementComponent */

    /***/
    function zFrt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CostElementComponent", function () {
        return CostElementComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/popup.service */
      "dPqR");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../pipes/filter.pipe */
      "BhhM");

      function CostElementComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CostElementComponent_div_13_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var element_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.openOrderPopup(element_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r1.price, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "color": a0
        };
      };

      var CostElementComponent = /*#__PURE__*/function () {
        function CostElementComponent(popupService) {
          _classCallCheck(this, CostElementComponent);

          this.popupService = popupService;
          this.selectedType = 0;
          this.pricelist = [];
        }

        _createClass(CostElementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.pricelist = [{
              name: "Комната",
              price: "800 руб",
              type: 0
            }, {
              name: "Квартира",
              price: "1000 руб",
              type: 0
            }, {
              name: "Комната",
              price: "1800 руб",
              type: 0
            }, {
              name: "Квартира",
              price: "2000 руб",
              type: 0
            }, {
              name: "Дом",
              price: "800 руб",
              type: 1
            }, {
              name: "Дом 2",
              price: "1000 руб",
              type: 1
            }, {
              name: "Дом 3",
              price: "1100 руб",
              type: 1
            }, {
              name: "Дом 4",
              price: "11000 руб",
              type: 1
            }, {
              name: "200 квм",
              price: "800 руб",
              type: 2
            }, {
              name: "300 квм",
              price: "1000 руб",
              type: 2
            }, {
              name: "200 квм",
              price: "8000 руб",
              type: 2
            }, {
              name: "300 квм",
              price: "10000 руб",
              type: 2
            }, {
              name: "300 квм",
              price: "10000 руб",
              type: 2
            }];
          }
        }, {
          key: "openOrderPopup",
          value: function openOrderPopup(item) {
            this.popupService.isOrderPopup = true;
            this.popupService.orderSubject = item;
          }
        }]);

        return CostElementComponent;
      }();

      CostElementComponent.ɵfac = function CostElementComponent_Factory(t) {
        return new (t || CostElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_popup_service__WEBPACK_IMPORTED_MODULE_1__["PopupService"]));
      };

      CostElementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CostElementComponent,
        selectors: [["app-cost-element"]],
        decls: 15,
        vars: 13,
        consts: [[1, "cost-htext"], [1, "cost-table", "content"], [1, "pricetype"], [3, "ngStyle", "click"], [1, "pricelist"], ["class", "pricelist-element", 4, "ngFor", "ngForOf"], [1, "pricelist-element"], [1, "pricelist-element__name"], [1, "pricelist-element__order"], [1, "button", "order-button", 3, "click"]],
        template: function CostElementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0426\u0435\u043D\u044B \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CostElementComponent_Template_li_click_6_listener() {
              return ctx.selectedType = 0;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041A\u0412\u0410\u0420\u0422\u0418\u0420\u0410");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CostElementComponent_Template_li_click_8_listener() {
              return ctx.selectedType = 1;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0414\u041E\u041C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CostElementComponent_Template_li_click_10_listener() {
              return ctx.selectedType = 2;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041F\u041E\u041C\u0415\u0429\u0415\u041D\u0418\u0415");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CostElementComponent_div_13_Template, 7, 2, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.selectedType == 0 ? "#0396A6" : "black"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.selectedType == 1 ? "#0396A6" : "black"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.selectedType == 2 ? "#0396A6" : "black"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 4, ctx.pricelist, ctx.selectedType));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        pipes: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"]],
        styles: [".pricetype[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.pricetype[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n}\n.pricetype[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n  margin-right: 20px;\n  cursor: pointer;\n}\n.pricetype[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #0396A6;\n}\n.cost-table[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 50px 30px 30px 30px;\n  background-color: white;\n  box-shadow: 0px 0px 4px #025E73;\n}\n.pricelist[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n.pricelist-element[_ngcontent-%COMP%] {\n  border-top: 1px solid lightgrey;\n  font-size: 20px;\n  padding: 15px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.order-button[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  padding: 5px 15px;\n}\n@media (max-width: 1200px) {\n  .cost-table[_ngcontent-%COMP%] {\n    box-shadow: 0 0 0 black;\n  }\n}\n@media (max-width: 600px) {\n  .pricelist-element__order[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n  }\n\n  .order-button[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 10px;\n  }\n}\n@media (max-width: 400px) {\n  .pricelist-element__order[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n\n  .pricelist-element[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29zdC1lbGVtZW50L2Nvc3QtZWxlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUZKO0FBR0k7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFEUjtBQUdJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRFI7QUFFUTtFQUNJLGNBaEJQO0FBZ0JMO0FBSUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0FBREo7QUFHQTtFQUNJLGdCQUFBO0FBQUo7QUFFQTtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBRUo7QUFDQTtFQUNJO0lBQ0ksdUJBQUE7RUFFTjtBQUNGO0FBQUE7RUFDSTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHFCQUFBO0VBRU47O0VBQUU7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7RUFHTjtBQUNGO0FBREE7RUFDSTtJQUNJLG1CQUFBO0VBR047O0VBREU7SUFDSSxzQkFBQTtFQUlOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jb3N0LWVsZW1lbnQvY29zdC1lbGVtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1jOiAjMDM5NkE2O1xyXG4kY2M6ICMwMjVFNzM7XHJcblxyXG4ucHJpY2V0eXBlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHVsIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICBsaSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkbWM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5jb3N0LXRhYmxlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDMwcHggMzBweCAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAkY2M7XHJcbn1cclxuLnByaWNlbGlzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcbi5wcmljZWxpc3QtZWxlbWVudCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm9yZGVyLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuY29zdC10YWJsZSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgcmdiKDAsIDAsIDApO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnByaWNlbGlzdC1lbGVtZW50X19vcmRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIH1cclxuICAgIC5vcmRlci1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9IFxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgLnByaWNlbGlzdC1lbGVtZW50X19vcmRlciB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5wcmljZWxpc3QtZWxlbWVudCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CostElementComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cost-element',
            templateUrl: './cost-element.component.html',
            styleUrls: ['./cost-element.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_popup_service__WEBPACK_IMPORTED_MODULE_1__["PopupService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map