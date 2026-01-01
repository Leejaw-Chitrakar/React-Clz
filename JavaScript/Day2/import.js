// For default export
import radius from './export.js'
console.log("The valuse of Radius is ", radius);

// For Normal export
import {PI,x,y} from './export.js'
console.log("PI = ", PI);
console.log("x = ", x);
console.log("y = ", y);

import { calcAreaOfCircle, calcPerimeterOfCircle} from './export.js';
let area = calcAreaOfCircle(3);
let peri = calcPerimeterOfCircle(5);
console.log("Area of Circle is ", area);
console.log("Perimeter of Circle is ", peri);