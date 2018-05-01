"use strict";
var KioskConsole = /** @class */ (function () {
    function KioskConsole(kiosk) {
        var _this = this;
        this.chargeVehicle = function () {
            if (_this.amountDueElem && _this.dailyTotalElem) {
                _this.amountDueElem.innerHTML = _this._kiosk.charge(_this.category()).toString();
                _this.dailyTotalElem.innerHTML = _this._kiosk.dailyTotal;
            }
        };
        this._kiosk = kiosk;
        this.chargeBtn = document.querySelector(".chargeBtn");
        this.amountDueElem = document.querySelector(".amountDue");
        this.dailyTotalElem = document.querySelector(".dailyTotal");
        this.plazaDescriptionElem = document.querySelector(".plazaDescription");
        this.plazaDescriptionElem.innerHTML = this._kiosk.description;
        if (this.chargeBtn) {
            this.chargeBtn.addEventListener('click', this.chargeVehicle);
        }
    }
    KioskConsole.prototype.category = function () {
        var checkedRadioBtn = document.querySelector("input[name='category']:checked");
        if (checkedRadioBtn) {
            if (checkedRadioBtn.value) {
                return checkedRadioBtn.value;
            }
        }
        return "";
    };
    return KioskConsole;
}());
var huguenotePlaza = new HuguenotePlazaKiosk();
var grasmerePlaza = new GrasmerePlazaKiosk();
new KioskConsole(grasmerePlaza);
