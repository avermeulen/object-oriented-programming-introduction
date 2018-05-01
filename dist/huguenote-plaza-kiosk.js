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
var HuguenotePlazaKiosk = /** @class */ (function (_super) {
    __extends(HuguenotePlazaKiosk, _super);
    function HuguenotePlazaKiosk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HuguenotePlazaKiosk.prototype, "description", {
        get: function () {
            return "Huguenote Toll Plaza";
        },
        enumerable: true,
        configurable: true
    });
    ;
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
