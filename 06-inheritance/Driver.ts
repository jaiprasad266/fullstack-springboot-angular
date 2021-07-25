import { Shape } from "./Shape";
import { Circle } from "./Circle";

let myShape = new Shape(1,2);
console.log(myShape.getInfo());

let myCircle = new Circle(1,2,3);
console.log(myCircle.getInfo())

let myshapes:Shape[] = [myShape,myCircle];

for(let shape of myshapes){
    console.log(shape.getInfo())
}