"use strict";
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
