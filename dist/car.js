"use strict";
var Car = /** @class */ (function () {
    function Car() {
        this.started = false;
        this._currentSpeed = 0;
    }
    Car.prototype.start = function () {
        this.started = true;
    };
    Car.prototype.stop = function () {
        this.started = false;
        this._currentSpeed = 0;
    };
    Car.prototype.accelerateBy = function (increase) {
        if (this.started) {
            this.currentSpeed += increase;
        }
    };
    Object.defineProperty(Car.prototype, "currentSpeed", {
        get: function () {
            return this._currentSpeed;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
}());
