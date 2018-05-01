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
var GrasmerePlazaKiosk = /** @class */ (function (_super) {
    __extends(GrasmerePlazaKiosk, _super);
    function GrasmerePlazaKiosk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GrasmerePlazaKiosk.prototype, "description", {
        get: function () {
            return "Grasmere Toll Plaza";
        },
        enumerable: true,
        configurable: true
    });
    ;
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
