"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var myShape = new Shape_1.Shape(1, 2);
console.log(myShape.getInfo());
var myCircle = new Circle_1.Circle(1, 2, 3);
console.log(myCircle.getInfo());
var myshapes = [myShape, myCircle];
for (var _i = 0, myshapes_1 = myshapes; _i < myshapes_1.length; _i++) {
    var shape = myshapes_1[_i];
    console.log(shape.getInfo());
}
