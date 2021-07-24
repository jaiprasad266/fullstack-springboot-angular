"use strict";
var Customer_1 = /** @class */ (function () {
    function Customer_1(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer_1.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer_1.prototype, "setFirstName", {
        set: function (v) {
            this._firstName = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer_1.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Customer_1;
}());
var myCustomer1 = new Customer_1("Tony", "Stark");
console.log(myCustomer1.firstName + " " + myCustomer1.lastName);
