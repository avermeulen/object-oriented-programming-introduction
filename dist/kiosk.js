"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PlazaKioskBase = /** @class */ (function () {
    function PlazaKioskBase() {
        this._dailyTotal = 0;
        this._dailyVehicleCount = 0;
    }
    PlazaKioskBase.prototype.chargeVehicle = function (price) {
        this._dailyTotal += price;
        this._dailyVehicleCount++;
    };
    Object.defineProperty(PlazaKioskBase.prototype, "dailyTotal", {
        get: function () {
            return this._dailyTotal;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(PlazaKioskBase.prototype, "dailyVehicleCount", {
        get: function () {
            return this._dailyVehicleCount;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return PlazaKioskBase;
}());
var GrasmerePlazaKiosk = /** @class */ (function (_super) {
    __extends(GrasmerePlazaKiosk, _super);
    function GrasmerePlazaKiosk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GrasmerePlazaKiosk.prototype.charge = function (category) {
        var valueToCharge = 0;
        if (category === "one") {
            valueToCharge = 9;
        }
        else if (category === "two") {
            valueToCharge = 24;
        }
        else if (category === "three") {
            valueToCharge = 28;
        }
        else if (category === "four") {
            valueToCharge = 36;
        }
        this.chargeVehicle(valueToCharge);
        return valueToCharge;
    };
    return GrasmerePlazaKiosk;
}(PlazaKioskBase));
var HuguenotePlazaKiosk = /** @class */ (function (_super) {
    __extends(HuguenotePlazaKiosk, _super);
    function HuguenotePlazaKiosk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuguenotePlazaKiosk.prototype.charge = function (category) {
        var valueToCharge = 0;
        if (category === "one") {
            valueToCharge = 18;
        }
        else if (category === "two") {
            valueToCharge = 47;
        }
        else if (category === "three") {
            valueToCharge = 73;
        }
        else if (category === "four") {
            valueToCharge = 118;
        }
        this.chargeVehicle(valueToCharge);
        return valueToCharge;
    };
    return HuguenotePlazaKiosk;
}(PlazaKioskBase));
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
new KioskConsole(huguenotePlaza);
